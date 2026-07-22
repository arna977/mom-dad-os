const welcomeText = "এই ছোট্ট ডিজিটাল পৃথিবীটা তোমাদের জন্য। তোমাদের ভালোবাসার ঋণ কখনো শোধ হবে না, কিন্তু এই অ্যাপটা সেই ভালোবাসার ছোট্ট একটা স্মৃতি। ❤️";

const apps = {
  home: {
    title: "Mom & Dad OS",
    html: `
      <div class="welcome-grid">
        <article class="panel">
          <h2 data-i18n="homeTitle">স্বাগতম</h2>
          <p data-i18n="homeCopy">মা-বাবা, তোমাদের জন্য এই ছোট্ট জায়গাটা বানানো হয়েছে যেন ছবি, কথা, দোয়া, দরকারি তথ্য আর প্রতিদিনের ভালোবাসা এক জায়গায় থাকে। তোমরা খুললেই যেন মনে হয় আমি কাছে আছি।</p>
          <button class="retro-button" id="show-welcome" data-i18n="showWelcome">প্রথম মেসেজ আবার দেখুন</button>
          <button class="retro-button" data-open="today" data-i18n="todayButton">আজকের তথ্য দেখুন</button>
        </article>
        <article class="panel">
          <h2 data-i18n="dailyTitle">আজকের বার্তা</h2>
          <div class="heart-note" id="daily-message"></div>
        </article>
      </div>
    `
  },
  photos: {
    title: "Photos",
    html: `
      <div class="photo-stage">
        <section>
          <div class="photo-frame">
            <div class="family-art" role="img" aria-label="Family photo placeholder"></div>
          </div>
          <div class="thumbnail-row" id="photo-thumbnails">
          </div>
        </section>
        <aside class="panel">
          <h2>পরিবারের ছবি</h2>
          <p>এখানে ছবি যোগ করলে এই ফোনের অ্যাপে সেভ থাকবে। পরে খুললেও gallery থেকে ছবি দেখা যাবে।</p>
          <div class="form-stack">
            <input id="photo-name" placeholder="ছবির নাম" />
            <input id="photo-file" type="file" accept="image/*" />
            <button class="retro-button" id="add-photo">নতুন ছবি যোগ করুন</button>
            <button class="retro-button" id="slideshow">স্লাইডশো চালু</button>
          </div>
        </aside>
      </div>
    `
  },
  letters: {
    title: "Letters",
    html: `
      <div class="app-grid">
        <section class="panel">
          <h2>তোমার লেখা চিঠি</h2>
          <div class="letter-tabs">
            <button class="retro-button" data-letter="mom">মায়ের জন্য</button>
            <button class="retro-button" data-letter="dad">বাবার জন্য</button>
          </div>
          <article class="letter" id="letter-view"></article>
        </section>
        <section class="panel">
          <h2>তাদের ছোট নোট</h2>
          <div class="form-stack">
            <select id="note-author">
              <option>মা</option>
              <option>বাবা</option>
            </select>
            <textarea id="parent-note" rows="6" placeholder="তোমার জন্য ছোট নোট..."></textarea>
            <button class="retro-button" id="save-parent-note">নোট রাখুন</button>
          </div>
          <div class="note-list" id="parent-notes"></div>
        </section>
      </div>
    `
  },
  days: {
    title: "Special Days",
    html: `
      <div class="app-grid">
        <section class="panel">
          <h2>গুরুত্বপূর্ণ তারিখ</h2>
          <div class="day-list" id="day-list"></div>
        </section>
        <section class="panel">
          <h2>রিমাইন্ডার যোগ করুন</h2>
          <div class="form-stack">
            <input id="day-title" placeholder="যেমন: মায়ের জন্মদিন" />
            <input id="day-date" type="date" />
            <button class="retro-button" id="add-day">তারিখ সেভ করুন</button>
          </div>
        </section>
      </div>
    `
  },
  surah: {
    title: "Surah & Ghazal",
    html: `
      <div class="app-grid">
        <section class="panel">
          <h2>প্রিয় সূরা</h2>
          <div class="audio-list">
            <div class="audio-item"><span>সূরা আল-ফাতিহা</span><button class="retro-button" data-play="fatihah">▶</button></div>
            <div class="audio-item"><span>সূরা ইয়াসিন</span><button class="retro-button" data-play="yasin">▶</button></div>
            <div class="audio-item"><span>আয়াতুল কুরসি</span><button class="retro-button" data-play="kursi">▶</button></div>
          </div>
        </section>
        <section class="panel">
          <h2>গজল ও ফেভারিট</h2>
          <div class="audio-list">
            <div class="audio-item"><span>প্রিয় গজল ১</span><button class="retro-button" data-fav>♡</button></div>
            <div class="audio-item"><span>প্রিয় গজল ২</span><button class="retro-button" data-fav>♡</button></div>
          </div>
          <div class="form-stack">
            <select id="audio-key">
              <option value="fatihah">সূরা আল-ফাতিহা</option>
              <option value="yasin">সূরা ইয়াসিন</option>
              <option value="kursi">আয়াতুল কুরসি</option>
              <option value="ghazal1">প্রিয় গজল ১</option>
              <option value="ghazal2">প্রিয় গজল ২</option>
            </select>
            <input id="audio-title" placeholder="অডিওর নাম" />
            <input id="audio-file" type="file" accept="audio/*" />
            <button class="retro-button" id="save-audio">অডিও সেভ করুন</button>
            <audio class="audio-player" id="audio-player" controls></audio>
          </div>
          <div class="saved-audio-list" id="saved-audio-list"></div>
        </section>
      </div>
    `
  },
  thanks: {
    title: "Thank You",
    html: `
      <div class="app-grid">
        <section class="panel">
          <h2>আজকের কৃতজ্ঞতা</h2>
          <div class="heart-note" id="thanks-message"></div>
          <button class="retro-button" id="new-thanks">নতুন বার্তা</button>
        </section>
        <section class="panel">
          <h2>ছোট নোট</h2>
          <div class="form-stack">
            <textarea id="thanks-note" rows="6" placeholder="আজ তোমাদের জন্য..."></textarea>
            <button class="retro-button" id="save-thanks">নোট সেভ করুন</button>
          </div>
          <div class="note-list" id="thanks-notes"></div>
        </section>
      </div>
    `
  },
  medicine: {
    title: "Medicine Reminder",
    html: `
      <div class="app-grid">
        <section class="panel">
          <h2>ওষুধের সময়</h2>
          <div class="medicine-list" id="medicine-list"></div>
          <button class="retro-button" id="enable-alerts">Reminder চালু করুন</button>
        </section>
        <section class="panel">
          <h2>নতুন ওষুধ</h2>
          <div class="form-stack">
            <input id="medicine-name" placeholder="ওষুধের নাম" />
            <input id="medicine-time" type="time" />
            <input id="medicine-note" placeholder="যেমন: খাবারের পরে" />
            <button class="retro-button" id="add-medicine">সেভ করুন</button>
          </div>
        </section>
      </div>
    `
  },
  calls: {
    title: "Quick Call",
    html: `
      <div class="app-grid">
        <section class="panel">
          <h2>এক ট্যাপে কল</h2>
          <div class="contact-list" id="contact-list"></div>
        </section>
        <section class="panel">
          <h2>নম্বর যোগ করুন</h2>
          <div class="form-stack">
            <input id="contact-name" placeholder="নাম" />
            <input id="contact-phone" type="tel" placeholder="+880..." />
            <button class="retro-button" id="add-contact">যোগ করুন</button>
          </div>
        </section>
      </div>
    `
  },
  documents: {
    title: "Documents",
    html: `
      <div class="app-grid">
        <section class="panel">
          <h2>সংরক্ষিত ডকুমেন্ট</h2>
          <div class="document-list" id="document-list"></div>
        </section>
        <section class="panel">
          <h2>স্ক্যান কপি যোগ করুন</h2>
          <div class="form-stack">
            <select id="document-type">
              <option>Prescription</option>
              <option>Report</option>
              <option>NID</option>
              <option>Other</option>
            </select>
            <input id="document-file" type="file" accept="image/*,.pdf" />
            <button class="retro-button" id="add-document">ডকুমেন্ট যোগ করুন</button>
          </div>
        </section>
      </div>
    `
  },
  today: {
    title: "Today's Info",
    html: `
      <div class="app-grid">
        <section class="panel">
          <h2>আজকের তথ্য</h2>
          <div class="info-board">
            <div class="info-tile"><strong>তারিখ</strong><span id="today-date"></span></div>
            <div class="info-tile"><strong>সময়</strong><span id="today-time"></span></div>
            <div class="info-tile"><strong>দিন</strong><span id="today-day"></span></div>
            <div class="info-tile"><strong>আবহাওয়া</strong><span id="weather-info">ইন্টারনেট থাকলে দেখাবে</span></div>
          </div>
        </section>
        <section class="panel">
          <h2>লাইভ আপডেট</h2>
          <p>ইন্টারনেট থাকলে সময় ও আবহাওয়া নিজে নিজে আপডেট হবে। অফলাইনে থাকলে ফোনের সময় অনুযায়ী চলবে।</p>
          <button class="retro-button" id="load-weather">আবহাওয়া আপডেট করুন</button>
        </section>
      </div>
    `
  }
};

