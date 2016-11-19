Router.configure({
   layoutTemplate: 'ApplicationLayout' 
});

Router.route('/', function () {
  this.render('navbar', {
              to: 'navbar'
              } );
    
    this.render('websites', {
              to: 'main'
              } );
    
});

Router.route('/website/:_id', function () {
  this.render('navbar', {
              to: 'navbar'
              } );
    this.render('website', {
              to: 'main',
              data: function() {
                  return Websites.findOne({_id:this.params._id});
              }
              } );
});

Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
});

Session.set("keywords", "");

/////
// template helpers 
/////

// helper function that returns all available websites
Template.website_list.helpers({
    websites:function(){
        var keywords = Session.get("keywords").trim().split(/[\W]+/);
        if (keywords.length == 0) {
            return Websites.find({}, {sort:{upVotes:-1, downVotes:1}});
        } else {
            return Websites.find({$where: function(){
                var titleWords = this.title.toLowerCase().split(/[\W]+/);
                var despWords = this.description.toLowerCase().split(/[\W]+/);
                var satisfied = true;
                var index;
                for (index in keywords) {
                    var keyword = keywords[index].toLowerCase();
                    if (keyword.length == 0) continue;
                    if ((titleWords.indexOf(keyword) == -1) 
                        && (despWords.indexOf(keyword) == -1)) {
                        satisfied = false;
                        break;
                    }
                }
                return satisfied;
            }}, {sort:{upVotes:-1, downVotes:1}}
        );
    }
  }
});


/////
// template events 
/////

Template.website_item.events({
    "click .js-upvote":function(event){
        // example of how you can access the id for the website in the database
        // (this is the data context for the template)
        var website_id = this._id;
        console.log("Up voting website with id "+website_id);
        // put the code in here to add a vote to a website!
        if (this.upVotes) {
            this.upVotes += 1;
        } else {
            this.upVotes = 1;
        }
        Websites.update({_id:website_id}, {$set: {upVotes: this.upVotes}});
        
        return false;// prevent the button from reloading the page
    }, 
    "click .js-downvote":function(event){

        // example of how you can access the id for the website in the database
        // (this is the data context for the template)
        var website_id = this._id;
        console.log("Down voting website with id "+website_id);

        // put the code in here to remove a vote from a website!
        if (this.downVotes) {
            this.downVotes += 1;
        } else {
            this.downVotes = 1;
        }
        Websites.update({_id:website_id}, {$set: {downVotes: this.downVotes}});
        
        return false;// prevent the button from reloading the page
    }
})

Template.search_form.events({
    "submit .js-search-form": function(event) {
        // event.preventDefault();
        var keywords = event.target.keywords.value;
        console.log("searching \"" + keywords + "\"");
        Session.set("keywords", keywords);
        return false;
    }
});

var timer;
Template.website_form.events({
    "click .js-toggle-website-form":function(event){
        $("#website_form").toggle('slow');
    }, 
    "submit .js-save-website-form":function(event){
        //event.preventDefault();
        // here is an example of how to get the url out of the form:
        var url = event.target.url.value;
        console.log("The url they entered is: "+url);
        var title = event.target.title.value;
        var description = event.target.description.value;
        
        //  put your website saving code in here!	
        var userId = "anoy";
        if (Meteor.user()) {
            userId = Meteor.user()._id;
        }
         Websites.insert({
            title:title, 
            url:url, 
            description:description, 
            createdOn:new Date(),
            createdBy:userId 
        });
        
        return false;// stop the form submit from reloading the page

    },
    "input #url": function (event) {
        var url = event.target.value;
        
        clearTimeout(timer);
        timer = setTimeout(function() {
            Meteor.call('remoteGet', url, {}, function(err, response) {
               console.log("getting content for " + url);
               if (!err) {
                   console.log("get content for " + url);
                   var titleReg = new RegExp("<title>([\\w\\W]+)</title>");
                   var titleResult = titleReg.exec(response.content);
                   if (titleResult) {
                       console.log(titleResult);
                       $("#title").val(titleResult[1]);
                   } else {
                       $("#title").val("");
                   }
                   
                   var despReg = new RegExp("<meta\\s+name=\"description\"\\s+content=\"([^\"]+)");
                   var despResult = despReg.exec(response.content);
                   if (despResult) {
                       console.log(despResult);
                       $("#description").val(despResult[1]);
                   } else {
                       $("#description").val("");
                   }
               }
            });
        }, 500); 
    }
});

Template.website.events({
    "submit .js-save-comment-form":function(event){
        //event.preventDefault();
        var username = "anoy";
        if (Meteor.user()) {
            username = Meteor.user().username;
        }
        var comment = {
            comment: event.target.comment.value,
            createdBy: username,
            createdOn: new Date()
        };
        //console.log("The comment entered is: "+comment);
        
        //  put your website saving code in here!	
        if (!this.comments) {
            this.comments = [];
        } 
        this.comments.push(comment);
        
         Websites.update({_id:this._id}, {$set: {comments: this.comments}});
        event.target.comment.value = "";
        return false;// stop the form submit from reloading the page

    }
});