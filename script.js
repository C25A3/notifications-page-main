const notificationCounter = document.querySelector('.notifications-number').lastChild
const notifications = document.querySelectorAll('.notification')
const markAllAsReadBtn = document.querySelector('.mark-all-as-read-btn')

const countNotification = () => {
	const unreadNotifications = document.querySelectorAll('.unread')
	notificationCounter.textContent = unreadNotifications.length
}

const markAllAsRead = () => {
	notifications.forEach(notification => {
		notification.classList.remove('unread')
	})
	countNotification()
}

markAllAsReadBtn.addEventListener('click', markAllAsRead)
countNotification()
