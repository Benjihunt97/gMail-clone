$(document).ready(() => {
  
  //check scroll and hide text in compost button
  $(window).on('scroll', (event) => {
    if ($(window).scrollTop() >= 150) {
      $('.btn-text').hide(300);
    } else {
      $('.btn-text').show(300);
    }
  });
  
  
  //inbox messages
  const emails = [
    {
      img: '',
      title: 'iCodeThis',
      subject: 'Pro membership',
      date: '16 Apr',
      text: 'Thank you for becoming, your membership will start straight away'
    },
    {
      img: '',
      title: 'iCodeThis',
      subject: 'Pro membership',
      date: '16 Apr',
      text: 'Thank you for becoming, your membership will start straight away'
    },
    {
      img: '',
      title: 'iCodeThis',
      subject: 'Pro membership',
      date: '16 Apr',
      text: 'Thank you for becoming, your membership will start straight away'
    },
    {
      img: '',
      title: 'iCodeThis',
      subject: 'Pro membership',
      date: '16 Apr',
      text: 'Thank you for becoming, your membership will start straight away'
    },
    {
      img: '',
      title: 'iCodeThis',
      subject: 'Pro membership',
      date: '16 Apr',
      text: 'Thank you for becoming, your membership will start straight away'
    },
    {
      img: '',
      title: 'iCodeThis',
      subject: 'Pro membership',
      date: '16 Apr',
      text: 'Thank you for becoming, your membership will start straight away'
    },
    {
      img: '',
      title: 'Just Eat',
      subject: 'Order Confirmation',
      date: '16 Apr',
      text: 'We have your order'
    },
    {
      img: '',
      title: 'John Doe',
      subject: 'Publication',
      date: '24 Apr',
      text: 'I have confimred your'
    },
    {
      img: '',
      title: 'iCodeThis',
      subject: 'Newsletter',
      date: '27 Apr',
      text: 'We have fantasic new'
    }
  ];
  
  emails.forEach((item, index) => {
    const $emailCard = `
      <div class="flex gap-5 text-sm text-gray-400">
        <img src="" alt="" class="size-12 rounded-full bg-slate-300 shrink-0">
        
        <div class="overflow-hidden">
          <h3 class="font-semibold">${item.title}</h3>
          <p class="font-semibold">${item.subject}</p>
          <p class="text-nowrap text-ellipsis w-[95%] overflow-hidden">${item.text}</p>
        </div>
        
        <div class="flex flex-col ml-auto shrink-0">
          <p>23 Apr</p>
          <p class="material-symbols-outlined text-lg ml-auto mt-auto fill-0">grade</p>
        </div>
      </div>
    `;
    
    $('#inbox').append($emailCard);
  });
  
});
