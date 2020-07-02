import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
const cn = {
    // 公共模块
    common: {
        managerTitle: "爬虫数据一览",
        loginEmailLabel:'用户名',
        loginPasswordLabel:'密码',
        changePassword: "修改密码",
        logOut: "退出",
        logIn: "登录",
        emailExplain:'请输入登录邮箱',
        pwdExplain:'请输入登录密码',
        originPwdLabel:'旧密码',
        newPwdLabel:'新密码',
        againNewPwdLabel:'重复新密码',
        resetOldPwd:'请输入原密码',
        resetNewPwd:'请输入新密码',
        againNewPwd:'确认新密码',
        resetConfirmBtn:'确认修改',
        backBtn:'返回',
        confirmBtn:'确定',
        cancleBtn:'取消',
        newPwdExplain:'新密码不能和原密码相同',
        againPwdExplain:'重复密码必须和新密码一致',
        tip:'提示',
        operate:'操作',
        hotSpotsName:'热门景点数据',
        xianHomeName:'西安城南小区监控',
        roleManageName:'角色管理',
        operatorManageName:'用户管理',
        deviceManageName:'终端管理',
        AppManegeName:'应用管理',
        TaskManageName:'任务管理',
        tableLimitAllocate:'权限配置',
        tableAddBtn:'添加',
        tableUpdateBtn:'修改',
        tableDelBtn:'删除',
        tableDetailBtn:'详情',
        tableRemark:'备注',
        exportBtn:'导出',
        resetBtn:'重置',
        tableCreateTime:'创建时间',
        tableLoginTime:'最后登录时间',
        searchStartTime:'开始时间',
        searchEndTime:'结束时间',
        searchNetWorkStatusTip:'请选择',
        installBtnTitle:'安装',
        deletedBtnText:'已删除',
        emptyBtn:'清空',
        createBtn:'创建',
        successTip:'成功',
        warningTip:'警告',
        errorTip:'失败',

    },
    // 规格
    rule:{
        emailCorrectExplain:'请输入正确的邮箱',
        pwdCorrectExplain:'请输入正确的密码',
        requireExplain:'必填',
        changeDateExplain:'请选择日期时间',
        string8_16:'请输入8-16位长度的字符',
        string4_32:'请输入4-32位长度的字符',
        string_30:'请输入1-30位长度的字符',
        string_64:'请输入1-64位长度的字符',
        string4_128:'请输入4-128位长度的字符',
        string_256:'长度不超过256个字符',
        pwdConstitute:'密码必须是字母，数字混合组成',
        pwdNotOrigin:'新密码不能与初始密码相同',
        roleNameExplain:'字符长度在16位以内',
        telExplain:'请输入正确的电话',
        orgNameExplain:'请输入正确的机构名称',
        versionExplain:'请输入正确版本号，例如：1.0或1.0.0',
        versionLimitLen:'版本号不能超过5位数字',
        eamilmatch:'请输入邮箱地址',
        startTimeTip:'开始时间不能大于结束时间',
        selectStartTimeTip:'请先选择开始时间',
        deviceSnLengthTip:'结尾序列号的长度必须和起始序列号一致',
        deviceSnMaxTip:'结尾序列号必须大于起始序列号',
        resourceLengthExplain:'在256个字符之内',
        resourceRuleExplain:'不能输入特殊字符',
        ipRuleExplain:'请输入正确的服务器地址',
        fileIpRuleExplain:'请输入正确的文件服务器地址',
        deviceSnRuleExplain:'只能输入数字', 
    },
    // 首页
    dashbord:{
        firstDay:'星期日',
        secondDay:'星期一',
        thirdDay:'星期二',
        fourthDay:'星期三',
        fiveDay:'星期四',
        sixDay:'星期五',
        sevenDay:'星期六',
        quitExplain:'是否确认退出？',
        zoneTilte:'请选择你的时区',
        codeTitle:'注册二维码',
        editCodeBtn:'编辑二维码',
        activeTitle:'激活的设备',
        deviceTitle:'终端状态',
        modelTitle:'模块异常统计',
        useDeviceTitle:'使用中终端数',
        freeDeviceTitle:'空闲终端数',
        chargeDeviceTitle:'充电中终端数',
        lowDeviceTitle:'低电量终端数',
        zoneDialogTitle:'选择时区',
        editServerAdd:'服务器地址',
        editFileServerAdd:'文件服务器地址',
        editLogo:'主题图片',
        searchServerAdd:'请输入服务器地址',
        searchFileServerAdd:'请输入文件服务器地址',
        editSelectFile:'选择文件',
        zoneName:'时区名称',
        operateSelect:'选择',
        echartPieUse:'已启用',
        echartPieUsing:'启用中',
        echartPiedisable:'已停用',
        echartPiedisabling:'停用中',
        echartPieRestock:'重新入库中',
        echartPieCancelled:'已注销',
        echartPieputStorage:'已入库',
        echartActivedTip:'已激活',
        echartInactiveTip:'未激活',
        
    },
    org:{
        searchOrgName:'请输入机构名称',
        tableOrgName:'机构名称',
        tableOrgLevel:'机构等级',
        tableParentOrg:'上级机构',
        tableTel:'联系电话',
        tableEmail:'邮箱',
        tableUrl:'网址',
        tableAddTitle:'添加机构',
        tableUpdateTitle:'修改机构',
        tableAllocateTitle:'分配权限',
        tableSearchTel:'请输入联系电话',
        tableOrgAdd:'地址',
        addOrgTip:'本级机构是四级机构，不能添加子机构',
        delOrgTip:'确定删除该机构？',
        orgLeverOne:'一级等级',
        orgLeverTwo:'二级等级',
        orgLeverThree:'三级等级',
        orgLeverFour:'四级等级',
        tableExcludeHeadOrgTip:'总行不能进行该操作',
        exportOrg: '导出机构'
    },
    rolepage:{
        searchRoleName:'请输入角色名称',
        tableRoleName:'角色名称',
        addRoleTitle:'添加角色',
        updateRoleTitle:'修改角色',
        delRoleTip:'确定删除该角色？',
    },
    userpage:{
        tabNameOne:'用户管理',
        tabNameTwo:'用户日志',
        searchUserName:'请输入用户名称',
        searchRoleName:'所属角色',
        searchRoleTip:'请选择所属角色',
        searchOrgName:'所属机构',
        searchOrgTip:'请选择所属机构',
        tableUserStatus:'用户状态',
        tableStatusEnable:'启用',
        tableStatusDisable:'停用',
        tableStatusCancel:'注销',
        tableStatusLock:'密码锁定',
        tableUserName:'姓名',
        tableUserTel:'电话',
        addUserTitle:'添加用户',
        updateUserTitle:'修改用户',
        delUserTitle:'确定删除该用户？',
        searchEmailName:'请输入邮箱关键字',
        searchTypeName:'操作类型',
        searchTypeTip:'请选择操作类型',
        searchStatusName:'操作状态',
        searchStatusTip:'请选择操作状态',
        tableCreateTime:'操作时间',
        tableStatusError:'操作失败',
        tableStatusSuccess:'操作成功',
        tableIpUrl:'Ip',
        tableExcludeAdminTip:'超级管理员不能进行该操作'

    },
    terminalpage:{
        tabNameOne:'终端管理',
        tabNameTwo:'终端型号',
        tabNameThird:'终端类型',
        tabNameFour:'操作日志',
        templateDownLoad:'模板下载',
        searchStartNumber:'请输入起始序列号',
        searchEndNumber:'请输入结尾序列号',
        searchTerminalStatus:'终端状态',
        searchNetWorkStatus:'网络状态',
        searchTaskStatus:'任务执行状态',
        searchMerchantName:'商户名称',
        searchMerchantTip:'请输入商户名称',
        searchCountry:'国家',
        searchprovince:'省',
        searchCity:'市',
        tableNumber:'终端序列号',
        tableEnableStatus:'启用',
        tableDisableStatus:'停用',
        tableStorageStatus:'入库',
        tablecancelStatus:'注销',
        tableEnableDStatus:'启用中',
        tableStopUsingStatus:'停用中',
        tableRestockStatus:'重新入库中',
        tableStockTime:'入库时间',
        tableRegisterTime:'注册时间',
        tableArea:'国/省/市',
        tableTaskId:'任务ID',
        tableTaskProgress:'任务执行中',
        tableNoTask:'无任务',
        tableLastTime:'最后联机时间',
        addTerminalTitle:'添加终端',
        updateTerminalTitle:'修改终端',
        addMethod:'添加方式',
        formStartNumber:'起始序列号',
        formEndNumber:'结尾序列号',
        formFile:'导入文件',
        formRemoveTitle:'解除绑定',
        formAssignedTitle:'分配机构',
        detailDeviceSn:'终端号：',
        detailDeviceOneTitle:'终端详情',
        detailDeviceTwoTitle:'终端日志',
        deviceRuleLen:'结尾序列号的长度必须和起始序列号一致',
        deviceRuleLenMax:'结尾序列号的长度必须大于起始序列号',
        deviceSelectionTip:'请先选择需操作的终端',
        deviceDisableTip:'确定停用选中的终端？',
        deviceEnableTip:'确定启用选中的终端？',
        deviceRestartTip:'确定重启选中的终端？',
        detailFormNetWork:'网络名称',
        detailFormSign:'信号强度',
        detailFormPower:'电池电量',
        detailFormSystem:'系统版本',
        detailFormFirmware:'固件版本',
        detailFormSIMSN:'SIM卡SN号',
        detailFormSIMOperator:'SIM卡运营商',
        detailFormStorageSpace:'存储空间',
        detailFormRAM:'RAM',
        detailListTitle:'已安装应用',
        detailListDelete:'远程删除',
        detailListDelTip:'确定要删除该应用？',
        deviceNetWorkOne:'在线',
        deviceNetWorkTwo:'离线',
        detailLogPullBtn:'拉取日志',
        detailLogType:'日志类型',
        logTableFile:'文件名称',
        logTableUploadTime:'上传时间',
        logTableDownLoadBtn:'下载日志',
        searchModelTip:'请输入终端型号',
        tableModelName:'终端型号名称',
        addModelTitle:'添加终端型号',
        updateModelTitle:'修改终端型号',
        modelDeleteTip:'确定删除该终端型号？',
        searchTerminalTypeName:'请输入终端名称',
        addTypeNameTitle:'添加终端类型',
        updateTypeNameTitle:'添加终端类型',
        typeDeleteTip:'确定删除该终端类型？',
        operateLogSearchUser:'请输入用户邮箱',
        operateLogSearchDeviceSn:'请输入终端号',
        operateLogTypeDelete:'远程删除应用包',
        operateLogTypeRestart:'远程重启',
        operateLogTypePull:'平台拉取终端日志',
        operateLogUserName:'操作用户',
        operateLogOpSign:'操作标记',
        operateLogExecution :'执行中',
        againRemoveBoundTip:'终端注销后将无法进行任何操作，是否确认注销终端？'
    },
    application:{
        searchAppNameTip:'请输入应用名称',
        searchAppTypeLabel:'应用类型',
        searchAppDelSignLabel:'删除标记',
        applyTitle:'应用更新',
        systemTitle:'系统更新',
        resourcefileTitle:'资源文件更新',
        supportFormatText:'支持.apk&.img&.sgn格式',
        addAppTitle:'添加应用',
        formAppTypeTitle:'应用类型',
        formUploadTitle:'上传应用',
        formLogoTitle:'图标',
        formLogoTip:'支持.jpg & .png',
        formVersionLabel:'版本号',
        formUrlLabel:'保存路径',
        installAppTitle:'安装应用',
        installAppPlanTitle:'安装计划',
        installAppSelectDeviceTitle:'选择终端',
        searchDeviceSnStart:'开始序列号',
        searchDeviceSnEnd:'结束序列号',
        searchWaitSelectTitle:'待选终端',
        searchAlreadySelectTitle:'已选终端',
        tableDeviceSn:'终端硬件序列号',
        appDetailTitle:'应用详情',
        detailCountTitle:'安装终端总数',
        tableVersion:'应用版本号',
        tableUploadEmail:'上传人邮箱',
        tableUploadOrg:'上传人所属机构',
        tableFileSize:'文件大小',
        tableInstallNumber:'已安装终端数',
        tableNoDeleteSign:'未删除',
        tableDeletedSign:'已删除',
        tableDeleteDate:'删除日期',
        tableDelEmail:'删除人邮箱',
        tableDelOrg:'删除人所属机构',
        uploadLogoTip:'请上传体积不超过200kb的图标',
        formSelectTip:'请选择终端',
        delAppVersionTip:'确定要删除该应用版本？',
        delAppTip:'删除应用将同步删除该应用下的所有版本信息，是否继续删除？',
    },
    taskpage:{
        createTaskBtn:'创建任务',
        createTaskTitle:'创建任务',
        searchTaskName:'请输入任务名称',
        searchOrgName:'创建机构',
        searchTaskType:'任务类型',
        tabletaskName:'任务名称',
        tableAppName:'应用名称',
        tableExcultTime:'执行时间',
        tableDeviceNumber:'执行终端数',
        tableTaskComplete:'任务完成情况',
        tableTaskStatus:'任务状态',
        tableStatusNoBegin:'未开始',
        tableStatusOngoing:'进行中',
        tableStatusStop:'停止',
        tableStatusCompleted:'已完成',
        tableStatusNormal:'正常',
        tableTerminationBtn:'终止',
        formTaskNameLabel:'请输入任务名称',
        formTaskTime:'任务时间',
        detailTaskTitle:'任务详情',
        detailCreatePerson:'创建人',
        detailResult:'任务结果',
        detailCreateTime:'任务创建时间',
        detailExecutionTime:'任务执行时间',
        detailListTitle:'本次任务终端列表',
        taskCompleteDownload:'开始下载',
        taskCompleteDownloadSuccess:'下载成功',
        taskCompleteDownloadFailure:'下载失败',
        taskCompleteUpdateSuccess:'更新成功',
        taskCompleteUpdateFailure:'更新失败',
        detailTerminationTaskBtn:'终止任务',
        AgainAddTip:'是否停止之前的任务?',
        yesBtnTip:'是',
        noBtnTip:'否',
        sureTerminationTip:'确定终止该任务？',
        sureStopTaskDeviceTip:'确定要终止本次任务该终端？',
        addSystemAgainTip:'系统更新任务会使终端与商户自动解绑，变为入库状态，是否继续创建？'
    },
    utilpage:{
        loginTip:'请重新登录',
        tip_401:'当前请求未授权，需要向管理员申请',
        tip_402:'超时退出',
        tip_403:'账号已在别处登录',
        tip_405:'用户被注销，请联系超级管理员',
        tip_406:'用户被停用，请联系超级管理员',
        // tip_407:'机构权限信息被修改，被动退出，详情请联系管理员',
        // tip_408:'角色权限信息被修改，被动退出，详情请联系管理员',
        // tip_409:'用户信息被修改，被动退出，详情请联系管理员',
        tip_default:'请求时出现了错误',
        moreOperateTip:'更多操作',
        resetPwdTip:'重置密码',
        lockTip:'解锁',
        enableTip:'启用',
        disableTip:'停用',
        reOpenTip:'重启',
        unbundlingTip:'解绑',
        addDeviceOnlyTip:'添加终端(单个)',
        addDeviceMoreTip:'添加终端(批量)',
        addDeviceImportTip:'导入终端',
        rePutInStorageTip:'重新入库',
        cancelDeviceTip:'注销终端',
        systemLogTip:'系统日志',
        appLogTip:'应用日志',
        zoneNameEast12:'东西十二区',
        zoneNameEast11:'东十一区',
        zoneNameEast10:'东十区',
        zoneNameEast9:'东九区',
        zoneNameEast8:'东八区',
        zoneNameEast7:'东七区',
        zoneNameEast6:'东六区',
        zoneNameEast5:'东五区',
        zoneNameEast4:'东四区',
        zoneNameEast3:'东三区',
        zoneNameEast2:'东二区',
        zoneNameEast1:'东一区',
        zoneNamecentre:'中时区',
        zoneNamewest1:'西一区',
        zoneNamewest2:'西二区',
        zoneNamewest3:'西三区',
        zoneNamewest4:'西四区',
        zoneNamewest5:'西五区',
        zoneNamewest6:'西六区',
        zoneNamewest7:'西七区',
        zoneNamewest8:'西八区',
        zoneNamewest9:'西九区',
        zoneNamewest10:'西十区',
        zoneNamewest11:'西十一区',



    },
    ...zhLocale

};

export default cn;
