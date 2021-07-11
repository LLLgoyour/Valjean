<?php
/**
 * Valjean Library File
 * @author LLLgoyour
 */
if (!defined('__TYPECHO_ROOT_DIR__')) exit;

class Valjean_Lib {
    /**
     * 引用静态资源 import static resources
     * 
     * @param $path     文件路径
     * @param $outType  链接输出方式
     **/
    public static function resource($path, bool $version = false, bool $outType = false) {
        //获取静态资源设置 get static resourse settings
        $resourceSetting = Helper::options()->resource_Type;

        //主题链接 theme link
        $themeUrl = Helper::options()->themeUrl;

        //附加版本号 version add-on
        $version = ($version === true) ? '?v=' . Valjean_Version : NULL;

        switch ($resourceSetting) {
            case 'local':
                local:
                $output = $themeUrl . '/' . $path . $version;
                break;
                
            case 'jsdelivr':
                $output = 'https://cdn.jsdelivr.net/gh/LLLgoyour/Valjean@' . Valjean_Version . '/' . $path;
                break;
            
            case 'cdn':
                $output = Helper::options()->CDNlink . '/' . $path;
                break;

            default:
                goto local;
        }

        //总输出 all of the output
        if ($outType === true) {
            echo $output;
        } else {
            return $output;
        }
    }

    /**
     * 随机封面图片 randomized cover
     */
    public static function randomCover(bool $outType = false) {
        $randomCvrSet = Helper::options()->coverType;

        switch ($randomCvrSet) {
            case 'local': 
                //本地图片 local picture
                if (!$getFile)
                $output = ''
                break;
            case 'external': 
                //自定义第三方API [无随机参数] customized 3rd-party API [without randomized parameters]
                $output = Helper::options()->coverEx;
                break;

            case 'externalRandom':
                //自定义第三方API [有随机参数] customized 3rd-party API [with randomized parameters]
                $output = Helper::options()->coverEx . '?rand=' . range_rand(0, 1000);
                break;
            
            default:
                goto default
        }
    }
    /** 
     * 自适应伪静态 adapt pseudo-static
     * 
     * @param $path     路径
     * @param $outType  链接输出方式
    */
    public static function index($path = '', $outType = false) {
        $output = Helper::options()->index . $path;
        
        //最终输出 final output
        if ($outType === true) {
            echo $output;
        } else {
            return $output;
        }
    }

    /**
     * 获取主题名称 get theme name
     * @return $themeName 返回主题名
     */
    public static function getThemeName() {
        $db = Typecho_Db::get();
        $query = $db->select('value')->from('table.options')->where('name = ?', 'theme');
        $result = $db->fetchAll($query);
        $themeName = $result[0]["value"];
        return $themeName;
    }

    /**
     * 获取主题版本 get theme versions
     * @return string   返回主题版本号
     */
    public static function getThemeVersion() {
        $info = Typecho_Plugin::parseInfo(__DIR__ . '/../../index.php');
        return $info('version');
    }

    /**
     * 检测主题是否为开发版
     * check if the theme is a beta version
     * @return boolean
     */
    public static function ifDev() {
        return (Valjean_ENV == 'dev' || Valjean_ENV == 'development' ) ? true : false;
    }

    /**
     * 根据UID获取用户名 get user name according to UID
     * @return $name 返回指定用户的用户名
     */
    public static function getUserShownName( int $UID) {
        $db = Typecho_Db::get();
        $name = $db->fetchRow($db->select()->from('table.users')->where('uid = ?', $UID))['shownName'];
        return $name;
    }

    /**
     * 根据UID获取用户名
     * @return $name 返回指定用户名
     */
    public static function getAdminShownName() {
        $db = Typecho_Db::get();
        $name = $db->fetchRow($db->select()->from('table.users')->where('uid = ?', $userID))['shownName'];
        return $name;
    }

    /**
     * 获取主管理员名称
     * @return $name
     */
    public static function getAdminShownName() {
        $db = Typecho_Db::get();
        $name = $db->fetchRow($db->select()->from('table.users')->where('uid = ?', 1))['shownName'];
    }
}
