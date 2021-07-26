var $$ = mdui.JQ,
  CastleOwO = {
    toggle: function () {
      return (
        !!$$("#wmd-editarea #text")[0] &&
        ($$("#owoBox")[0] || this.create(),
        $$("#owoBox").hasClass("moe-owo-open")
          ? (this.close(), !0)
          : (this.open(), !0))
      );
    },
    open: function () {
      if (!$$("#owoBox")[0]) return !1;
      ($$("#owoBox")[0].style.display = "block"),
        $$("body").addClass("mdui-locked"),
        ($$("#moe-owo-overlay")[0].style.display = "block"),
        setTimeout(function () {
          $$("#owoBox")[0].classList.add("moe-owo-open"),
            $$("#moe-owo-overlay")[0].classList.add("moe-owo-overlay-open");
        }, 10);
    },
    close: function () {
      if (!$$("#owoBox")[0]) return !1;
      $$("#moe-owo-overlay")[0].classList.remove("moe-owo-overlay-open"),
        $$("#owoBox")[0].classList.remove("moe-owo-open"),
        setTimeout(function () {
          ($$("#owoBox")[0].style.display = "none"),
            ($$("#moe-owo-overlay")[0].style.display = "none"),
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
          '<header class="moe-owo-header">   <div class="moe-owo-header-title"><i class="mdui-icon material-icons">tag_faces</i></div>   <button class="mdui-btn mdui-btn-icon" onclick="CastleOwO.toggle();"><i class="mdui-icon material-icons">close</i></button>  </div>');
      var owoList = CastleConfig.setting.owoList;
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
                '" class="moe-owo-text-btn mdui-btn mdui-shadow-2" no-go no-pgo no-pjax>' +
                owoList[owoNum].content[i].text +
                "</a>";
          else
            owoTmps.owo +=
              '<div class="moe-owo-main-error">此表情包下并没有任何表情..</div>';
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
                '" class="moe-owo-emoji-btn mdui-btn mdui-shadow-2" no-pgo no-go no-pjax>' +
                owoList[owoNum].content[i].text +
                "</a>";
          else
            owoTmps.owo +=
              '<div class="moe-owo-main-error">此表情包下并没有任何表情..</div>';
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
                '" class="moe-owo-smallPicture-btn mdui-btn mdui-shadow-2" no-pgo no-go no-pjax>       <img src="' +
                owoList[owoNum].dir +
                owoList[owoNum].content[i].file +
                '" />      </a>';
          else
            owoTmps.owo +=
              '<div class="moe-owo-main-error">此表情包下并没有任何表情..</div>';
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
                '" class="moe-owo-picture-btn mdui-btn mdui-shadow-2" no-pgo no-go no-pjax>       <img src="' +
                owoList[owoNum].dir +
                owoList[owoNum].content[i].file +
                '" />      </a>';
          else
            owoTmps.owo +=
              '<div class="moe-owo-main-error">此表情包下并没有任何表情..</div>';
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
        '<main class="moe-owo-main mdui-dialog-content" >' +
        owoTmps.owo +
        "</main>"),
        (owoBox.innerHTML +=
          '<footer class="moe-owo-footer-tab">   <div class="mdui-tab mdui-tab-full-width" id="OwO-tab" mdui-tab>    ' +
          owoTmps.tab +
          "   </div>  </footer>"),
        $$("body").append(owoBox),
        mdui.mutation($$("#owoBox")),
        this.bindOwO();
      var owoOverlay = document.createElement("div");
      (owoOverlay.style.display = "none"),
        owoOverlay.setAttribute("id", "moe-owo-overlay"),
        (owoOverlay.onclick = function () {
          CastleOwO.toggle();
        }),
        $$("body").append(owoOverlay);
    },
    bindOwO: function () {
      if (!$$("#owoBox main.moe-owo-main a")[0]) return !1;
      for (
        let owoNum = 0;
        owoNum < $$("#owoBox main.moe-owo-main a").length;
        ++owoNum
      )
        $$("#owoBox main.moe-owo-main a")[owoNum].dataset.owo &&
          ($$("#owoBox main.moe-owo-main a")[owoNum].onclick = function () {
            CastleOwO.grin(
              $$("#owoBox main.moe-owo-main a")[owoNum].dataset.owo
            ),
              CastleOwO.toggle();
          });
    },
    grin: function (tag) {
      (tag = " " + tag + " "),
        (myField = $$("#wmd-editarea #text")[0]),
        document.selection
          ? (myField.focus(),
            (sel = document.selection.createRange()),
            (sel.text = tag),
            myField.focus())
          : this.insertTag(tag);
    },
    insertTag: function (tag) {
      (myField = $$("#wmd-editarea #text")[0]),
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
    addOwOBtn: function () {
      var editorBar = $$("#wmd-button-row");
      if (!editorBar[0]) return !1;
      editorBar.append(
        '<li class="wmd-spacer wmd-spacer1" id="wmd-spacer6"></li><li class="wmd-button" id="wmd-owo-button" style="margin-top: -3px;" title="插入表情" onclick="CastleOwO.toggle();"><i class="mdui-icon material-icons" style="width: 20px;height: 20px;font-size: 20px;font-weight: bolder;color: rgba(66,66,66,0.8)">sentiment_very_satisfied</i></li>'
      );
    },
  };
