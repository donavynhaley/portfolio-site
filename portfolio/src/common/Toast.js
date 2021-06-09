import React from 'react'

const Toast = ({ toastList, setToastList }) => {

    const handleClose = (id) => {
        setToastList(toastList.filter((toast) => {
            return toast.id !== id;
        }))
    }

    return (
        <div className="notification-container">
            {
                toastList.map((toast, i) =>
                    <div
                        key={i}
                        className="notification toast"
                    >
                        <button onClick={() => handleClose(toast.id)}>X</button>
                        <div className="notification-image">
                            <img src={toast.icon} alt="" />
                        </div>
                        <div>
                            <p className="notification-title">{toast.title}</p>
                            <p className="notification-message">
                                {toast.description}
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Toast
