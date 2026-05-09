// Конфигурация приглашения
// Все тексты и цвета можно менять здесь — страница обновится автоматически.
const GUEST_DATA = {
    // Заголовок на первой странице
    title: "Мы решили пожениться!",
    // Короткий текст под заголовком
    intro: "Приглашаем разделить с нами радость.",
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
        back: "Назад",
        yes: "Да, с радостью!",
        no: "Нет, к сожалению"
    },
    // Тексты RSVP
    rsvp: {
        text: "Пожалуйста, подтвердите участие",
        contact: "—"
    },
    // Сообщение при отказе (funny_message)
    funny_message: "Лохи",
    // Ссылка для подтверждения участия (QR/ссылка)
    confirm_link: "https://t.me/+SmJlsDJbk4I4MDQy",
    // Данные гостей для персонализации
    guest_data: {
        "andrew_nastya": {
            names: ["Андрей", "Анастасия"],
            sweetMessage: "Приходите, дуры"
        },
        "alexey_anna": {
            names: ["Алексей", "Анна"],
            sweetMessage: "Очень ждем вас! Настолок не будет!"
        },
        "vasya_natasha": {
            names: ["Василий", "Наталья"],
            sweetMessage: "На свадьбу к нам - газ?"
        },
        "alexandr_o": {
            names: ["Александр"],
            sweetMessage: "Братан, там надо будет подъехать пораньше помочь с декором"
        },
        "elizaveta": {
            names: ["Елизавета"],
            sweetMessage: "Ждем тебя, любимая Лизочка"
        },
        "mark_kristina": {
            names: ["Марк", "Кристина"],
            sweetMessage: "Очень ждем вас! "
        },
        "vladislav": {
            names: ["Владислав"],
            sweetMessage: ""
        },
        "dmitry": {
            names: ["Дмитрий"],
            sweetMessage: ""
        },
        "eugene": {
            names: ["Евгений"],
            sweetMessage: ""
        },
        "shultz_anf": {
            names: ["Илья", "Анфиса"],
            sweetMessage: ""
        },
        "ivan_marina": {
            names: ["Иван", "Марина"],
            sweetMessage: ""
        },
        "anatoly": {
            names: ["Анатолий"],
            sweetMessage: ""
        }
    }
};

// Expose GUEST_DATA to global window object for access from index.html
window.GUEST_DATA = GUEST_DATA;

// Генерация уникальной ссылки для гостя
function generateGuestLink(guestId) {
    const baseUrl = window.location.origin + window.location.pathname;
    return baseUrl + '?guest=' + encodeURIComponent(guestId);
}

// Получение ID гостя из URL
function getGuestIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('guest');
}

// Применение конфигурации при загрузке страницы
function applyConfig() {
    const cfg = GUEST_DATA;
    if (!cfg) return;

    // Получаем ID гостя из URL
    const guestId = getGuestIdFromUrl();
    const guestInfo = guestId && cfg.guest_data[guestId] ? cfg.guest_data[guestId] : null;

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
    if (titleEl) titleEl.textContent = cfg.title;
    if (introEl) introEl.textContent = cfg.intro;

    // Список гостей и sweet message (настраиваются под гостя, если есть в URL)
    const guestListEl = document.getElementById('guest-list');
    const sweetMsgEl = document.getElementById('sweetMessage');
    
    if (guestInfo) {
        // Персонализированные данные гостя
        if (guestListEl) {
            let guestText = guestInfo.names || cfg.guests;
            if (Array.isArray(guestInfo.names)) {
                if (guestInfo.names.length === 1) {
                    guestText = guestInfo.names[0];
                } else if (guestInfo.names.length === 2) {
                    guestText = guestInfo.names.join(' и ');
                } else {
                    guestText = guestInfo.names.slice(0, -1).join(', ') + ' и ' + guestInfo.names.slice(-1);
                }
            }
            guestListEl.textContent = guestText;
        }
        if (sweetMsgEl && guestInfo.sweetMessage) {
            sweetMsgEl.textContent = guestInfo.sweetMessage;
        }
    } else {
        // Общие данные по умолчанию
        if (guestListEl) {
            let guestText = cfg.guests || '...';
            if (Array.isArray(cfg.guests)) {
                if (cfg.guests.length === 1) {
                    guestText = cfg.guests[0];
                } else if (cfg.guests.length === 2) {
                    guestText = cfg.guests.join(' и ');
                } else {
                    guestText = cfg.guests.slice(0, -1).join(', ') + ' и ' + cfg.guests.slice(-1);
                }
            }
            guestListEl.textContent = guestText;
        }
        if (sweetMsgEl && cfg.sweetMessage) {
            sweetMsgEl.textContent = cfg.sweetMessage;
        }
    }

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

    // RSVP текст
    const rsvpText = document.getElementById('rsvpText');
    const rsvpContact = document.getElementById('rsvpContact');
    if (rsvpText && cfg.rsvp?.text) rsvpText.textContent = cfg.rsvp.text;
    if (rsvpContact && cfg.rsvp?.contact) rsvpContact.textContent = cfg.rsvp.contact;

    // Обновляем текст кнопок RSVP на странице 3
    const btnYes = document.getElementById('btnYes');
    const btnNo = document.getElementById('btnNo');
    if (btnYes && cfg.buttons?.yes) btnYes.textContent = cfg.buttons.yes;
    if (btnNo && cfg.buttons?.no) btnNo.textContent = cfg.buttons.no;
}

// Запуск при загрузке
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyConfig);
} else {
    applyConfig();
}
