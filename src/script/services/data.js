(function(){
    'use strict';
    angular
        .module('app')
        .factory('dataService', dataService)
    dataService.$inject = ['$http'];
    function dataService($http) {
        return {
            getHeadSubListData: function(){
                return [
                    {
                        id: 1,
                        name: '首页',
                        isActive: true,
                        sref: 'index.main'
                    },
                    {
                        id: 2,
                        name: '歌手',
                        isActive: false,
                        sref: 'index.singer'
                    },
                    {
                        id: 3,
                        name: '专辑',
                        isActive: false,
                        sref: 'index.album'
                    },
                    {
                        id: 4,
                        name: '排行榜',
                        isActive: false,
                        sref: 'index.toplist'
                    },
                    {
                        id: 5,
                        name: '分类歌单',
                        isActive: false,
                        sref: 'index.cate'
                    },
                    {
                        id: 6,
                        name: 'MV',
                        isActive: false,
                        sref: 'index.mv'
                    }
                ]
            },
            getTopNavListData: function(){
                return [
                    {
                        id: 1,
                        name: '音乐馆',
                        isActive: true
                    },
                    {
                        id: 2,
                        name: '我的音乐',
                        isActive: false
                    },
                    {
                        id: 3,
                        name: '下载客户端',
                        isActive: false
                    },
                    {
                        id: 4,
                        name: 'VIP',
                        isActive: false
                    }
                ]
            },
            getHotkeyListData: function(){
                return [
                {
                    id: 1,
                    name: '三生三世十里桃花',
                    listen: '73.8'
                },
                {
                    id: 2,
                    name: '薛之谦',
                    listen: '44.8'
                },
                {
                    id: 3,
                    name: '刚好遇见你',
                    listen: '42.8'
                },
                {
                    id: 4,
                    name: '成都',
                    listen: '30.2'
                },
                {
                    id: 5,
                    name: '林俊杰',
                    listen: '20.8'
                }
                ]
            },
            getInnertabListData: function(){
                return [
                    {
                        id: 1,
                        name: '内地',
                        isActive: true
                    },{
                        id: 2,
                        name: '港台',
                        isActive: false
                    },{
                        id: 3,
                        name: '欧美',
                        isActive: false
                    },{
                        id: 4,
                        name: '韩国',
                        isActive: false
                    },{
                        id: 5,
                        name: '日本',
                        isActive: false
                    }
                ]
            },
            getSlideListData: function(){
                return [
                		[
                    {
                        id: 1,
                        url: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002aWIVK0qvVTB.jpg?max_age=2592000',
                        title: 'Venture',
                        singername: '鹿晗'
                    },
                    {
                        id: 2,
                        url: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002ii9Wi38FJRl.jpg?max_age=2592000',
                        title: '歌手 第六期',
                        singername: '歌手'
                    },
                    {
                        id: 3,
                        url: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003Brzcz0750f6.jpg?max_age=2592000',
                        title: '我管你（真我版）',
                        singername: '华晨宇'
                    },
                    {
                        id: 4,
                        url: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000X8J251PdIEJ.jpg?max_age=2592000',
                        title: 'It is Love (Electronic Version)',
                        singername: '张碧晨'
                    }
					],
					
					[
                    {
                        id: 5,
                        url: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004FV4Ag02s8JA.jpg?max_age=2592000',
                        title: '我们生来孤独',
                        singername: '卢庚戌'
                    },
                    {
                        id: 6,
                        url: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004BWjc704lr36.jpg?max_age=2592000',
                        title: '建筑师的梦想',
                        singername: '金志文'
                    },
                    {
                        id: 7,
                        url: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004ViizO1cBlXp.jpg?max_age=2592000',
                        title: 'The Golden Collection 金选',
                        singername: '尚雯婕'
                    },
                    {
                        id: 8,
                        url: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003C5PzD4LEDqB.jpg?max_age=2592000',
                        title: '向天再要500话',
                        singername: '上海彩虹室内合唱团'
                    }
                    ],

					[
                    {
                        id: 9,
                        url: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000NMVWk1wMvJp.jpg?max_age=2592000',
                        title: '回头爱',
                        singername: '苏琛'
                    },
                    {
                        id: 10,
                        url: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001qWO661MvL9Z.jpg?max_age=2592000',
                        title: '轻狂',
                        singername: '陈翔'
                    },
                    {
                        id: 11,
                        url: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003TE5jB2ilKfC.jpg?max_age=2592000',
                        title: '天下无敌',
                        singername: '郁可唯'
                    },
                    {
                        id: 12,
                        url: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000zSKot1ozN6k.jpg?max_age=2592000',
                        title: '启程',
                        singername: '赵照'
                    }
                    ],

					[
                    {
                        id: 13,
                        url: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000Pe5mu4M9xDJ.jpg?max_age=2592000',
                        title: '我们的热血传奇',
                        singername: '南征北战'
                    },
                    {
                        id: 14,
                        url: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000032UyVG4NTKZg.jpg?max_age=2592000',
                        title: '思美人',
                        singername: '张靓颖'
                    },
                    {
                        id: 15,
                        url: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000000YviL1ysJiM.jpg?max_age=2592000',
                        title: '给眼泪一点时间',
                        singername: '黄雅莉'
                    },
                    {
                        id: 16,
                        url: 'https://y.gtimg.cn/music/photo_new/T002R300x300M00000052U6A12niCZ.jpg?max_age=2592000',
                        title: '回声',
                        singername: '周深'
                    }
                    ]
                ]
            },
            getNewSwiperdata: function(){
            		return [
            			{
            				id: 1,
            				url: 'https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/77136.jpg'
            			},
            			{
            				id: 2,
            				url: 'https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/76975.jpg'
            			},
            			{
            				id: 3,
            				url: 'https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/76803.jpg'
            			},
            			{
            				id: 4,
            				url: 'https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/76165.jpg'
            			},
            			{
            				id: 5,
            				url: 'https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/76852.jpg'
            			},
            			{
            				id: 6,
            				url: 'https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/76850.jpg'
            			},
            			{
            				id: 7,
            				url: 'https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/74334.jpg'
            			},
            			{
            				id: 8,
            				url: 'https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/76874.jpg'
            			},
            			{
            				id: 9,
            				url: 'https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/76078.jpg'
            			},
            			{
            				id: 10,
            				url: 'https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/75656.jpg'
            			}
            		]
            },
            getToplistdata: function(){
            		return [
            			{
            				id: 1,
            				title: '流行指数',
            				list: [
            					{
            						id: 1,
            						name: '哥哥',
            						singer: '张杰'
            					},
            					{
            						id:2,
            						name: '三十岁的女人 (Live)',
            						singer: '赵雷'
            					},
            					{
            						id: 3,
            						name: '很想很想说再见 (Live)',
            						singer: '侧田'
            					},
            					{
            						id:4,
            						name: 'Something Just Like This',
            						singer: 'The Chainsmokers/Coldplay'
            					}
            				]
            			},
            			{
            				id: 2,
            				title: '热歌',
            				list: [
            					{
            						id:1,
            						name: '凉凉',
            						singer: '杨宗纬/张碧晨'
            					},
            					{
            						id: 2,
            						name: '刚好遇见你',
            						singer: '李玉刚'
            					},
            					{
            						id: 3,
            						name: '三生三世',
            						singer: '张杰'
            					},
            					{
            						id: 4,
            						name: 'Something Just Like This',
            						singer: 'The Chainsmokers/Coldplay'
            					}
            				]
            			},
            			{
            				id: 3,
            				title: '新歌',
            				list: [
            					{
            						id: 1,
            						name: '就算没有如果',
            						singer: '香香'
            					},
            					{
            						id: 2,
            						name: '那个静默的阳光午后',
            						singer: '范玮琪'
            					},
            					{
            						id: 3,
            						name: 'Something Just Like This',
            						singer: 'The Chainsmokers/Coldplay'
            					},
            					{
            						id: 4,
            						name: '火花',
            						singer: 'Rita黄汐源'
            					}
            				]
            			},
            			{
            				id: 4,
            				title: '欧美',
            				list: [
            					{
            						id: 1,
            						name: 'It Aint Me',
            						singer: 'Kygo/Selena Gomez'
            					},
            					{
            						id: 2,
            						name: 'Heavy',
            						singer: 'Linkin Park/Kiiara'
            					},
            					{
            						id: 3,
            						name: 'Something Just Like This',
            						singer: 'The Chainsmokers/Coldplay'
            					},
            					{
            						id: 4,
            						name: 'Game Time',
            						singer: 'Flo Rida/Sage the Gemini'
            					}
            				]
            			}
            		]
            },
            getTaogelistdata: function(){
                return[
                    [
                        {
                            id: 1,
                            url: "https://p.qpic.cn/music_cover/BmOdzdMZlr7VR7sd0wfX5pqicS1TibibI8SdAPcywJMW1cRs1lMlW1A6g/300?n=1",
                            title: '快把手机关掉！50首祸害舍友的起床铃声',
                            info: ' 播放量：175.8万'
                        },
                        {
                            id: 2,
                            url: 'https://p.qpic.cn/music_cover/KJsLrpZSfn8wcHEzkQhfhubj6qpGA8bK3J5ZJKW3DJL3KYcqP5bsbw/300?n=1',
                            title: '华语：曾经以为，牵手了就是一辈子',
                            info: '播放量：240.2万'
                        },
                        {
                            id: 3,
                            url: 'https://p.qpic.cn/music_cover/3y6bAxXh7FnIic7XGrg707E9vWe2NYQNsZVYEEvTqhr2iaVVI5xxDrsQ/300?n=1',
                            title: '余音绕耳久听不腻 绝不能错过的英文歌',
                            info: '播放量：94.5万'
                        },
                        {
                            id: 4,
                            url: 'https://p.qpic.cn/music_cover/r6icia7PvgODDNbOlnqBbJwiaw3Ric3LyBQK2AB3JwluXrveyL7ibAnqgOA/300?n=1',
                            title: '这些复古醇嗓，可听一辈子|灵歌经典',
                            info: '播放量：20万'
                        }
                    ],
                    [
                        {
                            id: 5,
                            url: 'https://p.qpic.cn/music_cover/c7wEsoZEtvjmodM2LpcAqibYy4VfuAo7Nn4ga59pozDkLnlDCcH7Xdg/300?n=1',
                            title: '拒绝枯燥！闹铃神曲合集',
                            info: '播放量：34.5万'
                        },
                        {
                            id: 7,
                            url: 'https://p.qpic.cn/music_cover/T5wSZNgEHnsgwv49PPqjmiapEm7QJUpe4cPUVACtuoa90ZKGeiad3Hew/300?n=1',
                            title: '【节奏控】超带感的英文歌！',
                            info: '播放量：34.5万'
                        },
                        {
                            id: 8,
                            url: 'https://p.qpic.cn/music_cover/Cz8Z9ECDQia3gE2YticLiaJ28jo6uoIaVn3mMLqmbdO3KEOtf78c8PxCw/300?n=1',
                            title: '带磁性的纯音乐小集| 你准备一起摇滚吗',
                            info: '播放量：7.5万'
                        },
                        {
                            id: 9,
                            url: 'https://p.qpic.cn/music_cover/oQ7QIr12iawo8AdKZPxIeudqfJ7oWpSxibKxTZycjjfC7RKDsY9W6nQA/300?n=1',
                            title: '治愈系，抚平你内心的不安与伤口',
                            info: '播放量：31.5万'
                        }
                    ],
                    [
                        {
                            id: 10,
                            url: 'https://p.qpic.cn/music_cover/TPTQPoBDp8OplC2Tkaewjib6NFzBWlvVFCZryRLbbae9S3czzPYXUvg/300?n=1',
                            title: '欧美丨音乐青春，记载着我们那份热情洋溢',
                            info: '播放量：5.5万'
                        },
                        {
                            id: 11,
                            url: 'https://p.qpic.cn/music_cover/zmsrxiclIyfL4fvWRkSgicZTUf2WuM42mM78icItAYibYEE65l5fnIGD5g/300?n=1',
                            title: '海蓝时见鲸 梦醒时见你',
                            info: '播放量：7.5万'
                        },
                        {
                            id: 12,
                            url: 'https://p.qpic.cn/music_cover/5jvDX14RLylr9k5PnsA7jlordicUibkfsr5DVppwiaBLkL7ohvlkViczicA/300?n=1',
                            title: 'Melbourne Bounce丨挑动你神经的动感旋律',
                            info: '播放量：6.5万'
                        },
                        {
                            id: 6,
                            url: 'https://y.gtimg.cn/music/photo_new/T005R600x600M000003GfwKf38JGUo.jpg?n=1',
                            title: '日本治愈民谣',
                            info: '播放量：56.3万'
                        }
                    ]
                ]
            },
            getFirstlaunchdata: function(){
                return [
                    {
                        id: 1,
                        url: 'https://shp.qpic.cn/qqvideo_ori/0/p0023aky0g4_360_204/0',
                        text: 'シュートサイン',
                        desc: 'AKB48',
                        listen: 4.6
                    },{
                        id: 2,
                        url: 'https://shp.qpic.cn/qqvideo_ori/0/r0023q4d7xj_360_204/0',
                        text: 'I am a Lady',
                        desc: 'Meghan Trainor',
                        listen: '0.16'
                    },{
                        id: 3,
                        url: 'https://shp.qpic.cn/qqvideo_ori/0/d0022ld4jkk_360_204/0',
                        text: 'Green Light',
                        desc: 'Lorde',
                        listen: '2.4'
                    },{
                        id: 4,
                        url: 'https://shp.qpic.cn/qqvideo_ori/0/k00220j0ill_360_204/0',
                        text: 'That is What I Like',
                        desc: 'Bruno Mars',
                        listen: '5.5'
                    },{
                        id: 5,
                        url: 'https://shp.qpic.cn/qqvideo_ori/0/d0022zcsu73_360_204/0',
                        text: '敢 Roleplay (剧情版)',
                        desc: '鹿晗',
                        listen: '68.1'
                    },{
                        id: 8,
                        url: 'https://shp.qpic.cn/qqvideo_ori/0/r0022mwkrvp_360_204/0',
                        text: '一起去冒险',
                        desc: '洛天依',
                        listen: '2.8'
                    },{
                        id: 6,
                        url: 'https://shp.qpic.cn/qqvideo_ori/0/w0022e9s55t_360_204/0',
                        text: 'インフルエンサー',
                        desc: '乃木坂46',
                        listen: '6.8'
                    },{
                        id: 7,
                        url: 'https://shp.qpic.cn/qqvideo_ori/0/g00225uuujd_360_204/0',
                        text: '你好久没来',
                        desc: '庄心妍',
                        listen: '4.9'
                    }
                ]
            }
        }
    }
})();
