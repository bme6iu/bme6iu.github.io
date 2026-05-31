# 6th Batch, BME, IU — Academic Portal

> Official academic portal of the **6th Batch (2022–23)**, Department of Biomedical Engineering, Islamic University, Kushtia.

🔗 **Live:** `https://YOUR-USERNAME.github.io/bme6iu/`

---

## 📁 Project Structure

```
bme6iu/
├── index.html          ← Single page app (all pages inside)
├── README.md
└── images/             ← Teacher photos (upload here)
    ├── dr-khairul-islam.jpg
    ├── md-rabiul-islam.jpg
    ├── sm-jahurul-haque.jpg
    ├── ariful-islam.jpg
    ├── md-abu-sayed.jpg
    ├── afiya-mubasharah.jpg
    └── sathi-rahman.jpg
```

---

## 🖼️ Teacher Images — Upload Guide

Create a folder named **`images`** in the repository root and upload the teacher photos with **exactly** these filenames:

| Teacher Name | Image Filename |
|---|---|
| Dr. Md. Khairul Islam | `dr-khairul-islam.jpg` |
| Md Rabiul Islam | `md-rabiul-islam.jpg` |
| S M Jahurul Haque | `sm-jahurul-haque.jpg` |
| Ariful Islam | `ariful-islam.jpg` |
| Md. Abu Sayed | `md-abu-sayed.jpg` |
| Afiya Mubasharah | `afiya-mubasharah.jpg` |
| Sathi Rahman | `sathi-rahman.jpg` |

> If a photo is not found, a placeholder icon is shown automatically.

---

## 🚀 Deploy to GitHub Pages

1. Create a new repository (e.g. `bme6iu`)
2. Upload `index.html` and `README.md`
3. Create `images/` folder and upload teacher photos
4. Go to **Settings → Pages → Source → Deploy from branch → main / root**
5. Your site will be live at `https://YOUR-USERNAME.github.io/bme6iu/`

---

## 🔗 URL Structure (Hash Routing)

| Page | URL |
|---|---|
| Home | `index.html#home` |
| Courses Overview | `index.html#courses-overview` |
| Course 1101 | `index.html#course-1101` |
| Course 1103 | `index.html#course-1103` |
| ... all courses | `index.html#course-XXXX` |
| Questions BME 1.1 | `index.html#q-bme11` |
| Questions BME 1.2 | `index.html#q-bme12` |
| Questions BME 2.1 | `index.html#q-bme21` |
| Questions BME 2.2 | `index.html#q-bme22` |
| Questions BME 3.1 | `index.html#q-bme31` |
| Retake Questions | `index.html#q-retake` |
| Teacher's Index | `index.html#teachers` |
| Syllabus | `index.html#syllabus` |
| Important Files | `index.html#important-files` |

---

## ✏️ How to Add More Lectures

Open `index.html` and find the `COURSES` object in the `<script>` section. Each course has a `chapters` array. To add lectures for e.g. BME-1103, add:

```js
'1103': {
  code: 'BME-1103',
  sem: '1st Year, 1st Semester',
  title: 'Electrical Fundamentals for Biomedical Engineering',
  teacher: 'Teacher Name Here',
  chapters: [
    {
      num: 'Chapter 1',
      name: 'Chapter Title',
      lectures: [
        { label: 'Lecture 1', driveId: 'YOUR_DRIVE_FILE_ID' },
        { label: 'Lecture 2', driveId: 'YOUR_DRIVE_FILE_ID' },
      ]
    }
  ]
}
```

The Drive File ID is the part in the URL: `drive.google.com/file/d/**FILE_ID**/view`

---

## 📞 Contact

- **Facebook:** [facebook.com/bme6iuk](https://www.facebook.com/bme6iuk)
- **Department:** Dept. of BME, Faculty of Engineering & Technology, IU
- **Address:** Ibn Sina Science Building (2nd Floor), Islamic University, Kushtia-7003

---

*Designed & maintained by [Md. Minhazur Rahman Mahim](http://sites.google.com/view/md-minhazur-rahman-mahim)*  
*© 2026 6th Batch, BME, Islamic University, Bangladesh*