const letters = {
  mom: "মা, তোমার দোয়া আর যত্ন আমার জীবনের সবচেয়ে নিরাপদ জায়গা। তুমি পাশে আছো বলেই এত কিছু সাহস করে ভাবতে পারি।",
  dad: "বাবা, তোমার পরিশ্রম আর নীরব ভালোবাসা প্রতিদিন আমাকে শক্ত করে। তোমার জন্য আমার অসীম সম্মান আর কৃতজ্ঞতা।"
};

const defaultDays = [
  { title: "মায়ের জন্মদিন", date: "1971-03-27" },
  { title: "বাবার জন্মদিন", date: "1968-04-14" },
  { title: "বিবাহবার্ষিকী", date: "2000-06-18" }
];

const defaultContacts = [];

const translations = {
  bn: {
    langButton: "English",
    homeTitle: "স্বাগতম",
    homeCopy: "মা-বাবা, তোমাদের জন্য এই ছোট্ট জায়গাটা বানানো হয়েছে যেন ছবি, কথা, দোয়া, দরকারি তথ্য আর প্রতিদিনের ভালোবাসা এক জায়গায় থাকে। তোমরা খুললেই যেন মনে হয় আমি কাছে আছি।",
    showWelcome: "প্রথম মেসেজ আবার দেখুন",
    todayButton: "আজকের তথ্য দেখুন",
    dailyTitle: "আজকের বার্তা"
  },
  en: {
    langButton: "বাংলা",
    homeTitle: "Welcome",
    homeCopy: "Mom and Dad, this little place is made for you, so our photos, words, prayers, important details, and daily love can stay together. Whenever you open it, I hope it feels like I am close.",
    showWelcome: "Show First Message",
    todayButton: "Today's Info",
    dailyTitle: "Today's Message"
  }
};

