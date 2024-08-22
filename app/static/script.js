
    let currentTab = 'curl';

    function switchTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`.tab:nth-child(${tab === 'curl' ? 1 : 2})`).classList.add('active');
    document.getElementById('input').placeholder = `Введите ваш ${tab} запрос здесь...`;
    document.getElementById('input').value = '';
    document.getElementById('output').textContent = '';
    document.querySelector('.copy-btn').style.display = 'none';
}

    async function transformRequest() {
    const input = document.getElementById('input').value;
    const outputFormat = document.getElementById('outputFormat').value;
    const output = document.getElementById('output');
    const copyBtn = document.querySelector('.copy-btn');

    if (!input.trim()) {
    output.textContent = `Пожалуйста, введите ${currentTab} запрос.`;
    copyBtn.style.display = 'none';
    return;
}

    // Преобразование многострочного ввода в однострочный
    const singleLineInput = input.replace(/\s+/g, ' ').trim();

    try {
    const response = await axios.post('/api', {
    request_type: currentTab,
    target: outputFormat,
    data_str: singleLineInput
});

    if (response.data && response.data.request_string) {
    output.textContent = response.data.request_string;
    copyBtn.style.display = 'inline-block';
} else {
    output.textContent = 'Неверный формат ответа от сервера.';
    copyBtn.style.display = 'none';
}
} catch (error) {
    output.textContent = 'Произошла ошибка при трансформации запроса. Пожалуйста, проверьте ввод и попробуйте снова.';
    copyBtn.style.display = 'none';
    console.error('Error:', error);
}
}

    function copyToClipboard() {
    const output = document.getElementById('output');
    const textArea = document.createElement('textarea');
    textArea.value = output.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Код скопирован в буфер обмена!');
}
