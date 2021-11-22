class Settings{
    constructor(root){
        this.root = root;
        this.platform = "WEB";
        if(this.root.AcWingOS) this.platform = "ACAPP";
        this.username = "";
        this.photo = "";
        
        this.$settings = $(`
<div class="ac-game-settings">
    <div class="ac-game-settings-login">

    </div>
    <div class="ac-game-settings-register">
    </div>
</div>
`);
        this.$login = this.$settings.find(".ac-game-settings-login");

        this.$register = this.$settings.find(".ac-game-settings-register");

        this.root.$ac_game.append(this.$settings);

        this.start();
    }

    start(){
        this.getinfo();
    }

    register(){  //打开注册界面

    }

    login(){    //打开登陆界面
        
    }


    getinfo(){
        let outer = this;

        $.ajax({
            url: "http://119.91.23.137:8000/settings/getinfo/",
            type: "GET",
            data:{
                platform: outer.platform,
            },
            success: function(resp) {
                console.log(resp);
                if(resp.result === "success"){
                    outer.username = resp.username;
                    outer.photo = resp.photo;
                    outer.hide();
                    outer.root.menu.show();
                }else{
                    outer.login();
                }
            }
        });
    }
    
    hide(){
        this.$settings.hide();
    }
    
    show(){
        this.$settings.show();
    }


}
