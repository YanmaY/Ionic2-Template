import { UserInfo } from '../model/user-info';

/**
 * AppGlobal 全局定义 单例模式
 */
export class AppGlobal {
    private static instance: AppGlobal = new AppGlobal();

    /**是否是调试状态 */
    isDebug: boolean = true;

    server: string = this.isDebug ? "http://192.168.0.51:5151" : "http://123.56.204.211:8006";

    /**当前用户信息 */
    currentUser: UserInfo = new UserInfo();
    /**分页页数 */
    pageSize: number = 10;

    apk_download = `${this.server}/asserts/files/鸿卓智慧党建云.apk`;    // apk 下载地址 android
    app_download = `${this.server}/download.html`;                      // app下载地址  ios
    
    constructor() {
        if (AppGlobal.instance) {
            throw new Error("错误: 请使用AppGlobal.getInstance() 代替使用new.");
        }
        AppGlobal.instance = this;
    }

    /**
     * 获取当前实例
     * 
     * @static
     * @returns {AppGlobal}
     */
    public static getInstance(): AppGlobal {
        return AppGlobal.instance;
    }
}

export enum AppEnum {

}