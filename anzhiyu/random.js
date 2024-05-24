var posts=["posts/eb2df35a.html","posts/7243bc6d.html","posts/3a5a0c82.html","posts/5e3d6236.html","posts/a91bc5fb.html","posts/5846b829.html","posts/6245a5f9.html","posts/866229f9.html","posts/91508a1c.html","posts/7a80caf2.html","posts/c4d96bce.html","posts/3fb946b9.html","posts/c5528981.html","posts/6234647f.html","posts/8df033a3.html","posts/607d9022.html","posts/607d9022.html","posts/bfb37f36.html","posts/4a17b156.html","posts/2c8677db.html","posts/f958d473.html","posts/a712b464.html","posts/9318dab0.html","posts/59e0d41c.html","posts/7af4cd2e.html","posts/fecdb80b.html","posts/766384c9.html","posts/62610876.html","posts/6eefa259.html","posts/a36982c8.html","posts/8925bd4d.html","posts/e48960ca.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","hundredSuffix":"","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://anzhiy.cn/","avatar":"https://img02.anzhiy.cn/adminuploads/1/2022/09/15/63232b7d91d22.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg","tag":"推荐"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://bu.dusays.com/2022/12/28/63ac2812183aa.png","descr":"分享设计与科技生活"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://avatar.iftft.com/1/646cdb372913c.webp!avatar","descr":"分享网络安全与科技生活"},{"name":"Ganzhe","link":"https://ganzhe2028.github.io","avatar":"https://img01.anzhiy.cn/useruploads/151/2023/05/12/645dac23c60a2.jpg","descr":"顺其自然，持之以恒","tag":"技术"},{"name":"Leonus","link":"https://blog.leonus.cn/","avatar":"https://q1.qlogo.cn/g?b=qq&nk=990320751&s=5","descr":"进一寸有进一寸的欢喜。","tag":"技术"},{"name":"安知鱼","hundredSuffix":"","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };