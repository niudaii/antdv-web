<template>
  <div>
    <a-form layout="inline" :form="form" class="top">
      <a-form-item label="操作用户">
        <a-input v-model="form.operator" placeholder="操作用户" />
      </a-form-item>
      <a-form-item label="请求路径">
        <a-input v-model="form.path" placeholder="请求路径" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="search">查询</a-button>
      </a-form-item>
    </a-form>
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="pagination"
      :row-key="(record) => record.id"
      @change="changeTable"
    >
      <span slot="createdAt" slot-scope="text">
        {{ formatTime(text) }}
      </span>
      <span slot="body" slot-scope="text, record">
        <a-popover title="请求" v-if="record.body !== ''">
          <template slot="content">
            <p>{{ record.body }}</p>
          </template>
          <a-icon type="eye" />
        </a-popover>
        <div v-else>空</div>
      </span>
      <span slot="resp" slot-scope="text, record">
        <a-popover title="响应">
          <template slot="content">
            <p>{{ record.resp }}</p>
          </template>
          <a-icon type="eye" />
        </a-popover>
      </span>
    </a-table>
  </div>
</template>

<script>
import { findOperationList } from '@/api/system'
import { formatUtcTime } from '@/utils/timeFormat'
const columns = [
  {
    title: '用户',
    dataIndex: 'operator'
  },
  {
    title: '日期',
    dataIndex: 'createdAt',
    scopedSlots: { customRender: 'createdAt' }
  },
  {
    title: '状态码',
    dataIndex: 'status'
  },
  {
    title: '请求IP',
    dataIndex: 'ip'
  },
  {
    title: '请求方法',
    dataIndex: 'method'
  },
  {
    title: '请求路径',
    dataIndex: 'path'
  },
  {
    title: '请求',
    scopedSlots: { customRender: 'body' }
  },
  {
    title: '响应',
    scopedSlots: { customRender: 'resp' }
  }
]
export default {
  created() {
    this.findOperationList()
  },
  data() {
    return {
      // form
      form: {
        operator: '',
        path: ''
      },
      // table
      columns,
      data: [],
      pagination: {
        total: 0,
        current: 1,
        pageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '50', '100'],
        showTotal: (total, range) => {
          return '共' + total + '条'
        }
      }
    }
  },
  methods: {
    // table
    formatTime(text) {
      return formatUtcTime(text)
    },
    changeTable(pagination, filters, sorter) {
      this.pagination.current = pagination.current
      this.pagination.pageSize = pagination.pageSize
      this.findOperationList()
    },
    search() {
      this.pagination.current = 1
      this.findOperationList()
    },
    findOperationList() {
      const { current, pageSize } = this.pagination
      const { operator, path } = this.form
      const data = {
        page: current,
        pageSize,
        operator,
        path
      }
      findOperationList(data).then(r => {
        this.data = r.result.list
        this.pagination.total = r.result.total
      })
    }
  }
}
</script>

<style scoped>
.top {
  margin-bottom: 20px;
}
</style>
