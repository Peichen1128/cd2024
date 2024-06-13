var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/Peichen1128/cd2024 網站: https://peichen1128.github.io/cd2024/ 簡報: https://peichen1128.github.io/cd2024/reveal 網誌: https://peichen1128.github.io/cd2024/blog","tags":"misc","url":"./pages/about/"},{"title":"w13日誌","text":"課程評分 w13 如何改成3.7.1的方法 照著老師第一個影片去操作 我們經常提起 Windows 64 位元操作系統環境下的所謂可攜程式系統, 其時主要的考量是希望所開發的工具不僅能在 Microsoft Windows 環境中使用, 同時也能在 Linux (這裡指 Ubuntu 操作系統) 以及 macOS (BSD 系統) 中執行. 無論是 Portable_2024.7z 或者最新釋出專用於 NX1872(2019.06 釋出, 目前已經不再更新) 用來開發 NXOpen Python 程式的可攜環境: Python_for_NX1872.7z, 都是在這樣的架構下產生. 由於數位裝置與網路的無所不在, 產品設計工程師必須能在任何地方進行輔助設計與內容管理, 更重要的是過程中所產生的數位資料必須儘可能在產品生命週期間放置在保全度較高的設備中, 於是對於面對手機、平板與電腦前面的工程師, 必須能將數位資料送到近端環境與雲端環境中的資料中心. 另外一個重點是, 隨著 AI 工具的普及, 雲端產品協同設計將成為主流, 各項系統設計與應用將逐一結合近端與雲端裝置, 成為無所不在的設計整合環境, 因此工程師除了應用既有的輔助設計套件外, 還要學習如何打造自己團隊使用的協同產品設計工具, 以下為兩個簡單的範例: http://229.cycu.org:9447/?semester=1121&classid=設二甲 可以從教務主機擷取各學年的班級課表, 程式碼位於 nfulist_v2_2024.py, 此套件可以用於機械產品開發過程, 透過雲端程式即時擷取在設計運算或參數選擇時, 動態從其他零組件協同供應商或設計便覽伺服器中擷取所需的資料. http://229.cycu.org:88 則是一個線上多人猜數字遊戲, 採用 Python 與 Javascript 結合 WebSocket 編寫, 使用者輸入姓名後, 可以同步參與多人猜數字遊戲, 每一階段各用戶只能最多猜 10 次, 每一輪優勝者可得一分. 程式碼位於 guess_game_server.py 與 guess_game.html. 前面所提到的所謂可攜程式系統, 每一個套件都是使用者可以自行建立或下載的工具, 以下將逐一介紹: Python 解譯系統 利用 gen_py3123_portable.py 在上列舊版的 Python 可攜環境執行, 可在 C:\\tmp 建立最基本的可攜 Python3123 程式目錄. 若將 Python3123 放入先前舊版的可攜 Python371 data 目錄中, 且配合建立 start_ipv6_py3123.bat, 則可以將 Python 3.7.1 版的可攜 Python 升級為 Python 3.12.3 版. 以下影片說明如何從 Python 3.7.1 加入可攜的 Python 3.12.3 版: 但是利用上述流程所建立的 Python 3.12.3 版可攜程式並沒有 pip, 必須啟動 start_ipv6_py3123.bat 後, 在命令列執行 python get-pip.py 才能在可攜系統安裝 pip, 安裝 pip 後, 可以在命令列中以 pip list 查驗目前所安裝的 Python 模組. 前述之所以要在啟動可攜之後的命令列執行 get-pip.py 的原因是, pip.exe 會將執行時的 Python 解譯器位置直接寫入二位元檔案中, 若使用 Pythonw.exe, 所建立的 pip.exe 就只能在 Windows 圖形介面中使用, 因此, 為了讓可攜系統的 pip.exe 能夠在命令列中使用, 必須在執行 get-pip.py 時採用 Python.exe. 其次, 用於 Siemens NXOpen Python 開發用的 版本, 必須配合各 NX 版本編譯其 NXOpen 動態連結程式庫所使用的 Python 版本, 以 NX1872 而言, 必須對應使用 Python 3.7.1 相容版本. 而 NX1980 則必須使用 Python 3.8.8 相容版本, NX2008 與 NX2027 則配合使用 Python 3.8.12 相容版本, NX2206 與 NX2312 必須使用 Python 3.10.4 與 Python 3.10.12 相容版本. Git 可以自行從 https://git-scm.com/download/win 下載 64 位元 Portable 版本. CoppeliaSim 可以自行從 https://www.coppeliarobotics.com/#download 下載, 舊版本則可從 https://www.coppeliarobotics.com/previousVersions 下載. Putty 可以自行從 https://www.putty.org/ 下載. ShareX 可以自行從 https://github.com/ShareX/ShareX/releases 下載. Tiny C Compiler 可以自行從 https://bellard.org/tcc/ 下載. Solvespace 可以自行從 https://solvespace.com/download.pl 下載. SCiTE 可以自行從 https://www.scintilla.org/SciTEDownload.html 下載. Zoomit 可以自行從 https://learn.microsoft.com/en-us/sysinternals/downloads/zoomit 下載. Process Explorer 可以自行從 https://learn.microsoft.com/en-us/sysinternals/downloads/process-explorer 下載. Wink 可以自行從 https://www.debugmode.com/wink.html 下載. MSYS2 可以自行從 https://www.msys2.org/ 下載. NX1872 相關下載 Siemens NX1872.7z (需要登入 @nfu.edu.tw) NX1872 的動態連結程式庫採 Python 3.7.1 版本編譯, 以下可攜 Python 3.7.1 採用 gen_py3123_portable.py 結合 get-pip.py 建立. 可與上列可攜式 NX1872 結合用來開發協同產品設計程式套件. 專用於 NX1872 用來開發 NXOpen Python 程式的可攜環境: Python_for_NX1872.7z 各週指定任務 cd2024 協同產品設計實習課程專案的內容, 主要延續 CAD2023 課程重點, 然後再透過分組, 利用 Odoo PLM 相關文獻閱讀與應用作為協同產品開發流程的參考, 實際進行鋼球平衡台與綜合球賽機器人模擬系統的協同設計. 各週指定任務如下: 個人 cd2024 與分組倉儲的建立及維護. 各分組註冊一個 Odoo 帳號, 選用免費的 PLM 模組, 取得各分組的產品生命週期管理系統網域, 並將參考論文的協同翻譯流程作為工作項目, 在各分組的 PLM 網域系統中留下任務分配與紀錄, 最終產出為一份參考論文的中英文翻譯並列 pdf 檔案, 其中包含各組員的心得報告. 指定在參考論文的翻譯與閱讀過程, 將各組員的 cd2024 課程倉儲納為分組倉儲的子模組, 可以將各組員倉儲中的 LaTeX 原始資料, 整合至分組倉儲中, 採 Github Actions 或近端使用 MikTeX 建立分組的參考論文閱讀報告 pdf 檔案(教學). 要求各分組採協同方式, 在各教學影片上填上字幕並嵌入個人網站, 分工整理影片逐字稿與教學重點, 最後完成期中自評, 在期中考週將自評成績送至教務處. 要求下載 Siemens NX 1872 至個人隨身碟或電腦 (含筆電), 後續專案系統的零組件繪圖可採電腦輔助設計室固態硬碟所安裝的 NX1872 或隨身碟中的可攜系統, 必須透過連網取得認證後才能開啟. 提醒 CoppeliaSim 不同版本中存檔上的差異, 並強調 cd2024 將沿用 cad2023 課程中所使用的 4.5.1 版. 提示 各分組可以利用可攜式 Sourcetree 套件, 在近端充分了解個人倉儲與分組倉儲的各種改版或解決衝突議題. 在第七週摘要出 cd2024 各項分組協同模式的要點及執行方法. 在第八週說明如何應用 AI 協助先前閱讀論文, 整理資料以及延伸模擬程式的方法, 並提出既存鋼球平衡台控制與模擬的實習步驟. 第十週起, 要求學員完成三項實習任務. (建立倉儲與網站連結、PID 控制文獻整理、NX 平台零組件繪圖) 第十二週的三項實習任務 (NXOpen 零組件繪製、分組倉儲設為評分倉儲子模組、足球機器人場景模擬). 課程評分: 學員每週編寫網誌內容佔 40% 每週上課內容摘要與分組報告執行分工及進度整理 相關資料收集與閱讀心得 分組期中報告佔 20% 分組期中 pdf 報告與 mp4 簡報影片 每組至多 8 人 期中報告題目: ODOO PLM 在協同產品設計上的應用 - 以鋼球平衡台機電控制系統設計為例 分組期末報告佔 40% 分組期末 pdf 報告與 mp4 簡報影片 期末報告題目: 網際綜合球類競賽機器人協同設計與模擬 競技場景中必須納入數位計時器與類比記分機構 每場競技時間為 10 分鐘 每隊球員機器人依照各組人數平均分為兩隊 每位機器人球員必須同時具備踢球、取球與投球機構 雙方陣營各有足球門與籃球框各一具 球場中由裁判程式於開場時, 在球場正中央落下 10 球 將球踢進對方球門者得 1 分, 將球投入對方籃框者得 5 分 參考資料: https://github.com/mdecd2024/test-ag1 https://github.com/mdecd2023/2a3-pj3ag4 https://mde.tw/cd2024/downloads/cad2024_foosball.7z https://mde.tw/pj4102 球場參考規格: 競技球: 白色, 直徑 0.1m, 重量 0.5kg 場地: 長 4m x 寬 2.5m, 外圍以足夠高度之隱形柵欄區隔 足球門: 長 0.6m, 高 0.3m, 寬 0.1m 籃板: 長 0.3m, 高 0.3m, 寬 0.1m, 位於足球門上方中央 籃框: 由籃板向場內距離 0.1m, 內徑 0.2m, 框管直徑 0.02 球員尺寸範圍: 長寬高各 0.2m, 重量 5kg 根據上述球場參考尺寸規格建置場景下載: soccer field image from public domain. 模擬場景建構 利用 Solvespace 與 Siemens NX 完成鋼球平衡台零組件繪製後, 將組立件轉為 STL. 從 Solvespace_model _2d_for_cd2024_w6.7z 可知其零件採 mm 單位繪圖, 其平台底座尺寸為 120mm x 120mm. 至於 CoppeliaSim 內建場景中的每一個 Tile 方塊為 50cmx50cm. 因為 Solvespace 內建的 Export Scale Factor 為 1:1=mm, 表示 STL 中 export 的數字為 mm, 因此若將 Solvespace 中 120mmx120mm 的 STL 平台, 以 1:1 直接 import 進入 CoppeliaSim, 將會得到 120mx120m 的龐然大物. 若採 Auto Scale (此處會將 120 縮小 100 倍, 也就是採 0.01 作為 Scale) import 進入 CoppeliaSim, 則會採 cm 作為單位, 得到一組 120cmx120cm 的鋼球平衡台. 至於進入場景後的座標, 以 Solvespace 中的零件繪圖, 其 Y 軸向上, 因此在導入 CoppeliaSim 時, 必須選擇 Y 軸向上. 若採 Siemens NX 進行零組件繪圖的轉入考量, 與上述 Solvespace 零組件相同. 建立球員, 必須先在 CAD 決定尺寸, 以及轉入 CoppeliaSim 時, 將採用的向上座標軸, 以及縮放比例: 以 Solvespace 以及 Siemens NX 為例, 若將球員的設計空間, 設定為 200mm x 200mm x 200mm 且採用 Z 軸向上, 縮小比例為 0.001, 則轉入以 m 為單位的 CoppeliaSim 場景, 則得到正確的 0.2m x 0.2m x 0.2m 的目標空間. 另外, 籃框高度為 0.4m, 因此球員若需採拋球或頂球, 必須設法將球提高至少達到 0.4m 加上 0.1m (球尺寸) 的高度, 才能觸動籃框中的感測器得分. 在 CoppeliaSim Divide 組立件 將鋼球平衡台組立件轉入 CoppeliaSim 的步驟為選擇 File - Import - Mesh, 然後根據上述說明選擇 Scale 以及針對場景向上的座標, 當使用 Solvespace 鋼球平衡台組立件轉入時, 因應 12cmx12cm 的底座希望轉為 1.2mx1.2m 的模擬平台, 因此 Scale 選擇將 120mmx120mm 的 120 數字縮小100 倍(也就是 Scale 為 0.01), 輸入後, 將會得到 1.2mx1.2m的平台底座. 由於 CoppeliaSim 4.5.1 rev4 當採 STL 組立件轉入場景後, 其組立件為一體, 也就是全部被視為一個整體零件. 為了進行後續組立, 可以使用 Edit - Shape Grouping/Merging 中的 Divide 功能, 將各零件分開. 只是 4.5.1 版將組立件 Divide 後, 所有的零件將擁有絕對的共同座標系(因為可以採用程式方法進行零組件的重組與定位), 但各零件均以共同座標為原點, 對於後續手動組立與操控較為不便, 因此可以再利用 Edit - Shape Reference Frame 中的 relocate to mesh center 將各零件的參考座標從共同的絕對座標系, 轉到各自的零件重心位置. 另外, 因為採 Solvespace 繪製的鋼球平衡台, 並沒有繪製各機構(四連桿)連接軸, 因此將零組件導入 CoppeliaSim 後, 必須利用夠深的孔, 在 Shape Editor 模式下建立各連接孔的對應軸, 後續才能將轉動軸元件與新建的連接軸位置與方位進行定位. 利用零件 Hole 產生對應 Cylinder 元件 利用夠深的零件孔壁中的各節點, 可以在 Shape Editor 模式下建立 Cylinder 元件, 其步驟如下: 選擇帶有 Hole (可能必須夠深) 的零件. 利用 CoppeliaSim 左側的 Shape Editor 按鈕, 將場景轉換為 Shape Editor 模式. 利用滑鼠中鍵滑動, 將場景正對所要生成 Cylinder 元件的孔位置, 然後利用滑鼠中間的滾輪將孔儘量拉近. 利用滑鼠左鍵將 Shape Editor 出現的內建視窗, 從 Triangle edit mode, 轉為 Vertex edit mode, 然後左手按住 Shift, 右手滑鼠左鍵按下後, 從左上至右下的位置涵蓋整個孔的位置. 將 Shape Editor 模式的 Vertex edit mode 切回 Triangle edit mode, 然後利用 Extract Clinder 功能, 針對上列步驟所選到的 Vertex(圓孔的內壁點座標) 作為依據, 建立一個圓柱體 (Cylinder) 元件. 關閉 Shape Editor 內建表單視窗後, 選擇 Yes 或 No 都可完成上述從孔的內壁點座標生成圓柱體的步驟.","tags":"w13","url":"./2024-w13-week-diary.html"},{"title":"w12日誌","text":"利用 NX 1872 繪製鋼球平衡台所需的零組件, 將各分組倉儲設為評分倉儲的子模組, 跨網路操控模擬場景裝置 w12 實習任務1: 請參考上列教學影片與參考程式, 將鋼球平衡台零組件的繪製與組立任務分配給組員, 由組員分別繳交至少一份零件繪製的 NXOpen Python 程式, 以及至少一份零件組立的 NXOpen Python 程式, 完成後, 請在個人的課程網誌紀錄 w12 實習任務一的執行心得. 零件1 零件2 繪製影片 組合影片1 組合影片2 實習任務2: 各班評分倉儲的各組子模組設定完成後, 可以設法依照先前各組整合分組 LaTeX 報告與分組網誌的方法, 整合全班各組項下各學員的網誌文章 (.html 格式) 與執行專案報告 (.pdf 格式) 實習任務3: 跨網路操控足球機器人進行競技，請各組從 https://github.com/mdecd2023/2a3-pj3ag4 下載該組當時所完成的倉儲資料, 並參考網際手足球機器人場景設計專案報告, 由各組員分別擔任場景競技球員, 利用鍵盤跨網路操控足球機器人進行球賽競技. 成果影片","tags":"w12","url":"./2024-w12-week-diary.html"},{"title":"w11日誌","text":"利用 NX 1872 繪製鋼球平衡台所需的零組件 w11 零件繪製過程","tags":"w11","url":"./2024-w11-week-diary.html"},{"title":"w10日誌","text":"延續上週 w10 W10 起 Replit 已經可以用來維護分組倉儲 Replit 帳號維護分組倉儲 建立各班學員的倉儲、網站與分組連結 這是 W10 實習的任務一: 已知: 2b 初步資料放入數列 可以將 2b.txt 即時資料取出, 並且將每一行隔開後, 逐一放入數列. 後續處理: 只要透過 for 重複迴圈, 就可以從上列資料中每位學員的基本資料 (學號、Github 帳號與組別) 中直接在網頁建立所需的 html. 學員倉儲連結 template: https://github.com/學員帳號/cd2024 學員網站連結 template: https://學員帳號.github.io/cd2024 2b 分組倉儲連結 template: https://github.com/mdecd2024/2b-midbg組別 2a 分組倉儲連結 template: https://github.com/mdecd2024/2a-midag組別 處理結果: 列出 2b 各學員評分相關網站 列出 2a 各學員評分相關網站 鋼球平衡台 PID 控制與模擬 這是 W10 實習的任務二: 請下載 cd2024_ball_balancing_platform_control_ref.7z, 閱讀後請將摘要內容放入個人與分組網誌中. 各篇論文要點摘要： 論文一：Construction and theoretical study of a ball balancing platform 探討自動控制理論在穩定動態系統時的局限性，以球體平衡平台為例。 建立球體平衡平台的理論模型，並與實際搭建的平台進行比較。 分析理論與實際結果之間的差異，探討控制理論與系統實施的挑戰。 結論： 線性控制可以實現球體平衡平台的良好性能，但存在靜態誤差。 理論與實際結果的差異主要來自於物理模型的誤差和電子元件的非理想特性。 穩定動態系統的性能受限於狀態調整的靈活性、控制器設計和輸入數據的準確性。 論文二：A real time control system for balancing a ball on a platform with FPGA parallel implementation 提出基於 PID 控制器的解決方案，以提高球體在平台上的位置調節精度。 使用 FPGA 實現平行計算，以提高系統速度和性能。 開發球體平衡平台的轉移函數，並合成 PID 控制器。 結論： 透過 FPGA 平行計算實現的 PID 控制器能有效提高球體位置調節精度。 該方案可應用於控制具有多個參數的高速物件。 論文三：Simulation and Experimental Study of Ball Position Control at Biaxial Platform using State Space Approach 設計和比較三種控制結構，用於自動穩定球體在平台上的位置和軌跡追踪：PD 控制器、狀態空間反饋和帶狀態空間回饋的狀態空間觀測器。 使用牛頓法推導球體平衡平台的數學模型，並設計直流電機位置迴路控制。 結論： 三種控制結構均能實現穩定控制，但狀態空間觀測器具有最佳性能。 該研究建立了一個教育平台，用於向非技術人員解釋基本控制系統原理。 論文四：Design and Implementation a Ball Balancing System for Control Theory Course 開發一個球體平衡系統，使用微控制器和控制演算法來調節球體在梁上的平衡。 利用超聲波傳感器獲取球體位置，並使用 PID 控制演算法調整梁的角度。 開發介面程式，將即時位置曲線繪製在 MATLAB 中。 結論： 球體平衡系統是一個低成本的教育工具，可用於教授控制理論的應用。 該系統允許學生將理論知識應用於實踐中，並了解封閉迴路回饋系統和 PID 演算法的原理。 論文五：Ball on the plate balancing control system 設計一個二自由度球體平衡實驗平台，用於測試和驗證平衡控制演算法。 使用電阻式觸摸屏獲取球體位置數據，使用步進電機和位置傳感器控制平台傾斜角度。 設計基於 AVR 微控制器的雙環下屬控制系統，使用 PID 控制器維持球體平衡。 結論： 該系統使用步進電機替代伺服電機，並無需外部電腦進行圖像處理，具有成本效益和易於控制的優勢。 未來計劃改進球體位置回饋信號的濾波，以提高控制系統的速度和品質。 論文六：2D Ball Balancer Control using QUARC 使用 QUARC 軟體設計和實現球體在二維平台上的位置控制。 設計 PD 和 PID 控制器，並探討設定點權重和積分器抗飽和等控制技術。 使用攝像頭讀取球體位置，並進行校準和轉換。 結論： PD 和 PID 控制器均能實現球體位置控制，但 PID 控制器在跟踪斜坡和正弦參考信號時具有更好的性能。 該實驗涵蓋了建模、控制器設計、模擬和實施等多個控制系統的關鍵步驟，為學生提供了寶貴的學習經驗。 接下來, 必須要設法了解, 哪一篇或哪幾篇論文對我們解決下列問題最有參考價值! 請從下列檔案中, 在個人與分組網站中說明從零組件繪圖、轉入 CoppeliaSim, 並透過 PID 控制後, 展示在不同的控制參數設定, 鋼球的 x 座標與 y 座標運動路徑圖. ball_beam_balancing_PID_control_coppeliasim_1d_and_2d_cd2024_w9.7z (password required to download) Solvespace_model _2d_for_cd2024_w6.7z 實習步驟: 開啟可攜程式系統中的 CoppeliaSim 開啟鋼球平衡台模擬場景 啟動可攜程式系統, pip install keyboard cbor pyzmq matplotlib 在 SciTE 中執行上列程式, 確定系統穩定後, 按下 q 終止模擬 matplotlib 將畫出鋼球在平台上的 x 與 y 座標圖 鋼球平衡台零組件繪圖 這是 W10 實習的任務三: 請根據 Solvespace_model _2d_for_cd2024_w6.7z 零組件尺寸, 利用 Siemens NX1872.7z (需要登入 @nfu.edu.tw, cd2024 採用電腦安裝的 NX1872 或隨身碟中的 NX1872) 執行零組件繪圖, 完成後請將過程影片放入個人與分組網站中.","tags":"w10","url":"./2024-w10-week-diary.html"},{"title":"w9日誌","text":"延續上週 w9","tags":"w9","url":"./2024-w9-week-diary.html"},{"title":"w8日誌","text":"藉由ChatGPT、Gemini 1.5 Pro 與 Claude 3 等AI協助 w8 協同資料處理 請各班各組根據 2a_cd2024_midterm.csv, 以及 2b_cd2024_midterm.csv 中的學號、Github 帳號與組別, 設法在各組員與分組網站中, 列出各學員的 cd2024 倉儲、網站, 以及各班各組的期中報告倉儲與網站連結. 1.取出資料放入數列 鋼球平衡台 PID 控制與模擬 請下載 cd2024_ball_balancing_platform_control_ref.7z, 閱讀後請將摘要內容放入個人與分組網誌中. 2.對 Gemini 1.5 Pro 提問: 以下為利用 PID 控制 CoppeliaSim 鋼球平衡台場景的 ZMQ RemoteAPI Python 程式, 請利用 Python 模組將系統控制過程, 鋼球在平衡台上的 x 方向座標與 y 方向, 利用 matplotlib 畫出來. \"這裡附上原本的 PID 控制程式碼\"","tags":"w8","url":"./2024-w8-week-diary.html"},{"title":"w7日誌","text":"清明連假 w7 清明連假","tags":"w7","url":"./2024-w7-week-diary.html"},{"title":"w6日誌","text":"自行作業分組工作 w6 分組工作 主要聽從組長安排","tags":"w6","url":"./2024-w6-week-diary.html"},{"title":"w5日誌","text":"公假未到課 w5 公假 跟學校 藝術中心 前往台中資訊圖書館參加開幕記者會，並擔任開幕司儀，該次展出主題為 前瞻機械主題展 。","tags":"w5","url":"./2024-w5-week-diary.html"},{"title":"w4日誌","text":"試用odoo w4 odoo 已申辦帳號，但還未了解其內容。","tags":"w4","url":"./2024-w4-week-diary.html"},{"title":"w3日誌","text":"何謂LaTeX w3 關於LaTeX 由於不知道何謂LaTeX，因此上網搜尋。 是一種基於TEX的排版系統，由美國電腦科學家萊斯利· 蘭伯特在20世紀80年代初期開發，利用這種格式系統的處理，即使使用者沒有排版和程式設計的知識也可以充分發揮由TEX所提供的強大功能，不必一一親自去設計或校對，能在幾天，甚至幾小時內生成很多具有書籍品質的印刷品生成複雜表格和數學公式，這一點表現得尤為突出。因此它非常適用於生成高印刷品質的科技和數學、物理文件。這個系統同樣適用於生成從簡單的信件到完整書籍的所有其他種類的文件。 P.S. 擷取至 維基百科","tags":"w3","url":"./2024-w3-week-diary.html"},{"title":"w2日誌","text":"利用 Github Classroom 進行協同分組，並建立分組倉儲 w2分組 利用 Github Classroom 指定分組倉儲 由於各分組網站從 Github Classroom 執行配置, 因此該倉儲位於 mdecd2024 帳號下, 雖然各組組員具備對此分組倉儲改版的權限, 但是若將分組倉儲 import 到 Replit, 因為其倉儲擁有者為 mdecd2024, 因此無法從 Replit accoount 項下進行授權, 但是可以利用 ssh-keygen 建立 .ssh 目錄下的 id_rsa 與 id_rsa.pub, 之後除了將公鑰送到 Github 之外, 還需要在 .ssh 目錄中建立 config, 且將倉儲 .git/config 中的 https 協定改為 SSH. 根據上述流程, 可以在 Replit 中以 SSH 模式取得對 Github 帳號下特定倉儲的改版全縣, 只不過 Replit 的免費帳號環境會不定時刪除 /home/runner/.ssh 目錄中的授權資料, 因此若要使用 Replit 維護從 Github Classroom 取得授權的分組倉儲, 必須使用程式方法配置 .ssh 中的 id_rsa 與 config 檔案. 範例分組倉儲: https://github.com/mdecd2024/test-ag1 利用 Codespaces 維護倉儲與網站 說明如何利用 Github Codespaces 維護網站內容 由於 Github Codespaces 免費帳號目前每月可以使用 120 core hours, 因此使用者可以選擇在 Github 倉儲中編輯 markdown 目錄中的網誌 .md 文章後, 只在需要利用 pelican 轉檔或啟動編輯 config/content.htm 與轉靜態網頁內容時, 才啟用 Codespaces. 如此可以最佳化使用 Codespaces 的免費 core hours. 在近端執行動態網站 說明如何利用近端可攜系統維護分組網站 建立分組倉儲後，發現有少部分人無法帳號連接，切確仍未找出。","tags":"w2","url":"./2024-w2-week-diary.html"}]};