const messages = {
  bn: [
    "তোমরা আছো বলেই ঘর মানে শান্তি।",
    "মা-বাবা, তোমাদের দোয়া আমার প্রতিদিনের সাহস।",
    "তোমাদের হাসি আমার দিনের সবচেয়ে সুন্দর অংশ।",
    "তোমাদের ভালোবাসা আমার জীবনের সবচেয়ে নিরাপদ ঠিকানা।",
    "আজও মনে হয়, তোমরা পাশে থাকলে সব কঠিন পথ সহজ হয়ে যায়।",
    "প্রতিটি অপেক্ষা, প্রতিটি যত্ন, প্রতিটি দোয়ার জন্য ধন্যবাদ।",
    "তোমাদের জন্য আমার ভালোবাসা প্রতিদিন নতুন করে জন্মায়।",
    "মা-বাবা, তোমাদের ছায়াটাই আমার সবচেয়ে বড় আশ্রয়।",
    "তোমাদের কষ্টের মূল্য কোনোদিন শোধ হবে না, শুধু ভালোবাসা দিয়ে মনে রাখব।",
    "আজকের দিনটা তোমাদের হাসিতে ভরে উঠুক।"
  ],
  en: [
    "Home feels peaceful because you are in it.",
    "Mom and Dad, your prayers are my courage every day.",
    "Your smile is the softest part of my day.",
    "Your love is the safest place I know.",
    "Every hard road feels easier because you are with me.",
    "Thank you for every prayer, every wait, and every quiet sacrifice.",
    "My love for you becomes new again every day.",
    "Your care is the shelter I carry everywhere.",
    "I can never repay your love, but I can remember it with all my heart.",
    "May today be full of peace and smiles for you."
  ]
};

