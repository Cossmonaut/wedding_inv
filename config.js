// Конфигурация приглашения
// Все тексты и цвета можно менять здесь — страница обновится автоматически.
const GUEST_DATA = {
    // Заголовок на первой странице
    title: "Мы решили пожениться!",
    // Короткий текст под заголовком
    intro: "приглашаем разделить с нами радость",
    // Список приглашаемых гостей (массив) — будет показан на первой странице
    guests: ["Андрей", "Анастасия"],
    // Милое сообщение на первой странице
    sweetMessage: "Приходите, дуры",
    // Дата, время, место для ЗАГСа (3 июля) — оставлены пустыми
    zagrs: {
        date: "03.07.2026",
        time: "14:00",
        place: "ул. Декабрьских Событий, 106"
    },
    // Дата, время, место для второго дня (для друзей) — оставлены пустыми
    friends: {
        date: "04.07.2026",
        time: "16:30",
        place: "ул. Баррикад, 51/3"
    },
    // Цветовая тема (нежная фиолетовая гамма)
    colors: {
        main: "#7C5FB0",
        soft: "#F8F0FC",
        warm: "#E8C4D9",
        dark: "#5A4A7A"
    },
    // Тексты кнопок
    buttons: {
        more: "Подробнее",
        back: "Назад"
    },
    // Тексты RSVP
    rsvp: {
        text: "Пожалуйста, подтвердите участие",
        contact: "—"
    }
};

// Применение конфигурации при загрузке страницы
function applyConfig() {
    const cfg = GUEST_DATA;
    if (!cfg) return;

    // Цвета
    const root = document.documentElement;
    if (root && cfg.colors) {
        root.style.setProperty('--main-purple', cfg.colors.main || '#7C5FB0');
        root.style.setProperty('--accent-soft', cfg.colors.soft || '#F8F0FC');
        root.style.setProperty('--accent-warm', cfg.colors.warm || '#E8C4D9');
        root.style.setProperty('--dark-accent', cfg.colors.dark || '#5A4A7A');
    }

    // Заголовок и интро
    const titleEl = document.getElementById('title');
    const introEl = document.getElementById('intro');
    if (titleEl) titleEl.textContent = cfg.title || titleEl.textContent;
    if (introEl) introEl.textContent = cfg.intro || introEl.textContent;

    // Список гостей
    const guestListEl = document.getElementById('guest-list');
    if (guestListEl) {
        const guests = Array.isArray(cfg.guests) ? cfg.guests.join(', ') : (cfg.guests || '...');
        guestListEl.textContent = guests;
    }

    // Sweet message
    const sweetMsgEl = document.getElementById('sweetMessage');
    if (sweetMsgEl && cfg.sweetMessage) sweetMsgEl.textContent = cfg.sweetMessage;

    // ЗАГС блок
    const zagrsDateEl = document.getElementById('zagrs-date');
    const zagrsTimeEl = document.getElementById('zagrs-time');
    const zagrsPlaceEl = document.getElementById('zagrs-place');
    if (zagrsDateEl && cfg.zagrs) zagrsDateEl.textContent = cfg.zagrs.date || '—';
    if (zagrsTimeEl && cfg.zagrs) zagrsTimeEl.textContent = cfg.zagrs.time || '—';
    if (zagrsPlaceEl && cfg.zagrs) zagrsPlaceEl.textContent = cfg.zagrs.place || '—';

    // Второй день блок
    const friendsDateEl = document.getElementById('friends-date');
    const friendsTimeEl = document.getElementById('friends-time');
    const friendsPlaceEl = document.getElementById('friends-place');
    if (friendsDateEl && cfg.friends) friendsDateEl.textContent = cfg.friends.date || '—';
    if (friendsTimeEl && cfg.friends) friendsTimeEl.textContent = cfg.friends.time || '—';
    if (friendsPlaceEl && cfg.friends) friendsPlaceEl.textContent = cfg.friends.place || '—';

    // Кнопки
    const btnMore = document.getElementById('btnMore');
    const btnBack = document.getElementById('btnBack');
    if (btnMore && cfg.buttons?.more) btnMore.textContent = cfg.buttons.more;
    if (btnBack && cfg.buttons?.back) btnBack.textContent = cfg.buttons.back;

    // RSVP
    const rsvpText = document.getElementById('rsvpText');
    const rsvpContact = document.getElementById('rsvpContact');
    if (rsvpText && cfg.rsvp?.text) rsvpText.textContent = cfg.rsvp.text;
    if (rsvpContact && cfg.rsvp?.contact) rsvpContact.textContent = cfg.rsvp.contact;
}

// Запуск при загрузке
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyConfig);
} else {
    applyConfig();
}
