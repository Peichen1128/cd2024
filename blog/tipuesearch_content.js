var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/Peichen1128/cd2024 網站: https://peichen1128.github.io/cd2024/ 簡報: https://peichen1128.github.io/cd2024/reveal 網誌: https://peichen1128.github.io/cd2024/blog","tags":"misc","url":"./pages/about/"},{"title":"w11日誌","text":"利用 NX 1872 繪製鋼球平衡台所需的零組件 w11 零件繪製過程","tags":"w11","url":"./2024-w11-week-diary.html"},{"title":"w10日誌","text":"延續上週 w10 W10 起 Replit 已經可以用來維護分組倉儲 Replit 帳號維護分組倉儲 建立各班學員的倉儲、網站與分組連結 這是 W10 實習的任務一: 已知: 2b 初步資料放入數列 可以將 2b.txt 即時資料取出, 並且將每一行隔開後, 逐一放入數列. 後續處理: 只要透過 for 重複迴圈, 就可以從上列資料中每位學員的基本資料 (學號、Github 帳號與組別) 中直接在網頁建立所需的 html. 學員倉儲連結 template: https://github.com/學員帳號/cd2024 學員網站連結 template: https://學員帳號.github.io/cd2024 2b 分組倉儲連結 template: https://github.com/mdecd2024/2b-midbg組別 2a 分組倉儲連結 template: https://github.com/mdecd2024/2a-midag組別 處理結果: 列出 2b 各學員評分相關網站 列出 2a 各學員評分相關網站 鋼球平衡台 PID 控制與模擬 這是 W10 實習的任務二: 請下載 cd2024_ball_balancing_platform_control_ref.7z, 閱讀後請將摘要內容放入個人與分組網誌中. 各篇論文要點摘要： 論文一：Construction and theoretical study of a ball balancing platform 探討自動控制理論在穩定動態系統時的局限性，以球體平衡平台為例。 建立球體平衡平台的理論模型，並與實際搭建的平台進行比較。 分析理論與實際結果之間的差異，探討控制理論與系統實施的挑戰。 結論： 線性控制可以實現球體平衡平台的良好性能，但存在靜態誤差。 理論與實際結果的差異主要來自於物理模型的誤差和電子元件的非理想特性。 穩定動態系統的性能受限於狀態調整的靈活性、控制器設計和輸入數據的準確性。 論文二：A real time control system for balancing a ball on a platform with FPGA parallel implementation 提出基於 PID 控制器的解決方案，以提高球體在平台上的位置調節精度。 使用 FPGA 實現平行計算，以提高系統速度和性能。 開發球體平衡平台的轉移函數，並合成 PID 控制器。 結論： 透過 FPGA 平行計算實現的 PID 控制器能有效提高球體位置調節精度。 該方案可應用於控制具有多個參數的高速物件。 論文三：Simulation and Experimental Study of Ball Position Control at Biaxial Platform using State Space Approach 設計和比較三種控制結構，用於自動穩定球體在平台上的位置和軌跡追踪：PD 控制器、狀態空間反饋和帶狀態空間回饋的狀態空間觀測器。 使用牛頓法推導球體平衡平台的數學模型，並設計直流電機位置迴路控制。 結論： 三種控制結構均能實現穩定控制，但狀態空間觀測器具有最佳性能。 該研究建立了一個教育平台，用於向非技術人員解釋基本控制系統原理。 論文四：Design and Implementation a Ball Balancing System for Control Theory Course 開發一個球體平衡系統，使用微控制器和控制演算法來調節球體在梁上的平衡。 利用超聲波傳感器獲取球體位置，並使用 PID 控制演算法調整梁的角度。 開發介面程式，將即時位置曲線繪製在 MATLAB 中。 結論： 球體平衡系統是一個低成本的教育工具，可用於教授控制理論的應用。 該系統允許學生將理論知識應用於實踐中，並了解封閉迴路回饋系統和 PID 演算法的原理。 論文五：Ball on the plate balancing control system 設計一個二自由度球體平衡實驗平台，用於測試和驗證平衡控制演算法。 使用電阻式觸摸屏獲取球體位置數據，使用步進電機和位置傳感器控制平台傾斜角度。 設計基於 AVR 微控制器的雙環下屬控制系統，使用 PID 控制器維持球體平衡。 結論： 該系統使用步進電機替代伺服電機，並無需外部電腦進行圖像處理，具有成本效益和易於控制的優勢。 未來計劃改進球體位置回饋信號的濾波，以提高控制系統的速度和品質。 論文六：2D Ball Balancer Control using QUARC 使用 QUARC 軟體設計和實現球體在二維平台上的位置控制。 設計 PD 和 PID 控制器，並探討設定點權重和積分器抗飽和等控制技術。 使用攝像頭讀取球體位置，並進行校準和轉換。 結論： PD 和 PID 控制器均能實現球體位置控制，但 PID 控制器在跟踪斜坡和正弦參考信號時具有更好的性能。 該實驗涵蓋了建模、控制器設計、模擬和實施等多個控制系統的關鍵步驟，為學生提供了寶貴的學習經驗。 接下來, 必須要設法了解, 哪一篇或哪幾篇論文對我們解決下列問題最有參考價值! 請從下列檔案中, 在個人與分組網站中說明從零組件繪圖、轉入 CoppeliaSim, 並透過 PID 控制後, 展示在不同的控制參數設定, 鋼球的 x 座標與 y 座標運動路徑圖. ball_beam_balancing_PID_control_coppeliasim_1d_and_2d_cd2024_w9.7z (password required to download) Solvespace_model _2d_for_cd2024_w6.7z 實習步驟: 開啟可攜程式系統中的 CoppeliaSim 開啟鋼球平衡台模擬場景 啟動可攜程式系統, pip install keyboard cbor pyzmq matplotlib 在 SciTE 中執行上列程式, 確定系統穩定後, 按下 q 終止模擬 matplotlib 將畫出鋼球在平台上的 x 與 y 座標圖 鋼球平衡台零組件繪圖 這是 W10 實習的任務三: 請根據 Solvespace_model _2d_for_cd2024_w6.7z 零組件尺寸, 利用 Siemens NX1872.7z (需要登入 @nfu.edu.tw, cd2024 採用電腦安裝的 NX1872 或隨身碟中的 NX1872) 執行零組件繪圖, 完成後請將過程影片放入個人與分組網站中.","tags":"w10","url":"./2024-w10-week-diary.html"},{"title":"w9日誌","text":"延續上週 w9","tags":"w9","url":"./2024-w9-week-diary.html"},{"title":"w8日誌","text":"藉由ChatGPT、Gemini 1.5 Pro 與 Claude 3 等AI協助 w8 協同資料處理 請各班各組根據 2a_cd2024_midterm.csv, 以及 2b_cd2024_midterm.csv 中的學號、Github 帳號與組別, 設法在各組員與分組網站中, 列出各學員的 cd2024 倉儲、網站, 以及各班各組的期中報告倉儲與網站連結. 1.取出資料放入數列 鋼球平衡台 PID 控制與模擬 請下載 cd2024_ball_balancing_platform_control_ref.7z, 閱讀後請將摘要內容放入個人與分組網誌中. 2.對 Gemini 1.5 Pro 提問: 以下為利用 PID 控制 CoppeliaSim 鋼球平衡台場景的 ZMQ RemoteAPI Python 程式, 請利用 Python 模組將系統控制過程, 鋼球在平衡台上的 x 方向座標與 y 方向, 利用 matplotlib 畫出來. \"這裡附上原本的 PID 控制程式碼\"","tags":"w8","url":"./2024-w8-week-diary.html"},{"title":"w7日誌","text":"清明連假 w7 清明連假","tags":"w7","url":"./2024-w7-week-diary.html"},{"title":"w6日誌","text":"自行作業分組工作 w6 分組工作 主要聽從組長安排","tags":"w6","url":"./2024-w6-week-diary.html"},{"title":"w5日誌","text":"公假未到課 w5 公假 跟學校 藝術中心 前往台中資訊圖書館參加開幕記者會，並擔任開幕司儀，該次展出主題為 前瞻機械主題展 。","tags":"w5","url":"./2024-w5-week-diary.html"},{"title":"w4日誌","text":"試用odoo w4 odoo 已申辦帳號，但還未了解其內容。","tags":"w4","url":"./2024-w4-week-diary.html"},{"title":"w3日誌","text":"何謂LaTeX w3 關於LaTeX 由於不知道何謂LaTeX，因此上網搜尋。 是一種基於TEX的排版系統，由美國電腦科學家萊斯利· 蘭伯特在20世紀80年代初期開發，利用這種格式系統的處理，即使使用者沒有排版和程式設計的知識也可以充分發揮由TEX所提供的強大功能，不必一一親自去設計或校對，能在幾天，甚至幾小時內生成很多具有書籍品質的印刷品生成複雜表格和數學公式，這一點表現得尤為突出。因此它非常適用於生成高印刷品質的科技和數學、物理文件。這個系統同樣適用於生成從簡單的信件到完整書籍的所有其他種類的文件。 P.S. 擷取至 維基百科","tags":"w3","url":"./2024-w3-week-diary.html"},{"title":"w2日誌","text":"利用 Github Classroom 進行協同分組，並建立分組倉儲 w2分組 利用 Github Classroom 指定分組倉儲 由於各分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH. 根據上述流程, 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版全縣, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案. 範例分組倉儲: https://github.com/mdecd2024/test-ag1 利用 Codespaces 維護倉儲與網站 說明如何利用 Github Codespaces 維護網站內容 由於 Github Codespaces 免費帳號目前每月可以使用 120 core hours, 因此使用者可以選擇在 Github 倉儲中編輯 markdown 目錄中的網誌 .md 文章後, 只在需要利用 pelican 轉檔或啟動編輯 config/content.htm 與轉靜態網頁內容時, 才啟用 Codespaces. 如此可以最佳化使用 Codespaces 的免費 core hours. 在近端執行動態網站 說明如何利用近端可攜系統維護分組網站 建立分組倉儲後，發現有少部分人無法帳號連接，切確仍未找出。","tags":"w2","url":"./2024-w2-week-diary.html"}]};