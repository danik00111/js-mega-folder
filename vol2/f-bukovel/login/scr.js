let valid = null;
$('#login').click(()=>{
  clearNotice();
  if(adminCheck())window.location.replace('../admin');
});
$('#register').click(()=>{
  valid = true;
  $('.denied').html('');
  clearNotice();
  nameCheck();
  emailCheck();
  passCheck();
  if(valid)window.location.replace('../book');
});
const clearNotice=()=>{
  $('.notice.shown').each((_,e)=>{
    $(e).removeClass('shown');
  })
}
let accounts = [
  {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    '"""""hash"""""': 'fdlskj*d8Lh%f3djklfs',
    salt: '501e97557d47ce5c'
  },
  // not gonna brew up an actual database for a 2-day project
  {
    name: 'Homer Simpson',
    email: 'chunkylover53@aol.com',
    '"""""hash"""""': 'fdlskjD$2@S1,gdjklfs',
    salt: '6739eedde169544e'
  }
]
const nameCheck=()=>{
  if($('#name-field').val().match(/^\S+$/)
  || ['',' '].includes($('#name-field').val())){
    $('.name-rq').addClass('shown'); valid = false; return;
  }
  if(!$('#name-field').val().match(/^[a-zA-Z\s]*$/)){
    $('.name-ambiguous').addClass('shown'); valid = false; return;
  }
  if(!$('#name-field').val().match(/^[a-zA-Z]+\s[a-zA-Z]+$/)){
    $('.name-inv').addClass('shown'); valid = false;
  }
}
const emailCheck=()=>{
  if(['',' '].includes($('#email-field').val())){
    $('.email-rq').addClass('shown'); valid = false; return;
  }
  if(!$('#email-field').val().toLowerCase().match(/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)){
    $('.email-inv').addClass('shown'); valid = false; return;
  }
  if(accounts.find(o=>o.email===$('#email-field').val())){
    $('.email-taken').addClass('shown'); valid = false;
  }
}
const passCheck=()=>{
  if(['',' '].includes($('#pass-field').val())){
    $('.pass-rq').addClass('shown'); valid = false; return;
  }
  if($('#pass-field').val().length < 8){
    $('.pass-short').addClass('shown'); valid = false; return;
  }
  if(!$('#pass-field').val().match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
    $('.pass-weak').addClass('shown'); valid = false;
  }
}
let user;
const dummyhash=p=>'fdlskj'+String(p).split('').reverse().join('')+'djklfs';
const adminCheck=()=>{
  $('.denied').html('');
  if(!$('#email-field').val().match(/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)){$('.denied').html('denied: email invalid');return false}
  user = accounts.find(o=>o["email"]==$('#email-field').val())
  if(typeof user === 'undefined'){$('.denied').html('denied: email not found');return false}
  if(user['"""""hash"""""']!==dummyhash($('#pass-field').val())){$('.denied').html('denied: wrong password');return false}
  return true
}