const windowTitle = document.querySelector("#window-title");
const taskbarTitle = document.querySelector("#taskbar-title");
const content = document.querySelector("#window-content");
const clock = document.querySelector("#clock");
let currentLang = getStore("language", "bn");
let timeOffsetMs = Number(getStore("timeOffsetMs", 0));
let reminderTimer;
let todayTimer;
let weatherTimer;

function getStore(key, fallback) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : fallback;
}

function setStore(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function openApp(name) {
  const app = apps[name] || apps.home;
  windowTitle.textContent = app.title;
  taskbarTitle.textContent = app.title;
  content.innerHTML = app.html;
  applyLanguage();
  bindApp(name);
}

function bindApp(name) {
  content.querySelectorAll("[data-open]").forEach((button) => {
    button.addEventListener("click", () => openApp(button.dataset.open));
  });

  if (name === "home") setDailyMessage("#daily-message");
  if (name === "home") {
    document.querySelector("#show-welcome").addEventListener("click", showWelcomeMessage);
  }
  if (name === "photos") bindPhotos();
  if (name === "letters") bindLetters();
  if (name === "days") bindDays();
  if (name === "surah") bindSurah();
  if (name === "thanks") bindThanks();
  if (name === "medicine") bindMedicine();
  if (name === "calls") bindCalls();
  if (name === "documents") bindDocuments();
  if (name === "today") bindToday();
}

function bindPhotos() {
  const frame = document.querySelector(".family-art");
  let slideshowTimer;
  renderPhotos();
  document.querySelector("#add-photo").addEventListener("click", async () => {
    const file = document.querySelector("#photo-file").files[0];
    if (!file) return;
    const title = document.querySelector("#photo-name").value.trim() || file.name;
    await addPhotoFile({ title, name: file.name, file, savedAt: new Date().toISOString() });
    frame.style.background = `center / cover url("${URL.createObjectURL(file)}")`;
    document.querySelector("#photo-name").value = "";
    document.querySelector("#photo-file").value = "";
    renderPhotos();
  });
  document.querySelector("#slideshow").addEventListener("click", async (event) => {
    const photos = await getPhotoFiles();
    if (!photos.length) return;
    if (slideshowTimer) {
      clearInterval(slideshowTimer);
      slideshowTimer = null;
      event.currentTarget.textContent = "স্লাইডশো চালু";
      return;
    }
    let index = 0;
    event.currentTarget.textContent = "স্লাইডশো বন্ধ";
    frame.style.background = `center / cover url("${URL.createObjectURL(photos[index].file)}")`;
    slideshowTimer = setInterval(() => {
      index = (index + 1) % photos.length;
      frame.style.background = `center / cover url("${URL.createObjectURL(photos[index].file)}")`;
    }, 2500);
  });
}

function bindLetters() {
  const view = document.querySelector("#letter-view");
  view.textContent = letters.mom;
  content.querySelectorAll("[data-letter]").forEach((button) => {
    button.addEventListener("click", () => {
      view.textContent = letters[button.dataset.letter];
    });
  });
  renderNotes("parentNotes", "#parent-notes");
  document.querySelector("#save-parent-note").addEventListener("click", () => {
    const author = document.querySelector("#note-author").value;
    const text = document.querySelector("#parent-note").value.trim();
    if (!text) return;
    const notes = getStore("parentNotes", []);
    notes.unshift(`${author}: ${text}`);
    setStore("parentNotes", notes);
    document.querySelector("#parent-note").value = "";
    renderNotes("parentNotes", "#parent-notes");
  });
}

function bindDays() {
  document.querySelector("#day-date").value = formatDateInput(getAppNow());
  renderDays();
  document.querySelector("#add-day").addEventListener("click", () => {
    const title = document.querySelector("#day-title").value.trim();
    const date = document.querySelector("#day-date").value;
    if (!title || !date) return;
    const days = getSpecialDays();
    days.push({ title, date });
    setStore("specialDays", days);
    renderDays();
  });
}

function bindSurah() {
  const favs = getStore("audioFavs", {});
  content.querySelectorAll("[data-fav]").forEach((button) => {
    const label = button.parentElement.querySelector("span").textContent;
    button.textContent = favs[label] ? "♥" : "♡";
    button.addEventListener("click", () => {
      favs[label] = !favs[label];
      setStore("audioFavs", favs);
      button.textContent = favs[label] ? "♥" : "♡";
    });
  });
  content.querySelectorAll("[data-play]").forEach((button) => {
    button.addEventListener("click", async () => {
      await playSavedAudio(button.dataset.play);
    });
  });
  document.querySelector("#audio-file").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const player = document.querySelector("#audio-player");
    player.src = URL.createObjectURL(file);
    player.play();
  });
  document.querySelector("#save-audio").addEventListener("click", async () => {
    const file = document.querySelector("#audio-file").files[0];
    const title = document.querySelector("#audio-title").value.trim() || file?.name;
    const key = document.querySelector("#audio-key").value;
    if (!file || !title) return;
    await addAudioFile({ key, title, name: file.name, file, savedAt: new Date().toISOString() });
    document.querySelector("#audio-title").value = "";
    document.querySelector("#audio-file").value = "";
    renderAudioFiles();
  });
  renderAudioFiles();
}

