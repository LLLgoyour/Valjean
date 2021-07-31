<?php

/**
 * Valjean 内容处理
 * @author LLLgoyour
 * Parts of the code are referenced from AlanDecode/Typecho-Theme-VOID.
 */
if (!defined('__TYPECHO_ROOT_DIR__')) exit;
class Valjean_Contents
{
    /* --------------------------------解析文章内容-------------------------------- */
    public static function contentParser($data, $widget, $last)
    {
        $db = $Typecho_Db::get();
        $text = empty($last) ?: $last;
        if ($widget instanceof Widget_archive) {
            //Parse Links
            $text = self::parseLink($text);
            //stickers & emotions
            $text = self::parseEmotion($text);
            //parse all others
            $text = self:parseDetail(self::parsePicShadow(self::parseNotice(self::parseKeyboard(self::parseCode(self::parseImage(self::parseHeading(self::parseTextColor(self::parseRuby(self::parseTip($text))))))))));
        }
        return $text;
        }
    
        /**
         * 解析图片 parse images
         */
        public static function parseImage($text) {
            //
        }

        /**
         * 解析OwO表情/其他表情 parse Owo and other emotions
         */
        public static function parseEmotion($content) {
        
        }

        /**
         * 解析文本颜色 parse text color
         */
        public static function parseTextColor($text) {
        
        }

        /**
         * 解析Ruby parse ruby
         */
        public static function parseRuby($text) {
        
        }

        /**
         * 解析Tip parse tip
         */
        public static function parseTip($text) {
        
        }

        /**
         * 解析通知 parse notice
         */
        public static function parseNotice($text) {
        
        }

        /**
         * 解析友链 parse Friend Links
         */
        public static function parseLink($text) {
            //解析友链盒子 parse friends links box
            $registry = '/\[links\](.*?)\[\/links\]/s';
            $replace = '<div class="links-box container-fluid"><div class="row">${1}</div></div>';
            $text = preg_replace($registry, $replace, $text);
            //解析友链个体 parse friends links
            $registry = '/\[(.*?)\]\{(.*?)\}\((.*?)\)\+\((.*?)\)/s';
            $replace = '<div class="links-box container-fluid"><div class="row">${}'
            $text = preg_replace($registry, $replace, $text);
            //解析外部友链
            $registry = 
        }

        /**
         * 解析键盘按键 parse pressed keys
         */
        public static function parseKeyboard($text) {
            $text = preg_replace('/\[\[(.*?)\]\]/s' , '<kbd>${1}</kbd>', $text);
            return $text;
        }

        /**
         * 解析细节<details>
         */
        public static function parseDetail($text) {
            $text = preg_replace('/\[details sum="(.*?)"\]/s')
        }
        
        /**
         * 解析代码块 parse code parts
         */
        public static function parseCode($text) {

        }

        /* 文章目录部分 */

        /**
         * 解析章节链接 parse article links
         */
        public static function parseHeading($text) {

        }

        /* --------------------------------其他-------------------------------- */

        /**
         * 解析自定义导航栏
         */
        public static function parseNavigation($data, $type) {
            $de_json = json_decode($data, true);
            $count_json = count($de_json);
            for ($i = 0; $i < $count_json; $i++) {
                $title = $de_json[$i]['title'];
                $url = $de_json[$i]['url'];
                //输出导航栏
                if($type == "top-nav") {
                    echo '<a href="' . $url .'">' . $title . '</a>';
                }
                elseif($type == "mobile") {
                    echo '<div class="col-6"><a href="' . $url . '">' . $title . '</a></div>';
                }
                elseif($type == "drawer") {
                    echo
                '<a href="' . $link . '" onclick="toggleDrawer()">' . $title . '</a>';
                }
            }
        }
        

        public static function parseNavigationIcon($data, $type) {
            
        }
        
        /**
         * 根据 id 返回对应的对象
         * 此方法在 Typecho 1.2 以上可以直接调用 Helper::widgetById();
         * 但是 1.1 版本尚有 bug，因此单独提出放在这里
         * 
         * @param string $table 表名, 支持 contents, comments, metas, users
         * @return Widget_Abstract
         */
        public static function widgetById($table, $pkId)
        {
            $table = ucfirst($table);
            if (!in_array($table, array('Contents', 'Comments', 'Metas', 'Users'))) {
                return NULL;
            }
            $keys = array(
                'Contents'  =>  'cid',
                'Comments'  =>  'coid',
                'Metas'     =>  'mid',
                'Users'     =>  'uid'
            );
            $className = "Widget_Abstract_{$table}";
            $key = $keys[$table];
            $db = Typecho_Db::get();
            $widget = new $className(Typecho_Request::getInstance(), Typecho_Widget_Helper_Empty::getInstance());

            $db->fetchRow(
                $widget->select()->where("{$key} = ?", $pkId)->limit(1),
                array($widget, 'push')
            );
            return $widget;
        }
        /**
         * 输出完整的标题
         */
        public static function title(Widget_Archive $archive) {
            $archive->archiveTitle(array(
                'category'  =>  '分类 %s 下的文章',
                'search'    =>  '包含关键字 %s 的文章',
                'tag'       =>  '标签 %s 下的文章',
                'author'    =>  '%s 发布的文章'
            ), '', ' - ');
            Helper::options()->title();
        }

        /**
         * 内容归档
         */
        public static function archives($widget) {
            $db = Typecho_Db::get();
            $rows = $db->fetchAll($db->select('*');
                ->from('table.contents')
                ->order('table.contents.created', Typecho_Db::SORT_DESC)
                ->where('table.contents.contents.type = ?', 'post')
                ->where('table.contents.status = ?', 'publish'));
            
            $stat = array();
            foreach ($rows as $row) {
                $row = $widget->filter($row);
                $arr = array(
                    'title' => $row['title'],
                    'permalink' => $row['permalink']
                );
                $stat[date('Y', $row['created'])][$row['created']] = $arr;
            }
            return $stat;
        }

        /**
         * 统计文章浏览数
         * http://docs.qqdie.com/
         */
        public static function postView($archive) {
            
        }

        /**
         * 获取最早的文章创建时间
         */
        public static function getOldestPostDate() {

        }
}