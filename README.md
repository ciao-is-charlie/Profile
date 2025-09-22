個人化頁面使用說明書
歡迎使用！這份指南將引導您如何修改這個專案的各個部分，從頭像、標題到發佈至網路，讓您完全掌握您的個人頁面。

1. 如何更改頭像？
您的頭像圖片是整個頁面的視覺焦點。更改它非常簡單：

準備您的圖片 URL：首先，您需要將想更換的頭像圖片上傳到一個網路空間，並取得圖片的公開連結（URL）。您可以使用 Imgur、Postimages 等免費圖床服務，或是直接使用 Discord、Telegram 等通訊軟體上傳圖片後複製其連結。
打開 data.json 檔案：在專案檔案中找到 data.json。
找到 profile 區塊：在檔案的頂部，您會看到如下結構：
code
JSON
{
  "profile": {
    "name": "Charlie",
    "avatarUrl": "https://cdn.midjourney.com/42082cd4-64a9-460a-881a-1c6774a5d17b/0_0.png"
  },
  ...
}
替換 avatarUrl：將 "avatarUrl" 後面的舊圖片網址，替換成您在第一步準備好的新圖片 URL 即可。
2. 如何更改標題、字體與大小？
頁面中最醒目的標題文字也可以自由調整。

更改標題文字：
在 data.json 中，找到 profile 區塊裡的 "name" 欄位。
將 "Charlie" 修改為您想要顯示的任何文字。
更改字體：
尋找新字體：前往 Google Fonts 網站，挑選您喜歡的字體（建議選擇支援繁體中文的字體）。
取得字體連結：在選好字體後，複製 Google Fonts 提供的 <link> 標籤。
修改 index.html：
打開 index.html 檔案。
找到 <head> 區塊中的 Google Fonts 連結，用您剛剛複製的新連結取代它。
接著，在下方的 <script> 區塊中，找到 fontFamily 的設定，將新字體的名稱加入其中，例如：
code
JavaScript
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        'fleur': ['"Fleur De Leah"', 'cursive'], // 舊字體
        'new-font': ['"Your New Font Name"', 'sans-serif'], // 新增您的字體
      }
    }
  }
}
修改 App.tsx：
打開 App.tsx 檔案。
找到 <h1> 標籤，它會長得像這樣：<h1 className="... font-fleur ...">。
將 font-fleur 這個 class 改成您剛剛在 tailwind.config 中設定的新字體名稱，例如 font-new-font。
調整標題大小：
在 App.tsx 的同一個 <h1> 標籤中，您會看到一個 text-8xl 的 class。
8xl 代表字體的大小。您可以將它修改為 Tailwind CSS 提供的其他尺寸，例如 text-7xl (稍小) 或 text-9xl (更大)。
3. 如何更改背景配色？
您可以輕鬆更改整個頁面的主色調，打造不同的氛圍。

打開 index.html 檔案。
找到 <body> 標籤：您會看到 style="background-color: #0b0d1a;"。
修改背景色：將 #0b0d1a 這個十六進位色碼更換為您想要的任何顏色。您可以使用 HTML Color Picker 這類工具來尋找喜歡的顏色代碼。
同步卡片顏色（建議）：為了視覺一致性，建議您同時修改主卡片的背景色。
打開 App.tsx 檔案。
找到 <main> 標籤，在其 className 中找到 bg-[#0b0d1a]。
將這裡的色碼改成和 <body> 標籤相同的顏色。
4. data.json 教學
data.json 是整個網站的資料中心，所有顯示的文字和圖片都定義在這裡。理解它的結構後，您就可以輕鬆客製化所有內容。

profile: 個人檔案區塊。
name: 您的名字或標題。
avatarUrl: 您的頭像圖片連結。
socials: 社群連結陣列。
這是一個陣列 []，裡面可以放多個社群連結物件 {}。
每個物件包含 name (社群平台名稱，例如 "Threads"，這會對應到圖示) 和 url (您的個人頁面連結)。
您可以複製一個物件來新增連結，或刪除整個物件來移除連結。
bio: 個人簡介。
這是一段文字，您可以自由編輯。
如果想換行，請在需要換行的地方輸入 \n。
links: 連結卡片區塊陣列。
這是頁面下方的連結按鈕列表。
每個物件包含：
id: 一個不重複的數字即可。
title: 連結按鈕上顯示的標題。
url: 點擊後會前往的網址。
imageUrl: 按鈕左側的小圖示連結。
icon (可選): 如果設定為 "discord"，會在按鈕右側背景顯示一個大的 Discord 圖示。
characters: 角色介紹卡片陣列。
這是頁面最下方的角色卡片列表。
您可以複製一個角色物件 {} 來新增角色。
每個物件包含：
id: 一個不重複的數字。
imageUrl: 角色的圖片連結。
name: 角色名稱。
description: 角色簡介。
imagePosition: 圖片位置，可以是 "left" (靠左) 或 "right" (靠右)。
5. 如何使用 GitHub Pages 發布網站？
當您完成所有修改後，可以透過 GitHub Pages 免費將網站發布到網路上。

確認您的程式碼在 GitHub 儲存庫 (Repository)：您需要先將您的專案上傳到一個 GitHub 儲存庫。
進入儲存庫設定：在您的 GitHub 儲存庫頁面，點擊右上角的 "Settings" 標籤。
前往 Pages 選項：在左側的選單中，點擊 "Pages"。
設定部署來源：
在 "Build and deployment" 下方，找到 "Source" 選項。
選擇 "Deploy from a branch"。
選擇分支：
在 "Branch" 下方，選擇您要發布的分支，通常是 main 或 master。
資料夾選項保持預設的 /(root) 即可。
儲存設定：點擊 "Save"。
等待部署：GitHub 會開始為您部署網站，這過程通常需要幾分鐘。部署完成後，此頁面頂部會出現一個綠色的提示框，裡面會顯示您的網站網址，格式通常是 https://<您的GitHub用戶名>.github.io/<您的儲存庫名稱>/。
您現在可以透過這個網址與全世界分享您的個人頁面了！