function bindThanks() {
  setDailyMessage("#thanks-message");
  renderNotes("thanksNotes", "#thanks-notes");
  document.querySelector("#new-thanks").addEventListener("click", () => setRandomMessage("#thanks-message"));
  document.querySelector("#save-thanks").addEventListener("click", () => {
    const text = document.querySelector("#thanks-note").value.trim();
    if (!text) return;
    const notes = getStore("thanksNotes", []);
    notes.unshift(text);
    setStore("thanksNotes", notes);
    document.querySelector("#thanks-note").value = "";
    renderNotes("thanksNotes", "#thanks-notes");
  });
}

function bindMedicine() {
  renderMedicine();
  document.querySelector("#add-medicine").addEventListener("click", () => {
    const name = document.querySelector("#medicine-name").value.trim();
    const time = document.querySelector("#medicine-time").value;
    const note = document.querySelector("#medicine-note").value.trim();
    if (!name || !time) return;
    const medicines = getStore("medicines", []);
    medicines.push({ name, time, note });
    setStore("medicines", medicines);
    renderMedicine();
  });
  document.querySelector("#enable-alerts").addEventListener("click", enableMedicineAlerts);
}

function bindCalls() {
  renderContacts();
  document.querySelector("#add-contact").addEventListener("click", () => {
    const name = document.querySelector("#contact-name").value.trim();
    const phone = document.querySelector("#contact-phone").value.trim();
    if (!name || !phone) return;
    const contacts = getStore("contacts", defaultContacts);
    contacts.push({ name, phone });
    setStore("contacts", contacts);
    renderContacts();
  });
}

function bindDocuments() {
  renderDocuments();
  document.querySelector("#add-document").addEventListener("click", () => {
    const file = document.querySelector("#document-file").files[0];
    if (!file) return;
    const type = document.querySelector("#document-type").value;
    addDocumentFile({ type, name: file.name, savedAt: new Date().toISOString(), file }).then(renderDocuments);
  });
}

function bindToday() {
  updateTodayInfo();
  syncRealTime();
  clearInterval(todayTimer);
  todayTimer = setInterval(updateTodayInfo, 1000);
  loadWeather();
  clearInterval(weatherTimer);
  weatherTimer = setInterval(loadWeather, 10 * 60 * 1000);
  document.querySelector("#load-weather").addEventListener("click", loadWeather);
}

