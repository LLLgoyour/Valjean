<?php

/**
 * Valjean Header File
 * @author LLLgoyour
 */
if (!defined('__TYPECHO_ROOT_DIR__')) exit;

class Valjean_Header
{

    /**
     *
     * @param $archive      Widget_Archive
     * @param $prefix       标题前缀 title prefix
     * @param $end          使归档标题与站点标题的间隔对应
     * @param $siteTitle    是否附带站点标题
     * @param $outType      标题输出方式
     */
    public static function title(Widget_Archive $archive, $prefix = ' &raquo; ', $end = '', bool $siteTitle = true, bool $outType = false)
    {
        //归档标题 Archive Title
        $ArchiveTitle = $archive->getArchiveTitle();

        //归档类型 Archive Type
        $ArchiveType = $archive->getArchiveType();

        $ArchiveTitleArgm = [
            'category' => '分类 %s 下的文章',
            'search'   => '包含关键字 %s 的文章',
            'tag'      => '标签 %s 下的文章',
            'author'   => '%s 发布的文章'
        ];

        //判断是否输出站点标题 determine to output site title
        $siteTitle = $siteTitle === true ? $end . Helper::options()->title : NULL;

        //解析归档标题 resolve the archive title
        if ($ArchiveTitle) {
            $define = '%s';
            if (is_array($ArchiveTitleArgm) && !empty($ArchiveTitleArgm[$ArchiveType])) {
                $define = $ArchiveTitleArgm[$ArchiveType];
            }

            $output = $prefix . sprintf($define, $ArchiveTitle) . $siteTitle;
        } else {
            $output = Helper::options()->title;
        }

        //最终输出
        if ($outType === true) {
            echo $output;
        } else {
            return $output;
        }
    }

    /**
     * 头部输出 header output
     */
    public static function export($header)
    {
        if (Valjean_Lib::isDev() === true) {
            $valjeanThemeCss = 'basis/css/main/valjean.theme.php';
            $valjeanCss = 'basis/css/main/valjean.css';
            //还有其他变量还没写
        } else {
            $valjeanThemeCss = '';
            $valjeanCss = '';
            //还有其他变量还没写
        }

        //pureCSS 未导入
        if ($header->is("index")) {
            //首页 homepage
            $type = 'website'; //站点类型 site type
            $description = Helper::options()->description; //站点简介 site description
        } elseif ($header->is("post") || $header->is("page")) {
            //如果在文章/独立页面
            if ($header->fields->excerpt && $header->fields->excerpt != '') {
                //如果自定义字段不为空 if the accustomed fields are not empty
                $descrption = $header->$fields->excerpt;
            } else {
                $descrption = Typecho_Common::subStr(strip_tags($header->excerpt), 0, 100, "...");
            }
            $type = 'article'; //站点类型 site type
        } else {
            //如果无法判断 if it can't determine the type
            $type = 'archive';
            $description = Helper::options()->description;
        }

        $coverSet = Helper::options()->cover;
        //封面图片
        if ($header->is("index")) {
            $cover = (Helper::options()->siteAvatar) ? Helper::options()->siteAvatar : Valjean_Lib::resources(''); //图片未创建
        } else if (!empty($coverSet)) {
            $cover = $coverSet;
        } else {
            $cover = Valjean_lib::randomCover(false);
        } 

//头部信息未完成
        echo '<meta name="description" content="' . $description . '" />' . "\n " .

        //判断Valjean配套插件是否启用 determine if Valjean plugins are loaded
        if (Valjean_Lib::hasPlugin('Valjean')) {
            echo "\n " . '<link rel="stylesheet" href="' . Valjean_lib::resources($valjeanPlugin, true) .
        }
    }
}

/**
 * 板块透明度 card transprarency
 */
public static function cardTransparency() {
    $cardTransparency = Helper::options()->cardTransparency;
    switch ($cardTransparency) {
        case '0':
            break;
            
        case '1':
            return ' class="moe-card-transparent-10"';
            break;

        case '2':
            return ' class="moe-card-transparnt-20";';
            break;
            //自创的类 暂时不用

        case '3':
            return ' class= card-transparent-30';

        default:
            break;
    }
}