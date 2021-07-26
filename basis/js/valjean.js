/**
            _  _                  
 /\   /\__ | |(_) ___  __ _ _ __  
\ \ / / _` | || |/ _ \/ _` | '_ \ 
 \ V / (_| | || |  __/ (_| | | | |
  \_/ \__,_|_|/ |\___|\__,_|_| |_|
            |__/        
----------------------------------------------------------------         
 * Valjean Themes Stylesheet
 * Author: LLLgoyour
 * License: GPL V3
 **/
var $$ = mdui.JQ,
  ValjeanData = {
    firstChild: document.body.firstChild,
    date: new Date(),
    scrollTop: "",
    comments: { replyID: "" },
    compositionFlag: !0,
    searchLock: !1,
  },
  ValjeanCreate = {
    BG: function () {
      var bg = document.createElement("div");
      bg.setAttribute("id", "lll-bg"),
        ValjeanConfig.setting.background.big &&
          (bg.style.backgroundImage =
            "url('" + ValjeanConfig.setting.background.big + "')"),
        $$("body")[0].insertBefore(bg, ValjeanData.firstChild);
      var style = document.createElement("style");
      (style.innerHTML = ""),
        ValjeanConfig.setting.background.color &&
          (style.innerHTML +=
            "#lll-bg{background-color: " +
            ValjeanConfig.setting.background.color +
            "!important;}"),
        ValjeanConfig.setting.background.small &&
          (style.innerHTML +=
            "@media (max-width: 600px) {#lll-bg{background-image: url('" +
            ValjeanConfig.setting.background.small +
            "')!important;}}"),
        $$("head").append(style);
    },
    Search: function () {
      var search = document.createElement("div");
      search.setAttribute("id", "search-dialog"),
        search.setAttribute("class", "mdui-dialog"),
        $$("body").append(search);
    },
    Header: function () {
      var id = $$("#header")[0];
      id.classList.add("lll-appbar"),
        (id.innerHTML =
          '<div class="mdui-toolbar">   <a class="mdui-btn mdui-btn-icon" mdui-drawer="{target: \'#sidebar\', swipe: \'true\', overlay: \'true\'}" no-go><i class="mdui-icon material-icons">&#xe5d2;</i></a>   <a href="' +
          ValjeanConfig.url.site +
          '" class="mdui-typo-title">' +
          ValjeanConfig.info.siteName +
          '</a>   <div class="mdui-toolbar-spacer"></div>   <a class="mdui-btn mdui-btn-icon lll-device-btn-hidden" id="toolbar-device-btn" mdui-menu="{target: \'#decice-toolbar-list\', align: \'right\'}" no-go><i class="mdui-icon material-icons">&#xe1b1;</i></a>   <a class="mdui-btn mdui-btn-icon" mdui-dialog="{target: \'#search-dialog\', history: false, content: ValjeanSearch.dialog()}" no-go><i class="mdui-icon material-icons">&#xe8b6;</i></a>  </div>');
    },
    Sidebar: function () {
      !0 === CLStatus.is
        ? (ValjeanData.login = {
            tooltip: ValjeanLang.sidebar.toolbar.logout,
            onclick: "ValjeanLogin.Logout()",
            icon: "power_settings_new",
          })
        : (ValjeanData.login = {
            tooltip: ValjeanLang.sidebar.toolbar.login,
            onclick: "ValjeanLogin.panel()",
            icon: "account_circle",
          });
      var sidebarToolsBar = "",
        sidebarToolsBarBox = { box: "", has: "" },
        id;
      ValjeanConfig.switch.sidebarToolsBar.login &&
        (sidebarToolsBar +=
          '<button class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-black mdui-color-grey-100" id="login-btn" mdui-tooltip="{content: \'' +
          ValjeanData.login.tooltip +
          "', position: 'top'}\" data-loginStatus=\"" +
          CLStatus.is +
          '"><i class="mdui-icon material-icons">' +
          ValjeanData.login.icon +
          "</i></button>"),
        ValjeanConfig.switch.sidebarToolsBar.darkBtn &&
          (sidebarToolsBar +=
            '<button class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-black mdui-color-grey-100" id="night-btn" mdui-tooltip="{content: \'' +
            ValjeanLang.sidebar.toolbar.dark +
            "', position: 'top'}\"><i class=\"mdui-icon material-icons\">brightness_4</i></button>"),
        ValjeanConfig.switch.sidebarToolsBar.settingBtn ||
        ValjeanConfig.switch.sidebarToolsBar.login ||
        ValjeanConfig.switch.sidebarToolsBar.darkBtn
          ? ((sidebarToolsBarBox.has = " lll-sidebar-toolbar-has"),
            (sidebarToolsBarBox.box =
              '<div class="lll-sidebar-toolbar">' + sidebarToolsBar + "</div>"))
          : ((sidebarToolsBarBox.box = ""), (sidebarToolsBarBox.has = "")),
        ($$("#sidebar")[0].innerHTML =
          '<div class="lll-sidebar-header" style="background-image: url(\'' +
          ValjeanConfig.setting.sidebar.background +
          '\')">   <div class="lll-sidebar-header-headimg" style="background-image: url(\'' +
          ValjeanConfig.setting.avatar +
          '\')"></div>   <div class="lll-sidebar-header-siteInfo"><div class="lll-sidebar-header-authorName">' +
          ValjeanConfig.info.author +
          '</div><div class="lll-sidebar-header-description">' +
          ValjeanConfig.info.description +
          '</div></div>  </div>  <ul class="mdui-list' +
          sidebarToolsBarBox.has +
          '" mdui-collapse="{accordion: true}">   <a href="' +
          ValjeanConfig.url.site +
          '" class="mdui-list-item mdui-ripple">    <i class="mdui-icon material-icons mdui-list-item-icon">home</i>    <div class="mdui-list-item-content">' +
          ValjeanLang.sidebar.home +
          "</div>   </a>  </ul>  " +
          sidebarToolsBarBox.box),
        ValjeanSidebar.menu();
      var dom = $$("#sidebar ul a");
      for (let i = 0; i < dom.length; ++i)
        dom[i].onclick = function () {
          new mdui.Drawer("#sidebar").close();
        };
      function scriptExec(toolsFuncName) {
        var scr = document.createElement("script");
        (scr.innerHTML = toolsFuncName),
          $$("body").append(scr),
          setTimeout(function () {
            $$("body")[0].removeChild(scr);
          }, 10);
      }
      $$("#sidebar .lll-sidebar-toolbar #login-btn")[0] &&
        ($$("#sidebar .lll-sidebar-toolbar #login-btn")[0].onclick =
          function () {
            scriptExec(ValjeanData.login.onclick);
          }),
        $$("#sidebar .lll-sidebar-toolbar #night-btn")[0] &&
          ($$("#sidebar .lll-sidebar-toolbar #night-btn")[0].onclick =
            function () {
              scriptExec("ValjeanNight.toggle()");
            });
    },
    tocSidebar: function () {
      if (!$$("#toc-sidebar")[0]) return !1;
      if ("" != $$("#toc-sidebar").html()) return ValjeanPostToc.toc(), !0;
      var tocSidebar = $$("#toc-sidebar");
      (tocSidebar[0].innerHTML +=
        '<header class="lll-toc-header mdui-shadow-1">   <div class="lll-toc-header-title">' +
        ValjeanLang.toc +
        "</div>  </header>"),
        (tocSidebar[0].innerHTML += '<main class="lll-toc-main"></main>'),
        ValjeanPostToc.toc();
    },
    Footer: function () {
      var footer = document.createElement("footer");
      if (
        (footer.setAttribute("id", "footer"),
        ValjeanConfig.setting.miibeian.number)
      )
        var miibeian =
          '<div class="lll-footer-icp"><a href="' +
          ValjeanConfig.setting.miibeian.link +
          '" target="_blank">' +
          ValjeanConfig.setting.miibeian.number +
          "</a></div>";
      else var miibeian = "";
      (footer.innerHTML =
        '<main class="lll-footer-box">   <div class="lll-footer-top">    <div class="lll-footer-copyright">Copyright &copy; ' +
        ValjeanData.date.getFullYear() +
        ' <a href="' +
        ValjeanConfig.url.site +
        '">' +
        ValjeanConfig.info.siteName +
        '</a></div>   </div>   <div class="lll-footer-bottom">    ' +
        miibeian +
        '    <div class="lll-footer-theme-or-powered">Theme <a href="https://github.com/ohmyga233/Valjean-Typecho-Theme" target="_blank">Valjean</a> By <a href="https://ohmyga.cn/">ohmyga</a> | Powered By <a href="http://typecho.org/" target="_blank">Typecho</a></div>   </div>  </main>'),
        $$("body").append(footer);
    },
    btnGroup: function () {
      var btnGroup = document.createElement("div");
      btnGroup.setAttribute("id", "btn-group"), $$("body").append(btnGroup);
    },
    gotoTopBtn: function () {
      var topBtn = document.createElement("div");
      topBtn.setAttribute("id", "go-top"),
        topBtn.setAttribute(
          "class",
          "mdui-fab mdui-fab-fixed mdui-ripple mdui-fab-hide mdui-color-theme"
        ),
        (topBtn.innerHTML = '<i class="mdui-icon material-icons">&#xe5d8;</i>'),
        (topBtn.onclick = function () {
          ValjeanTop.gotoTop();
        }),
        $$("#btn-group").append(topBtn);
    },
    tocBtn: function () {
      var tocBtn = document.createElement("div");
      tocBtn.setAttribute("id", "toc-Btn"),
        tocBtn.setAttribute(
          "class",
          "mdui-fab mdui-fab-fixed mdui-ripple mdui-color-theme mdui-fab-hide"
        ),
        (tocBtn.innerHTML = '<i class="mdui-icon material-icons">&#xe866;</i>'),
        (tocBtn.onclick = function () {
          ValjeanPostToc.toggle();
        }),
        $$("#btn-group").append(tocBtn);
    },
  },
  ValjeanSidebar = {
    menu: function () {
      if (!$$("#sidebar")[0]) return !1;
      if (!ValjeanConfig.setting.sidebarMenu) return !1;
      var sidebarMenuBox = "",
        sidebarMenu = ValjeanConfig.setting.sidebarMenu;
      for (let countMenu = 0; countMenu < sidebarMenu.length; ++countMenu) {
        if ("button" == sidebarMenu[countMenu].type) {
          if (sidebarMenu[countMenu].setting.target)
            var targetBlank = ' target="_blank"';
          else var targetBlank = ' target="_self"';
          sidebarMenuBox +=
            '<a href="' +
            sidebarMenu[countMenu].link +
            '" class="mdui-list-item mdui-ripple"' +
            targetBlank +
            '>     <i class="mdui-icon material-icons mdui-list-item-icon">' +
            sidebarMenu[countMenu].icon.text +
            '</i>     <div class="mdui-list-item-content">' +
            sidebarMenu[countMenu].name +
            "</div>    </a>";
        }
        if ("list" == sidebarMenu[countMenu].type) {
          if (
            ((sidebarMenuBox +=
              '<li class="mdui-collapse-item">     <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">      <i class="mdui-icon material-icons mdui-list-item-icon">' +
              sidebarMenu[countMenu].icon.text +
              '</i>      <div class="mdui-list-item-content">' +
              sidebarMenu[countMenu].name +
              '</div>      <i class="mdui-icon material-icons mdui-list-item-icon mdui-collapse-item-arrow">keyboard_arrow_down</i>     </div>     <ul class="mdui-collapse-item-body mdui-list mdui-list-dense">'),
            sidebarMenu[countMenu].content)
          )
            for (let i = 0; i < sidebarMenu[countMenu].content.length; ++i) {
              var targetContent = sidebarMenu[countMenu].content[i].target
                ? ' target="_blank"'
                : "";
              sidebarMenuBox +=
                '<a class="mdui-list-item mdui-ripple" href="' +
                sidebarMenu[countMenu].content[i].link +
                '"' +
                targetContent +
                ">" +
                sidebarMenu[countMenu].content[i].name +
                "</a>";
            }
          sidebarMenuBox += "</ul></li>";
        }
        if ("archives" == sidebarMenu[countMenu].type) {
          if (
            ((sidebarMenuBox +=
              '<li class="mdui-collapse-item">     <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">      <i class="mdui-icon material-icons mdui-list-item-icon">' +
              sidebarMenu[countMenu].icon.text +
              '</i>      <div class="mdui-list-item-content">' +
              sidebarMenu[countMenu].name +
              '</div>      <i class="mdui-icon material-icons mdui-list-item-icon mdui-collapse-item-arrow">keyboard_arrow_down</i>     </div>     <ul class="mdui-collapse-item-body mdui-list mdui-list-dense">'),
            sidebarMenu[countMenu].archives)
          )
            for (let i = 0; i < sidebarMenu[countMenu].archives.length; ++i)
              (sidebarMenuBox +=
                '<a href="' +
                sidebarMenu[countMenu].archives[i].link +
                '" class="mdui-list-item mdui-ripple">'),
                (sidebarMenuBox +=
                  sidebarMenu[countMenu].archives[i].date + " &nbsp; "),
                sidebarMenu[countMenu].setting.number &&
                  (sidebarMenuBox +=
                    '<span class="lll-sidebar-ul-count">' +
                    sidebarMenu[countMenu].archives[i].count +
                    "</span>"),
                (sidebarMenuBox += "</a>");
          sidebarMenuBox += "</ul></li>";
        }
        if ("category" == sidebarMenu[countMenu].type) {
          if (
            ((sidebarMenuBox +=
              '<li class="mdui-collapse-item">     <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">      <i class="mdui-icon material-icons mdui-list-item-icon">' +
              sidebarMenu[countMenu].icon.text +
              '</i>      <div class="mdui-list-item-content">' +
              sidebarMenu[countMenu].name +
              '</div>      <i class="mdui-icon material-icons mdui-list-item-icon mdui-collapse-item-arrow">keyboard_arrow_down</i>     </div>     <ul class="mdui-collapse-item-body mdui-list mdui-list-dense">'),
            sidebarMenu[countMenu].category)
          )
            for (let i = 0; i < sidebarMenu[countMenu].category.length; ++i)
              (sidebarMenuBox +=
                '<a href="' +
                sidebarMenu[countMenu].category[i].link +
                '" class="mdui-list-item mdui-ripple">'),
                (sidebarMenuBox +=
                  sidebarMenu[countMenu].category[i].name + " &nbsp; "),
                sidebarMenu[countMenu].setting.number &&
                  (sidebarMenuBox +=
                    '<span class="lll-sidebar-ul-count">' +
                    sidebarMenu[countMenu].category[i].count +
                    "</span>"),
                (sidebarMenuBox += "</a>");
          sidebarMenuBox += "</ul></li>";
        }
        if ("pages" == sidebarMenu[countMenu].type) {
          if (
            ((sidebarMenuBox +=
              '<li class="mdui-collapse-item">     <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">      <i class="mdui-icon material-icons mdui-list-item-icon">' +
              sidebarMenu[countMenu].icon.text +
              '</i>      <div class="mdui-list-item-content">' +
              sidebarMenu[countMenu].name +
              '</div>      <i class="mdui-icon material-icons mdui-list-item-icon mdui-collapse-item-arrow">keyboard_arrow_down</i>     </div>     <ul class="mdui-collapse-item-body mdui-list mdui-list-dense">'),
            sidebarMenu[countMenu].pages)
          )
            for (let i = 0; i < sidebarMenu[countMenu].pages.length; ++i)
              sidebarMenuBox +=
                '<a class="mdui-list-item mdui-ripple" href="' +
                sidebarMenu[countMenu].pages[i].link +
                '">' +
                sidebarMenu[countMenu].pages[i].name +
                "</a>";
          sidebarMenuBox += "</ul></li>";
        }
        if (
          ("divider" == sidebarMenu[countMenu].type &&
            (sidebarMenuBox += '<div class="mdui-divider"></div>'),
          "RssLink" == sidebarMenu[countMenu].type)
        ) {
          if (sidebarMenu[countMenu].setting.target)
            var targetBlank = ' target="_blank" ';
          else var targetBlank = ' target="_blank" ';
          sidebarMenuBox +=
            '<a href="' +
            sidebarMenu[countMenu].RssLink +
            '"' +
            targetBlank +
            'class="mdui-list-item mdui-ripple">     <i class="mdui-icon material-icons mdui-list-item-icon">' +
            sidebarMenu[countMenu].icon.text +
            '</i>     <div class="mdui-list-item-content">' +
            sidebarMenu[countMenu].name +
            "</div>    </a>";
        }
        ("TotalPost" != sidebarMenu[countMenu].type &&
          "TotalComments" != sidebarMenu[countMenu].type &&
          "TotalPage" != sidebarMenu[countMenu].type &&
          "TotalCategory" != sidebarMenu[countMenu].type &&
          "TotalWords" != sidebarMenu[countMenu].type) ||
          (sidebarMenuBox +=
            '<li class="mdui-list-item mdui-ripple">     <div class="mdui-list-item-content">' +
            sidebarMenu[countMenu].name +
            '</div>     <div class="mdui-list mdui-float-right">      <span class="lll-sidebar-TotalCount">' +
            sidebarMenu[countMenu].count +
            "</span>     </div>    </li>");
      }
      $$("#sidebar ul.mdui-list")[0].innerHTML += sidebarMenuBox;
    },
  },
  ValjeanSearch = {
    submit: function (input) {
      if (input) var input = input;
      else var input = $$("#search-dialog #searchInput");
      if (!input.val())
        return (
          mdui.snackbar({
            message: ValjeanLang.search.empty,
            position: "right-bottom",
            onOpen: function () {
              document
                .querySelector(".mdui-snackbar")
                .classList.add("mdui-color-red-400");
            },
          }),
          !1
        );
      new mdui.Dialog("#search-dialog").close(),
        ValjeanConfig.switch.pjax
          ? pjax.loadUrl(ValjeanConfig.url.index + "/search/" + input.val())
          : (window.location.href =
              ValjeanConfig.url.index + "/search/" + input.val());
    },
    dialog: function () {
      var dialog = $$("#search-dialog")[0];
      if (!$$("#search-dialog").html()) {
        var resBox =
          !0 === ValjeanConfig.switch.search
            ? '<div class="lll-search-result mdui-card"><ul class="mdui-list"></ul></div>'
            : "";
        (dialog.innerHTML =
          '<div class="lll-search-header"><a href="javascript:;" class="mdui-btn mdui-btn-icon" mdui-dialog-close no-go><i class="mdui-icon material-icons">close</i></a></div>   <div class="lll-search-content">    <div class="lll-search-input">     <form onkeydown="if(event.keyCode == 13){ValjeanSearch.submit(); return false;}">      <i class="mdui-icon material-icons">search</i>      <input id="searchInput" name="search" placeholder="' +
          ValjeanLang.search.input +
          '" type="text">     </form>     ' +
          resBox +
          "     </div>   </div>"),
          !0 === ValjeanConfig.switch.search && ValjeanSearch.on();
      }
    },
    on: function () {
      $$("#search-dialog #searchInput").one("focus", function (e) {
        $$("#search-dialog .lll-search-content").addClass(
          "lll-search-content-focus"
        );
      }),
        $$("#search-dialog #searchInput").on("compositionstart", function (e) {
          ValjeanData.compositionFlag = !1;
        }),
        $$("#search-dialog #searchInput").on("compositionend", function (e) {
          ValjeanData.compositionFlag = !0;
        }),
        $$("#search-dialog #searchInput").on(
          "input propertychange keyup",
          function (e) {
            if ("" == $$(this).val() || null == $$(this).val())
              return (
                ($$(
                  "#search-dialog .lll-search-result .mdui-list"
                )[0].innerHTML = ""),
                !1
              );
            ValjeanSearch.search();
          }
        );
    },
    search() {
      if (!1 === ValjeanData.compositionFlag || !0 === ValjeanData.searchLock)
        return !1;
      (ValjeanData.searchLock = !0),
        setTimeout(function () {
          if (
            "" == $$("#search-dialog #searchInput").val() ||
            null == $$("#search-dialog #searchInput").val()
          )
            return !1;
          $$.ajax({
            method: "POST",
            url: ValjeanConfig.url.index + "/action/Valjean?type=search",
            data: $$("#search-dialog .lll-search-content form").serialize(),
            success: function (data) {
              var data = JSON.parse(data);
              ValjeanSearch.result(data), (ValjeanData.searchLock = !1);
            },
            error: function (xhr, status, error) {
              (ValjeanData.searchLock = !1),
                ($$(
                  "#search-dialog .lll-search-result .mdui-list"
                )[0].innerHTML =
                  '<div class="search-result-none">发生错误</div>');
            },
          });
        }, 300);
    },
    result(data) {
      if (!1 === data.has)
        return (
          ($$("#search-dialog .lll-search-result .mdui-list")[0].innerHTML =
            '<div class="search-result-none">搜索不到相关结果</div>'),
          !1
        );
      var result = "";
      data.data.forEach(function (item, key) {
        result +=
          '<a href="javascript:;" onclick="ValjeanSearch.searchTo(\'' +
          item.link +
          '\')" class="mdui-list-item mdui-ripple" no-go>      <div class="mdui-list-item-content">       <div class="mdui-list-item-title mdui-list-item-one-line">' +
          item.title +
          '</div>       <div class="mdui-list-item-text mdui-list-item-two-line">' +
          item.excerpt +
          "</div>      </div>     </a>";
      }),
        5 == data.data.length &&
          (result +=
            '<li class="mdui-list-item mdui-ripple">      <div class="mdui-list-item-content">       <div class="mdui-list-item-title mdui-list-item-one-line" style="font-weight: bold;">更多结果请直接回车搜索</div>      </div>     </li>'),
        ($$("#search-dialog .lll-search-result .mdui-list")[0].innerHTML =
          result);
    },
    searchTo(link) {
      new mdui.Dialog("#search-dialog").close(),
        ValjeanConfig.switch.pjax
          ? pjax.loadUrl(link)
          : (window.location.href = link);
    },
  },
  ValjeanNight = {
    check: function () {
      function dark() {
        $$("body")[0].classList.add("mdui-theme-layout-dark"),
          ValjeanConfig.switch.sidebarToolsBar.darkBtn &&
            (window.onload = function () {
              var btn;
              $$("#night-btn")[0].classList.add("lll-night-btn-rotate360"),
                ($$("#night-btn i")[0].innerHTML = "brightness_high"),
                $$("#night-btn").attr(
                  "mdui-tooltip",
                  "{content: '" +
                    ValjeanLang.sidebar.toolbar.light +
                    "', position: 'top'}"
                );
            });
      }
      function light() {
        $$("body")[0].classList.remove("mdui-theme-layout-dark"),
          ValjeanConfig.switch.sidebarToolsBar.darkBtn &&
            (window.onload = function () {
              var btn;
              $$("#night-btn")[0].classList.remove("lll-night-btn-rotate360"),
                ($$("#night-btn i")[0].innerHTML = "brightness_4"),
                $$("#night-btn").attr(
                  "mdui-tooltip",
                  "{content: '" +
                    ValjeanLang.sidebar.toolbar.dark +
                    "', position: 'top'}"
                );
            });
      }
      if (ValjeanLib.getCookie("nightSwitch"))
        return (
          "true" == ValjeanLib.getCookie("nightSwitch") && dark(),
          "false" == ValjeanLib.getCookie("nightSwitch") && light(),
          !1
        );
      if (ValjeanConfig.switch.dark.follow) {
        var hour_now = ValjeanData.date.getHours();
        return (
          (hour_now >= ValjeanConfig.switch.dark.DarkTimeFrom ||
            hour_now <= ValjeanConfig.switch.dark.DarkTimeTo) &&
            dark(),
          !1
        );
      }
      if (ValjeanConfig.switch.dark.scheme) {
        var schemeGeter = window.matchMedia("(prefers-color-scheme: dark)");
        if (
          (schemeGeter.addListener(function (scheme) {
            scheme.matches
              ? dark()
              : window.matchMedia("(prefers-color-scheme: light)").matches &&
                light();
          }),
          schemeGeter.matches)
        )
          return dark(), !1;
      }
      return "dark" == ValjeanConfig.switch.dark.default
        ? (dark(), !1)
        : "light" == ValjeanConfig.switch.dark.default
        ? (light(), !1)
        : void 0;
    },
    toggle: function () {
      var status;
      $$("body").hasClass("mdui-theme-layout-dark")
        ? this.close(!0)
        : this.open(!0);
    },
    open: function (toggle) {
      var id = $$("body")[0];
      if ($$("body").hasClass("mdui-theme-layout-dark") && !toggle)
        return (
          mdui.snackbar({
            message: ValjeanLang.sidebar.dark.dark_enabled,
            position: "right-bottom",
            onOpen: function () {
              var snackbar;
              document
                .querySelector(".mdui-snackbar")
                .classList.add("mdui-color-blue-600");
            },
          }),
          !1
        );
      if (ValjeanConfig.switch.sidebarToolsBar.darkBtn) {
        var btn = $$("#night-btn")[0];
        $$("#night-btn").attr("disabled", !0),
          btn.classList.add("lll-night-btn-rotate360"),
          $$("#night-btn").attr("mdui-tooltip", "");
      }
      ValjeanLib.setCookie("nightSwitch", !0, 30, "/"),
        new mdui.Tooltip("#sidebar .lll-sidebar-toolbar #night-btn").close(),
        setTimeout(function () {
          id.classList.add("mdui-theme-layout-dark"),
            mdui.snackbar({
              message: ValjeanLang.sidebar.dark.light,
              position: "right-bottom",
              onOpen: function () {
                var snackbar;
                document
                  .querySelector(".mdui-snackbar")
                  .classList.add("mdui-color-blue-600");
              },
            }),
            ValjeanConfig.switch.sidebarToolsBar.darkBtn &&
              ($$("#night-btn").removeAttr("disabled"),
              $$("#night-btn").attr(
                "mdui-tooltip",
                "{content: '" +
                  ValjeanLang.sidebar.toolbar.light +
                  "', position: 'top'}"
              ));
        }, 310),
        setTimeout(function () {
          ValjeanConfig.switch.sidebarToolsBar.darkBtn &&
            ($$("#night-btn i")[0].innerHTML = "brightness_high");
        }, 330),
        setTimeout(function () {
          ValjeanConfig.switch.sidebarToolsBar.darkBtn &&
            new mdui.Drawer("#sidebar").close();
        }, 400);
    },
    close: function (toggle) {
      var id = $$("body")[0];
      if ($$("body").hasClass("mdui-theme-layout-dark") && !toggle)
        return (
          mdui.snackbar({
            message: ValjeanLang.sidebar.dark.light_enabled,
            position: "right-bottom",
            onOpen: function () {
              var snackbar;
              document
                .querySelector(".mdui-snackbar")
                .classList.add("mdui-color-blue-600");
            },
          }),
          !1
        );
      if (ValjeanConfig.switch.sidebarToolsBar.darkBtn) {
        var btn = $$("#night-btn")[0];
        $$("#night-btn").attr("disabled", !0),
          btn.classList.remove("lll-night-btn-rotate360"),
          $$("#night-btn").attr("mdui-tooltip", "");
      }
      ValjeanLib.setCookie("nightSwitch", !1, !1, "/"),
        new mdui.Tooltip("#sidebar .lll-sidebar-toolbar #night-btn").close(),
        setTimeout(function () {
          id.classList.remove("mdui-theme-layout-dark"),
            mdui.snackbar({
              message: ValjeanLang.sidebar.dark.dark,
              position: "right-bottom",
            }),
            ValjeanConfig.switch.sidebarToolsBar.darkBtn &&
              ($$("#night-btn").removeAttr("disabled"),
              $$("#night-btn").attr(
                "mdui-tooltip",
                "{content: '" +
                  ValjeanLang.sidebar.toolbar.dark +
                  "', position: 'top'}"
              ));
        }, 310),
        setTimeout(function () {
          ValjeanConfig.switch.sidebarToolsBar.darkBtn &&
            ($$("#night-btn i")[0].innerHTML = "brightness_4");
        }, 330),
        setTimeout(function () {
          ValjeanConfig.switch.sidebarToolsBar.darkBtn &&
            new mdui.Drawer("#sidebar").close();
        }, 400);
    },
  },
  ValjeanLogin = {
    panel: function () {
      if (!ValjeanConfig.switch.sidebarToolsBar.login)
        return (
          mdui.alert("别试了，并没有启用前台登录功能 (￣_￣|||)", "提示"), !1
        );
      if (
        (new mdui.Drawer("#sidebar").close(),
        "true" == $$("#login-btn").data("loginStatus"))
      )
        return (
          mdui.alert(
            ValjeanLang.sidebar.login.login.logined,
            ValjeanLang.tips.tips
          ),
          !1
        );
      var loginStyle = "";
      ValjeanConfig.setting.login.background &&
        (loginStyle +=
          "background-image: url('" +
          ValjeanConfig.setting.login.background +
          "');"),
        ValjeanConfig.setting.login.backgroundColor &&
          (loginStyle +=
            "background-color: " +
            ValjeanConfig.setting.login.background +
            ";");
      var content =
        '<div class="lll-login-header" style="' +
        loginStyle +
        '">   <a href="javascript:;" class="mdui-btn mdui-btn-icon" mdui-dialog-close><i class="mdui-icon material-icons">close</i></a>   <div class="lll-login-header-title">' +
        ValjeanLang.sidebar.login.login.title +
        '</div>  </div>  <div class="lll-login-content">   <form id="loginForm" onkeydown="if(event.keyCode == 13){return false;}">    <div class="mdui-textfield mdui-textfield-floating-label">     <label class="mdui-textfield-label">' +
        ValjeanLang.sidebar.login.login.user +
        '</label>     <input class="mdui-textfield-input" type="text" id="name" name="name" required/>     <div class="mdui-textfield-error">' +
        ValjeanLang.sidebar.login.login.wrongUser +
        '</div>    </div>    <div class="mdui-textfield mdui-textfield-floating-label">     <label class="mdui-textfield-label">' +
        ValjeanLang.sidebar.login.login.password +
        '</label>     <input class="mdui-textfield-input" type="password" id="password" name="password" required/>     <div class="mdui-textfield-error">' +
        ValjeanLang.sidebar.login.login.wrongPass +
        '</div>    </div>    <label class="mdui-checkbox">     <input type="checkbox" name="remember" value="1" id="remember">     <i class="mdui-checkbox-icon"></i>     ' +
        ValjeanLang.sidebar.login.login.remember +
        '    </label>    <div class="lll-login-submit">     <button class="mdui-btn mdui-btn-icon lll-login-loadBtn" type="button" disabled><i class="mdui-icon material-icons">autorenew</i></button>     <button class="mdui-btn mdui-btn-raised mdui-color-theme lll-login-submitBtn" type="button" onclick="ValjeanLogin.loginSubmit()">' +
        ValjeanLang.sidebar.login.login.submit +
        "</button>    </div>   </form>  </div>";
      mdui.dialog({
        content: content,
        modal: !0,
        history: !1,
        closeOnEsc: !1,
        cssClass: "lll-login mdui-shadow-10",
        onOpen: function (init) {
          $$(".lll-login").attr("id", "lll-login"),
            (ValjeanData.LoginDialog = init);
        },
      });
    },
    loginSubmit: function () {
      if (!ValjeanConfig.switch.sidebarToolsBar.login)
        return (
          mdui.alert("别试了，并没有启用前台登录功能 (￣_￣|||)", "提示"), !1
        );
      var username = $$("#loginForm #name").val(),
        password = $$("#loginForm #password").val();
      if (!username || !password) return !1;
      var loadBtn = $$("#loginForm .lll-login-submit .lll-login-loadBtn"),
        submitBtn = $$("#loginForm .lll-login-submit .lll-login-submitBtn");
      submitBtn.attr("disabled", "true"),
        loadBtn[0].classList.add("lll-login-loadBtn-display"),
        $$.ajax({
          method: "POST",
          url: ValjeanConfig.url.login,
          data: $$("#loginForm").serialize(),
          success: function (data) {
            var data;
            "error" == (data = JSON.parse(data)).status && "ok" != data.status
              ? (submitBtn.removeAttr("disabled"),
                loadBtn[0].classList.remove("lll-login-loadBtn-display"),
                mdui.snackbar({
                  message: data.error,
                  position: "right-bottom",
                  onOpen: function () {
                    document
                      .querySelector(".mdui-snackbar")
                      .classList.add("mdui-color-red-400");
                  },
                }))
              : "ok" == data.status
              ? ($$("#login-btn").attr("data-loginStatus", "true"),
                $$("#login-btn").attr("onclick", "ValjeanLogin.Logout()"),
                $$("#login-btn").attr(
                  "mdui-tooltip",
                  "{content: '" +
                    ValjeanLang.sidebar.toolbar.logout +
                    "', position: 'top'}"
                ),
                ($$("#login-btn i")[0].innerHTML = "power_settings_new"),
                ValjeanData.LoginDialog.close(),
                loadBtn[0].classList.remove("lll-login-loadBtn-display"),
                !0 === data.loginStatus
                  ? ((data.msg = ValjeanLang.sidebar.login.login.success),
                    (data.color = "mdui-color-green-600"),
                    ValjeanConfig.switch.pjax
                      ? pjax.loadUrl(window.location.href)
                      : ValjeanLib.reload())
                  : ((data.msg = ValjeanLang.sidebar.login.login.logined),
                    (data.color = "mdui-color-red-400")),
                mdui.snackbar({
                  message: data.msg,
                  position: "right-bottom",
                  onOpen: function () {
                    document
                      .querySelector(".mdui-snackbar")
                      .classList.add(data.color);
                  },
                }))
              : (submitBtn.removeAttr("disabled"),
                loadBtn[0].classList.remove("lll-login-loadBtn-display"),
                mdui.snackbar({
                  message: ValjeanLang.tips.unknown,
                  position: "right-bottom",
                  onOpen: function () {
                    document
                      .querySelector(".mdui-snackbar")
                      .classList.add("mdui-color-red-400");
                  },
                }));
          },
          error: function (xhr, status, error) {
            mdui.snackbar({
              message: ValjeanLang.tips.error + "（HTTP " + xhr.status + "）",
              position: "right-bottom",
              onOpen: function () {
                document
                  .querySelector(".mdui-snackbar")
                  .classList.add("mdui-color-red-400");
              },
            }),
              submitBtn.removeAttr("disabled"),
              loadBtn[0].classList.remove("lll-login-loadBtn-display");
          },
        });
    },
    Logout: function () {
      if (!ValjeanConfig.switch.sidebarToolsBar.login)
        return (
          mdui.alert("别试了，并没有启用前台登录功能 (￣_￣|||)", "提示"), !1
        );
      new mdui.Drawer("#sidebar").close();
      var LoginBtn = $$("#login-btn");
      LoginBtn.attr("disabled", "true"),
        $$.ajax({
          method: "GET",
          url: ValjeanConfig.url.logout,
          success: function (data) {
            var data;
            "ok" == (data = JSON.parse(data)).status && !0 === data.logout
              ? (mdui.alert(
                  ValjeanLang.sidebar.login.logout.content.logout,
                  ValjeanLang.sidebar.login.logout.title,
                  function () {
                    ValjeanConfig.switch.pjax
                      ? pjax.loadUrl(window.location.href)
                      : ValjeanLib.reload();
                  }
                ),
                LoginBtn.attr("data-loginStatus", "false"))
              : mdui.alert(data.msg, ValjeanLang.sidebar.login.logout.title),
              LoginBtn.removeAttr("disabled"),
              LoginBtn.attr("onclick", "ValjeanLogin.panel()"),
              LoginBtn.attr(
                "mdui-tooltip",
                "{content: '" +
                  ValjeanLang.sidebar.toolbar.login +
                  "', position: 'top'}"
              ),
              ($$("#login-btn i")[0].innerHTML = "account_circle");
          },
          error: function (xhr, status, error) {
            mdui.alert(
              ValjeanLang.tips.error + "（HTTP " + xhr.status + "）",
              ValjeanLang.sidebar.login.logout.title
            ),
              LoginBtn.removeAttr("disabled", "true");
          },
        });
    },
  },
  ValjeanPost = {
    toolbar: function () {
      if (!$$(".lll-post-card")[0] || $$("#links-dialog")[0])
        return this.barColor("remove"), !1;
      var width = document.body.scrollWidth,
        scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
      if (width > 600 && scrollTop > 450) {
        if (
          ($$("#header").hasClass("lll-appbar") ||
            (this.barColor("remove"), this.barTitle("remove")),
          !$$("#toolbar-device-btn").hasClass("lll-device-btn-hidden"))
        )
          return !1;
        $$("#toolbar-device-btn").removeClass("lll-device-btn-hidden");
      } else if (width > 600 && scrollTop < 450) {
        if (
          ($$("#header").hasClass("lll-appbar") ||
            (this.barColor("remove"), this.barTitle("remove")),
          $$("#toolbar-device-btn").hasClass("lll-device-btn-hidden"))
        )
          return !1;
        $$("#toolbar-device-btn").addClass("lll-device-btn-hidden");
      }
      if (width <= 600 && scrollTop > 260) {
        if (!$$("#header").hasClass("lll-appbar")) return !1;
        $$("#toolbar-device-btn").removeClass("lll-device-btn-hidden"),
          this.barColor("add"),
          this.barTitle("add");
      } else {
        if ($$("#header").hasClass("lll-appbar")) return !1;
        $$("#toolbar-device-btn").addClass("lll-device-btn-hidden"),
          this.barColor("remove"),
          this.barTitle("remove");
      }
    },
    barColor: function (method) {
      "add" == method
        ? ($$("#header")[0].classList.remove("lll-appbar"),
          $$("#header .mdui-toolbar")[0].classList.add("mdui-color-theme"))
        : ($$("#header")[0].classList.add("lll-appbar"),
          $$("#header .mdui-toolbar")[0].classList.remove("mdui-color-theme"));
    },
    barTitle: function (method) {
      var bar = $$("#header .mdui-toolbar .mdui-typo-title"),
        title = $$(
          ".lll-post-card .mdui-card-media .mdui-card-primary .mdui-card-primary-title"
        );
      "add" == method
        ? (bar.html(title.html()),
          bar.removeAttr("href"),
          (bar[0].onclick = function () {
            ValjeanTop.gotoTop();
          }))
        : (bar.html(ValjeanConfig.info.siteName),
          bar.attr("href", ValjeanConfig.url.site),
          (bar[0].onclick = ""));
    },
    Lazyload: function () {
      var lazyload = new LazyLoad({
        threshold: 0,
        elements_selector: ".lazyload",
      });
    },
    baguetteBox: function () {
      baguetteBox.run('[data-baguettebox="photo"]', { noScrollbars: !0 });
    },
    showIndexPostTitle: function () {
      if (!$$("#lll-post-list")[0]) return !1;
      function regTitle(title) {
        var otitle;
        return ValjeanLang.index.FloatingTitle.replace(/%s/, title);
      }
      var title = $$(
        "#lll-post-list .lll-default-card .mdui-card-primary .mdui-card-primary-title"
      );
      for (let i = 0; i < title.length; ++i)
        title[i].setAttribute("title", regTitle(title[i].innerText));
      var noPicTitle = $$("#lll-post-list .lll-nopic-card .lll-nopic-title a");
      for (let i = 0; i < noPicTitle.length; ++i)
        noPicTitle[i].setAttribute("title", regTitle(noPicTitle[i].innerText));
    },
    modifyPasswordStyle: function () {
      if (!$$("form.protected")[0]) return !1;
      $$("form.protected").attr(
        "onKeyDown",
        "if(event.keyCode == 13){return false;}"
      ),
        ($$("form.protected")[0].innerHTML =
          '<div class="mdui-textfield mdui-textfield-floating-label">   <label class="mdui-textfield-label">' +
          ValjeanLang.post.hidden.input +
          '</label>   <input class="mdui-textfield-input" name="protectPassword" id="protectPassword" type="password"/>  </div>  <button class="mdui-btn mdui-btn-icon mdui-color-theme-accent mdui-ripple mdui-btn-raised" type="button" onclick="ValjeanPost.submitPassword()"><i class="mdui-icon material-icons">&#xe876;</i></button>');
    },
    submitPassword: function () {
      return (
        !!$$("form.protected")[0] &&
        ($$("form.protected #protectPassword").val()
          ? void $$.ajax({
              method: "POST",
              data: $$("form.protected").serialize(),
              url: $$("form.protected").attr("action"),
              success: function (data) {
                var Obj = $$(document.createElement("body")).append(data);
                null == $$(Obj)[0].querySelector(".container")
                  ? (mdui.snackbar({
                      message: ValjeanLang.post.hidden.success,
                      position: "right-bottom",
                      onOpen: function () {
                        document
                          .querySelector(".mdui-snackbar")
                          .classList.add("mdui-color-green-600");
                      },
                    }),
                    ValjeanConfig.switch.pjax
                      ? pjax.loadUrl(window.location.href)
                      : ValjeanLib.reload())
                  : mdui.snackbar({
                      message:
                        ValjeanLang.post.hidden.error +
                        "[" +
                        $$(Obj)[0].querySelector(".container").innerHTML +
                        "]",
                      position: "right-bottom",
                      onOpen: function () {
                        document
                          .querySelector(".mdui-snackbar")
                          .classList.add("mdui-color-red-400");
                      },
                    });
              },
            })
          : (mdui.snackbar({
              message: ValjeanLang.post.hidden.empty,
              position: "right-bottom",
              onOpen: function () {
                document
                  .querySelector(".mdui-snackbar")
                  .classList.add("mdui-color-red-400");
              },
            }),
            !1))
      );
    },
    delPost: function (obj, title, post) {
      var postLang = post ? ValjeanLang.post.delete : ValjeanLang.page.delete;
      mdui.dialog({
        title: postLang.tips.title,
        content: postLang.tips.content.replace(/%s/, title),
        buttons: [
          {
            text: postLang.tips.cancel,
            onClick: function () {
              return !1;
            },
          },
          {
            text: postLang.tips.confirm,
            onClick: function () {
              mdui.dialog({
                title: postLang.warning.title,
                content:
                  postLang.warning.content.small.replace(/%s/, title) +
                  '<br/><span class="mdui-text-color-red mdui-typo-title-opacity">' +
                  postLang.warning.content.big +
                  "</span>",
                buttons: [
                  {
                    text: postLang.warning.cancel,
                    onClick: function () {
                      return !1;
                    },
                  },
                  {
                    text: postLang.warning.confirm,
                    onClick: function () {
                      window.location.href = $$(obj).data("delUrl");
                    },
                  },
                ],
                history: !1,
              });
            },
          },
        ],
        history: !1,
      });
    },
    highLight: function () {
      $$("pre code").each(function (key, item) {
        !1 === item.classList.contains("hljs") &&
          $$(this).html(
            "<ol><li>" +
              $$(this).html().replace(/\n/g, "\n</li><li>") +
              "\n</li></ol>"
          );
      }),
        $$(document).ready(function () {
          $$("pre code").each(function (key, item) {
            !1 === item.classList.contains("hljs") && hljs.highlightBlock(item);
          });
        });
    },
    deviceQR: function () {
      if (
        !$$(".lll-post-card #QRcode li img")[0] &&
        $$(".lll-post-card #QRcode li")[0]
      )
        var qrcode = new QRCode($$(".lll-post-card #QRcode li")[0], {
          text: window.location.href,
          width: 165,
          height: 165,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H,
        });
      if (!$$(".lll-post-card #QRcode")[0])
        return $$("#toolbar-device-btn").addClass("lll-device-btn-hidden"), !1;
      $$("#header .mdui-toolbar #decice-toolbar-list")[0] ||
        $$("#header .mdui-toolbar").append(
          '<div class="mdui-menu" id="decice-toolbar-list">       <li class="mdui-menu-item">        <img src="" />       </li>      </div>'
        ),
        setTimeout(function () {
          $$("#decice-toolbar-list li img").attr(
            "src",
            $$(".lll-post-card #QRcode li img").attr("src")
          );
        }, 10);
    },
  },
  ValjeanPostToc = {
    toc: function () {
      if (!ValjeanConfig.switch.toc) return !1;
      if (
        !$$(".lll-post-card")[0] ||
        "false" == $$(".lll-post-card").data("toc") ||
        $$(".lll-links-box")[0]
      )
        return (
          this.close(), $$("#toc-Btn")[0].classList.add("mdui-fab-hide"), !1
        );
      $$("#toc-Btn")[0].classList.remove("mdui-fab-hide");
      var tocInts = {
        tocSelector: "#toc-sidebar main.lll-toc-main",
        contentSelector: ".lll-post-card .lll-card-content",
        headingSelector: "h1,h2,h3,h4",
        scrollSmooth: !0,
        scrollSmoothOffset: -60,
        headingsOffset: -260,
      };
      if (
        (tocbot.init(tocInts),
        $$.each($$(".toc-link"), function (i, item) {
          $$(item)[0].onclick = function () {
            document.body.scrollWidth <= 1024 &&
              setTimeout(function () {
                ValjeanPostToc.close();
              }, 450);
          };
        }),
        null != $$(".lll-post-card").data("popup"))
      )
        return (
          "true" == $$(".lll-post-card").data("popup") &&
            document.body.scrollWidth > 1024 &&
            this.open(),
          !1
        );
      "true" == $$(".lll-post-card").data("toc") &&
        !0 === ValjeanConfig.setting.toc.popup &&
        "" != $$("#toc-sidebar main.lll-toc-main").html() &&
        document.body.scrollWidth > 1024 &&
        this.open(),
        "" == $$("#toc-sidebar main.lll-toc-main").html() &&
          $$("#toc-sidebar main.lll-toc-main").html(
            '<div class="lll-toc-empty">无可显示目录</div>'
          );
    },
    toggle: function () {
      return (
        !!ValjeanConfig.switch.toc &&
        !!$$(".lll-post-card")[0] &&
        ($$("#lll-toc-sidebar-overlay")[0] || this.overlay(),
        void ($$("#toc-sidebar").hasClass("toc-sidebar-open")
          ? this.close()
          : this.open()))
      );
      var tocSidebar;
    },
    open: function () {
      if (!ValjeanConfig.switch.toc) return !1;
      if (!$$(".lll-post-card")[0]) return !1;
      $$("#lll-toc-sidebar-overlay")[0] || this.overlay(),
        $$("#lll-toc-sidebar-overlay")[0] &&
          (($$("#lll-toc-sidebar-overlay")[0].style.display = "block"),
          setTimeout(function () {
            $$("#lll-toc-sidebar-overlay")[0].classList.add(
              "lll-toc-sidebar-overlay-open"
            );
          }, 10));
      var tocSidebar = $$("#toc-sidebar");
      (tocSidebar[0].style.display = "block"),
        $$("body")[0].classList.add("mdui-drawer-body-right"),
        setTimeout(function () {
          tocSidebar[0].classList.add("toc-sidebar-open");
        }, 10),
        $$("body").addClass("mdui-locked");
    },
    close: function () {
      if (!ValjeanConfig.switch.toc) return !1;
      $$("#lll-toc-sidebar-overlay")[0] &&
        ($$("#lll-toc-sidebar-overlay")[0].classList.remove(
          "lll-toc-sidebar-overlay-open"
        ),
        setTimeout(function () {
          $$("#lll-toc-sidebar-overlay")[0].style.display = "none";
        }, 310));
      var tocSidebar = $$("#toc-sidebar");
      tocSidebar[0].classList.remove("toc-sidebar-open"),
        $$("body")[0].classList.remove("mdui-drawer-body-right"),
        setTimeout(function () {
          tocSidebar[0].style.display = "none";
        }, 310),
        $$("body").removeClass("mdui-locked");
    },
    overlay: function () {
      if (!ValjeanConfig.switch.toc) return !1;
      var tocOverlay = document.createElement("div");
      tocOverlay.setAttribute("id", "lll-toc-sidebar-overlay"),
        (tocOverlay.onclick = function () {
          ValjeanPostToc.toggle();
        }),
        (tocOverlay.style.display = "none"),
        $$("body").append(tocOverlay);
    },
  },
  ValjeanOwO = {
    toggle: function () {
      return (
        !!$$("#comment-card-box")[0] &&
        ($$("#owoBox")[0] || this.create(),
        $$("#owoBox").hasClass("lll-owo-open")
          ? (this.close(), !0)
          : (this.open(), !0))
      );
    },
    open: function () {
      if (!$$("#owoBox")[0]) return !1;
      ($$("#owoBox")[0].style.display = "block"),
        $$("body").addClass("mdui-locked"),
        ($$("#lll-owo-overlay")[0].style.display = "block"),
        setTimeout(function () {
          $$("#owoBox")[0].classList.add("lll-owo-open"),
            $$("#lll-owo-overlay")[0].classList.add("lll-owo-overlay-open");
        }, 10);
    },
    close: function () {
      if (!$$("#owoBox")[0]) return !1;
      $$("#lll-owo-overlay")[0].classList.remove("lll-owo-overlay-open"),
        $$("#owoBox")[0].classList.remove("lll-owo-open"),
        setTimeout(function () {
          ($$("#owoBox")[0].style.display = "none"),
            ($$("#lll-owo-overlay")[0].style.display = "none"),
            $$("body").removeClass("mdui-locked");
        }, 310);
    },
    create: function () {
      if ($$("#owoBox")[0]) return !1;
      var owoTmps = { owo: "", tab: "" },
        owoBox = document.createElement("div");
      (owoBox.style.display = "none"),
        owoBox.setAttribute("id", "owoBox"),
        owoBox.classList.add("mdui-shadow-10"),
        (owoBox.innerHTML +=
          '<header class="lll-owo-header">   <div class="lll-owo-header-title"><i class="mdui-icon material-icons">tag_faces</i></div>   <button class="mdui-btn mdui-btn-icon" onclick="ValjeanOwO.toggle();"><i class="mdui-icon material-icons">close</i></button>  </div>');
      var owoList = ValjeanConfig.setting.owoList;
      for (let owoNum = 0; owoNum < owoList.length; ++owoNum) {
        if ("text" == owoList[owoNum].type) {
          if (
            ((owoTmps.owo +=
              '<div id="' + owoList[owoNum].id + '" class="mdui-p-a-2">'),
            owoList[owoNum].content)
          )
            for (let i = 0; i < owoList[owoNum].content.length; ++i)
              owoTmps.owo +=
                '<a data-owo="' +
                owoList[owoNum].content[i].text +
                '" class="lll-owo-text-btn mdui-btn mdui-shadow-2" no-go no-pgo no-pjax>' +
                owoList[owoNum].content[i].text +
                "</a>";
          else
            owoTmps.owo +=
              '<div class="lll-owo-main-error">此表情包下并没有任何表情..</div>';
          (owoTmps.owo += "</div>"),
            (owoTmps.tab +=
              '<a href="#' +
              owoList[owoNum].id +
              '" class="mdui-ripple" no-pgo no-go>' +
              owoList[owoNum].name +
              "</a>");
        }
        if ("emoji" == owoList[owoNum].type) {
          if (
            ((owoTmps.owo +=
              '<div id="' + owoList[owoNum].id + '" class="mdui-p-a-2">'),
            owoList[owoNum].content)
          )
            for (let i = 0; i < owoList[owoNum].content.length; ++i)
              owoTmps.owo +=
                '<a data-owo="' +
                owoList[owoNum].content[i].text +
                '" class="lll-owo-emoji-btn mdui-btn mdui-shadow-2" no-pgo no-go no-pjax>' +
                owoList[owoNum].content[i].text +
                "</a>";
          else
            owoTmps.owo +=
              '<div class="lll-owo-main-error">此表情包下并没有任何表情..</div>';
          (owoTmps.owo += "</div>"),
            (owoTmps.tab +=
              '<a href="#' +
              owoList[owoNum].id +
              '" class="mdui-ripple" no-pgo no-go>' +
              owoList[owoNum].name +
              "</a>");
        }
        if ("smallPicture" == owoList[owoNum].type) {
          if (
            ((owoTmps.owo +=
              '<div id="' + owoList[owoNum].id + '" class="mdui-p-a-2">'),
            owoList[owoNum].content)
          )
            for (let i = 0; i < owoList[owoNum].content.length; ++i)
              owoTmps.owo +=
                '<a data-owo="' +
                owoList[owoNum].content[i].data +
                '" class="lll-owo-smallPicture-btn mdui-btn mdui-shadow-2" no-pgo no-go no-pjax>       <img src="' +
                owoList[owoNum].dir +
                owoList[owoNum].content[i].file +
                '" />      </a>';
          else
            owoTmps.owo +=
              '<div class="lll-owo-main-error">此表情包下并没有任何表情..</div>';
          (owoTmps.owo += "</div>"),
            (owoTmps.tab +=
              '<a href="#' +
              owoList[owoNum].id +
              '" class="mdui-ripple" no-pgo no-go>' +
              owoList[owoNum].name +
              "</a>");
        }
        if ("picture" == owoList[owoNum].type) {
          if (
            ((owoTmps.owo +=
              '<div id="' + owoList[owoNum].id + '" class="mdui-p-a-2">'),
            owoList[owoNum].content)
          )
            for (let i = 0; i < owoList[owoNum].content.length; ++i)
              owoTmps.owo +=
                '<a data-owo="' +
                owoList[owoNum].content[i].data +
                '" class="lll-owo-picture-btn mdui-btn mdui-shadow-2" no-pgo no-go no-pjax>       <img src="' +
                owoList[owoNum].dir +
                owoList[owoNum].content[i].file +
                '" />      </a>';
          else
            owoTmps.owo +=
              '<div class="lll-owo-main-error">此表情包下并没有任何表情..</div>';
          (owoTmps.owo += "</div>"),
            (owoTmps.tab +=
              '<a href="#' +
              owoList[owoNum].id +
              '" class="mdui-ripple" no-pgo no-go>' +
              owoList[owoNum].name +
              "</a>");
        }
      }
      (owoBox.innerHTML +=
        '<main class="lll-owo-main mdui-dialog-content" >' +
        owoTmps.owo +
        "</main>"),
        (owoBox.innerHTML +=
          '<footer class="lll-owo-footer-tab">   <div class="mdui-tab mdui-tab-full-width" id="OwO-tab" mdui-tab>    ' +
          owoTmps.tab +
          "   </div>  </footer>"),
        $$("body").append(owoBox),
        mdui.mutation($$("#owoBox")),
        this.bindOwO();
      var owoOverlay = document.createElement("div");
      (owoOverlay.style.display = "none"),
        owoOverlay.setAttribute("id", "lll-owo-overlay"),
        (owoOverlay.onclick = function () {
          ValjeanOwO.toggle();
        }),
        $$("body").append(owoOverlay);
    },
    bindOwO: function () {
      if (!$$("#owoBox main.lll-owo-main a")[0]) return !1;
      for (
        let owoNum = 0;
        owoNum < $$("#owoBox main.lll-owo-main a").length;
        ++owoNum
      )
        $$("#owoBox main.lll-owo-main a")[owoNum].dataset.owo &&
          ($$("#owoBox main.lll-owo-main a")[owoNum].onclick = function () {
            ValjeanOwO.grin(
              $$("#owoBox main.lll-owo-main a")[owoNum].dataset.owo
            ),
              ValjeanOwO.toggle();
          });
    },
    grin: function (tag) {
      (tag = " " + tag + " "),
        (myField = $$("#comment-card-box .lll-comment-input-text #text")[0]),
        document.selection
          ? (myField.focus(),
            (sel = document.selection.createRange()),
            (sel.text = tag),
            myField.focus())
          : this.insertTag(tag);
    },
    insertTag: function (tag) {
      (myField = $$("#comment-card-box .lll-comment-input-text #text")[0]),
        myField.selectionStart || "0" == myField.selectionStart
          ? ((startPos = myField.selectionStart),
            (endPos = myField.selectionEnd),
            (cursorPos = startPos),
            (myField.value =
              myField.value.substring(0, startPos) +
              tag +
              myField.value.substring(endPos, myField.value.length)),
            (cursorPos += tag.length),
            myField.focus(),
            (myField.selectionStart = cursorPos),
            (myField.selectionEnd = cursorPos))
          : ((myField.value += tag), myField.focus());
    },
  },
  ValjeanComments = {
    Core: function () {
      var commentID = $$(".respondID").attr("id");
      window.TypechoComment = {
        dom: function (id) {
          return document.getElementById(id);
        },
        create: function (tag, attr) {
          var el = document.createElement(tag);
          for (var key in attr) el.setAttribute(key, attr[key]);
          return el;
        },
        reply: function (cid, coid) {
          $$("#comment-card-box").addClass("lll-comment-card-opaque");
          var comment = $$("#" + cid + " main")[0],
            parent = comment.parentNode,
            response = this.dom(commentID),
            input = this.dom("comment-parent"),
            form =
              "form" == response.tagName
                ? response
                : response.getElementsByTagName("form")[0],
            textarea = response.getElementsByTagName("textarea")[0];
          if (
            (null == input &&
              ((input = this.create("input", {
                type: "hidden",
                name: "parent",
                id: "comment-parent",
              })),
              form.appendChild(input)),
            input.setAttribute("value", coid),
            null == this.dom("comment-form-place-holder"))
          ) {
            var holder = this.create("div", {
              id: "comment-form-place-holder",
            });
            response.parentNode.insertBefore(holder, response);
          }
          return (
            (last = ValjeanComments.getLastComment()),
            null == last
              ? comment.appendChild(response)
              : last.id == cid
              ? $$("#comments")[0].appendChild(response)
              : comment.appendChild(response),
            (this.dom("cancel-comment-reply-link").style.display = ""),
            null != textarea && "text" == textarea.name && textarea.focus(),
            !1
          );
        },
        cancelReply: function () {
          $$("#comment-card-box").removeClass("lll-comment-card-opaque");
          var response = this.dom(commentID),
            holder = this.dom("comment-form-place-holder"),
            input = this.dom("comment-parent");
          return (
            null != input && input.parentNode.removeChild(input),
            null == holder ||
              ((this.dom("cancel-comment-reply-link").style.display = "none"),
              holder.parentNode.insertBefore(response, holder),
              !1)
          );
        },
      };
    },
    getLastComment: function () {
      return (
        (firstNodeList = $$(".lll-comments-list-box > div")),
        0 == firstNodeList.length
          ? null
          : ((firstNode = firstNodeList[firstNodeList.length - 1]),
            ValjeanComments.checkLast(firstNode))
      );
    },
    checkLast: function (node) {
      return (
        (next = $$(node).next()),
        null == next[0]
          ? node
          : !1 === next.hasClass("lll-comments-list-box")
          ? node
          : ((nextNodeList = next.children(".lll-comments-box")),
            (nextNode = nextNodeList[nextNodeList.length - 1]),
            ValjeanComments.checkLast(nextNode))
      );
    },
    showLinkInput: function () {
      if (!$$(".lll-comment-card-content .lll-comment-input-url")[0]) return !1;
      var link = $$(".lll-comment-card-content .lll-comment-input-url");
      link.hasClass("lll-comment-input-url-hidden")
        ? link[0].classList.remove("lll-comment-input-url-hidden")
        : link[0].classList.add("lll-comment-input-url-hidden");
    },
    headimgAJAX: function () {
      if (!$$(".lll-comment-card-content #email")[0]) return !1;
      $$(".lll-comment-card-content #email")[0].onblur = function () {
        if (!$$(this).val()) return !1;
        ($$("#lll-comment-author-avatar")[0].innerHTML =
          '<div class="mdui-spinner"></div>'),
          mdui.mutation($$("#lll-comment-author-avatar")),
          $$.ajax({
            method: "GET",
            url: ValjeanConfig.url.index,
            data: {
              action: "ajax_get_avatar",
              form: window.location.host,
              email: $$(this).val(),
            },
            success: function (data) {
              if (!data) return !1;
              $$("#lll-comment-author-avatar")[0].innerHTML =
                '<img src="' + data + '" />';
            },
            error: function (xhr, status, error) {
              mdui.snackbar({
                message: "请求失败，请检查网络是否正常",
                position: "right-bottom",
                onOpen: function () {
                  document
                    .querySelector(".mdui-snackbar")
                    .classList.add("mdui-color-red-400");
                },
              });
            },
          });
      };
    },
    submitComment: function () {
      if (!$$(".respondID").attr("data-commentUrl")) return !1;
      if (!$$(".lll-comment-card-content #text").val())
        return (
          mdui.snackbar({
            message: ValjeanLang.comment.MsgEmpty,
            position: "right-bottom",
            onOpen: function () {
              document
                .querySelector(".mdui-snackbar")
                .classList.add("mdui-color-red-400");
            },
          }),
          !1
        );
      if (
        $$(".lll-comment-input-username #author").length &&
        !$$(".lll-comment-input-username #author").val()
      )
        return (
          mdui.snackbar({
            message: ValjeanLang.comment.AuthorEmpty,
            position: "right-bottom",
            onOpen: function () {
              document
                .querySelector(".mdui-snackbar")
                .classList.add("mdui-color-red-400");
            },
          }),
          !1
        );
      if (
        $$(".lll-comment-input-email #email").length &&
        !$$(".lll-comment-input-email #email").val() &&
        ValjeanConfig.switch.comment.email
      )
        return (
          mdui.snackbar({
            message: ValjeanLang.comment.EmailEmpty,
            position: "right-bottom",
            onOpen: function () {
              document
                .querySelector(".mdui-snackbar")
                .classList.add("mdui-color-red-400");
            },
          }),
          !1
        );
      if (
        $$(".lll-comment-input-url #url").length &&
        !$$(".lll-comment-input-url #url").val() &&
        ValjeanConfig.switch.comment.link
      )
        return (
          mdui.snackbar({
            message: ValjeanLang.comment.UrlEmpty,
            position: "right-bottom",
            onOpen: function () {
              document
                .querySelector(".mdui-snackbar")
                .classList.add("mdui-color-red-400");
            },
          }),
          $$(".lll-comment-card-content .lll-comment-input-url").hasClass(
            "lll-comment-input-url-hidden"
          ) &&
            $$(
              ".lll-comment-card-content .lll-comment-input-url"
            )[0].classList.remove("lll-comment-input-url-hidden"),
          !1
        );
      function beforeComment() {
        $$("#submitCommentBtn").attr("disabled", !0),
          $$(".mdui-tooltip").removeClass("mdui-tooltip-open"),
          $$("#submitCommentBtn i").html("cached"),
          $$("#submitCommentBtn i").addClass("lll-rotate360deg-infinite");
      }
      function afterComment(status) {
        $$("#submitCommentBtn").removeAttr("disabled"),
          $$("#submitCommentBtn i").removeClass("lll-rotate360deg-infinite"),
          status
            ? ($$("#submitCommentBtn i").html("send"),
              (ValjeanData.comments.replyTo = ""),
              $$(".lll-comment-input-text #text").val(""),
              $$(".lll-comment-input-text #text")[0].focus(),
              $$(".lll-comment-input-text #text")[0].blur(),
              ValjeanLib.scrollClick())
            : ($$("#submitCommentBtn i").html("warning"),
              setTimeout(function () {
                $$("#submitCommentBtn i").html("send");
              }, 1200)),
          ValjeanComments.bindReplyBtn(),
          ValjeanPost.highLight();
      }
      beforeComment(),
        $$.ajax({
          method: "POST",
          url: $$(".respondID").attr("data-commentUrl"),
          data: $$(".lll-comment-card-content").serialize(),
          success: function (data) {
            var Obj = $$(document.createElement("body")).append(data);
            if (null == $$(Obj)[0].querySelector(".container")) {
              var $htmlData = $$(document.createElement("body")).append(data);
              if (!$htmlData.html())
                return (
                  mdui.snackbar({
                    message: ValjeanLang.comment.refresh,
                    position: "right-bottom",
                    onOpen: function () {
                      document
                        .querySelector(".mdui-snackbar")
                        .classList.add("mdui-color-red-400");
                    },
                  }),
                  afterComment(!1),
                  !1
                );
              if (
                ((ValjeanData.comments.NewID = $htmlData
                  .html()
                  .match(/id=\"?comment-\d+/g)
                  .join()
                  .match(/\d+/g)
                  .sort(function (a, b) {
                    return a - b;
                  })
                  .pop()),
                "" === ValjeanData.comments.replyTo ||
                null == ValjeanData.comments.replyTo
                  ? $$("#comments > .lll-comments-list-box > .lll-comments-box")
                      .length
                    ? $$(".prev").length
                      ? $$(".lll-comments-page-navigator li a").eq(1)[0].click()
                      : ((ValjeanData.comments.newComment =
                          $htmlData[0].querySelectorAll(
                            "#comment-" + ValjeanData.comments.NewID
                          )),
                        $$(".lll-comments-list-box")
                          .first()
                          .prepend(ValjeanData.comments.newComment),
                        $$("#comment-" + ValjeanData.comments.NewID).addClass(
                          "lll-animation-fadein"
                        ))
                    : ((ValjeanData.comments.newComment =
                        $htmlData[0].querySelectorAll(
                          "#comment-" + ValjeanData.comments.NewID
                        )),
                      $$(".lll-comments-list-header").after(
                        '<div class="lll-comments-list-box"></div>'
                      ),
                      $$(".lll-comments-list-box")
                        .first()
                        .prepend(ValjeanData.comments.newComment),
                      $$("#comment-" + ValjeanData.comments.NewID).addClass(
                        "lll-animation-fadein"
                      ))
                  : ((ValjeanData.comments.newComment =
                      $htmlData[0].querySelectorAll(
                        "#comment-" + ValjeanData.comments.NewID
                      )),
                    $$("#" + ValjeanData.comments.replyTo).find(
                      ".lll-comment-children"
                    ).length
                      ? ($$(
                          "#" +
                            ValjeanData.comments.replyTo +
                            " .lll-comment-children .lll-comments-list-box"
                        )
                          .first()
                          .append(ValjeanData.comments.newComment),
                        $$("#comment-" + ValjeanData.comments.NewID).addClass(
                          "lll-animation-fadein"
                        ),
                        TypechoComment.cancelReply(),
                        ValjeanTop.scrollSmoothTo(
                          $$("#comment-" + ValjeanData.comments.NewID).offset()
                            .top
                        ))
                      : ($$("#" + ValjeanData.comments.replyTo).append(
                          '<div class="lll-comment-children"><div class="lll-comments-list-box"></div></div>'
                        ),
                        $$(
                          "#" +
                            ValjeanData.comments.replyTo +
                            " .lll-comment-children .lll-comments-list-box"
                        )
                          .first()
                          .prepend(ValjeanData.comments.newComment),
                        $$("#comment-" + ValjeanData.comments.NewID).addClass(
                          "lll-animation-fadein"
                        ),
                        TypechoComment.cancelReply(),
                        ValjeanTop.scrollSmoothTo(
                          $$("#comment-" + ValjeanData.comments.NewID).offset()
                            .top
                        ))),
                null == $$(".lll-comments-list-number span").text())
              )
                $$(".lll-comments-list-number").html(
                  ValjeanLang.comment.have.replace(/%s/, "<span>1</span>")
                );
              else {
                var counts = parseInt(
                  $$(".lll-comments-list-number span").text()
                );
                $$(".lll-comments-list-number span").html(
                  $$(".lll-comments-list-number span")
                    .html()
                    .replace(/\d+/, counts + 1)
                );
              }
              afterComment(!0),
                $$(
                  "#comment-" +
                    ValjeanData.comments.NewID +
                    " .lll-comments-time span"
                )[0]
                  ? ((ValjeanData.comments.message =
                      ValjeanLang.comment.pending),
                    (ValjeanData.comments.messageColor =
                      "mdui-color-deep-orange-600"))
                  : ((ValjeanData.comments.message =
                      ValjeanLang.comment.success),
                    (ValjeanData.comments.messageColor =
                      "mdui-color-teal-500")),
                mdui.snackbar({
                  message: ValjeanData.comments.message,
                  position: "right-bottom",
                  onOpen: function () {
                    document
                      .querySelector(".mdui-snackbar")
                      .classList.add(ValjeanData.comments.messageColor);
                  },
                });
            } else
              mdui.snackbar({
                message:
                  "评论失败！<br>原因：[" +
                  $$(Obj)[0].querySelector(".container").innerHTML +
                  "]",
                position: "right-bottom",
                onOpen: function () {
                  document
                    .querySelector(".mdui-snackbar")
                    .classList.add("mdui-color-red-400");
                },
              }),
                afterComment(!1);
          },
          error: function (xhr, status, error) {
            mdui.snackbar({
              message: "评论提交失败！<br>原因 [HTTP " + xhr.status + "]",
              position: "right-bottom",
              onOpen: function () {
                document
                  .querySelector(".mdui-snackbar")
                  .classList.add("mdui-color-red-400");
              },
            }),
              afterComment(!1);
          },
        });
    },
    bindReplyBtn: function () {
      if (!$$("#comments")[0]) return !1;
      if (
        ((ValjeanData.comments.replyTo = ""), !$$(".lll-comments-reply a")[0])
      )
        return !1;
      for (let i = 0; i < $$(".lll-comments-reply a").length; ++i)
        $$(".lll-comments-reply a")[i].addEventListener("click", function () {
          ValjeanData.comments.replyTo = $$(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .attr("id");
        });
      $$(".lll-comment-card-btns a")[0].addEventListener("click", function () {
        ValjeanData.comments.replyTo = "";
      });
    },
  },
  ValjeanFSA = {
    create: function () {
      if (!ValjeanConfig.switch.FSA || !ValjeanConfig.setting.FSA.content)
        return !1;
      if (
        !ValjeanConfig.switch.pjax &&
        "true" == ValjeanLib.getCookie("FSAreaded")
      )
        return !1;
      ValjeanConfig.switch.pjax ||
        ValjeanLib.setCookie("FSAreaded", "true", !1, "/");
      var message = ValjeanConfig.setting.FSA.content,
        textColor = ValjeanConfig.setting.FSA.textColor,
        background = ValjeanConfig.setting.FSA.background,
        position = ValjeanConfig.setting.FSA.position,
        buttonColor = ValjeanConfig.setting.FSA.buttonColor,
        timeout =
          "number" == typeof Number(ValjeanConfig.setting.FSA.timeout)
            ? ValjeanConfig.setting.FSA.timeout
            : 0,
        buttonText =
          ValjeanConfig.setting.FSA.buttonSwitch &&
          ValjeanConfig.setting.FSA.buttonText
            ? ValjeanConfig.setting.FSA.buttonText
            : "";
      mdui.snackbar({
        message: message,
        position: position,
        timeout: timeout,
        buttonText: buttonText,
        buttonColor: buttonColor,
        onOpen: function () {
          var snackbar = document.querySelector(".mdui-snackbar");
          (snackbar.style.backgroundColor = background),
            (snackbar.style.color = textColor),
            document
              .querySelector(".mdui-snackbar .mdui-snackbar-action")
              .setAttribute("no-go", ""),
            document
              .querySelector(".mdui-snackbar .mdui-snackbar-action")
              .setAttribute("no-pjax", "");
        },
      });
    },
  },
  ValjeanLib = {
    getCookie: function (name) {
      for (
        var name = name + "=", ca = document.cookie.split(";"), i = 0;
        i < ca.length;
        i++
      ) {
        var c = ca[i].trim();
        if (0 == c.indexOf(name)) return c.substring(name.length, c.length);
      }
      return !1;
    },
    setCookie: function (name, value, days, path) {
      if (!1 === days)
        document.cookie = name + "=" + value + ";path=" + path + ";";
      else {
        var exp = ValjeanData.date;
        exp.setTime(exp.getTime() + 24 * days * 60 * 60 * 1e3),
          (document.cookie =
            name +
            "=" +
            value +
            ";expires=" +
            exp.toGMTString() +
            ";path=" +
            path +
            ";");
      }
    },
    linkTarget: function () {
      $$('a:not([no-go]):not([target="_self"]):not(.toc-link)').each(
        function () {
          var href = $$(this).attr("href"),
            check;
          new RegExp(
            "^" + document.location.protocol + "//" + window.location.host
          ).test(href) || $$(this).attr("target", "_blank");
        }
      );
    },
    scrollClick: function () {
      for (
        let i = 0;
        i < $$('a[href*="#"]:not([no-pgo]):not(.toc-link)').length;
        ++i
      )
        $$('a[href*="#"]:not([no-pgo]):not(.toc-link)')[i].addEventListener(
          "click",
          function () {
            if (
              location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
              location.hostname == this.hostname
            ) {
              var $target = $$(this.hash);
              if (($target = $target.length && $target).length) {
                var targetOffset = $target.offset().top;
                return ValjeanTop.scrollSmoothTo(targetOffset), !1;
              }
            }
          }
        );
    },
    scrollPos: function () {
      if (
        ((window.onbeforeunload = function () {
          var scrollPos;
          void 0 !== window.pageYOffset
            ? (scrollPos = window.pageYOffset)
            : void 0 !== document.compatMode &&
              "BackCompat" != document.compatMode
            ? (scrollPos = document.documentElement.scrollTop)
            : void 0 !== document.body && (scrollPos = document.body.scrollTop),
            (document.cookie = "scrollTop=" + scrollPos);
        }),
        null != document.cookie.match(/scrollTop=([^;]+)(;|$)/))
      ) {
        var arr = document.cookie.match(/scrollTop=([^;]+)(;|$)/);
        (document.documentElement.scrollTop = parseInt(arr[1])),
          (document.body.scrollTop = parseInt(arr[1]));
      }
    },
    reload: function () {
      var script = document.createElement("script");
      (script.innerHTML = "window.location.reload(false);"),
        setTimeout(function () {
          $$("body").append(script);
        }, 1e3);
    },
    rmToolTip: function () {
      var tooltips;
      $$(".mdui-tooltip").remove();
    },
  },
  ValjeanTop = {
    gotoTopBtn: function () {
      var height =
          document.documentElement.scrollTop || document.body.scrollTop,
        bottomHeight =
          document.documentElement.scrollHeight -
          document.documentElement.scrollTop -
          document.documentElement.clientHeight;
      height > 300 && bottomHeight > 100
        ? this.topBtn("display")
        : this.topBtn("hidden");
    },
    topBtn: function (method) {
      "hidden" == method
        ? $$("#go-top")[0].classList.add("mdui-fab-hide")
        : $$("#go-top")[0].classList.remove("mdui-fab-hide");
    },
    gotoTop: function (speed, rtime) {
      (rtime = rtime || 10), (speed = speed || 0.08);
      var x2 = 0,
        y2 = 0,
        x3 = 0,
        y3 = 0,
        y1 =
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          window.pageYOffset ||
          0,
        x1 =
          document.documentElement.scrollLeft ||
          document.body.scrollLeft ||
          window.pageXOffset ||
          0,
        x3 = window.scrollX || 0,
        y3 = window.scrollY || 0,
        x = Math.max(x1, Math.max(0, x3)),
        y = Math.max(y1, Math.max(0, y3)),
        speeding = 1 + speed;
      if (
        (window.scrollTo(Math.floor(x / speeding), Math.floor(y / speeding)),
        x > 0 || y > 0)
      ) {
        var run = "ValjeanTop.gotoTop(" + speed + ", " + rtime + ")";
        window.setTimeout(run, rtime);
      }
    },
    scrollSmoothTo: function (position) {
      window.requestAnimationFrame ||
        (window.requestAnimationFrame = function (callback, element) {
          return setTimeout(callback, 17);
        });
      var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop,
        step = function () {
          var distance = position - scrollTop;
          (scrollTop += distance / 20),
            Math.abs(distance) < 1
              ? window.scrollTo(0, position)
              : (window.scrollTo(0, scrollTop), requestAnimationFrame(step));
        };
      step();
    },
  };
if (
  (ValjeanCreate.BG(),
  ValjeanNight.check(),
  ValjeanCreate.Search(),
  ValjeanCreate.Sidebar(),
  ValjeanCreate.Header(),
  ValjeanCreate.Footer(),
  ValjeanCreate.btnGroup(),
  ValjeanCreate.gotoTopBtn(),
  ValjeanConfig.switch.toc && ValjeanCreate.tocBtn(),
  ValjeanCreate.tocSidebar(),
  ValjeanConfig.switch.pjax && ValjeanLib.scrollPos(),
  ValjeanConfig.switch.FSA && ValjeanFSA.create(),
  (needReload = function () {
    ValjeanConfig.switch.toc &&
      (ValjeanPostToc.toc(),
      (window.onload = function () {
        ValjeanPostToc.toc();
      })),
      ValjeanComments.Core(),
      ValjeanLib.linkTarget(),
      ValjeanComments.headimgAJAX(),
      ValjeanComments.bindReplyBtn(),
      ValjeanLib.scrollClick(),
      ValjeanPost.Lazyload(),
      ValjeanPost.baguetteBox(),
      ValjeanPost.toolbar(),
      ValjeanPost.showIndexPostTitle(),
      ValjeanPost.modifyPasswordStyle(),
      ValjeanPost.highLight(),
      ValjeanPost.deviceQR(),
      ValjeanConfig.switch.bangumi && bangumiLoad();
  }),
  needReload(),
  (document.onscroll = function () {
    ValjeanPost.toolbar(),
      ValjeanTop.gotoTopBtn(),
      $$(".lll-post-card #QRcode")[0] ||
        $$("#toolbar-device-btn").addClass("lll-device-btn-hidden");
  }),
  (window.onresize = function () {
    ValjeanPost.toolbar(),
      $$(".lll-post-card #QRcode")[0] ||
        $$("#toolbar-device-btn").addClass("lll-device-btn-hidden");
  }),
  ValjeanConfig.switch.pjax)
) {
  var pjax = new Pjax({
    elements:
      'a[href^="' +
      document.location.protocol +
      "//" +
      window.location.host +
      '/"]:not([target="_blank"]):not([no-pjax])',
    selectors: ["title", "#lll-pjax-content"],
    timeout: PjaxConfig.timeout,
    cacheBust: !1,
    scrollRestoration: !0,
  });
  document.addEventListener("pjax:send", function () {
    ValjeanConfig.switch.toc || tocbot.destroy(),
      NProgress.start(),
      (ValjeanData.scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset ||
        0);
  }),
    document.addEventListener("pjax:success", function () {
      mdui.mutation(), needReload(), ValjeanLib.rmToolTip();
    }),
    document.addEventListener("pjax:complete", function () {
      NProgress.done(), ValjeanPost.barTitle("remove"), PjaxConfig.after();
    }),
    document.addEventListener("pjax:error", function () {
      mdui.snackbar({
        message: ValjeanLang.pjax.error,
        position: "right-bottom",
        onOpen: function () {
          var snackbar;
          document
            .querySelector(".mdui-snackbar")
            .classList.add("mdui-color-red-400");
        },
      });
    });
}
console.log(
  " %c ✨ Valjean " +
    ValjeanConfig.ValjeanVersion +
    " %c By ohmyga | https://ohmyga.cn/ ",
  "color: #FFFFFF; background: #1E88E5; padding:6px;",
  "color: #FFFFFF; background: #424242; padding:6px;"
);