function renderDays() {
  const days = getSpecialDays();
  const formatter = new Intl.DateTimeFormat("bn-BD", { month: "long", day: "numeric", year: "numeric" });
  const nextFormatter = new Intl.DateTimeFormat("bn-BD", { month: "long", day: "numeric", year: "numeric" });
  document.querySelector("#day-list").innerHTML = days
    .map((day) => {
      const original = parseLocalDate(day.date);
      const next = getNextOccurrence(original);
      return `<div class="day-item"><strong>${escapeHtml(day.title)}</strong><span>${formatter.format(original)}<br>পরের বার: ${nextFormatter.format(next)}</span></div>`;
    })
    .join("");
}

function renderMedicine() {
  const medicines = getStore("medicines", []);
  const target = document.querySelector("#medicine-list");
  target.innerHTML = medicines.length
    ? medicines.map((item) => `<div class="medicine-item"><span><strong>${escapeHtml(item.time)}</strong> ${escapeHtml(item.name)}<br>${escapeHtml(item.note || "")}</span></div>`).join("")
    : `<div class="medicine-item"><span>এখনো কোনো ওষুধ যোগ করা হয়নি।</span></div>`;
}

function renderContacts() {
  const contacts = getStore("contacts", defaultContacts);
  document.querySelector("#contact-list").innerHTML = contacts.length
    ? contacts
      .map((contact) => `<div class="contact-item"><span>${escapeHtml(contact.name)}<br>${escapeHtml(contact.phone)}</span><a class="retro-button" href="tel:${escapeHtml(contact.phone)}">Call</a></div>`)
      .join("")
    : `<div class="contact-item"><span>এখানে real phone number যোগ করলে ফোনে Call button কাজ করবে।</span></div>`;
}

async function renderDocuments() {
  const target = document.querySelector("#document-list");
  const documents = await getDocumentFiles();
  if (!documents.length) {
    target.innerHTML = `<div class="document-item"><span>Prescription, report, NID scan এখানে রাখা যাবে।</span></div>`;
    return;
  }
  target.innerHTML = documents
    .map((doc) => {
      const url = URL.createObjectURL(doc.file);
      return `<div class="document-item"><span><strong>${escapeHtml(doc.type)}</strong><br>${escapeHtml(doc.name)}</span><a class="retro-button" href="${url}" target="_blank" rel="noreferrer">View</a></div>`;
    })
    .join("");
}

async function renderPhotos() {
  const target = document.querySelector("#photo-thumbnails");
  const frame = document.querySelector(".family-art");
  if (!target || !frame) return;
  const photos = await getPhotoFiles();
  if (!photos.length) {
    target.innerHTML = `<button class="thumb" aria-label="No saved photo"></button>`;
    return;
  }
  frame.style.background = `center / cover url("${URL.createObjectURL(photos[0].file)}")`;
  target.innerHTML = photos
    .map((photo) => {
      const url = URL.createObjectURL(photo.file);
      return `<button class="thumb" title="${escapeHtml(photo.title)}" style="background: center / cover url('${url}')" data-photo-id="${photo.id}" aria-label="${escapeHtml(photo.title)}"></button>`;
    })
    .join("");
  target.querySelectorAll("[data-photo-id]").forEach((button) => {
    button.addEventListener("click", async () => {
      const selected = (await getPhotoFiles()).find((photo) => String(photo.id) === button.dataset.photoId);
      if (!selected) return;
      frame.style.background = `center / cover url("${URL.createObjectURL(selected.file)}")`;
    });
  });
}

async function renderAudioFiles() {
  const target = document.querySelector("#saved-audio-list");
  if (!target) return;
  const files = await getAudioFiles();
  if (!files.length) {
    target.innerHTML = `<div class="audio-item"><span>নিজের সূরা/গজল অডিও যোগ করলে এখানে থাকবে।</span></div>`;
    return;
  }
  target.innerHTML = files
    .map((item) => {
      const url = URL.createObjectURL(item.file);
      return `<div class="audio-item"><span><strong>${escapeHtml(item.title)}</strong><br>${escapeHtml(item.name)}</span></div><audio controls src="${url}"></audio>`;
    })
    .join("");
}

function renderNotes(key, selector) {
  const notes = getStore(key, []);
  document.querySelector(selector).innerHTML = notes
    .map((note) => `<div class="note-item"><span>${escapeHtml(note)}</span></div>`)
    .join("");
}

