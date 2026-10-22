// Fit the 430px design to narrower phones without changing proportions.
(function(){
  var v=document.getElementById('viewport');
  function fit(){
    var w=window.innerWidth,h=window.innerHeight;
    var s=w<430?w/430:1;
    if(w<=430){s=Math.max(w/430,0);}
    v.style.transform='scale('+s+')';
    v.style.marginBottom=(932*s-932)+'px';
    v.style.height='932px';
    document.body.style.minHeight=Math.max(h,932*s)+'px';
  }
  fit();addEventListener('resize',fit);
  // simple active-tab behaviour
  document.querySelectorAll('.menu a, .tab').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault()})});
})();
