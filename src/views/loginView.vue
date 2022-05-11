<script setup>
import { Avatar,View } from '@element-plus/icons-vue'
import { reactive , ref , getCurrentInstance} from 'vue'
import { useStore } from 'vuex'
import userApi from '../api/userApi'

const { proxy }=getCurrentInstance()

const store = useStore();

const user = reactive ({})

const loginForm = ref(null)

const rules = reactive({
    username:[{
        required:true,message:'用户名不能为空',trigger:'blur'
    }],
    password:[{
        required:true,message:'密码不能为空',trigger:'blur'
    }]
})

const login = () => {
// 提交前校验
    loginForm.value.validate((valid) => {
        if(valid){
            userApi.login(user).then((res) => {
                // 将登录成功的信息由vuex管理
                store.dispatch('userStore/saveUserInfoAction', res)
                proxy.$router.push('/')
            })
        }else{
            return false
        }
    })
}
</script>

<template>
    <div class="login-content">
        <div class="modal">
            <el-form :model="user" :rules="rules" status-icon ref="loginForm"> 
                <div class="login-title">登录</div>
                <el-form-item prop="username">
                    <el-input type="text" :prefix-icon="Avatar" v-model="user.username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" :prefix-icon="View" v-model="user.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="login-btn" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<style scoped>
.login-content{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ac9d9d61;
    width: 100vw;
    height: 100vh;
}

.login-content .modal{
    width: 350px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgb(121, 120, 120);
    padding: 50px;
}

.login-content .login-title{
    font-size: 30px;
    line-height:1.5;
    text-align: center;
    margin-bottom: 15px;
}

.login-content .login-btn{
    width: 100%;
}
</style>