function getSpecialDays() {
  const days = getStore("specialDays", []);
  const merged = [...defaultDays];
  days.forEach((day) => {
    if (!merged.some((item) => item.title === day.title)) merged.push(day);
  });
  return merged;
}

function enableMedicineAlerts() {
  if (!("Notification" in window)) {
    alert("এই browser notification support করে না।");
    return;
  }
  Notification.requestPermission().then((permission) => {
    if (permission !== "granted") return;
    clearInterval(reminderTimer);
    reminderTimer = setInterval(checkMedicineTime, 30000);
    checkMedicineTime();
    alert("Medicine reminder চালু হয়েছে।");
  });
}

function checkMedicineTime() {
  const now = getAppNow();
  const current = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  const key = `medicineAlert:${now.toDateString()}:${current}`;
  if (localStorage.getItem(key)) return;
  const due = getStore("medicines", []).filter((item) => item.time === current);
  if (!due.length) return;
  localStorage.setItem(key, "shown");
  due.forEach((item) => new Notification("ওষুধের সময়", { body: `${item.name} ${item.note || ""}`.trim() }));
}

function updateTodayInfo() {
  const now = getAppNow();
  const locale = currentLang === "bn" ? "bn-BD" : "en-US";
  setText("#today-date", new Intl.DateTimeFormat(locale, { dateStyle: "full" }).format(now));
  setText("#today-time", new Intl.DateTimeFormat(locale, { hour: "numeric", minute: "2-digit", second: "2-digit", hour12: true }).format(now));
  setText("#today-day", new Intl.DateTimeFormat(locale, { weekday: "long" }).format(now));
}

function getAppNow() {
  return new Date(Date.now() + timeOffsetMs);
}

async function syncRealTime() {
  try {
    const response = await fetch("https://worldtimeapi.org/api/ip");
    const data = await response.json();
    const serverTime = new Date(data.datetime).getTime();
    timeOffsetMs = serverTime - Date.now();
    setStore("timeOffsetMs", timeOffsetMs);
    updateTodayInfo();
    tick();
  } catch {
    updateTodayInfo();
  }
}

function formatDateInput(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseLocalDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function getNextOccurrence(original) {
  const now = getAppNow();
  let next = new Date(now.getFullYear(), original.getMonth(), original.getDate());
  if (next < new Date(now.getFullYear(), now.getMonth(), now.getDate())) {
    next = new Date(now.getFullYear() + 1, original.getMonth(), original.getDate());
  }
  return next;
}

async function playSavedAudio(key) {
  const player = document.querySelector("#audio-player");
  const files = await getAudioFiles();
  const audio = files.find((item) => item.key === key);
  if (!audio) {
    alert("এই সূরা/গজলের অডিও এখনো যোগ করা হয়নি। আগে নিচে audio file বেছে সেভ করুন।");
    return;
  }
  player.src = URL.createObjectURL(audio.file);
  player.play();
}

function loadWeather() {
  const weather = document.querySelector("#weather-info");
  if (!weather) return;
  weather.textContent = "Location নিচ্ছি...";
  if (!navigator.geolocation) {
    weather.textContent = "এই browser location support করে না।";
    return;
  }
  navigator.geolocation.getCurrentPosition(async (position) => {
    const { latitude, longitude } = position.coords;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      weather.textContent = `${Math.round(data.current.temperature_2m)}°C, আর্দ্রতা ${data.current.relative_humidity_2m}%`;
    } catch {
      weather.textContent = "ইন্টারনেট না থাকলে আবহাওয়া দেখা যাবে না।";
    }
  }, () => {
    weather.textContent = "Location permission দিলে আবহাওয়া দেখাবে।";
  });
}

function openDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("momDadOs", 3);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains("documents")) {
        db.createObjectStore("documents", { keyPath: "id", autoIncrement: true });
      }
      if (!db.objectStoreNames.contains("audioFiles")) {
        db.createObjectStore("audioFiles", { keyPath: "id", autoIncrement: true });
      }
      if (!db.objectStoreNames.contains("photos")) {
        db.createObjectStore("photos", { keyPath: "id", autoIncrement: true });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function addDocumentFile(documentRecord) {
  return addDbRecord("documents", documentRecord);
}

async function getDocumentFiles() {
  return getDbRecords("documents");
}

async function addAudioFile(audioRecord) {
  return addDbRecord("audioFiles", audioRecord);
}

async function getAudioFiles() {
  return getDbRecords("audioFiles");
}

async function addPhotoFile(photoRecord) {
  return addDbRecord("photos", photoRecord);
}

async function getPhotoFiles() {
  return getDbRecords("photos");
}

async function addDbRecord(storeName, record) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, "readwrite");
    transaction.objectStore(storeName).add(record);
    transaction.oncomplete = resolve;
    transaction.onerror = () => reject(transaction.error);
  });
}

async function getDbRecords(storeName) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const request = db.transaction(storeName).objectStore(storeName).getAll();
    request.onsuccess = () => resolve(request.result.reverse());
    request.onerror = () => reject(request.error);
  });
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setDailyMessage(selector) {
  const list = messages[currentLang] || messages.bn;
  const now = getAppNow();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  document.querySelector(selector).textContent = list[dayOfYear % list.length];
}

function setRandomMessage(selector) {
  const list = messages[currentLang] || messages.bn;
  const index = Math.floor(Math.random() * list.length);
  document.querySelector(selector).textContent = list[index];
}

function applyLanguage() {
  const copy = translations[currentLang] || translations.bn;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const text = copy[element.dataset.i18n];
    if (text) element.textContent = text;
  });
  const toggle = document.querySelector("#language-toggle");
  if (toggle) toggle.textContent = copy.langButton;
}

function toggleLanguage() {
  currentLang = currentLang === "bn" ? "en" : "bn";
  setStore("language", currentLang);
  applyLanguage();
  const daily = document.querySelector("#daily-message");
  if (daily) setDailyMessage("#daily-message");
  const thanks = document.querySelector("#thanks-message");
  if (thanks) setDailyMessage("#thanks-message");
  tick();
  updateTodayInfo();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function tick() {
  clock.textContent = new Intl.DateTimeFormat(currentLang === "bn" ? "bn-BD" : "en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  }).format(getAppNow());
}

function showWelcomeOnce() {
  const dialog = document.querySelector("#welcome-dialog");
  if (!dialog || localStorage.getItem("welcomeSeen")) return;
  showWelcomeMessage();
  dialog.addEventListener("close", () => setStore("welcomeSeen", true), { once: true });
}

function showWelcomeMessage() {
  const dialog = document.querySelector("#welcome-dialog");
  if (!dialog) return;
  dialog.querySelector("p").textContent = welcomeText;
  if (typeof dialog.showModal !== "function") {
    alert(welcomeText);
    setStore("welcomeSeen", true);
    return;
  }
  dialog.showModal();
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

function bindWindowButtons() {
  document.querySelector("#minimize-window").addEventListener("click", () => {
    document.querySelector("#app-window").style.display = "none";
    taskbarTitle.textContent = "Minimized - click Start";
  });
  document.querySelector("#home-window").addEventListener("click", () => openApp("home"));
  document.querySelector("#close-window").addEventListener("click", () => {
    content.innerHTML = `<div class="panel"><h2>বন্ধ করা হয়েছে</h2><p>আবার খুলতে Start চাপুন বা কোনো desktop icon চাপুন।</p></div>`;
    windowTitle.textContent = "Closed";
    taskbarTitle.textContent = "Closed";
  });
  document.querySelector("#start-button").addEventListener("click", () => {
    document.querySelector("#app-window").style.display = "block";
    openApp("home");
  });
  document.querySelector("#language-toggle").addEventListener("click", toggleLanguage);
}

document.querySelectorAll(".desktop-icon").forEach((button) => {
  button.addEventListener("dblclick", () => {
    document.querySelector("#app-window").style.display = "block";
    openApp(button.dataset.app);
  });
  button.addEventListener("click", () => {
    document.querySelector("#app-window").style.display = "block";
    openApp(button.dataset.app);
  });
});

tick();
setInterval(tick, 1000);
bindWindowButtons();
openApp("home");
showWelcomeOnce();
registerServiceWorker();
