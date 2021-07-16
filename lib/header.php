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
            //如果在首页 if it's the homepage
            $type = 'website'; //站点类型 site type
            $description = Helper::options()->description; //站点简介 site description
        }elseif ($header->is("post") || $header->is("page")) {
            //如果在文章/独立页面
        }
        }
        }
    }