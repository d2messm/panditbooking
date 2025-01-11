
const WhatsAppChatButton = () => {
  const phoneNumber = '1234567890'; // Replace with your WhatsApp number
  const message = 'Hello, I would like to know more about your services!';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.123 1.607 5.893L0 24l6.107-1.607A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.63-.504-5.18-1.45l-.37-.22-3.63.96.96-3.63-.22-.37A9.94 9.94 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.93l-1.41 1.41c-.2.2-.51.2-.71 0l-1.41-1.41a.996.996 0 00-1.41 0l-1.41 1.41c-.2.2-.51.2-.71 0l-1.41-1.41a.996.996 0 000-1.41l1.41-1.41c.2-.2.2-.51 0-.71l-1.41-1.41a.996.996 0 000-1.41l1.41-1.41c.2-.2.51-.2.71 0l1.41 1.41c.2.2.51.2.71 0l1.41-1.41c.2-.2.51-.2.71 0l1.41 1.41c.2.2.2.51 0 .71l-1.41 1.41c-.2.2-.2.51 0 .71l1.41 1.41c.2.2.2.51 0 .71z" />
      </svg>
    </button>
  );
};

export default WhatsAppChatButton; 