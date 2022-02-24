    module.exports = {
         god_stands: {
            1:{
                1: {
                    NAME: "Gold Experience Requiem",
                    ID: "945427733494763601"
                }
            }
        },

         legendary_stands: {
            2:{
                1: {
                    NAME: "King Crimson",
                    ID: "945120315879612416"
                },

                2:{
                    NAME: "White Snake",
                    ID: "945413525080268820"
                },

                3:{
                    NAME: "The World",
                    ID: "945116154748354560"
                },

                4:{
                    NAME: "Star Platinum",
                    ID: "945120178981716009"
                },
                
                5:{
                    NAME: "Chariot Requiem",
                    ID: "945427732903391262"
                },
            }
        },

        elite_stands: {
            3:{
                1: {
                    NAME: "Gold Experience",
                    ID: "945120208597696553"
                },
                
                2:{
                    NAME: "Weather Report",
                    ID: "945413521070518312"
                },

                3:{
                    NAME: "Killer Queen",
                    ID: "945120263912177725"
                },

                4:{
                    NAME: "Crazy Diamond",
                    ID: "945418315197735042"
                },
                
                5:{
                    NAME: "The Hand",
                    ID: "945437452104007730"
                },

                6:{
                    NAME: "Purple Haze",
                    ID: "945427729254318151"
                },

                7:{
                    NAME: "Green Day",
                    ID: "945428931954233414"
                },

                8:{
                    NAME: "Heaven's Door",
                    ID: "945437507477205062"
                },

                9:{
                    NAME: "Red Hot Chilli Pepper",
                    ID: "945437539928530964"
                }
            }
        },


        ultimate_stands: {
            4:{
                1: {
                    NAME: "Silver Chariot",
                    ID: "945405497668939776"
                },
                
                2:{
                    NAME: "Magician's Red",
                    ID: "945407808533319722"
                },

                3:{
                    NAME: "Anubis",
                    ID: "945415006722347050"
                },

                4:{
                    NAME: "Hierophant Green",
                    ID: "945408928781582357"
                },
                
                5:{
                    NAME: "Metallica",
                    ID: "945428931048251422"
                },

                6:{
                    NAME: "Jumping ' Jack Flash",
                    ID: "945413536346144788"
                },

                7:{
                    NAME: "Oasis",
                    ID: "945428932851793920"
                },

                8:{
                    NAME: "Stone Free",
                    ID: "945413201791709185"
                },

                9:{
                    NAME: "White Album",
                    ID: "945428425231966208"
                },

                10:{
                    NAME: "Highway Star",
                    ID: "945437662280564797"
                },

                11:{
                    NAME: "The Fool",
                    ID: "945409287876902943"
                },

                12:{
                    NAME: "Enigma",
                    ID: "945437939993817149"
                },

                13:{
                    NAME: "Justice",
                    ID: "945410789899120681"
                },

                14:{
                    NAME: "Moody Blues",
                    ID: "945415013638766694"
                },

                15:{
                    NAME: "Hanged Man",
                    ID: "945409584863019018"
                },

                16:{
                    NAME: "Aero Smith",
                    ID: "945427727723421736"
                },

                17:{
                    NAME: "Sex Pistols",
                    ID: "945427725911490601"
                },

                17:{
                    NAME: "Echoes ACT 3",
                    ID: "945427734585307186"
                },

                18:{
                    NAME: "Soft Machine",
                    ID: "945427736145580122"
                },

                19:{
                    NAME: "Kraft Work",
                    ID: "945427736778924082"
                },

                20:{
                    NAME: "Man In The Mirror",
                    ID: "945427738825719808"
                },

                21:{
                    NAME: "The Grateful Dead",
                    ID: "945428421687775263"
                },
            }
        },




        grand_stands: {
            5:{
                1: {
                    NAME: "Black Sabboth",
                    ID: "945427735310893137"
                },
                
                2:{
                    NAME: "Death Thirteen",
                    ID: "945412858882166795"
                },

                3:{
                    NAME: "Emperor",
                    ID: "945408568218251294"
                },

                4:{
                    NAME: "Goo Goo Dolls",
                    ID: "945413530608341002"
                },
                
                5:{
                    NAME: "Foo Fighters",
                    ID: "945413523431911425"
                },

                6:{
                    NAME: "Empress",
                    ID: "945409958177038406"
                },

                7:{
                    NAME: "Marilyn Manson",
                    ID: "945413533821186069"
                },

                8:{
                    NAME: "Moody Blues",
                    ID: "945427719569686529"
                },

                9:{
                    NAME: "Osiris",
                    ID: "945415011088601208"
                },

                10:{
                    NAME: "Atum",
                    ID: "945416434643771444"
                },

                11:{
                    NAME: "Manhattan Transfer",
                    ID: "945413532084756601"
                },

                12:{
                    NAME: "Beach Boy",
                    ID: "945427739035447359"
                }
            }
        },


        standard_stands: {
            6:{
                1: {
                    NAME: "Hermit Purple",
                    ID: "945408125056467006"
                },

                2:{
                    NAME: "Pearl Jam",
                    ID: "945420317461979239"
                },

                3:{
                    NAME: "Spice Girl",
                    ID: "945427730403590175"
                },

                4:{
                    NAME: "Cinderella",
                    ID: "945420072636260403"
                },
                
                5:{
                    NAME: "Burning Down The House",
                    ID: "945413509670375434"
                }
            }
        },

        tiers: {
            1: {
                NAME: "God Tier",
                ID: "945403974939476058"
            },

            2: {
                NAME: "Legendary Tier",
                ID: "945404070762545233"
            },

            3: {
                NAME: "Elite Tier",
                ID: "945416420106317964"
            },

            4: {
                NAME: "Ultimate Tier",
                ID: "945404116669177896"
            },

            5: {
                NAME: "Grand Tier",
                ID: "945404163360182282"
            },

            6: {
                NAME: "Standard Tier",
                ID: "945404211330428950"
            }
        },


        getStandTier: function(outer) {
            let tier_num;
            let tier_name;
            if(outer <=3){
                tier_num = 1;
                tier_name = this.god_stands;
            }else if(outer <= 10){
                tier_num = 2;
                tier_name = this.legendary_stands;
            }else if(outer <= 20){
                tier_num = 3;
                tier_name = this.elite_stands;
            }else if(outer <= 60){
                tier_num = 4;
                tier_name = this.ultimate_stands;
            }else if(outer <= 85){
                tier_num = 5;
                tier_name = this.grand_stands;
            }else if(outer <= 100){
                tier_num = 6;
                tier_name = this.standard_stands;
            }else{
                console.log("An error during generating stand tier number has occured!");
            }
            return [tier_name, tier_num];
        },

        stand_user_role: "945396327481745508",

        stand_generator: function(){
            let outer_rand = Math.floor(Math.random() * 100) + 1;           // Random generator for stand category
            let tier_info = this.getStandTier(outer_rand);            // 2 element array [tier obj, tier number]
            let tier_len = Object.keys(tier_info[0][tier_info[1]]).length;  // Number of stands in the tier
            let inner_rand = Math.floor(Math.random() * tier_len) + 1;      // Random generator for stand within a category
            let stand = tier_info[0][tier_info[1]][inner_rand];             // Stand object
            let tier_category = this.tiers[tier_info[1]];             // Tier object


            return [stand.NAME ,stand.ID, tier_category.ID];
        }
    };