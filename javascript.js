$.ajax({
   url:"https://elevate-be-staging.azurewebsites.net/instafeed.php",
   method:"POST",
   dataType:"JSON",
   success:function(data)
   {
     $('#Header').append('<img src="'+data.graphql.user.profile_pic_url_hd+'" />');

for(var i=0;i<data.graphql.user.edge_owner_to_timeline_media.edges.length;i++)
{
if(data.graphql.user.edge_owner_to_timeline_media.edges[i].node.is_video==false)
{
var unixtimestamp = data.graphql.user.edge_owner_to_timeline_media.edges[i].node.taken_at_timestamp;
        var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var date = new Date(unixtimestamp*1000);
        var year = date.getFullYear();
        var month = months_arr[date.getMonth()];
        var day = date.getDate();
        var hour=date.getHours();
        var min=date.getMinutes();
        var sec=date.getSeconds();
        // Display date time in MM-dd-yyyy hh:mm:ss format
        var DateTime = month+' '+day+','+year +  " at "+ hour+': '+min+' :'+sec;

  document.getElementById("container").innerHTML+="<div id='HomeLayout' class='HomeLayout'>";
  document.getElementById("HomeLayout").innerHTML+="<div class='profilename'>Post From "+data.graphql.user.full_name+" On "+DateTime+"</div>";

  $('#HomeLayout').append('<img src="'+data.graphql.user.edge_owner_to_timeline_media.edges[i].node.display_url+'" height="'+data.graphql.user.edge_owner_to_timeline_media.edges[i].node.dimensions.height+'" width="'+data.graphql.user.edge_owner_to_timeline_media.edges[i].node.dimensions.width+'"/>');
  $('#HomeLayout').append('<br><img src="like.png" height="80" width="70" />');
  document.getElementById("HomeLayout").innerHTML+="<div class='Liketext'>"+data.graphql.user.edge_owner_to_timeline_media.edges[i].node.edge_liked_by.count+ " Have Liked </div>";

  document.getElementById("HomeLayout").innerHTML+="<p>"+data.graphql.user.edge_owner_to_timeline_media.edges[i].node.edge_media_to_caption.edges[0].node.text+"</p>";
document.getElementById("HomeLayout").innerHTML+="<hr>";}

}


   }
  })
