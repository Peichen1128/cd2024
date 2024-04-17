var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁:\xa0 https://peichen1128.github.io/cd2024/ \n 網誌:\xa0 https://peichen1128.github.io/cd2024/blog/ \n 簡報: https://peichen1128.github.io/cd2024/reveal/ \n 倉儲:\xa0 https://github.com/Peichen1128/cd2024 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': '上課影片字幕', 'text': '3-cd2024 2b 3 如何設定 Github 帳號的雙重認證 3.mp4 \n', 'tags': '', 'url': '上課影片字幕.html'}, {'title': '逐字稿', 'text': 'OK 好所以雙重認證啊其實就是 你在電腦上要登錄的話 哦比方說我這個之所以能夠登錄啊 我是已經通過他的雙重認證 所以你要設定的話你你必須要登錄到github 我就第一次當然不可能雙重認證了 然後你進來之後要趕快跑到這個賬號賬號的設定區 然後找到他的這個密碼跟認證這個項目 啊這個password是密碼嗎 authentication是認證了 好然後你等下點進來 他內建底下這邊呢他這個應該是沒有啓動的 雙重啊雙重認證 然後你給他啓動的話像我我是綁定 我這個是綁定到 我的手錶 假如你有智慧手錶跟手機可以連的話 你就可以安裝這個 只有這個是免費的 OK只有這個是免費 好那手機也可以安裝這個假如你要的話 你手機就 搜尋一下這個authy APP 然後你手機也可以用 OK 好那只有這個套件是免費可以 把那個密碼因爲你在像我在apple watch 我是可以把手機上的這個APP安裝在手錶上好 所以你就只要帶手錶不需要帶手機就這樣 好所以進到這裏面呢 我們假如讀一下 好因爲他這邊即便是簡體中文啊 他還是英文 所以你看他這邊怎麼講 他說從因爲我們上學期就知道了嗎 從2023的3月到年底 逐漸的開始強制所有用戶都必須要用雙重認證 哦所以你假如有以前舊的賬號一定記得要趕快設因爲他不知道什麼時候 他這裏啊給你45天吶 哦給你45天就你建賬號之後45天內 你一定要趕緊把他弄起來 沒有的話就進不去了 哦那舊賬號我就不曉得他的是怎樣 假如你的賬號因爲沒有雙重認證被鎖定啊 你只好重建 那重建的部分不能用原來的那個email就比較麻煩了 OK哦因爲他每一個email只能在這個github上登記一次 哦那他的使用就是除了連到這邊之外 他其實是利用 利用這個二維條碼了所以你只要看他下面的說明了 有沒有這個是我們剛剛講的賬號下的設定 然後選擇到密碼跟認證 好然後在這個區域 在這個區域 你點選說我要啓用雙重認證 OK假如說英文的話是啓用是enable 哦那你講 知道這個是啓用之後啊 他這邊就會出現一個二維條碼 所以這個二維條碼你就必須要用你的手機 打開你的mobile 意思就是github mobile裏面他會有一個 相機的選項 然後拍這個二維條碼 然後他就基本上他就會秀出 你可以輸入到geithub 數字就這樣 好然後一旦設好之後很重要的一點呢 好像這個就是二維條碼對吧 然後你設置完之後 很重要的一點呢你一定要下載這個回覆的這個字串 它叫做recovery codes 因爲萬一你的手機壞掉了 OK或者是你的手機不見 OK你你沒辦法用啊 哎這個時候你就要靠這個回覆碼來取回賬號 就這樣啊這個回覆嘛你要麼把它存在隨身碟 要麼把它同時送到你遠端的比較常用的電子郵箱 好那保證說 最後你萬一相關的設定都在手錶和手手機上都不見了 你還可以拿這一串哦它是一堆一堆這個編碼的數字 好加上字串 來取回你的這個賬號 而且你一定要把它下載 否則他是啊他上面會有一個選項 他說你存了之後啊你說我已經存我的回覆碼 好然後這個時候你才可以把兩段因爲他很害怕 萬一你的這個兩段式認證中間出問題的話 這個賬號形同是沒有任何人可以登錄 那你假如是付費的話你還可以請他幫你處理啊 也許打電話也許要保存你的這個賬號因爲你付費的他有認證嗎 啊你用信用卡或者用什麼樣式用什麼方式來付錢對吧 你說哎我我就是那個人 也許還可以拿回來但是因爲我們是免費的啊 免費賬號是沒有這個金流的部分 所以只靠這一個回覆碼來取回你的認證 OK好所以我們這個影片就可以把它存起來 \n', 'tags': '', 'url': '逐字稿.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};