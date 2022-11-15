<template>
  <div>
    <a-button type="primary" icon="plus" @click="visible = true" class="top">新增用户</a-button>
    <a-modal :visible="visible" title="新增用户" @ok="createUser" @cancel="visible = false">
      <a-form v-model="form" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-form-item label="账户">
          <a-input v-model="form.username" placeholder="账户" />
        </a-form-item>
        <a-form-item label="密码">
          <a-input v-model="form.password" placeholder="密码" />
        </a-form-item>
        <a-form-item label="角色">
          <a-select v-model="form.authorityId">
            <a-select-option value="1"> admin </a-select-option>
            <a-select-option value="2"> user </a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>
    <a-table
      :data-source="data"
      :columns="columns"
      :pagination="pagination"
      :row-key="(record) => record.uuid"
      @change="changeTable">
      <template slot="dataIndex" slot-scope="text, record, index">
        <span>{{ (pagination.current - 1) * pagination.pageSize + index + 1 }}</span>
      </template>
      <span slot="operation" slot-scope="record">
        <a-popconfirm title="确认要删除吗" ok-text="确定" cancel="取消" @confirm="deleteUser(record.uuid)">
          <a-button type="link" class="firstButton">删除</a-button>
        </a-popconfirm>
        <a-popconfirm title="确认要重置吗" ok-text="确定" cancel="取消" @confirm="resetPassword(record.uuid)">
          <a-button type="link">重置密码</a-button>
        </a-popconfirm>
      </span>
    </a-table>
  </div>
</template>

<script>
import { createUser, deleteUser, findUserList, resetPassword } from '@/api/user'
const columns = [
  {
    title: '序号',
    scopedSlots: { customRender: 'dataIndex' }
  },
  {
    title: 'UUID',
    dataIndex: 'uuid'
  },
  {
    title: '用户名',
    dataIndex: 'username'
  },
  {
    title: '用户角色',
    dataIndex: 'authority.authorityName'
  },
  {
    title: '操作',
    width: 150,
    scopedSlots: { customRender: 'operation' }
  }
]
export default {
  created() {
    this.findUserList()
  },
  data() {
    return {
      visible: false,
      // form
      labelCol: { span: 6 },
      wrapperCol: { span: 15 },
      form: {
        username: '',
        password: '',
        authorityId: '2'
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
    changeTable(pagination, filters, sorter) {
      this.pagination.current = pagination.current
      this.pagination.pageSize = pagination.pageSize
      this.findUserList()
    },
    // crud
    createUser() {
      this.visible = false
      createUser(this.form).then(r => {
        this.$message.info(r.msg)
        this.findUserList()
      })
    },
    findUserList() {
      const { current, pageSize } = this.pagination
      const data = {
        page: current,
        pageSize
      }
      findUserList(data).then(r => {
        this.data = r.result.list
        this.pagination.total = r.result.total
      })
    },
    deleteUser(uuid) {
      const data = { uuid }
      deleteUser(data).then(r => {
        this.$message.info(r.msg)
        this.findUserList()
      })
    },
    resetPassword(uuid) {
      const data = { uuid }
      resetPassword(data).then(r => {
        this.$message.info(r.msg)
      })
    }
  }
}
</script>

<style scoped>
.top {
  margin-bottom: 20px;
}
.firstButton {
  padding: 0;
}
</style>
