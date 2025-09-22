# 個人化頁面使用說明書

歡迎使用！這份指南將引導您如何修改這個專案的各個部分，從頭像、標題到發佈至網路，讓您完全掌握您的個人頁面。

## 快速開始

大部分的頁面內容，例如文字、圖片和連結，都可以透過修改專案根目錄下的 `data.json` 檔案來完成。這是最快、最簡單的客製化方式。

---

## 如何客製化？

### 1. 更改頭像

您的頭像圖片是整個頁面的視覺焦點。

1.  **準備您的圖片 URL**：將您想更換的頭像圖片上傳到網路空間（如 [Imgur](https://imgur.com/)、[Postimages](https://postimages.org/)），並取得圖片的公開連結（URL）。
2.  **打開 `data.json` 檔案**。
3.  **找到 `profile` 區塊**：
    ```json
    "profile": {
      "name": "Charlie",
      "avatarUrl": "https://..."
    }
    ```
4.  **替換 `avatarUrl`**：將 `"avatarUrl"` 後面的舊圖片網址，替換成您的新圖片 URL。

### 2. 更改標題、字體與大小

#### 更改標題文字

-   在 `data.json` 中，找到 `profile` 區塊裡的 `"name"` 欄位，將其值修改為您想要的文字。

#### 更改字體

1.  **尋找新字體**：前往 [Google Fonts](https://fonts.google.com/) 網站，挑選您喜歡的字體。
2.  **取得字體連結**：複製 Google Fonts 提供的 `<link>` 標籤。
3.  **修改 `index.html`**：
    -   打開 `index.html` 檔案。
    -   找到 `<head>` 區塊中的 Google Fonts 連結，用您剛剛複製的新連結取代它。
    -   接著，在下方的 `<script>` 區塊中，找到 `fontFamily` 的設定，將新字體的名稱加入其中：
      ```javascript
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
      ```
4.  **修改 `App.tsx`**：
    -   打開 `App.tsx` 檔案。
    -   找到 `<h1>` 標籤，將 `font-fleur` 這個 class 改成您剛剛設定的新字體名稱，例如 `font-new-font`。

#### 調整標題大小

-   在 `App.tsx` 的 `<h1>` 標籤中，您會看到一個 `text-8xl` 的 class。
-   您可以將它修改為 Tailwind CSS 提供的其他尺寸，例如 `text-7xl` (稍小) 或 `text-9xl` (更大)。

### 3. 更改背景配色

1.  **打開 `index.html` 檔案**。
2.  **找到 `<body>` 標籤**：您會看到 `style="background-color: #0b0d1a;"`。
3.  **修改背景色**：將 `#0b0d1a` 這個十六進位色碼更換為您想要的任何顏色。您可以使用 [HTML Color Picker](https://htmlcolorcodes.com/) 這類工具來尋找喜歡的顏色代碼。
4.  **同步卡片顏色**（建議）：
    -   打開 `App.tsx` 檔案。
    -   找到 `<main>` 標籤，在其 `className` 中找到 `bg-[#0b0d1a]`。
    -   將這裡的色碼改成和 `<body>` 標籤相同的顏色，以保持視覺一致性。

---

## `data.json` 結構詳解

`data.json` 是整個網站的資料中心。所有顯示的文字和圖片都定義在這裡。

-   **`profile`**: 個人檔案區塊。
    -   `name`: 您的名字或標題。
    -   `avatarUrl`: 您的頭像圖片連結。

-   **`socials`**: 社群連結陣列 `[]`。
    -   每個物件 `{}` 包含 `name` (社群平台名稱，如 "Threads") 和 `url` (您的個人頁面連結)。
    -   您可以複製或刪除物件來新增或移除連結。

-   **`bio`**: 個人簡介。
    -   這是一段文字。如果想**換行**，請在需要換行的地方輸入 `\n`。

-   **`links`**: 連結卡片區塊陣列 `[]`。
    -   每個物件 `{}` 代表一個連結按鈕，包含：
        -   `id`: 一個不重複的數字。
        -   `title`: 按鈕上顯示的標題。
        -   `url`: 點擊後會前往的網址。
        -   `imageUrl`: 按鈕左側的小圖示連結。
        -   `icon` (可選): 如果設定為 `"discord"`，會在按鈕右側背景顯示一個大的 Discord 圖示。

-   **`characters`**: 角色介紹卡片陣列 `[]`。
    -   每個物件 `{}` 代表一張角色卡片，包含：
        -   `id`: 一個不重複的數字。
        -   `imageUrl`: 角色的圖片連結。
        -   `name`: 角色名稱。
        -   `description`: 角色簡介。
        -   `imagePosition`: 圖片位置，可以是 `"left"` (靠左) 或 `"right"` (靠右)。

---

## 如何使用 GitHub Pages 發布網站

當您完成所有修改後，可以透過 GitHub Pages 免費將網站發布到網路上。

1.  **確認您的程式碼在 GitHub 儲存庫 (Repository)**。
2.  **進入儲存庫設定**：在您的 GitHub 儲存庫頁面，點擊右上角的 "Settings" 標籤。
3.  **前往 Pages 選項**：在左側的選單中，點擊 "Pages"。
4.  **設定部署來源**：
    -   在 "Build and deployment" 下方，找到 "Source" 選項。
    -   選擇 "Deploy from a branch"。
5.  **選擇分支**：
    -   在 "Branch" 下方，選擇您要發布的分支，通常是 `main`。
    -   資料夾選項保持預設的 `/(root)` 即可。
6.  **儲存設定**：點擊 "Save"。
7.  **等待部署**：GitHub 會開始為您部署網站，過程通常需要幾分鐘。完成後，此頁面頂部會出現您的網站網址。

現在您可以透過這個網址與全世界分享您的個人頁面了！
