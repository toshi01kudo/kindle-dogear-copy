// ==UserScript==
// @name         Kindle dogear copy
// @namespace    Kindle dogear copy
// @version      2024-09-05
// @description  To copy the highlighted sentense of kindle
// @author       Toshihito Kudo
// @match        https://read.amazon.co.jp/kp/notebook
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.co.jp
// ==/UserScript==

(function() {
    'use strict';

    // ボタン生成
    $(".kp-notebook-title").after(`<div id="js-copybtn" class="a-column a-span3 a-text-right a-spacing-top-mini a-span-last"><a class="btn btn-sm btn-light w-100 px-0">Copy Highlights</a></div>`);
    $(".kp-notebook-title").after(`<div id="js-copybtn2" class="a-column a-span3 a-text-right a-spacing-top-mini a-span-last"><a class="btn btn-sm btn-light w-100 px-0">Copy Highlights 2linebreaks</a></div>`);

    $('#js-copybtn').click(function(){
        // コピーする文章の取得
        const highlight_elems = $("[id=highlight]");
        const highlights = Object.values(highlight_elems);
        let highlight_text = "";
        for(let highlight of highlights) {
            if ($(highlight).text() == "") {
                console.log("loop stopped.");
                break;
            } else {
                highlight_text += $(highlight).text() + "\n";
            }
        }
        console.log(highlight_text);
        // テキストエリアの作成
        let clipboard = $('<textarea></textarea>');
        // テキストエリアに文章を挿入
        clipboard.text(highlight_text);
        //　テキストエリアを挿入
        $('body').append(clipboard);
        //　テキストエリアを選択
        clipboard.select();
        // コピー
        navigator.clipboard.writeText(highlight_text)
            .then(() => {
            console.log("Text copied to clipboard...")
        })
            .catch(err => {
            console.log('Something went wrong', err);
        })
        // テキストエリアの削除
        clipboard.remove();
        // アラート文の表示
        // alert('クリップボードにコピーしました');
    });
    $('#js-copybtn2').click(function(){
        // コピーする文章の取得
        const highlight_elems = $("[id=highlight]");
        const highlights = Object.values(highlight_elems);
        let highlight_text = "";
        for(let highlight of highlights) {
            if ($(highlight).text() == "") {
                console.log("loop stopped.");
                break;
            } else {
                highlight_text += $(highlight).text() + "\n\n";
            }
        }
        console.log(highlight_text);
        // テキストエリアの作成
        let clipboard = $('<textarea></textarea>');
        // テキストエリアに文章を挿入
        clipboard.text(highlight_text);
        //　テキストエリアを挿入
        $('body').append(clipboard);
        //　テキストエリアを選択
        clipboard.select();
        // コピー
        navigator.clipboard.writeText(highlight_text)
            .then(() => {
            console.log("Text copied to clipboard...")
        })
            .catch(err => {
            console.log('Something went wrong', err);
        })
        // テキストエリアの削除
        clipboard.remove();
        // アラート文の表示
        // alert('クリップボードにコピーしました');
    });
})();
