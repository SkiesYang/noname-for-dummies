import { lib, game, ui, get, ai, _status } from "../noname.js";
game.import("character", function () {
	return {
		name: "xianding",
		connect: true,
		character: {
			wu_huangfusong: ["male", "qun", 4, ["dcchaozhen", "dclianjie", "dcjiangxian"]],
			wenyuan: ["female", "shu", 3, ["dckengqiang", "dckuichi", "dcshangjue"]],
			dc_jiangqing: ["male", "wu", 4, ["dcshangyi", "dcniaoxiang"], ["die_audio:gz_jiangqing"]],
			dc_tianfeng: ["male", "qun", 3, ["sijian", "dcsuishi"], ["die_audio:tianfeng"]],
			dc_zhangren: ["male", "qun", 4, ["dcchuanxin", "dcfengshi"], ["die_audio:zhangren"]],
			dc_lingcao: ["male", "wu", "3/5", ["dcdufeng"]],
			zhugejing: ["male", "qun", 3, ["dcyanzuo", "dczuyin", "dcpijian"]],
			liutan: ["female", "shu", 3, ["dcjingyin", "dcchixing"]],
			bianyue: ["female", "wei", 3, ["dcbizu", "dcwuxie"]],
			zhupeilan: ["female", "wu", 3, ["dccilv", "dctongdao"]],
			guanyue: ["male", "shu", 4, ["dcshouzhi", "dcfenhui"]],
			sp_zhenji: ["female", "qun", 3, ["dcjijie", "dchuiji"]],
			wu_guanyu: ["male", "shu", 5, ["dcjuewu", "dcwuyou", "dcyixian"]],
			caofang: ["male", "wei", 4, ["dczhimin", "dcjujian"], ["zhu"]],
			chendong: ["male", "wu", 4, ["dcduanxie", "fenming"]],
			lvfan: ["male", "wu", 3, ["diaodu", "diancai"]],
			cuimao: ["male", "wei", 3, ["zhengbi", "fengying"]],
			huzun: ["male", "wei", 4, ["dczhantao", "dcanjing"]],
			zhugemengxue: ["female", "wei", 3, ["dcjichun", "dchanying"]],
			bailingyun: ["female", "wei", 3, ["dclinghui", "dcxiace", "dcyuxin"]],
			dc_qinghegongzhu: ["female", "wei", 3, ["dczhangji", "dczengou"]],
			caoxian: ["female", "wei", 3, ["dclingxi", "dczhifou"]],
			// 解放张臶（但AI禁选）
			zhangjian: ["male", "qun", 105, ["dc_zj_a", "dc_zj_b"], ["forbidai"]],
			// zhangjian: ["male", "qun", 105, ["dc_zj_a", "dc_zj_b"], ["unseen"]],
			zhugeruoxue: ["female", "wei", 3, ["dcqiongying", "dcnuanhui"]],
			caoyi: ["female", "wei", 4, ["dcmiyi", "dcyinjun"]],
			malingli: ["female", "shu", 3, ["dclima", "dcxiaoyin", "dchuahuo"]],
			wu_luxun: ["male", "wu", 3, ["dcxiongmu", "dczhangcai", "dcruxian"]],
			dc_xujing: ["male", "shu", 3, ["dcshangyu", "dccaixia"]],
			dc_zhaoxiang: ["female", "shu", 4, ["refanghun", "refuhan"]],
			dc_guansuo: ["male", "shu", 4, ["xinzhengnan", "xiefang"]],
			xin_baosanniang: ["female", "shu", 3, ["decadewuniang", "decadexushen"]],
			xurong: ["male", "qun", 4, ["xinfu_xionghuo", "xinfu_shajue"], []],
			zhangqiying: ["female", "qun", 3, ["xinfu_falu", "xinfu_dianhua", "xinfu_zhenyi"], []],
			dc_shixie: ["male", "qun", 3, ["rebiluan", "ollixia"]],
			dc_sp_machao: ["male", "qun", 4, ["zhuiji", "dc_olshichou"]],
			old_huangfusong: ["male", "qun", 4, ["xinfenyue"]],
			dc_xiahouba: ["male", "shu", 4, ["rebaobian"]],
			dc_daxiaoqiao: ["female", "wu", 3, ["dcxingwu", "dcluoyan"], ["tempname:daxiaoqiao"]],
			tianshangyi: ["female", "wei", 3, ["dcposuo", "dcxiaoren"]],
			sunlingluan: ["female", "wu", 3, ["dclingyue", "dcpandi"]],
			dc_wangjun: ["male", "qun", 4, ["dctongye", "dcchangqu"]],
			zhoubuyi: ["male", "wei", 3, ["dcshiji", "dcsilun"]],
			dc_duyu: ["male", "wei", 4, ["dcjianguo", "dcdyqingshi"]],
			ganfurenmifuren: ["female", "shu", 3, ["dcchanjuan", "dcxunbie"]],
			dc_ganfuren: ["female", "shu", 3, ["dcshushen", "dcshenzhi"]],
			dc_mifuren: ["female", "shu", 3, ["dcguixiu", "dccunsi"]],
			wanglang: ["male", "wei", 3, ["regushe", "rejici"]],
			ruanji: ["male", "wei", 3, ["dczhaowen", "dcjiudun"]],
			wu_zhugeliang: ["male", "shu", "4/7", ["dcjincui", "dcqingshi", "dczhizhe"]],
			duanqiaoxiao: ["female", "wei", 3, ["dccaizhuang", "dchuayi"]],
			zhangjinyun: ["female", "shu", 3, ["dchuizhi", "dcjijiao"]],
			huanfan: ["male", "wei", 3, ["dcjianzheng", "dcfumou"]],
			chentai: ["male", "wei", 4, ["dcctjiuxian", "dcchenyong"]],
			sunyu: ["male", "wu", 3, ["dcquanshou", "dcshexue"]],
			xizheng: ["male", "shu", 3, ["dcdanyi", "dcwencan"]],
			dc_ruiji: ["female", "wu", 4, ["dcwangyuan", "dclingyin", "dcliying"]],
			zerong: ["male", "qun", 4, ["dccansi", "dcfozong"]],
			xielingyu: ["female", "wu", 3, ["dcyuandi", "dcxinyou"]],
			dc_yangbiao: ["male", "qun", 3, ["dczhaohan", "dcjinjie", "dcjue"]],
			dc_tengfanglan: ["female", "wu", 3, ["dcluochong", "dcaichen"]],
			yanghong: ["male", "qun", 3, ["dcjianji", "dcyuanmo"]],
			xuelingyun: ["female", "wei", 3, ["dcxialei", "dcanzhi"]],
			dc_wangyun: ["male", "qun", 4, ["dclianji", "dcmoucheng"], ["clan:太原王氏"]],
			dc_zhouxuān: ["male", "wei", 3, ["dcwumei", "dczhanmeng"]],
			chengbing: ["male", "wu", 3, ["dcjingzao", "dcenyu"]],
			dongguiren: ["female", "qun", 3, ["dclianzhi", "dclingfang", "dcfengying"]],
			yuanji: ["female", "wu", 3, ["dcfangdu", "dcjiexing"]],
			zhujianping: ["male", "qun", 3, ["dcxiangmian", "dctianji"]],
			zhaozhi: ["male", "shu", 3, ["dctongguan", "dcmengjie"]],
			dc_liuye: ["male", "wei", 3, ["dcpoyuan", "dchuace"]],
			luyi: ["female", "qun", 3, ["dcyaoyi", "dcfuxue"]],
			dingshangwan: ["female", "wei", 3, ["dcfengyan", "dcfudao"]],
			quanhuijie: ["female", "wu", 3, ["dchuishu", "dcyishu", "dcligong"]],
			dukui: ["male", "wei", 3, ["dcfanyin", "dcpeiqi"]],
			zhangfen: ["male", "wu", 4, ["dcwanglu", "dcxianzhu", "dcchaixie"]],
			liuhui: ["male", "qun", 4, ["dcgeyuan", "dcjieshu", "dcgusuan"]],
			dc_wangchang: ["male", "wei", 3, ["dckaiji", "dcpingxi"], ["clan:太原王氏"]],
			zhaoang: ["male", "wei", "3/4", ["dczhongjie", "dcsushou"]],
			caohua: ["female", "wei", 3, ["caiyi", "guili"]],
			dc_liuyu: ["male", "qun", 3, ["dcsuifu", "dcpijing"]],
			dc_huangzu: ["male", "qun", 4, ["dcjinggong", "dcxiaojuan"]],
			laiyinger: ["female", "qun", 3, ["xiaowu", "huaping"]],
			caomao: ["male", "wei", "3/4", ["qianlong", "fensi", "juetao", "zhushi"], ["zhu"]],
			dc_luotong: ["male", "wu", 3, ["renzheng", "jinjian"]],
			re_fengfangnv: ["female", "qun", 3, ["tiqi", "baoshu"]],
			wufan: ["male", "wu", 4, ["tianyun", "wfyuyan"]],
			re_zhangbao: ["male", "qun", 3, ["xinzhoufu", "xinyingbing"]],
			re_sunyi: ["male", "wu", 5, ["syjiqiao", "syxiongyi"]],
			caojinyu: ["female", "wei", 3, ["yuqi", "shanshen", "xianjing"]],
			zhouyi: ["female", "wu", 3, ["zhukou", "mengqing"]],
			re_panshu: ["female", "wu", 3, ["zhiren", "yaner"]],
			yangwan: ["female", "shu", 3, ["youyan", "zhuihuan"]],
			ruanyu: ["male", "wei", 3, ["xingzuo", "miaoxian"]],
			fanyufeng: ["female", "qun", 3, ["bazhan", "jiaoying"]],
			guozhao: ["female", "wei", 3, ["pianchong", "zunwei"]],
			re_xinxianying: ["female", "wei", 3, ["rezhongjian", "recaishi"]],
			liubian: ["male", "qun", 3, ["shiyuan", "dushi", "yuwei"], ["zhu"]],
			re_liuzan: ["male", "wu", 4, ["refenyin", "liji"]],
			wenyang: ["male", "wei", 5, ["xinlvli", "choujue"]],
			wangshuang: ["male", "wei", 8, ["spzhuilie"]],
			huaman: ["female", "shu", 3, ["manyi", "mansi", "souying", "zhanyuan"]],
			puyuan: ["male", "shu", 4, ["pytianjiang", "pyzhuren"]],
			guanlu: ["male", "wei", 3, ["tuiyan", "busuan", "mingjie"]],
			gexuan: ["male", "wu", 3, ["gxlianhua", "zhafu"]],
			leitong: ["male", "shu", 4, ["kuiji"]],
			wulan: ["male", "shu", 4, ["wlcuorui"]],
		},
		characterSort: {
			xianding: {
				sp2_huben: ["dc_zhangren", "dc_jiangqing", "chendong", "wangshuang", "wenyang", "re_liuzan", "dc_huangzu", "wulan", "leitong", "chentai", "dc_duyu", "dc_wangjun", "dc_xiahouba", "old_huangfusong", "huzun", "dc_lingcao"],
				sp2_shengun: ["puyuan", "guanlu", "gexuan", "wufan", "re_zhangbao", "dukui", "zhaozhi", "zhujianping", "dc_zhouxuān", "zerong"],
				sp2_bizhe: ["dc_luotong", "dc_wangchang", "chengbing", "dc_yangbiao", "ruanji", "cuimao"],
				sp2_huangjia: ["caomao", "liubian", "dc_liuyu", "quanhuijie", "dingshangwan", "yuanji", "xielingyu", "sunyu", "ganfurenmifuren", "dc_ganfuren", "dc_mifuren", "dc_shixie", "caofang", "zhupeilan", "bianyue"],
				sp2_zhangtai: ["guozhao", "fanyufeng", "ruanyu", "yangwan", "re_panshu"],
				sp2_jinse: ["wenyuan", "liutan", "caojinyu", "re_sunyi", "re_fengfangnv", "caohua", "laiyinger", "zhangfen", "zhugeruoxue", "caoxian", "dc_qinghegongzhu", "zhugemengxue"],
				sp2_yinyu: ["zhouyi", "luyi", "sunlingluan", "caoyi"],
				sp2_wangzhe: ["dc_daxiaoqiao", "dc_sp_machao", "sp_zhenji"],
				sp2_doukou: ["re_xinxianying", "huaman", "xuelingyun", "dc_ruiji", "duanqiaoxiao", "tianshangyi", "malingli", "bailingyun"],
				sp2_jichu: ["zhaoang", "dc_liuye", "dc_wangyun", "yanghong", "huanfan", "xizheng", "lvfan", "dc_tianfeng"],
				sp2_yuxiu: ["dongguiren", "dc_tengfanglan", "zhangjinyun", "zhoubuyi", "dc_xujing", "guanyue", "zhugejing"],
				sp2_qifu: ["dc_guansuo", "xin_baosanniang", "dc_zhaoxiang", "xurong", "zhangqiying"],
				sp2_gaoshan: ["wanglang", "liuhui"],
				sp2_wumiao: ["wu_zhugeliang", "wu_luxun", "wu_guanyu", "wu_huangfusong"],
				
				xianding_waitforsort: ["zhangjian"],
			},
		},
		characterSubstitute: {
			dc_sb_simayi: [
				["dc_sb_simayi_shadow", []],
			],
			dc_sb_zhouyu: [
				["dc_sb_zhouyu_shadow", []],
			],
			dc_sb_lusu: [
				["dc_sb_lusu_shadow", []],
			],
			dc_sb_jiaxu: [
				["dc_sb_jiaxu_shadow", []],
			],
			yj_sb_guojia: [
				["yj_sb_guojia_shadow", []],
			],
		},
		skill: {
			//武皇甫嵩
			dcchaozhen: {
				audio: 2,
				trigger: {
					player: ["phaseZhunbeiBegin", "dying"],
				},
				async cost(event, trigger, player) {
					const list = ["场上", "牌堆", "cancel2"];
					if (!game.hasPlayer(function (current) {
						return current.countCards("ej");
					})) list.remove("场上");
					const control = await player
						.chooseControl(list, () => {
							const player = _status.event.player;
							let cards = game.filterPlayer().reduce((arr, current) => {
								if (current.countCards("ej")) arr.addArray(current.getCards("ej"));
								return arr;
							}, []).sort((a, b) => get.number(a, false) - get.number(b, false));
							if (!cards.length) return "牌堆";
							if ((player.maxHp < 2 || player.hp < 1) && get.number(cards[0], false) > 1) return "牌堆";
							cards = cards.filter(card => get.number(card, false) == get.number(cards[0], false));
							let valueCards = cards.filter(card => {
								let owner = get.owner(card);
								if (!owner) return false;
								let att = get.attitude(player, owner);
								if (get.position(card) == "j" && (card.viewAs || card.name) == "jsrg_xumou") att *= -1;
								if (get.position(card) == "e" && get.equipValue(card, owner) > 0) att*= -1;
								return att > 0;
							});
							if(valueCards.length * 2 >= cards.length) return "场上";
							return "牌堆";
						})
						.set("prompt", get.prompt2("dcchaozhen"))
						.forResultControl();
					event.result = {
						bool: control != "cancel2",
						cost_data: control,
					};
				},
				async content(event, trigger, player) {
					const control = event.cost_data;
					var num = 1, card;

					if (control == "场上") {
						let cards = game.filterPlayer().reduce((arr, current) => {
							if (current.countCards("ej")) arr.addArray(current.getCards("ej"));
							return arr;
						}, []).sort((a, b) => get.number(a, false) - get.number(b, false));
						num = get.number(cards[0], false);
						card = cards.filter(card => get.number(card, false) == num).randomGet();
					}
					else {
						while (num < 14) {
							let cardx = get.cardPile2(card => get.number(card, false) == num);
							if (cardx) {
								card = cardx;
								break;
							}
							else num++;
						}
					}
					if (card) {
						await player.gain(card, get.owner(card) ? "give" : "gain2");
						if (num == 1) {
							await player.recover();
							player.tempBanSkill("dcchaozhen");
						}
						else await player.loseMaxHp();
					}
				},
			},
			dclianjie: {
				audio: 2,
				trigger: {
					player: "useCardToPlayered",
				},
				locked: false,
				filter(event, player) {
					if (!player.hasHistory("lose", evt => {
						if (evt.getParent() != event.getParent()) return false;
						return event.cards.some(card => (evt.hs || []).includes(card));
					}) || player.countCards("h") >= player.maxHp) return false;
					const num = get.number(event.card, player) || 0;
					if (player.countCards("h", card => {
						return get.number(card, player) < num;
					}) || !player.countCards("h")) return false;
					return !player.getStorage("dclianjie_used").includes(num);
				},
				check(event, player) {
					if (player.countCards("h") < 2 || !player.isPhaseUsing()) return true;
					if (player.countCards("h", card => player.hasValueTarget(card) && !player.countCards("h", cardx =>{
						return get.number(cardx, player) < get.number(card, player);
					}) && !player.getStorage("dclianjie_used").includes(get.number(card, player)))) return false;
					return true;
				},
				async content(event, trigger, player) {
					player.addTempSkill("dclianjie_used");
					player.markAuto("dclianjie_used", [get.number(trigger.card) || 0])
					const result = await player.drawTo(player.maxHp).forResult();
					if (result) player.addGaintag(result, "dclianjie");
				},
				mod: {
					aiOrder: function (player, card, num) {
						var number = get.number(card, player);
						if (player.countCards("h") < player.maxHp) {
							return num + number / 10;
						}
						else if (!player.getStorage("dclianjie_used").includes(number)) {
							return num - 0.5;
						}
					},
				},
				subSkill: {
					used: {
						charlotte: true,
						onremove(player, skill) {
							delete player.storage[skill];
							player.removeGaintag("dclianjie");
						},
						mod: {
							targetInRange(card, player, target) {
								if (get.suit(card) == "unsure") return true;
								if (!card.cards) return;
								for (var i of card.cards) {
									if (i.hasGaintag("dclianjie")) return true;
								}
							},
							cardUsable(card, player, num) {
								if (get.suit(card) == "unsure") return Infinity;
								if (!card.cards) return;
								for (var i of card.cards) {
									if (i.hasGaintag("dclianjie")) return Infinity;
								}
							},
						},
						intro: {
							// content: (storage, player) => `已摸点数：${get.translation(storage)}`,
							content: (storage, player) => `已摸点数：${get.translation(storage).replace("13", "K").replace("12", "Q").replace("11", "J").replace("1", "A")}`,
						},
					},
				},
			},
			dcjiangxian: {
				audio: 2,
				enable: "phaseUse",
				limited: true,
				skillAnimation: false,
				chooseButton: {
					dialog(event, player) {
						const dialog = ui.create.dialog("将贤：你可以选择一项", "hidden");
						dialog.add([
							[
								["dcchaozhen", "失去〖朝镇〗，将体力上限和手牌上限增加至5"],
								["dclianjie", "本回合因使用〖连捷〗摸的牌造成的伤害+X（X为你本回合造成伤害的次数且至多为5），回合结束后失去〖连捷〗"],
							],
							"textbutton",
						]);
						return dialog;
					},
					check(button) {
						const player = get.player();
						if (button.link == "dcchaozhen")
							return 5 - player.maxHp;
						if (button.link == "dclianjie")
							return 3;
						return 0.1;
					},
					backup(links) {
						return {
							audio: "dcjiangxian",
							filterCard: () => false,
							selectCard: -1,
							str: links[0],
							filterTarget: () => false,
							selectTarget: -1,
							skillAnimation: true,
							animationColor: "metal",
							async content(event, trigger, player) {
								player.awakenSkill("dcjiangxian");
								const str = lib.skill.dcjiangxian_backup.str;
								if (str == "dcchaozhen") {
									player.removeSkills("dcchaozhen");
									if (player.maxHp < 5) await player.gainMaxHp(5 - player.maxHp);
									player.addSkill("dcjiangxian_" + str);
								}
								else player.addTempSkill("dcjiangxian_" + str);
							},
						};
					},
					prompt(links) {
						return `点击“确定”，${links[0] === "dcchaozhen" ? "失去〖朝镇〗，将体力上限和手牌上限增加至5" : "本回合因使用〖连捷〗摸的牌造成的伤害+X（X为你本回合造成伤害的次数且至多为5），回合结束后失去〖连捷〗"}`;
					},
				},
				subSkill: {
					backup: {},
					dcchaozhen: {
						charlotte: true,
						mark: true,
						intro: {
							content: "手牌上限增至5",
						},
						mod: {
							maxHandcard: (player, num) => Math.max(5, num),
						},
					},
					dclianjie: {
						charlotte: true,
						mark: true,
						intro: {
							content: "本回合因使用〖连捷〗摸的牌造成的伤害+X（X为你本回合造成伤害的次数且至多为5），回合结束后失去〖连捷〗",
						},
						onremove(player) {
							player.removeSkills("dclianjie");
						},
						trigger: {
							source: "damageBegin1",
						},
						filter(event, player) {
							if (!player.hasHistory("lose", evt => {
								let gaintag = false;
								if (evt.getParent() != event.getParent("useCard")) return false;
								for (var i in evt.gaintag_map) {
									if (evt.gaintag_map[i].includes("dclianjie")) gaintag = true;
								}
								return gaintag && event.cards.some(card => (evt.hs || []).includes(card));
							})) return false;
							return player.getHistory("sourceDamage").length > 0;
						},
						forced: true,
						locked: false,
						async content(event, trigger, player) {
							trigger.num += Math.min(5, player.getHistory("sourceDamage").length);
						},
					},
				},
				ai: {
					order: 10,
					threaten: 2.9,
					result: {
						player(player) {
							const enemies = game.filterPlayer(current => {
								return (!get.rawAttitude || get.rawAttitude(player, current) < 0) && get.attitude(player, current) >= 0;
							}),
								knownEnemies = game.filterPlayer(current => {
									return get.attitude(player, current) < 0;
								});
							if ((!knownEnemies.length && player.countCards("e") > 1) || (player.getHp() > 3 && enemies.length > 0 && knownEnemies.length < 2 && knownEnemies.length < enemies.length && !knownEnemies.some(enemy => get.attitude(player, enemy) <= -9))) return 0;
							const val1 = 5 - player.maxHp;
							const val2 = 3;
							return Math.max(val1, val2) > 20 ? 4 : 0;
						},
					},
				},
			},
			//文鸳
			dckengqiang: {
				audio: 2,
				trigger: {
					source: "damageBegin1",
				},
				filter(event, player) {
					const num = player.storage.dcshangjue ? 2 : 1;
					return player.getStorage("dckengqiang_used").length < num;
				},
				async cost(event, trigger, player) {
					const result = await player
						.chooseButton([get.prompt("dckengqiang", trigger.player), [[
							["draw", "摸体力上限张牌"],
							// 临时修改（by 棘手怀念摧毁）
							["damage", "令此伤害+1" + (trigger.cards && trigger.cards.length ? `并获得${get.translation(trigger.cards)}` : "")],
							// ["damage", "令此伤害+1" + (trigger.cards?.length ? `并获得${get.translation(trigger.cards)}` : "")],
						], "textbutton"]])
						.set("filterButton", button => {
							const player = get.player();
							return !player.getStorage("dckengqiang_used").includes(button.link);
						})
						.set("ai", button => {
							const player = get.player();
							if (button.link == "draw") return player.maxHp;
							return get.damageEffect(get.event().getTrigger().player, player);
						})
						.forResult();
					event.result = {
						bool: result.bool,
						cost_data: result.links,
					};
				},
				async content(event, trigger, player) {
					const result = event.cost_data[0];
					player.addTempSkill("dckengqiang_used");
					player.markAuto("dckengqiang_used", result);
					if (result == "draw") await player.draw(player.maxHp);
					else {
						trigger.num++;
						// 临时修改（by 棘手怀念摧毁）
						if (trigger.cards && trigger.cards.length) await player.gain(trigger.cards, "gain2");
						else await game.asyncDelay();
						// if (trigger.cards?.length) await player.gain(trigger.cards, "gain2");
						// else await game.delay();
					}
				},
				subSkill: {
					used: {
						charlotte: true,
						onremove: true,
					},
				},
			},
			dckuichi: {
				audio: 2,
				trigger: {
					player: "phaseEnd",
				},
				filter(event, player) {
					if (player.getHistory("gain", evt => {
						return evt.getParent().name == "draw" && evt.cards.length;
					}).reduce((sum, evt) => sum + evt.cards.length, 0) < player.maxHp) return false;
					if (player.getHistory("sourceDamage", evt => {
						return evt.num > 0;
					}).reduce((sum, evt) => sum + evt.num, 0) < player.maxHp) return false;
					return true;
				},
				forced: true,
				async content(event, trigger, player) {
					await player.loseHp();
				},
			},
			dcshangjue: {
				skillAnimation: true,
				animationColor: "fire",
				unique: true,
				juexingji: true,
				audio: 2,
				derivation: "dckunli",
				trigger: { player: "dying" },
				forced: true,
				filter(event, player) {
					return player.hp < 1;
				},
				async content(event, trigger, player) {
					player.awakenSkill(event.name);
					player.storage[event.name] = true;
					await player.recoverTo(1);
					await player.gainMaxHp();
					await player.addSkills("dckunli");
				},
			},
			dckunli: {
				skillAnimation: true,
				animationColor: "fire",
				unique: true,
				juexingji: true,
				audio: 2,
				trigger: { player: "dying" },
				forced: true,
				filter(event, player) {
					return player.hp < 2;
				},
				async content(event, trigger, player) {
					player.awakenSkill(event.name);
					await player.recoverTo(2);
					await player.gainMaxHp();
					await player.removeSkills("dckuichi");
				},
			},
			//蒋钦
			dcshangyi: {
				audio: "shangyi",
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.countCards("he") > 0 && game.hasPlayer(current => lib.skill.dcshangyi.filterTarget(null, player, current));
				},
				filterTarget(card, player, target) {
					return target != player;
				},
				async content(event, trigger, player) {
					const target = event.target;
					await target.viewHandcards(player);
					if (!target.countCards("h")) return;
					await player
						.discardPlayerCard(target, "h", 2, "visible", "是否弃置♠♣花色的牌各一张？")
						.set("filterButton", button => {
							if (!["spade", "club"].includes(get.suit(button.link))) return false;
							// 临时修改（by 棘手怀念摧毁）
							return ui.selected.buttons && ui.selected.buttons.every(buttonx => {
							// return ui.selected.buttons?.every(buttonx => {
								return get.suit(buttonx.link) != get.suit(button.link);
							});
						});
				},
				ai: {
					order: 6,
					result: {
						player: 0.5,
						target(player, target) {
							if (!target.countCards("h")) return 1;
							return -2;
						},
					},
				},
			},
			dcniaoxiang: {
				audio: "zniaoxiang",
				trigger: { player: "useCardToPlayered" },
				forced: true,
				filter(event, player) {
					if (!event.target.inRange(player)) return false;
					return event.card.name == "sha" && !event.getParent().directHit.includes(event.target);
				},
				logTarget: "target",
				async content(event, trigger, player) {
					const id = trigger.target.playerid;
					const map = trigger.getParent().customArgs;
					if (!map[id]) map[id] = {};
					if (typeof map[id].shanRequired == "number") {
						map[id].shanRequired++;
					} else {
						map[id].shanRequired = 2;
					}
				},
				ai: {
					directHit_ai: true,
					skillTagFilter(player, tag, arg) {
						if (!arg.target.inRange(player)) return false;
						if (arg.card.name != "sha" || arg.target.countCards("h", "shan") > 1) return false;
					},
				},
			},
			//田丰
			dcsuishi: {
				audio: "suishi",
				trigger: {
					global: ["dying", "dieAfter"],
				},
				forced: true,
				filter(event, player) {
					if (event.player == player) return false;
					if (event.name == "dying") {
						// 临时修改（by 棘手怀念摧毁）
						return event.reason && event.reason.name == "damage" && event.reason.source.group == player.group;
						// return event.reason?.name == "damage" && event.reason?.source.group == player.group;
					}
					// 临时修改（by 棘手怀念摧毁）
					return event.player && event.player.group == player.group && player.countCards("h");
					// return event.player?.group == player.group && player.countCards("h");
				},
				async content(event, trigger, player) {
					if (trigger.name == "dying") await player.draw();
					else {
						await player
							.chooseToDiscard("h", [1, Infinity], true)
							.set("ai", card => {
								if (get.player().countCards("h") - ui.selected.cards.length > 1) return 2 - get.value(card);
								return 4 - get.value(card);
							});
					}
				},
				ai: {
					halfneg: true,
				},
			},
			//张任
			dcchuanxin: {
				audio: "chuanxin",
				trigger: { source: "damageBegin2" },
				filter(event, player) {
					if (_status.currentPhase != player) return false;
					if (!_status.event.getParent("phaseUse")) return false;
					return event.card&&["sha", "juedou"].includes(event.card.name)&&event.getParent().name==event.card.name;
				},
				logTarget: "player",
				check(event, player) {
					if (get.attitude(player, event.player) < 0) {
						if (event.player.hp == 1 && event.player.countCards("e") < 2 && event.player.name2 != "gz_pangtong") return false;
						return true;
					}
					return false;
				},
				async content(event,trigger,player) {
					trigger.cancel();
					let result;
					const target=event.targets[0];
					if (target.countCards("e")) {
						result=await target
							.chooseControl(function (event, player) {
								if (player.hp == 1) return 1;
								if (player.hp == 2 && player.countCards("e") >= 2) return 1;
								return 0;
							})
							.set("choiceList", [
								"弃置装备区内的所有牌并失去1点体力", 
								"弃置两张手牌，然后非锁定技本回合失效",
							])
							.forResult();
					} else {
						result = { index: 1 };
					}
					if (result.index == 1) {
						await target.chooseToDiscard("h",2,true);
						target.addTempSkill("fengyin");
					} else {
						target.discard(trigger.player.getCards("e"));
						target.loseHp();
					}
				},
			},
			dcfengshi: {
				audio: "zfengshi",
				trigger: { player: "useCardToPlayered" },
				filter: function (event, player) {
					if (event.card.name != "sha" || event.target.inRange(player)) return false;
					return event.target.getCards("e",card=>["equip2","equip3"].includes(get.subtype(card))).length;			
				},
				async cost(event,trigger,player){
					event.result=await player
						.choosePlayerCard("e",trigger.target,get.prompt2("dcfengshi",trigger.target))
						.set("filterButton",button=>{
							return ["equip2","equip3"].includes(get.subtype(button.link));
						})
						.set("ai",button=>{
							if(get.attitude(get.player(),get.event().getTrigger().target)>0) return 0;
							return get.value(button.link)+1;
						})
						.forResult();
					event.result.targets=[trigger.target];
				},
				async content(event,trigger,player){
					await event.targets[0].discard(event.cards);
				},
			},
			//谋沮授
			dcsbzuojun: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterTarget: true,
				async content(event, trigger, player) {
					const target = event.targets[0];
					const { result } = await target.draw(3);
					const {
						result: { index },
					} = await target
						.chooseControl()
						.set("choiceList", [`${get.translation(result)}不能被你使用且不计入你的手牌上限`, `失去1点体力，再摸一张牌并使用其中任意张牌，然后弃置其余牌`])
						.set("ai", () => {
							const player = get.player(),
								cards = get.event("cards");
							let eff = get.effect(player, { name: "losehp" }, player, player) + get.effect(player, { name: "draw" }, player, player);
							for (const card of cards) {
								eff += player.getUseValue(card);
							}
							return eff > 6 ? 1 : 0;
						})
						.set("cards", result);
					if (index == 0) {
						target.addGaintag(result, "dcsbzuojun_tag");
						target.addSkill("dcsbzuojun_effect");
						target
							.when({ player: "phaseEnd" })
							.filter(evt => evt != event.getParent("phase"))
							.assign({
								firstDo: true,
							})
							.then(() => {
								player.removeGaintag("dcsbzuojun_tag", toRemove);
								if (!player.hasCard(card => card.hasGaintag("dcsbzuojun_tag"))) {
									player.removeSkill("dcsbzuojun_effect");
								}
							})
							.vars({ toRemove: result });
					} else {
						await target.loseHp();
						const { result: result2 } = await target.draw();
						let cards = result.slice().concat(result2);
						while (cards.some(i => get.owner(i) == target && target.hasUseTarget(i))) {
							const result = await target
								.chooseToUse(function (card, player, event) {
									if (get.itemtype(card) != "card" || !get.event("cards").includes(card)) return false;
									return lib.filter.filterCard.apply(this, arguments);
								}, "佐军：是否使用其中的一张牌？")
								.set("cards", cards)
								.set("addCount", false)
								.forResult();
							if (result.bool) {
								cards.removeArray(result.cards);
								// 临时修改（by 棘手怀念摧毁）
								await game.asyncDelayx();
								// await game.delayx();
							} else break;
						}
						cards = cards.filter(i => get.owner(i) == target);
						if (cards.length) await target.modedDiscard(cards);
					}
				},
				ai: {
					order: 10,
					result: {
						target: 1,
					},
				},
				subSkill: {
					tag: {},
					effect: {
						charlotte: true,
						onremove(player) {
							player.removeGaintag("dcsbzuojun_tag");
						},
						mod: {
							ignoredHandcard(card, player) {
								if (card.hasGaintag("dcsbzuojun_tag")) return true;
							},
							cardDiscardable(card, player, name) {
								if (name == "phaseDiscard" && card.hasGaintag("dcsbzuojun_tag")) return false;
							},
							cardEnabled(card, player) {
								// 临时修改（by 棘手怀念摧毁）
								// if (card.cards?.some(i => i.hasGaintag("dcsbzuojun_tag"))) return false;
								if (card.cards && card.cards.some(i => i.hasGaintag("dcsbzuojun_tag"))) return false;
							},
							cardSavable(card, player) {
								// 临时修改（by 棘手怀念摧毁）
								// if (card.cards?.some(i => i.hasGaintag("dcsbzuojun_tag"))) return false;
								if (card.cards && card.cards.some(i => i.hasGaintag("dcsbzuojun_tag"))) return false;
							},
						},
					},
				},
			},
			dcsbmuwang: {
				audio: 2,
				trigger: {
					player: "loseAfter",
					global: ["cardsDiscardAfter", "loseAsyncAfter", "equipAfter"],
				},
				forced: true,
				filter(event, player) {
					if (player.getHistory("useSkill", evt => evt.skill == "dcsbmuwang").length) return false;
					const filter = card => ["basic", "trick"].includes(get.type(card));
					if (event.name != "cardsDiscard") {
						return event.getd(player, "cards2").filter(filter).length > 0;
					} else {
						if (event.cards.filterInD("d").filter(filter).length <= 0) return false;
						const evt = event.getParent();
						if (evt.name != "orderingDiscard") return false;
						const evtx = evt.relatedEvent || evt.getParent();
						if (evtx.player != player) return false;
						return player.hasHistory("lose", evtxx => {
							return evtx == (evtxx.relatedEvent || evtxx.getParent());
						});
					}
				},
				async content(event, trigger, player) {
					let cards;
					if (trigger.name != "cardsDiscard") {
						cards = trigger.getd(player, "cards2");
					} else cards = trigger.cards.filterInD("d");
					cards = cards.filter(card => ["basic", "trick"].includes(get.type(card)));
					if (cards.length) {
						const next = player.gain(cards.randomGet(), "gain2");
						next.gaintag.add("dcsbmuwang_tag");
						await next;
						player.addTempSkill("dcsbmuwang_lose");
					}
				},
				subSkill: {
					tag: {},
					lose: {
						charlotte: true,
						onremove(player) {
							player.removeGaintag("dcsbmuwang_tag");
						},
						trigger: {
							player: "loseAfter",
							global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
						},
						filter(event, player) {
							if (!player.countCards("he")) return false;
							const evt = event.getl(player);
							if (!evt || !evt.cards2 || !evt.cards2.length) return false;
							if (event.name == "lose") {
								return evt.cards2.some(card => (evt.gaintag_map[card.cardid] || []).includes("dcsbmuwang_tag"));
							}
							return player.hasHistory("lose", evt => {
								if (event != evt.getParent()) return false;
								return evt.cards2.some(card => (evt.gaintag_map[card.cardid] || []).includes("dcsbmuwang_tag"));
							});
						},
						forced: true,
						popup: false,
						async content(event, trigger, player) {
							if (player.countCards("he")) await player.chooseToDiscard("he", true);
						},
					},
				},
			},
			//谋汉尼拔
			dcshizha: {
				audio: 2,
				trigger: {
					global: "useCard",
				},
				usable: 1,
				filter(event, player) {
					if(event.player == player) return false;
					let history = game.getGlobalHistory("everything");
					for(let i = history.length - 1; i >= 0; i--) {
						const evt = history[i];
						if(evt == event || evt.player != event.player) continue;
						if(evt.name == "useCard" ) return false;
						if(evt.name == "changeHp") return true;
					}
					return false;
				},
				check(event, player) {
					let eff = 0;
					if (event.card.name == "wuxie" || event.card.name == "shan") {
						if (get.attitude(player, event.player) < -1) {
							eff = -1;
						}
					} else if (event.targets && event.targets.length) {
						for (var i = 0; i < event.targets.length; i++) {
							eff += get.effect(event.targets[i], event.card, event.player, player);
						}
					}
					return eff < 0;
				},
				logTarget:"player",
				async content(event, trigger, player) {
					trigger.targets.length = 0;
					trigger.all_excluded = true;
					if(trigger.cards && trigger.cards.someInD()) await player.gain(trigger.cards.filterInD(), "gain2");
				},
			},
			dcgaojian: {
				audio: 2,
				trigger: {
					global: "cardsDiscardAfter",
				},
				filter(event, player) {
					if(!player.isPhaseUsing()) return false;
					var evt = event.getParent();
					if (evt.name != "orderingDiscard") return false;
					var evtx = evt.relatedEvent || evt.getParent();
					return evtx.name == "useCard" && evtx.player == player && get.type2(evtx.card) == "trick";
				},
				async cost(event, trigger, player) {
					event.result = await player.chooseTarget(get.prompt2("dcgaojian"), lib.filter.notMe).set("ai", target => {
						return get.attitude(get.player(), target);
					}).forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					let showCards = [], useCard;
					while(showCards.length<5) {
						const cards = game.cardsGotoOrdering(get.cards()).cards;
						showCards.addArray(cards);
						target.showCards(cards, get.translation(player) + "发动了【告谏】");
						if(get.type2(cards[0]) == "trick") {
							useCard = cards[0];
							break;
						}
					}
					if(useCard && target.hasUseTarget(useCard)) {
						const result = await target.chooseControl("使用牌", "交换牌").set("choiceList", [
							`使用${get.translation(useCard)}`,
							`使用任意张手牌与${get.translation(showCards)}中的等量牌交换`,
						]).set("ai", () => {
							if(_status.event.useValue > 2) return "使用牌";
							return "交换牌";
						}).set("useValue", target.getUseValue(useCard)).forResult();
						if(result.control == "使用牌"){
							await target.chooseUseTarget(useCard, true);
							return;
						}
					}
					if(!target.countCards("h") || !showCards.length) return;
					const result = await target
						.chooseToMove("告谏：是否交换其中任意张牌？")
						.set("list", [
							["你的手牌", target.getCards("h"), "dcgaojian_tag"],
							["展示牌", showCards],
						])
						.set("filterMove", (from, to) => {
							return typeof to != "number";
						})
						.set("filterOk", moved => {
							return moved[1].some(card => get.owner(card));
						})
						.set("processAI", list => {
							const num = Math.min(list[0][1].length, list[1][1].length);
							const player = get.event("player");
							const cards1 = list[0][1].slice().sort((a, b) => get.value(a, "raw") - get.value(b, "raw"));
							const cards2 = list[1][1].slice().sort((a, b) => get.value(b, "raw") - get.value(a, "raw"));
							return [cards1.slice().addArray(cards2.slice(0, num)), cards2.slice().addArray(cards1.slice(0, num))];
						})
						.forResult();
					if (result.bool) {
						const lose = result.moved[1].slice();
						const gain = result.moved[0].slice().filter(i => !get.owner(i));
						if (lose.some(i => get.owner(i)))
							await target.lose(
								lose.filter(i => get.owner(i)),
								ui.special
							);
						for (let i = lose.length - 1; i--; i >= 0) {
							ui.cardPile.insertBefore(lose[i], ui.cardPile.firstChild);
						}
						game.updateRoundNumber();
						if (gain.length) await target.gain(gain, "draw");
					} else {
						if (!topCards.length) return;
						for (let i = topCards.length - 1; i--; i >= 0) {
							ui.cardPile.insertBefore(topCards[i], ui.cardPile.firstChild);
						}
						game.updateRoundNumber();
					}
				},
			},
			//诸葛京
			dcyanzuo: {
				audio: 2,
				enable: "phaseUse",
				usable: 3,
				filter(event, player) {
					var count = player.getStat("skill").dcyanzuo;
					if (count && count > player.countMark("dcyanzuo_zuyin")) return false;
					return player.countCards("he", card => ["trick", "basic"].includes(get.type(card, player)));
				},
				filterCard(card, player) {
					return ["trick", "basic"].includes(get.type(card, player));
				},
				check(card) {
					const player = _status.event.player;
					return player.getUseValue(card) + 3;
				},
				position: "he",
				lose: false,
				discard: false,
				async content(event, trigger, player) {
					const next = player.addToExpansion(event.cards, player, "give");
					next.gaintag.add("dcyanzuo");
					await next;
					const cards = player.getExpansions("dcyanzuo");
					const result = await player
						.chooseButton(["是否视为使用其中一张牌？", cards])
						.set("filterButton", button => {
							const player = _status.event.player;
							const card = {
								name: get.name(button.link),
								suit: get.suit(button.link),
								isCard: true,
							};
							return player.hasUseTarget(card);
						})
						.set("ai", button => {
							const player = _status.event.player;
							const card = {
								name: get.name(button.link),
								suit: get.suit(button.link),
								isCard: true,
							};
							return player.getUseValue(card);
						})
						.forResult();
					if (result.bool) {
						const card = {
							name: get.name(result.links[0]),
							suit: get.suit(result.links[0]),
							isCard: true,
						};
						await player.chooseUseTarget(card, true, false);
					}
				},
				ai: {
					order: 9,
					result: {
						player: 1,
					},
				},
				onremove(player, skill) {
					const cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
					player.clearMark("dcyanzuo_zuyin", false);
				},
				intro: {
					markcount: "expansion",
					content: "expansion",
					mark(dialog, storage, player) {
						const cards = player.getExpansions("dcyanzuo");
						if (cards.length) dialog.addSmall(cards);
						const marks = player.countMark("dcyanzuo_zuyin");
						if (marks > 0) dialog.addText(`〖研作〗发动次数+${marks}`);
					},
				},
			},
			dczuyin: {
				audio: 2,
				forced: true,
				trigger: {
					target: "useCardToTargeted",
				},
				filter(event, player) {
					if(event.player == player) return false;
					return event.card.name == "sha" || get.type(event.card) == "trick";
				},
				async content(event, trigger, player) {
					const cards = player.getExpansions("dcyanzuo");
					if (cards.some(card => card.name == trigger.card.name)) {
						trigger.getParent().all_excluded = true;
						trigger.getParent().targets.length = 0;
						const discards = cards.filter(card => card.name == trigger.card.name);
						if(discards.length) await player.loseToDiscardpile(discards);
					}
					else {
						const card = get.cardPile(card => card.name == trigger.card.name);
						if (card){
							const next = player.addToExpansion(card, "gain2");
							next.gaintag.add("dcyanzuo");
							await next;
						}
						if (player.countMark("dcyanzuo_zuyin") < 2 && player.hasSkill("dcyanzuo", null, null, false)) player.addMark("dcyanzuo_zuyin", 1, false);
					}
				},
			},
			dcpijian: {
				audio: 2,
				trigger: {
					player: "phaseEnd",
				},
				filter(event, player) {
					return player.getExpansions("dcyanzuo").length >= game.countPlayer();
				},
				async cost(event, trigger, player) {
					event.result = await player.chooseTarget(get.prompt2("dcpijian")).set("ai", target => {
						const player = _status.event.player;
						return get.damageEffect(target, player, player);
					}).forResult();
				},
				async content(event, trigger, player) {
					await player.loseToDiscardpile(player.getExpansions("dcyanzuo"));
					const target = event.targets[0];
					await target.damage(2);
				},
			},
			//凌操
			dcdufeng: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				forced: true,
				async content(event, trigger, player) {
					const list = [];
					for (let i = 1; i < 6; i++) {
						if (player.isDisabled(i)) continue;
						list.push("equip" + i);
					}
					list.push("cancel2");
					const next = player.chooseControl(list);
					next.set("prompt", "独锋：请废除一个装备栏，或点击“取消”失去1点体力");
					next.set("ai", () => {
						const list = get.event().list.slice(),
							player = get.player();
						if (player.hp <= 2 && list.length > 1) list.remove("cancel2");
						const listx = list.filter(subtype => !player.getEquips(subtype).length);
						if (listx.length) return listx.randomGet();
						return list.randomGet();
					});
					next.set("list", list);
					const { result } = await next;
					if (result.control == "cancel2") await player.loseHp();
					else await player.disableEquip(result.control);
					if (!player.isIn()) return;
					const num = Math.min(player.countDisabled() + player.getDamagedHp(), player.maxHp);
					await player.draw(num);
					player.addTempSkill("dcdufeng_effect");
					player.addMark("dcdufeng_effect", num, false);
				},
				subSkill: {
					effect: {
						charlotte: true,
						onremove: true,
						intro: {
							content: "本回合攻击范围与使用【杀】的次数上限均为#",
						},
						mod: {
							attackRangeBase(player, num) {
								return player.countMark("dcdufeng_effect");
							},
							cardUsable(card, player, num) {
								if (card.name == "sha") return player.countMark("dcdufeng_effect");
							},
						},
					},
				},
			},
			//柳婒
			dcjingyin: {
				audio: 2,
				trigger: { global: "useCardAfter" },
				filter(event, player) {
					if (_status.currentPhase === event.player) return false;
					if (!game.hasPlayer(target => target != event.player)) return false;
					return event.card.name == "sha" && event.cards && event.cards.someInD();
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt("dcjingyin"), "令一名角色获得" + get.translation(trigger.cards.filterInD()), (card, player, target) => {
							return target != get.event().getTrigger().player;
						})
						.set("ai", target => {
							const player = get.event().player,
								cards = get.event().cards;
							return get.attitude(player, target) * cards.reduce((sum, card) => sum + get.value(card, target), 0);
						})
						.set("cards", trigger.cards.filterInD())
						.forResult();
				},
				usable: 1,
				async content(event, trigger, player) {
					const target = event.targets[0];
					target.addSkill("dcjingyin_tag");
					target.gain(trigger.cards.filterInD(), "gain2").set("gaintag", "dcjingyin_tag");
				},
				subSkill: {
					tag: {
						charlotte: true,
						mod: {
							/*
							targetInRange(card, player, target) {
								if (!card.cards) return;
								if (card.cards.some(i => i.hasGaintag("dcjingyin_tag"))) return true;
							},
							*/
							cardUsable(card, player, target) {
								if (!card.cards) return;
								if (card.cards.some(i => i.hasGaintag("dcjingyin_tag"))) return Infinity;
							},
							aiOrder: function (player, card, num) {
								if (get.itemtype(card) == "card" && card.hasGaintag("dcjingyin_tag")) return num - 0.1;
							},
						},
					},
				},
			},
			dcchixing: {
				audio: 2,
				trigger: { global: "phaseUseEnd" },
				filter(event, player) {
					return lib.skill.dcchixing.getNum(event).length;
				},
				frequent: true,
				async content(event, trigger, player) {
					const result = await player.draw(lib.skill.dcchixing.getNum(trigger).length).forResult();
					if (Array.isArray(result) && result.some(card => get.name(card, false) == "sha")) {
						await player
							.chooseToUse(function (card) {
								const evt = _status.event;
								if (!lib.filter.cardEnabled(card, evt.player, evt)) return false;
								let cards = [card];
								if (Array.isArray(card.cards)) cards.addArray(card.cards);
								return cards.containsSome(...evt.cards) && get.name(card, false) == "sha";
							}, "迟行：是否使用一张【杀】？")
							.set("cards", result);
					}
				},
				getNum(event) {
					return game
						.getGlobalHistory("everything", evt => {
							if (evt.getParent("phaseUse") != event) return false;
							return evt.name == "cardsDiscard" || (evt.name == "lose" && evt.position == ui.discardPile);
						})
						.reduce((list, evt) => list.addArray(evt.cards.filter(i => i.name == "sha")), []);
				},
			},
			//新谋郭嘉
			xianmou: {
				mark: true,
				marktext: "☯",
				zhuanhuanji(player, skill) {
					player.storage[skill] = !player.storage[skill];
					player.changeSkin({ characterName: "yj_sb_guojia" }, "yj_sb_guojia" + (player.storage[skill] ? "_shadow" : ""));
				},
				intro: {
					content: function (storage) {
						if (!storage) return "你失去过牌的回合结束时，你可以观看牌堆顶五张牌并获得至多X张牌，若未获得X张牌则获得〖遗计〗直到再发动此项（X为你本回合失去牌数）";
						return "你失去过牌的回合结束时，你可以观看一名角色手牌并弃置其中至多X张牌，若弃置X张牌则你进行一次【闪电】判定（X为你本回合失去牌数）";
					},
				},
				audio: 2,
				audioname: ["yj_sb_guojia_shadow"],
				trigger: {
					global: "phaseEnd",
				},
				filter(event, player) {
					return player.getHistory("lose", evt => evt.cards2 && evt.cards2.length).length;
				},
				async cost(event, trigger, player) {
					let num = 0;
					player.getHistory("lose", evt => {
						if (evt.cards2) num += evt.cards2.length;
					});
					if (player.storage.xianmou) {
						event.result = await player.chooseTarget(get.prompt("xianmou"), `观看一名角色手牌并弃置其中至多${num}张牌`, function (card, player, target) {
							return target.countCards("h");
						}).set("ai", function (target) {
							const player = _status.event.player;
							return get.effect(target, { name: "guohe_copy2" }, player, player);
						}).forResult();
					}
					else {
						event.result = await player.chooseBool(get.prompt("xianmou"), `观看牌堆顶五张牌并获得至多${num}张牌`).forResult();
					}
				},
				async content(event, trigger, player) {
					let num = 0;
					player.getHistory("lose", evt => {
						if (evt.cards2) num += evt.cards2.length;
					});
					player.changeZhuanhuanji("xianmou");
					if (player.storage.xianmou) {
						player.addAdditionalSkills("xianmou", []);
						let cards = game.cardsGotoOrdering(get.cards(5)).cards;
						const result = await player.chooseButton([`是否获得至多${num}张牌？`, cards], [1, num]).set("ai", function (button) {
							if (ui.selected.buttons.length + 1 >= _status.event.maxNum) return 0;
							return get.value(button.link);
						}).set("maxNum", num).forResult();
						if (result.bool){
							await player.gain(result.links, "gain2");
							cards.removeArray(result.links);
						}
						cards.reverse();
						for (var i = 0; i < cards.length; i++) {
							ui.cardPile.insertBefore(cards[i], ui.cardPile.firstChild);
						}
						if (!result.bool || result.links.length < num) await player.addAdditionalSkills("xianmou", "new_reyiji");
					}
					else {
						const target = event.targets[0];
						const result = await player.discardPlayerCard(target, "h", `是否弃置${get.translation(target)}至多${num}张牌?`, [1, num], "visible").set("ai", function (button) {
							if (ui.selected.buttons.length + 1 >= _status.event.maxNum) return 5 - get.value(button.link);
							return get.value(button.link);
						}).set("maxNum", num).forResult();
						// 临时修改（by 棘手怀念摧毁）
						if (result && result.bool && result.links && result.links.length >= num) await player.executeDelayCardEffect("shandian");
						// if (result?.bool && result.links?.length >= num) await player.executeDelayCardEffect("shandian");
					}
				},
				derivation: "new_reyiji",
				group: "xianmou_change",
				subSkill: {
					change: {
						audio: "xianmou",
						audioname: ["yj_sb_guojia_shadow"],
						trigger: {
							global: "phaseBefore",
							player: "enterGame",
						},
						filter(event, player) {
							return event.name != "phase" || game.phaseNumber == 0;
						},
						prompt2(event, player) {
							//无名杀先阴后阳，不要问为什么
							return "切换【先谋】为状态" + (player.storage.dcsbyingmou ? "阳" : "阴");
						},
						check: () => Math.random() > 0.5,
						content() {
							player.changeZhuanhuanji("xianmou");
						},
					},
				},
			},
			lunshi: {
				audio: 2,
				audioname: ["yj_sb_guojia_shadow"],
				position: "hs",
				enable: "chooseToUse",
				filter(event, player) {
					if (!player.countCards("hs")) return false;
					if (player.countCards("h", { color: "black" }) != player.countCards("h", { color: "red" })) return false;
					if (event.type != "wuxie") return false;
					let info = event.info_map;
					if (!info || get.type(info.card) != "trick") return false;
					return info.player != info.target;
				},
				filterCard: true,
				viewAs: {
					name: "wuxie",
				},
				viewAsFilter(player) {
					if (!player.countCards("hs")) return false;
					if (player.countCards("h", { color: "black" }) != player.countCards("h", { color: "red" })) return false;
					return true;
				},
				prompt: "将一张手牌当无懈可击使用",
				check: function (card) {
					return 8 - get.value(card);
				},
				group: "lunshi_nowuxie",
				subSkill: {
					nowuxie: {
						trigger: {
							player: "useCard",
						},
						forced: true,
						locked: false,
						popup: false,
						filter: function (event, player) {
							return event.card.name == "wuxie" && event.skill && event.skill == "lunshi";
						},
						content: function () {
							trigger.directHit.addArray(game.players);
						},
					},
				},
			},
			//卞玥
			dcbizu: {
				audio: 2,
				enable: "phaseUse",
				filterTarget(card, player, target) {
					return target.countCards("h") == player.countCards("h");
				},
				filterCard: () => false,
				selectCard: [-1, -2],
				prompt: () => {
					const player = get.player();
					const targets = game.filterPlayer(current => current.countCards("h") == player.countCards("h"));
					return "令" + get.translation(targets) + (targets.length > 1 ? "各" : "") + "摸一张牌";
				},
				selectTarget: -1,
				multitarget: true,
				multiline: true,
				async content(event, trigger, player) {
					await game.asyncDraw(event.targets.sortBySeat());
					if (game.getGlobalHistory("everything", evt => evt.name == "dcbizu" && evt.player == player && evt != event).some(evtx => evtx.targets.length == event.targets.length && evtx.targets.every(i => event.targets.includes(i)))) player.tempBanSkill("dcbizu");
				},
				ai: {
					order: 4,
					result: {
						player(player, target) {
							return game.filterPlayer(current => current.countCards("h") == player.countCards("h")).reduce((e, p) => e + get.effect(p, { name: "draw" }, player, player), 0);
						},
					},
				},
			},
			dcwuxie: {
				audio: 2,
				trigger: {
					player: "phaseUseEnd",
				},
				filter(event, player) {
					return game.hasPlayer(current => current != player && current.countCards("h"));
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2("dcwuxie"), function (card, player, target) {
							return target != player && target.countCards("h");
						})
						.set("ai", target => {
							const player = get.player();
							return -get.attitude(player, target) * target.countCards("h");
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0],
						cards1 = player.getCards("h", card => get.tag(card, "damage")),
						cards2 = target.getCards("h", card => get.tag(card, "damage"));
					if (cards1.length) {
						player.$throw(cards1.length, 1000);
						await player.lose(cards1, ui.cardPile);
						for (let i = 0; i < cards1.length; i++) {
							const card = cards1[i];
							card.fix();
							ui.cardPile.appendChild(card);
						}
					}
					if (cards2.length) {
						target.$throw(cards2.length, 1000);
						await target.lose(cards2, ui.cardPile);
						for (let i = 0; i < cards2.length; i++) {
							const card = cards2[i];
							card.fix();
							ui.cardPile.appendChild(card);
						}
					}
					await game.asyncDelayx();
					if (cards1.length != cards2.length) {
						const recover = cards1.length < cards2.length ? target : player;
						if (!recover.isDamaged()) return;
						const result = await player
							.chooseBool("是否令" + get.translation(recover) + "回复1点体力？")
							.set("choice", get.recoverEffect(recover, player, player) > 0)
							.forResult();
						if (result.bool) await recover.recover();
					}
				},
			},
			//朱佩兰
			dccilv: {
				audio: 2,
				trigger: { target: "useCardToTargeted" },
				filter(event, player) {
					return get.type(event.card) == "trick" && player.getStorage("dccilv").length < 3;
				},
				async content(event, trigger, player) {
					await player.draw(3 - player.getStorage("dccilv").length);
					if (player.countCards("h") > player.maxHp) {
						let result,
							list = ["无效", "防伤", "获得"].filter(i => !player.getStorage("dccilv").includes(i));
						if (list.length == 1) result = { control: list[0] };
						else
							result = await player
								.chooseControl(list)
								.set("prompt", "辞虑：选择执行并移去一项")
								.set("ai", () => {
									const player = get.event("player"),
										trigger = get.event().getTrigger(),
										card = trigger.card;
									let controls = get.event("controls").slice();
									if (controls.includes("防伤")) {
										if (get.tag(card, "damage")) return "防伤";
										else controls.remove("防伤");
									}
									if (get.effect(player, trigger.card, trigger.player, player) < 0 && controls.includes("无效")) return "无效";
									return controls[controls.length - 1];
								})
								.forResult();
						const choice = result.control;
						player.popup(choice);
						game.log(player, "选择了", "#y" + choice);
						switch (choice) {
							case "无效":
								trigger.getParent().excluded.add(player);
								game.log(trigger.card, "对", player, "无效");
								break;
							case "防伤":
								player.addTempSkill("dccilv_effect");
								player.markAuto("dccilv_effect", [trigger.card]);
								break;
							case "获得":
								player
									.when({ global: "useCardAfter" })
									.filter(evt => evt == trigger.getParent())
									.then(() => {
										const cards = (trigger.cards || []).filterInD();
										if (cards.length) player.gain(cards, "gain2");
									});
								break;
						}
						player.markAuto("dccilv", [choice]);
					}
				},
				mark: true,
				intro: {
					markcount: storage => 3 - (storage || []).length,
					content: storage => ((storage || []).length ? ("已移去了" + storage + "项") : "暂未移去任何项"),
				},
				subSkill: {
					effect: {
						charlotte: true,
						trigger: { player: "damageBegin4" },
						filter(event, player) {
							const evt = event.getParent(2);
							return evt && evt.name == "useCard" && player.getStorage("dccilv_effect").includes(evt.card);
						},
						forced: true,
						content() {
							trigger.cancel();
						},
						ai: {
							effect: {
								target(card, player, target) {
									if (player.getStorage("dccilv_effect").includes(card)) return "zeroplayertarget";
								},
							},
						},
					},
				},
			},
			dctongdao: {
				unique: true,
				limited: true,
				trigger: { player: "dying" },
				skillAnimation: true,
				animationColor: "fire",
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt2("dctongdao"))
						.set("ai", target => {
							const player = get.event("player");
							if (player.hp + player.countCards("hs", card => player.canSaveCard(card, player)) > 0) return target == player ? 1 : 0;
							return target.hp + 114514;
						})
						.forResult();
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					player.awakenSkill("dctongdao");
					const removeSkills = target.getSkills(null, false, false).filter(i => {
						const info = get.info(i);
						return !info || !info.charlotte;
					});
					if (removeSkills.length) target.removeSkill(removeSkills);
					const gainSkills = target.getStockSkills(true, true).filter(i => {
						const info = get.info(i);
						if (info && info.zhuSkill && !player.isZhu2()) return false;
						return !info || !info.charlotte;
					});
					if (gainSkills.length) {
						//抽象
						//混沌初开——牢戏
						Object.keys(target.storage)
						.filter(i => gainSkills.some(skill => i.startsWith(skill)))
						.forEach(storage => delete target.storage[storage]);
						target.addSkill(gainSkills);
						const suffixs = ["used", "round", "block", "blocker"];
						for (const skill of gainSkills) {
							const info = get.info(skill);
							if (typeof info.usable == "number") {
								if (target.hasSkill("counttrigger") && target.storage.counttrigger[skill] && target.storage.counttrigger[skill] >= 1) {
									delete target.storage.counttrigger[skill];
								}
								if (typeof get.skillCount(skill) == "number" && get.skillCount(skill) >= 1) {
									delete target.getStat("skill")[skill];
								}
							}
							if (info.round && target.storage[skill + "_roundcount"]) {
								delete target.storage[skill + "_roundcount"];
							}
							if (target.storage[`temp_ban_${skill}`]) {
								delete target.storage[`temp_ban_${skill}`];
							}
							if (target.awakenedSkills.includes(skill)) {
								target.restoreSkill(skill);
							}
							for (const suffix of suffixs) {
								if (target.hasSkill(skill + "_" + suffix)) {
									target.removeSkill(skill + "_" + suffix);
								}
							}
						}
					}
					if (target != player && target.hp > player.hp) {
						await player.recoverTo(target.hp);
					}
				},
			},
			//张绣
			dcsbfuxi: {
				audio: 2,
				trigger: { global: "phaseUseBegin" },
				filter(event, player) {
					const target = event.player;
					if (!player.countCards("he") && !target.countCards("he") && !player.canUse(new lib.element.VCard({ name: "sha" }), target, false)) return false;
					return event.player != player && event.player.isMaxHandcard();
				},
				async cost(event, trigger, player) {
					const target = trigger.player,
						str = get.translation(target);
					let result;
					if (!player.countCards("he")) {
						result = await player
							.chooseBool(get.prompt("dcsbfuxi", target), "弃置" + str + "的一张牌，然后视为对其使用一张【杀】")
							.set("choice", get.effect(target, { name: "guohe_copy2" }, player, player) + get.effect(target, new lib.element.VCard({ name: "sha" }), player, player) > 0)
							.forResult();
						result.index = 1;
					} else if (!target.countCards("he") && !player.canUse(new lib.element.VCard({ name: "sha" }), target, false)) {
						result = await player
							.chooseBool(get.prompt("dcsbfuxi", target), "交给" + str + "一张牌，然后摸两张牌")
							.set("choice", get.attitude(player, target) > 0 || player.hasCard(card => card.name == "du", "h"))
							.forResult();
						result.index = 0;
					} else {
						result = await player
							.chooseControl("给牌", "出杀", "cancel2")
							.set("choiceList", ["交给" + str + "一张牌，然后摸两张牌", "弃置" + str + "的一张牌，然后视为对其使用一张【杀】"])
							.set("ai", () => {
								const player = get.event("player"),
									target = get.event("target");
								const num = get.effect(target, { name: "guohe_copy2" }, player, player) + get.effect(target, new lib.element.VCard({ name: "sha" }), player, player);
								if (num <= 0 && get.attitude(player, target) < 0) return "cancel2";
								return get.attitude(player, target) >= 0 ? 0 : 1;
							})
							.set("target", target)
							.forResult();
						result.bool = result.control != "cancel2";
					}
					if (result.bool) {
						result.targets = [target];
						result.cost_data = result.index;
					}
					event.result = result;
				},
				async content(event, trigger, player) {
					const target = trigger.player;
					if (event.cost_data == 0) {
						await player.chooseToGive(target, "he", true);
						await player.draw(2);
					} else {
						await player.discardPlayerCard(target, "he", true);
						const sha = new lib.element.VCard({ name: "sha" });
						if (player.canUse(sha, target, false)) {
							await player.useCard(sha, target, false);
						}
					}
				},
			},
			dcsbhaoyi: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				filter(event, player) {
					return lib.skill.dcsbhaoyi.getCards().length;
				},
				frequent: true,
				prompt(event, player) {
					return get.prompt("dcsbhaoyi") + "（可获得" + get.translation(lib.skill.dcsbhaoyi.getCards()) + "）";
				},
				async content(event, trigger, player) {
					let cardx = lib.skill.dcsbhaoyi.getCards();
					await player.gain(cardx, "gain2");
					cardx = cardx.filter(i => get.owner(i) == player && get.position(i) == "h");
					if (!cardx.length) return;
					if (_status.connectMode) game.broadcastAll(() => (_status.noclearcountdown = true));
					let given_map = [];
					while (player.hasCard(card => cardx.includes(card) && !card.hasGaintag("olsujian_given"), "h")) {
						const {
							result: { bool, cards, targets },
						} = await player
							.chooseCardTarget({
								filterCard(card, player) {
									return get.event("cards").includes(card) && !card.hasGaintag("olsujian_given");
								},
								selectCard: [1, Infinity],
								position: "h",
								filterTarget: lib.filter.notMe,
								prompt: "豪义：请选择要分配的卡牌和目标",
								ai1(card) {
									return !ui.selected.cards.length && card.name == "du" ? 1 : 0;
								},
								ai2(target) {
									const player = get.event("player");
									const card = ui.selected.cards[0];
									if (card) return get.value(card, target) * get.attitude(player, target);
									return 0;
								},
							})
							.set("cards", cardx);
						if (bool) {
							const target = targets[0];
							if (given_map.some(i => i[0] == target)) {
								given_map[given_map.indexOf(given_map.find(i => i[0] == target))][1].addArray(cards);
							} else given_map.push([target, cards]);
							player.addGaintag(cards, "olsujian_given");
						} else break;
					}
					if (_status.connectMode) {
						game.broadcastAll(() => {
							delete _status.noclearcountdown;
							game.stopCountChoose();
						});
					}
					if (given_map.length) {
						await game
							.loseAsync({
								gain_list: given_map,
								player: player,
								cards: given_map.slice().map(list => list[1]),
								giver: player,
								animate: "giveAuto",
							})
							.setContent("gaincardMultiple");
					}
				},
				getCards() {
					let cards = [],
						targets = game.players.slice().concat(game.dead.slice());
					for (const target of targets) {
						const history = target.getHistory("lose", evt => evt.position == ui.discardPile);
						if (history.length) {
							for (const evt of history) cards.addArray(evt.cards2.filterInD("d"));
						}
					}
					const historyx = game.getGlobalHistory("cardMove", evt => evt.name == "cardsDiscard");
					if (historyx.length) {
						for (const evtx of historyx) cards.addArray(evtx.cards.filterInD("d"));
					}
					for (const target of targets) {
						const history = target.getHistory(
							"useCard",
							evt =>
								(evt.cards || []).length &&
								target.getHistory("sourceDamage", evtx => {
									return evtx.card && evtx.card == evt.card;
								}).length
						);
						if (history.length) {
							for (const evt of history) cards.removeArray(evt.cards.filterInD("d"));
						}
					}
					return cards.filter(card => get.tag(card, "damage"));
				},
			},
			//关平
			dcsbwuwei: {
				audio: 2,
				enable: "phaseUse",
				filter(event, player) {
					const count = player.getStat("skill").dcsbwuwei;
					if (count && count > player.countMark("dcsbwuwei_count")) return false;
					const colors = player.getCards("h").reduce((list, card) => list.add(get.color(card)), []);
					return colors.some(color => event.filterCard(get.autoViewAs(lib.skill.dcsbwuwei.viewAs, player.getCards("h", { color: color })), player, event));
				},
				viewAs: { name: "sha", storage: { dcsbwuwei: true } },
				locked: false,
				mod: {
					targetInRange(card) {
						if (card.storage && card.storage.dcsbwuwei) return true;
					},
					cardUsable(card, player, num) {
						if (card.storage && card.storage.dcsbwuwei) return Infinity;
					},
				},
				filterCard: () => false,
				selectCard: -1,
				async precontent(event, _, player) {
					let colors = player.getCards("h").reduce((list, card) => list.add(get.color(card)), []),
						evt = event.getParent();
					colors = colors.filter(color => evt.filterCard(get.autoViewAs(lib.skill.dcsbwuwei.viewAs, player.getCards("h", { color: color })), player, evt));
					colors = colors.map(color => (color == "none" ? "none2" : color));
					const result = await player.chooseControl(colors, "cancel2").set("prompt", "武威：将一种颜色的所有手牌当作【杀】使用").set("ai", () => {
						const player = get.event().player;
						let controls = get.event().controls.slice();
						controls.remove("cancel2");
						return controls.sort((a, b) => {
							return player.countCards("h", { color: a == "none2" ? "none" : a }) - player.countCards("h", { color: b == "none2" ? "none" : b });
						})[0];
					}).forResult();
					const color = result.control == "none2" ? "none" : result.control;
					if (color == "cancel2") {
						evt.goto(0);
						return;
					}
					player.addTempSkill("dcsbwuwei_effect");
					event.result.cards = player.getCards("h", { color: color });
					event.result.card.cards = player.getCards("h", { color: color });
				},
				ai: {
					order(item, player) {
						return get.order({ name: "sha" }, player) - 0.001;
					},
				},
				subSkill: {
					effect: {
						charlotte: true,
						trigger: { player: "useCard" },
						filter(event, player) {
							return (event.card.storage || {}).dcsbwuwei && (event.cards || []).length;
						},
						forced: true,
						popup: false,
						async content(event, trigger, player) {
							const func = () => {
								const event = get.event();
								const controls = [
									link => {
										const evt = get.event();
										if (evt.dialog && evt.dialog.buttons) {
											for (let i = 0; i < evt.dialog.buttons.length; i++) {
												const button = evt.dialog.buttons[i];
												button.classList.remove("selectable");
												button.classList.remove("selected");
												const counterNode = button.querySelector(".caption");
												if (counterNode) {
													counterNode.childNodes[0].innerHTML = ``;
												}
											}
											ui.selected.buttons.length = 0;
											game.check();
										}
										return;
									},
								];
								event.controls = [ui.create.control(controls.concat(["清除选择", "stayleft"]))];
							};
							if (event.isMine()) func();
							else if (event.isOnline()) event.player.send(func);
							let types = trigger.cards.reduce((list, card) => list.add(get.type2(card, player)), []);
							let result = await player
								.chooseButton(["武威：请选择" + get.cnNumber(types.length) + "次以下项", [["摸一张牌", "令目标角色本回合非锁定技失效", "令本回合〖武威〗可发动次数+1"].map((item, i) => [i, item]), "textbutton"]])
								.set("forced", true)
								.set("selectButton", [types.length, types.length + 1])
								.set("filterButton", button => {
									const selected = ui.selected.buttons.slice().map(i => i.link);
									if (selected.length >= get.event().selectButton[0]) return false;
									return button.link !=1 || !selected.includes(1);
								})
								.set("ai", button => {
									const selected = ui.selected.buttons.slice().map(i => i.link);
									if (get.event().selectButton >= 3) return selected.includes(button.link) ? 0 : 1;
									return [0, 2, 1].slice(0, get.event("selectButton")).includes(button.link) ? 1 : 0;
								})
								.set("custom", {
									add: {
										confirm(bool) {
											if (bool != true) return;
											const event = get.event().parent;
											if (event.controls) event.controls.forEach(i => i.close());
											if (ui.confirm) ui.confirm.close();
											game.uncheck();
										},
										button() {
											if (ui.selected.buttons.length) return;
											const event = get.event();
											if (event.dialog && event.dialog.buttons) {
												for (let i = 0; i < event.dialog.buttons.length; i++) {
													const button = event.dialog.buttons[i];
													const counterNode = button.querySelector(".caption");
													if (counterNode) {
														counterNode.childNodes[0].innerHTML = ``;
													}
												}
											}
											if (!ui.selected.buttons.length) {
												const evt = event.parent;
												if (evt.controls) evt.controls[0].classList.add("disabled");
											}
										},
									},
									replace: {
										button(button) {
											const event = get.event();
											if (!event.isMine() || !event.filterButton(button)) return;
											if (button.classList.contains("selectable") == false) return;
											button.classList.add("selected");
											ui.selected.buttons.push(button);
											let counterNode = button.querySelector(".caption");
											const count = ui.selected.buttons.filter(i => i == button).length;
											if (counterNode) {
												counterNode = counterNode.childNodes[0];
												counterNode.innerHTML = `×${count}`;
											} else {
												counterNode = ui.create.caption(`<span style="font-family:xinwei; text-shadow:#FFF 0 0 4px, #FFF 0 0 4px, rgba(74,29,1,1) 0 0 3px;">×${count}</span>`, button);
											}
											const evt = event.parent;
											if (evt.controls) evt.controls[0].classList.remove("disabled");
											game.check();
										},
									},
								})
								.forResult();
							if (result.bool) {
								result.links.sort((a, b) => a - b);
								for (const i of result.links) {
									game.log(player, "选择了", "#g【武威】", "的", "#y第" + get.cnNumber(i + 1, true) + "项");
								}
								if (result.links.includes(0)) await player.draw(result.links.filter(count => count == 0).length);
								if (result.links.includes(1)) {
									for (const target of trigger.targets || []) {
										target.addTempSkill("dcsbwuwei_fengyin");
									}
								}
								if (result.links.includes(2)) {
									player.addTempSkill("dcsbwuwei_count");
									player.addMark("dcsbwuwei_count", result.links.filter(count => count == 2).length, false);
								}
								if ( Array.from({length:3}).map( (_,i) => i).every(i => result.links.includes(i))) {
									trigger.baseDamage++;
									game.log(trigger.card, "造成的伤害", "#y+1");
								}
							}
						},
					},
					count: {
						charlotte: true,
						onremove: true,
						intro: { content: "本回合〖武威〗可发动次数+#" },
					},
					fengyin: {
						inherit: "fengyin",
					},
				},
			},
			//曹昂
			dcsbfengmin: {
				audio: 2,
				trigger: { global: ["loseAfter", "equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"] },
				filter(event, player) {
					const target = _status.currentPhase;
					if (
						!target ||
						!target.isIn() ||
						!Array.from({ length: 5 })
							.map((_, i) => i + 1)
							.reduce((sum, i) => sum + target.countEmptySlot(i), 0)
					)
						return false;
					const evt = event.getl(target);
					return evt && evt.player == target && (evt.es || []).length;
				},
				forced: true,
				logTarget: () => _status.currentPhase,
				async content(event, trigger, player) {
					player.addMark("dcsbfengmin", 1, false);
					const target = _status.currentPhase;
					await player.draw(
						Array.from({ length: 5 })
							.map((_, i) => i + 1)
							.reduce((sum, i) => sum + target.countEmptySlot(i), 0)
					);
					if (player.countMark("dcsbfengmin") > player.getDamagedHp()) {
						player.tempBanSkill("dcsbfengmin");
					}
				},
				intro: { content: "本局游戏已发动过#次此技能" },
			},
			dcsbzhiwang: {
				audio: 2,
				trigger: { player: "dying" },
				filter(event, player) {
					const evt = event.getParent(),
						evtx = event.getParent(3);
					if (!evt || evt.name != "damage" || !evtx || evtx.name != "useCard") return false;
					return game.hasPlayer(target => target != player);
				},
				usable: 1,
				async cost(event, trigger, player) {
					event.result = await player
						.chooseTarget(get.prompt("dcsbzhiwang"), lib.filter.notMe)
						.set("ai", target => {
							return get.attitude(get.event("player"), target);
						})
						.forResult();
				},
				async content(event, trigger, player) {
					if (trigger.source) delete trigger.source;
					if (trigger.getParent().source) delete trigger.getParent().source;
					event.targets[0].addTempSkill("dcsbzhiwang_effect");
					event.targets[0].markAuto("dcsbzhiwang_effect", [player]);
				},
				subSkill: {
					effect: {
						charlotte: true,
						onremove: true,
						trigger: { global: "phaseEnd" },
						forced: true,
						popup: false,
						async content(event, trigger, player) {
							let cards = game
								.getGlobalHistory("everything", evt => {
									if (evt.name != "dying") return false;
									if (!player.getStorage("dcsbzhiwang_effect").includes(evt.player)) return false;
									const evtx = evt.getParent(3);
									return (evtx.cards || []).someInD("d");
								})
								.reduce((cards, evt) => cards.addArray(evt.getParent(3).cards.filterInD("d")), []);
							while (cards.length) {
								const result = await player
									.chooseButton(["质亡：是否使用其中的一张牌？", cards])
									.set("filterButton", button => {
										return get.event("player").hasUseTarget(button.link, false);
									})
									.set("ai", button => {
										if (button.link.name == "jiu") return 10;
										return get.event("player").getUseValue(button.link);
									})
									.forResult();
								if (result.bool) {
									const card = result.links[0];
									cards.remove(card);
									player.$gain2(card, false);
									await game.asyncDelayx();
									await player.chooseUseTarget(true, card, false);
								}
							}
						},
						intro: { content: "本回合结束时，可以使用令$进入濒死的牌" },
					},
				},
			},
			//典韦
			dcsbkuangzhan:{
				audio: 2,
				enable:"phaseUse",
				usable:1,
				filter(event,player){
					return player.countCards('h')<player.maxHp;
				},
				async content(event,trigger,player){
					await player.drawTo(player.maxHp);
					let num=0;
					player.getHistory('gain',evt=>{
						if(evt.getParent(event.name)==event) num+=evt.cards.length;
					});
					while(num>0&&player.countCards('h')){
						num--;
						if(!game.hasPlayer(current=>player.canCompare(current))) break;
						const result=await player.chooseTarget('狂战：与一名角色拼点',true,function(card,player,target){
							return target!=player&&player.canCompare(target);
						}).set('ai',function(target){
							const player=get.player();
							if(target.countCards('h')>=player.countCards('h')) return 0;
							return get.effect(target,{name:'sha'},player,player)+1;
						}).forResult();
						const target=result.targets[0];
						const compare=await player.chooseToCompare(target).forResult();
						if(!player.storage[event.name]){
							player.storage[event.name]=[];
							player.when({global:"phaseEnd"}).then(()=>{
								delete player.storage.dcsbkuangzhan;
							});
						}
						if(compare.bool){
							player.storage[event.name].add(target);
							let card={name:'sha',isCard:true};
							let targets=player.storage[event.name].filter(current=>current!=player&&player.canUse(card,current,false));
							await player.useCard(card,targets,false);
						}
						else{
							player.storage[event.name].add(player);
							let card={name:'sha',isCard:true};
							if(target.canUse(card,player,false)) await target.useCard(card,player,false);
						}
					}
				},
				ai:{
					order:1,
					result:{
						player(player,target){
							let num=player.maxHp-player.countCards('h');
							for(let i of game.players){
								if(get.attitude(player,i)<=0) num-=i.countCards('h');
							}
							if(num<=0) return 1;
							return 0; 
						},
					},
				},
			},
			dcsbkangyong:{
				audio: 2,
				trigger:{
					player:["phaseBegin","phaseEnd"],
				},
				filter(event,player,name){
					if(name=="phaseBegin") return player.isDamaged();
					return event.kangyongRecover&&player.hp>1;
				},
				forced:true,
				async content(event,trigger,player){
					if(event.triggername=="phaseBegin"){
						const num=player.maxHp-player.hp;
						await player.recover(num)
						trigger.kangyongRecover=num;
					}
					else{
						const num=Math.min(player.hp-1,trigger.kangyongRecover);
						if(num>0) await player.loseHp(num);
					}
				},
			},
			//诸葛瑾
			dcsbtaozhou: {
				audio: 2,
				enable: "phaseUse",
				filter(event, player) {
					return game.hasPlayer(current => {
						if (current.hasSkill("dcsbzijin")) return false;
						return current.countCards("h") > 0 && current !== player;
					});
				},
				derivation: "dcsbzijin",
				chooseButton: {
					dialog() {
						return ui.create.dialog("###讨州###请选择一个数字（对其他角色不可见）");
					},
					chooseControl(event, player) {
						const list = [1, 2, 3];
						list.push("cancel2");
						return list;
					},
					check() {
						const event = get.event(),
							player = get.player();
						if (
							game.hasPlayer(current => {
								return current !== player && get.attitude(player, current) < 0;
							})
						)
							return [0, 1, 2].randomGet();
						if (player.hasShan()) return 2;
						const rand = event.getRand();
						if (rand < 0.2) return 0;
						if (rand < 0.5) return 1;
						return 2;
					},
					backup(result, player) {
						return {
							audio: "dcsbtaozhou",
							chosenNumber: result.index + 1,
							filterCard: () => false,
							selectCard: -1,
							filterTarget(card, player, target) {
								return target.countCards("h") > 0 && target !== player;
							},
							async content(event, trigger, player) {
								const [target] = event.targets;
								const chosenNumber = get.info("dcsbtaozhou_backup").chosenNumber;
								const cards = await target
									.chooseToGive(`${get.translation(player)}对你发动了【讨州】`, "你可以交给其至多三张手牌", [1, 3], player)
									.set("ai", card => {
										if (get.event("att") > 0) {
											if (get.event("chosenNumber") < ui.selected.cards.length + (get.event().getRand() < 0.5)) {
												return 5.1 - get.value(card);
											}
											return 0;
										}
										if (ui.selected.cards.length > 1) return -get.value(card);
										if (ui.selected.cards.length > 0) return 3.6 - get.value(card);
										return 4.6 - get.value(card);
									})
									.set("att", get.attitude(target, player))
									.set("chosenNumber", chosenNumber)
									.forResultCards();
								const givenCount = (cards && cards.length) || 0;
								const delta = Math.abs(givenCount - chosenNumber);
								if (givenCount >= chosenNumber) {
									await game.asyncDraw([player, target]);
								} else {
									target.addSkill("dcsbtaozhou_debuff");
									target.addMark("dcsbtaozhou_debuff", delta, false);
								}
								if (delta >= 2) {
									const sha = get.autoViewAs({ name: "sha" });
									if (target.canUse(sha, player, false)) {
										await target.addSkills("dcsbzijin");
									}
								}
								const roundNumberToRestore = game.roundNumber + chosenNumber;
								player.tempBanSkill("dcsbtaozhou", "forever");
								player
									.when({ global: "roundStart" })
									.filter(() => {
										return game.roundNumber >= roundNumberToRestore;
									})
									.assign({
										firstDo: true,
									})
									.then(() => {
										delete player.storage[`temp_ban_dcsbtaozhou`];
									});
							},
							ai: {
								result: {
									player: 0.5,
									target() {
										const chosenNumber = get.info("dcsbtaozhou_backup").chosenNumber;
										if (chosenNumber > 1) return -1;
										return 0;
									},
								},
							},
						};
					},
					prompt: () => "请选择【讨州】的目标",
				},
				subSkill: {
					backup: {},
					debuff: {
						trigger: { player: "damageBegin3" },
						forced: true,
						charlotte: true,
						async content(event, trigger, player) {
							trigger.num++;
							player.removeMark("dcsbtaozhou_debuff", 1, false);
							if (!player.countMark("dcsbtaozhou_debuff")) {
								player.removeSkill("dcsbtaozhou_debuff");
							}
						},
						intro: {
							content: "下&次受到伤害时，伤害+1",
						},
					},
				},
				ai: {
					order: 9.6,
					result: {
						player: 1,
					},
				},
			},
			dcsbzijin: {
				audio: 2,
				trigger: {
					player: "useCardAfter",
				},
				filter(event, player) {
					return !game.hasPlayer2(current => {
						return current.hasHistory("damage", evt => evt.card === event.card);
					}, true);
				},
				forced: true,
				async content(event, trigger, player) {
					const bool = await player
						.chooseToDiscard("自矜：弃置一张牌或失去1点体力", "he")
						.set("ai", card => {
							const player = get.player();
							if (get.effect(player, { name: "losehp" }, player, player) > 0) return 0;
							return 5 - get.value(card);
						})
						.forResultBool();
					if (!bool) await player.loseHp();
				},
				ai: {
					effect: {
						player_use(card, player) {
							if (get.effect(player, { name: "losehp" }, player) > 0) return;
							if (!get.tag(card, "damage") && get.value(card) < 5)
								return [
									0.2,
									player.hasCard(card => {
										return get.value(card) < 3;
									}, "he")
										? -0.1
										: -2,
								];
						},
					},
					neg: true,
				},
			},
			dcsbhoude: {
				audio: 2,
				trigger: {
					target: "useCardToTargeted",
				},
				filter(event, player) {
					const phaseUse = event.getParent("phaseUse");
					if (!phaseUse || phaseUse.name !== "phaseUse" || phaseUse.player === player) return false;
					const filter = card => {
						const color = get.color(card);
						return (get.name(card) === "sha" && color === "red") || (get.type(card) === "trick" && color === "black");
					};
					const evt = event.getParent();
					if (
						game
							.getGlobalHistory(
								"useCard",
								evt => {
									return filter(evt.card);
								},
								evt
							)
							.indexOf(evt) !== 0
					)
						return false;
					return filter(event.card);
				},
				async cost(event, trigger, player) {
					const target = trigger.player;
					let result;
					if (get.name(trigger.card) === "sha") {
						result = await player
							.chooseToDiscard(get.prompt("dcsbhoude", target), `弃置一张牌，令${get.translation(trigger.card)}对你无效。`, "chooseonly", "he")
							.set("ai", card => {
								if (!get.event("goon")) return 0;
								return 5.5 - get.value(card);
							})
							.set("goon", get.effect(player, trigger.card, target, player) < 0)
							.forResult();
					} else {
						result = await player
							.choosePlayerCard(`###${get.prompt("dcsbhoude", target)}###<div class="text center">弃置其的一张牌，令${get.translation(trigger.card)}对你无效。</div>`, target, "he")
							.set("ai", button => {
								if (!get.event("goon")) return 0;
								const val = get.buttonValue(button);
								if (get.attitude(get.player(), get.owner(button.link)) > 0) return -val;
								return val;
							})
							.set("goon", get.effect(player, trigger.card, target, player) < 0)
							.forResult();
					}
					if (result.bool) {
						event.result = {
							bool: true,
							cost_data: {
								cards: result.cards,
								links: result.links,
							},
						};
					}
				},
				logTarget: "player",
				async content(event, trigger, player) {
					const target = trigger.player;
					const result = event.cost_data;
					if (result.links && result.links.length) {
						await target.discard(result.links, "notBySelf").set("discarder", player);
					} else {
						await player.discard(result.cards);
					}
					trigger.excluded.add(player);
				},
			},
			//谋贾诩
			dcsbsushen: {
				unique: true,
				limited: true,
				audio: 2,
				audioname: ["dc_sb_jiaxu_shadow"],
				enable: "phaseUse",
				skillAnimation: true,
				animationColor: "soil",
				content() {
					player.awakenSkill("dcsbsushen");
					player.storage.dcsbsushen_reload = [Boolean(player.storage.dcsbfumou), player.countCards("h"), player.getHp()];
					player.addSkill("dcsbsushen_reload");
					player.addSkillLog("dcsbrushi");
				},
				derivation: "dcsbrushi",
				subSkill: {
					reload: {
						charlotte: true,
						onremove: true,
						mark: true,
						intro: {
							content(storage) {
								return ["【覆谋】状态：" + ["阳", "阴"][storage[0] ? 1 : 0], "手牌数：" + storage[1], "体力值：" + storage[2]].join("<br>");
							},
						},
					},
				},
				ai: {
					//waiting for PZ157
				},
			},
			dcsbrushi: {
				unique: true,
				limited: true,
				audio: 2,
				audioname: ["dc_sb_jiaxu_shadow"],
				enable: "phaseUse",
				filter(event, player) {
					return Array.isArray(player.storage.dcsbsushen_reload);
				},
				skillAnimation: true,
				animationColor: "thunder",
				*content(event, map) {
					const player = map.player,
						storage = player.storage.dcsbsushen_reload;
					player.awakenSkill("dcsbrushi");
					player.removeSkill("dcsbsushen_reload");
					if (Boolean(player.storage.dcsbfumou) !== storage[0]) {
						if (player.hasSkill("dcsbfumou", null, null, false)) {
							player.changeZhuanhuanji("dcsbfumou");
						}
					}
					if (player.countCards("h") != storage[1]) {
						if (player.countCards("h") < storage[1]) {
							yield player.drawTo(storage[1]);
						} else {
							yield player.chooseToDiscard("h", true, player.countCards("h") - storage[1]);
						}
					}
					if (player.getHp() != storage[2]) {
						yield player[player.getHp() > storage[2] ? "loseHp" : "recover"](Math.abs(player.getHp() - storage[2]));
					}
					if (player.getStat("skill").dcsbfumou) {
						delete player.getStat("skill").dcsbfumou;
					}
				},
				ai: {
					//waiting for PZ157
				},
			},
			dcsbfumou: {
				audio: 2,
				audioname: ["dc_sb_jiaxu_shadow"],
				enable: "phaseUse",
				filter(event, player) {
					return game.hasPlayer(target => {
						return target != player && target.countCards("h");
					});
				},
				filterTarget(card, player, target) {
					if (target == player) return false;
					if (!ui.selected.targets.length) return target.countCards("h");
					return !player.storage.dcsbfumou && game.countPlayer(target => target != player) > 1;
				},
				selectTarget() {
					const player = get.event("player");
					if (game.countPlayer(target => target != player) == 1) return [1, 2];
					return player.storage.dcsbfumou ? [1, 2] : 2;
				},
				targetprompt() {
					const player = get.event("player");
					if (game.countPlayer(target => target != player) == 1) return "";
					return player.storage.dcsbfumou ? "" : ["看牌角色", "得牌角色"][ui.selected.targets.length - 1];
				},
				prompt() {
					const player = get.event("player");
					return lib.skill.dcsbfumou.intro.content(player.storage.dcsbfumou);
				},
				usable: 1,
				complexTarget: true,
				complexSelect: true,
				multitarget: true,
				async content(event, trigger, player) {
					const storage = player.storage.dcsbfumou,
						target = event.targets[0],
						num = Math.ceil(target.countCards("h") / 2);
					player.changeZhuanhuanji("dcsbfumou");
					let cards = await player
						.choosePlayerCard("覆谋：选择展示" + get.translation(target) + "的至多" + get.cnNumber(num) + "张牌", target, "h", [1, num], true)
						.set("ai", card => {
							const player = get.event("player"),
								storage = get.event("storage"),
								target = get.event().getParent().targets[0];
							if (!storage) return get.value(card) * -get.attitude(player, target);
							return target.getUseValue(card, false) * get.attitude(player, target);
						})
						.set("visible", true)
						.set("storage", storage)
						.forResult("cards");
					if (!cards.length) return;
					await player.showCards(cards, get.translation(player) + "发动了【覆谋】");
					if (!storage) {
						const aim = event.targets[1];
						if (aim) {
							cards = cards.filter(card => lib.filter.canBeGained(card, aim, target));
							if (cards.length) {
								await aim.gain(cards, target, "give");
								await game.asyncDraw([player, target], cards.length);
							} else {
								aim.popup("杯具");
								aim.chat("555一张都拿不到");
							}
						} else {
							player.chat("只是看看，但给不了...");
						}
					} else {
						for (const card of cards) {
							if (target.hasUseTarget(card, false)) {
								await target.chooseUseTarget(card, true, false, "nodistance").set("oncard", card => {
									game.log(_status.event.card, "不可被响应");
									_status.event.directHit.addArray(game.players);
								});
							}
						}
					}
				},
				zhuanhuanji(player, skill) {
					player.storage[skill] = !player.storage[skill];
					player.changeSkin({ characterName: "dc_sb_jiaxu" }, "dc_sb_jiaxu" + (player.storage[skill] ? "_shadow" : ""));
				},
				marktext: "☯",
				mark: true,
				intro: {
					content(storage) {
						if (storage) return "转换技，出牌阶段限一次，你可以观看一名其他角色的手牌并展示其至多一半手牌，令其依次使用这些牌中所有其可以使用的牌（无距离限制且不可被响应）。";
						return "转换技，出牌阶段限一次，你可以观看一名其他角色A的手牌并展示其至多一半手牌并将这些牌交给另一名其他角色B，然后你与A各摸X张牌（X为A以此法失去的手牌数）。";
					},
				},
				ai: {
					order: 7,
					result: {
						player(player, target) {
							const storage = player.storage.dcsbfumou;
							if (!storage && !ui.selected.targets.length) {
								return Math.ceil(target.countCards("h") / 2);
							}
							return 0;
						},
						target(player, target) {
							const storage = player.storage.dcsbfumou;
							if (storage) return target.countCards("h") * get.threaten(target, player);
							let att = get.attitude(player, target);
							if (!ui.selected.targets.length) {
								if (att > 0 && game.hasPlayer(cur => {
									return cur !== player && cur !== target && get.attitude(player, cur) > 0;
								})) return target.countCards("h") / get.threaten(target, player) / 10;
								return -Math.ceil(target.countCards("h") / 2);
							}
							return Math.ceil(ui.selected.targets[0].countCards("h") / 2);
						},
					},
				},
				group: "dcsbfumou_change",
				subSkill: {
					change: {
						audio: "dcsbfumou",
						audioname: ["dc_sb_jiaxu_shadow"],
						trigger: {
							global: "phaseBefore",
							player: "enterGame",
						},
						filter(event, player) {
							return event.name != "phase" || game.phaseNumber == 0;
						},
						prompt2(event, player) {
							//无名杀先阴后阳，不要问为什么
							return "切换【覆谋】为状态" + (player.storage.dcsbfumou ? "阳" : "阴");
						},
						check: () => Math.random() > 0.5,
						content() {
							player.changeZhuanhuanji("dcsbfumou");
						},
					},
				},
			},
			//关樾
			dcshouzhi: {
				audio: 2,
				trigger: {
					global: "phaseEnd",
				},
				filter(event, player) {
					let delt = 0;
					player.checkHistory("lose", evt => {
						delt -= evt.hs.length;
					});
					player.checkHistory("gain", evt => {
						delt += evt.cards.length;
					});
					return delt < 0 || (delt > 0 && player.countCards("h"));
				},
				locked(skill, player) {
					return !(player && player.storage.dcshouzhi_modified);
				},
				derivation: ["dcshouzhi_modified"],
				onremove: ["dcshouzhi_modified"],
				async cost(event, trigger, player) {
					let delt = 0;
					player.checkHistory("lose", evt => {
						delt -= evt.hs.length;
					});
					player.checkHistory("gain", evt => {
						delt += evt.cards.length;
					});
					const forced = !player.storage.dcshouzhi_modified;
					if (delt < 0) {
						const bool = forced ? true : await player.chooseBool(get.prompt("dcshouzhi"), "你可以摸两张牌。").forResultBool();
						event.result = { bool };
					} else {
						const next = player.chooseCard("守执：请弃置一张手牌").set("filterCard", (card, player) => {
							return lib.filter.cardDiscardable(card, player, "dcshouzhi");
						});
						next.set("forced", forced);
						if (!forced) {
							next.set("prompt", get.prompt("dcshouzhi"))
								.set("prompt2", "你可以弃置一张手牌。")
								.set("ai", card => {
									const player = get.player();
									if (player.hasSkill("dcxingmen") && get.recoverEffect(player, player) > 0) return 6 - get.value(card);
									return 0;
								});
						}
						event.result = await next.forResult();
					}
				},
				async content(event, trigger, player) {
					const { cards } = event;
					if (cards && cards.length) await player.discard(cards);
					else await player.draw(2);
					await game.asyncDelayx();
				},
			},
			dcfenhui: {
				audio: 2,
				enable: "phaseUse",
				limited: true,
				filterTarget(card, player, target) {
					const list = get.event("dcfenhui_enabled");
					if (!list || !list.length) return false;
					return list.includes(target);
				},
				onChooseToUse(event) {
					if (game.online) return;
					const player = event.player;
					const evts = player.getAllHistory("useCard", evt => {
						return evt.targets && evt.targets.length;
					});
					event.set(
						"dcfenhui_enabled",
						game.filterPlayer(current => {
							return evts.filter(evt => evt.targets.includes(current)).length;
						})
					);
				},
				skillAnimation: true,
				animationColor: "fire",
				derivation: ["dcxingmen"],
				async content(event, trigger, player) {
					player.awakenSkill("dcfenhui");
					const target = event.target;
					const count = player.getAllHistory("useCard", evt => {
						return evt.targets && evt.targets.includes(target);
					}).length;
					target.addMark("dcfenhui_mark", Math.min(5, count));
					await player.draw(Math.min(5, count));
					player.addSkill("dcfenhui_effect");
				},
				subSkill: {
					effect: {
						audio: "dcfenhui",
						trigger: {
							global: ["damageBegin1","die"],
						},
						filter(event, player) {
							return event.player.hasMark("dcfenhui_mark");
						},
						logTarget: "player",
						forced: true,
						charlotte: true,
						async content(event, trigger, player) {
							if (trigger.name === "damage") {
								trigger.player.removeMark("dcfenhui_mark", 1);
								trigger.num++;
							} else {
								await player.loseMaxHp();
								player.storage.dcshouzhi_modified = true;
								await player.addSkills("dcxingmen");
							}
						},
					},
					mark: {
						marktext: "恨",
						intro: {
							name: "恨(奋恚)",
							name2: "恨",
							content: "mark",
						},
					},
				},
				ai: {
					order: 6,
					result: {
						target(player, target) {
							if (
								!player.hasCard(card => {
									return get.tag(card, "damage") && player.canUse(card, target, true, true) && get.effect(target, card, player, player) > 0;
								}, "hs")
							)
								return 0;
							const count = Math.min(
								5,
								player.getAllHistory("useCard", evt => {
									return evt.targets && evt.targets.includes(target);
								}).length
							);
							let value = Math.max(player.getHp(true), 3) - count;
							if (
								(count - 1) *
									(target.hasSkillTag("filterDamage", null, {
										player: player,
									})
										? 1
										: 2) >=
								target.getHp(true) +
									target.countCards("hs", card => {
										return target.canSaveCard(card, target);
									})
							)
								value -= 2;
							return Math.min(0, value);
						},
					},
				},
			},
			dcxingmen: {
				audio: 2,
				trigger: {
					player: "loseAfter",
				},
				filter(event, player) {
					return event.getParent(2).name === "dcshouzhi" && player.isDamaged();
				},
				frequent: true,
				prompt2: "你可以回复1点体力。",
				group: ["dcxingmen_norespond"],
				check(event, player) {
					return get.recoverEffect(player, player) > 0;
				},
				async content(event, trigger, player) {
					await player.recover();
				},
				subSkill: {
					norespond: {
						audio: "dcxingmen",
						trigger: {
							player: "gainAfter",
						},
						filter(event, player) {
							return event.getParent().name === "draw" && event.cards.length >= 2 && event.cards.some(card => get.color(card) === "red");
						},
						forced: true,
						locked: false,
						popup: false,
						async content(event, trigger, player) {
							player.addGaintag(
								trigger.cards.filter(card => get.color(card) === "red"),
								"dcxingmen"
							);
							player.addSkill("dcxingmen_directHit");
						},
					},
					directHit: {
						audio: "dcxingmen",
						trigger: { player: "useCard" },
						forced: true,
						charlotte: true,
						filter(event, player) {
							return player.hasHistory("lose", evt => {
								if (evt.getParent() !== event) return false;
								return Object.values(evt.gaintag_map).some(tags => tags.includes("dcxingmen"));
							});
						},
						async content(event, trigger, player) {
							trigger.directHit.addArray(game.filterPlayer());
							game.log(trigger.card, "不可被响应");
						},
					},
				},
			},
			//武关羽
			dcjuewu: {
				audio: 2,
				enable: "chooseToUse",
				filter(event, player) {
					if (
						!player.hasCard(card => {
							return _status.connectMode || get.number(card) === 2;
						}, "hes")
					)
						return false;
					for (const name of ["shuiyanqijuny"].concat(lib.inpile)) {
						if (player.getStorage("dcjuewu_used").includes(name)) continue;
						const card = get.autoViewAs({ name }, "unsure");
						if (!get.tag(card, "damage")) continue;
						if (event.filterCard(card, player, event)) return true;
						if (name === "sha") {
							for (const nature of lib.inpile_nature) {
								card.nature = nature;
								if (event.filterCard(card, player, event)) return true;
							}
						}
					}
					return false;
				},
				hiddenCard(player, name) {
					if (!lib.inpile.includes(name)) return false;
					if (player.getStorage("dcjuewu_used").includes(name)) return false;
					if (
						!player.hasCard(card => {
							return _status.connectMode || get.number(card) === 2;
						}, "hes")
					)
						return false;
					return get.tag({ name }, "damage");
				},
				group: "dcjuewu_inTwo",
				chooseButton: {
					dialog(event, player) {
						let list = get.inpileVCardList(info => {
							return get.tag({ name: info[2] }, "damage");
						});
						if (!list.some(info => info[2] === "shuiyanqijuny")) list.add(["锦囊", "", "shuiyanqijuny"]);
						list = list.filter(info => {
							const name = info[2],
								nature = info[3];
							if (player.getStorage("dcjuewu_used").includes(name)) return false;
							const card = get.autoViewAs({ name, nature }, "unsure");
							return event.filterCard(card, player, event);
						});
						return ui.create.dialog("绝武", [list, "vcard"]);
					},
					check(button) {
						if (get.event().getParent().type != "phase") return 1;
						const player = get.player();
						return player.getUseValue({
							name: button.link[2],
							nature: button.link[3],
						});
					},
					backup(links, player) {
						return {
							audio: "dcjuewu",
							filterCard(card, player) {
								return get.number(card) === 2;
							},
							position: "hes",
							check(card) {
								return 8 - get.value(card);
							},
							popname: true,
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
							},
							precontent() {
								if (!player.storage.dcjuewu_used) {
									player.when({ global: "phaseAfter" }).then(() => {
										delete player.storage.dcjuewu_used;
									});
								}
								player.markAuto("dcjuewu_used", event.result.card.name);
							},
						};
					},
					prompt(links, player) {
						return "将一张点数为2的牌当" + (get.translation(links[0][3]) || "") + get.translation(links[0][2]) + "使用";
					},
				},
				subSkill: {
					backup: {},
					inTwo: {
						audio: "dcjuewu",
						trigger: {
							player: "gainAfter",
							global: "loseAsyncAfter",
						},
						filter(event, player) {
							const cards = event.getg(player);
							if (!cards.length) return false;
							return game.hasPlayer(current => {
								if (current === player) return false;
								const evt = event.getl(current);
								if (!evt) return false;
								return evt.hs.some(i => cards.includes(i)) || evt.es.some(i => cards.includes(i)) || evt.js.some(i => cards.includes(i));
							});
						},
						forced: true,
						locked: false,
						async content(event, trigger, player) {
							let gcards = trigger.getg(player), cards = [];
							game.countPlayer(current => {
								if (current === player) return false;
								const evt = trigger.getl(current);
								if (!evt) return false;
								cards.addArray(evt.hs.filter(i => gcards.includes(i)));
								cards.addArray(evt.es.filter(i => gcards.includes(i)));
								cards.addArray(evt.js.filter(i => gcards.includes(i)));
							});
							player.addGaintag(cards, "dcjuewu_two");
							player.addSkill("dcjuewu_two");
						},
					},
					two: {
						charlotte: true,
						mod: {
							cardnumber(card) {
								if (card.hasGaintag("dcjuewu_two")) return 2;
							},
						},
					},
				},
				ai: {
					fireAttack: true,
					respondSha: true,
					skillTagFilter(player) {
						if (
							!player.hasCard(card => {
								return _status.connectMode || get.number(card) === 2;
							}, "hes")
						)
							return false;
					},
					order: 1,
					result: {
						player(player) {
							if (get.event("dying")) return get.attitude(player, get.event("dying"));
							return 1;
						},
					},
				},
			},
			dcwuyou: {
				audio: 2,
				global: "dcwuyou_g",
				subSkill: {
					g: {
						audio: "dcwuyou",
						forceaudio: true,
						enable: "phaseUse",
						usable: 1,
						filter(event, player) {
							if (!player.countCards("h")) return false;
							return game.hasPlayer(current => {
								return current.hasSkill("dcwuyou");
							});
						},
						filterCard: true,
						filterTarget(card, player, target) {
							return target.hasSkill("dcwuyou");
						},
						selectTarget() {
							const count = game.countPlayer(current => {
								return current.hasSkill("dcwuyou");
							});
							return count > 1 ? 1 : -1;
						},
						check(card) {
							const player = get.player();
							const hasFriend = game.hasPlayer(current => {
								return current.hasSkill("dcwuyou") && get.attitude(player, current) > 0;
							});
							return (hasFriend ? 7 : 1) - get.value(card);
						},
						prompt() {
							const player = get.player(),
								list = game.filterPlayer(current => {
									return current.hasSkill("dcwuyou");
								}),
								list2 = list.filter(current => current !== player);
							const moreThanOne = list.length > 1,
								includesMe = list.includes(player);
							let str = "选择一张手牌，";
							if (includesMe) str += `点击“确定”，${moreThanOne ? "或" : ""}`;
							if (moreThanOne || !includesMe) str += `将此牌交给${get.translation(list2)}${list2.length > 1 ? "中的一人" : ""}，`;
							str += "然后执行后续效果。";
							return str;
						},
						discard: false,
						lose: false,
						delay: false,
						async content(event, trigger, player) {
							const { target } = event;
							const isMe = target === player;
							let { cards } = event;
							if (!isMe) await player.give(cards, target);
							const names = lib.inpile
								.filter(name => {
									return get.type2(name) !== "equip";
								})
								.randomGets(5);
							if (names.includes("sha")) names.splice(names.indexOf("sha") + 1, 0, ...lib.inpile_nature.map(nature => ["sha", nature]));
							const vcard = names.map(namex => {
								let name = namex,
									nature;
								if (Array.isArray(namex)) [name, nature] = namex;
								const info = [get.type(name), "", name, nature];
								return info;
							});
							const links = await target
								.chooseButton(["武佑：选择一个牌名", [vcard, "vcard"]], true)
								.set("user", player)
								.set("ai", button => {
									const player = get.player(),
										user = get.event("user");
									return user.getUseValue({ name: button.link[2], nature: button.link[3] }) * get.attitude(player, user);
								})
								.forResultLinks();
							if (!links || !links.length) return;
							const viewAs = { name: links[0][2], nature: links[0][3] };
							if (!isMe) {
								cards = await target.chooseToGive(player).set('ai', card => {
									const player = get.event("player"), target = get.event().getParent().player;
									if (get.attitude(player, target) <= 0) return 0;
									return 6 - get.value(card);
								}).forResultCards();
							}
							if (!cards) return;
							const card = cards[0];
							if (player.getCards("h").includes(card)) {
								if (!player.storage.dcwuyou_transfer) player.storage.dcwuyou_transfer = {};
								player.storage.dcwuyou_transfer[card.cardid] = viewAs;
								player.addGaintag(cards, "dcwuyou_transfer");
								player.addSkill("dcwuyou_transfer");
							}
						},
						ai: {
							order: 10,
							result: {
								player(player, target) {
									if (get.attitude(player, target) > 0) return 1;
									return 0;
								},
								target: 0.5,
							},
						},
					},
					transfer: {
						trigger: { player: "useCard1" },
						forced: true,
						popup: false,
						charlotte: true,
						filter(event, player) {
							if (event.addCount === false) return false;
							return player.hasHistory("lose", evt => {
								if (evt.getParent() != event) return false;
								for (const i in evt.gaintag_map) {
									if (evt.gaintag_map[i].includes("dcwuyou_transfer")) return true;
								}
								return false;
							});
						},
						async content(event, trigger, player) {
							trigger.addCount = false;
							const stat = player.getStat().card,
								name = trigger.card.name;
							if (typeof stat[name] === "number") stat[name]--;
						},
						mod: {
							cardname(card, player) {
								const map = player.storage.dcwuyou_transfer;
								if (map && map[card.cardid] && get.itemtype(card) == "card" && card.hasGaintag("dcwuyou_transfer")) return map[card.cardid].name;
							},
							cardnature(card, player) {
								const map = player.storage.dcwuyou_transfer;
								if (map && map[card.cardid] && get.itemtype(card) == "card" && card.hasGaintag("dcwuyou_transfer")) return map[card.cardid].nature || false;
							},
							cardUsable(card) {
								if (!card.cards) return;
								if (card.cards.some(card => card.hasGaintag("dcwuyou_transfer"))) return Infinity;
							},
							targetInRange(card, player) {
								if (!card.cards) return;
								if (card.cards.some(card => card.hasGaintag("dcwuyou_transfer"))) return true;
							},
						},
					},
				},
			},
			dcyixian: {
				audio: 2,
				enable: "phaseUse",
				limited: true,
				skillAnimation: true,
				animationColor: "metal",
				chooseButton: {
					dialog(event, player) {
						const dialog = ui.create.dialog("义贤：你可以选择一项", "hidden");
						dialog.add([
							[
								["field", "获得场上的所有装备牌"],
								["discardPile", "获得弃牌堆中的所有装备牌"],
							],
							"textbutton",
						]);
						return dialog;
					},
					check(button) {
						const player = get.player();
						if (button.link == "field")
							return game
								.filterPlayer()
								.map(current => {
									const cards = current.getCards("e"),
										att = get.sgnAttitude(player, current);
									return cards
										.map(card => {
											return Math.max(player.hasSkill("dcjuewu") ? 5 : 0, get.value(card, player)) - get.value(card, current) * att;
										})
										.reduce((p, c) => p + c, 0);
								})
								.reduce((p, c) => p + c, 0);
						if (button.link == "discardPile")
							return Array.from(ui.discardPile.childNodes)
								.filter(card => {
									return get.type(card) === "equip";
								})
								.map(card => {
									return Math.max(player.hasSkill("dcjuewu") ? 5 : 0, get.value(card, player));
								})
								.reduce((p, c) => p + c, 0);
						return 0.1;
					},
					backup(links) {
						return {
							audio: "dcyixian",
							filterCard: () => false,
							selectCard: -1,
							pos: links[0],
							filterTarget: () => false,
							selectTarget: -1,
							skillAnimation: true,
							animationColor: "metal",
							async content(event, trigger, player) {
								player.awakenSkill("dcyixian");
								const position = lib.skill.dcyixian_backup.pos;
								let cards = [];
								if (position === "field") {
									cards.addArray(
										game
											.filterPlayer()
											.map(current => current.getCards("e"))
											.flat()
									);
								} else {
									cards.addArray(
										Array.from(ui.discardPile.childNodes).filter(card => {
											return get.type(card) === "equip";
										})
									);
								}
								if (!cards.length) return;
								await player.gain(cards, position === "field" ? "give" : "gain2");
								const pairs = game.filterPlayer().map(current => {
									let lostNum = 0;
									current.checkHistory("lose", evt => {
										if (evt.getParent(2) === event) lostNum += evt.cards2.length;
									});
									return [current, lostNum];
								});
								for (const pair of pairs) {
									const [target, num] = pair;
									if (!num) continue;
									const bool = await player
										.chooseBool(`是否令${get.translation(target)}摸${get.cnNumber(num)}张牌并回复1点体力？`)
										.set("choice", get.effect(target, { name: "draw" }, player, player) + get.recoverEffect(target, player, player) / 5 > 0)
										.forResultBool();
									if (bool) {
										player.line(target, "green");
										await target.draw(num);
										await target.recover();
									}
									if (!event.isMine() && !event.isOnline()) await game.asyncDelayx();
								}
							},
						};
					},
					prompt(links) {
						return `点击“确定”，从${links[0] === "field" ? "场上" : "弃牌堆中"}获得所有装备牌`;
					},
				},
				subSkill: {
					backup: {},
				},
				ai: {
					order: 10,
					threaten: 2.9,
					result: {
						player(player) {
							const enemies = game.filterPlayer(current => {
									return (!get.rawAttitude || get.rawAttitude(player, current) < 0) && get.attitude(player, current) >= 0;
								}),
								knownEnemies = game.filterPlayer(current => {
									return get.attitude(player, current) < 0;
								});
							if ((!knownEnemies.length && player.countCards("e") > 1) || (player.getHp() > 3 && enemies.length > 0 && knownEnemies.length < 2 && knownEnemies.length < enemies.length && !knownEnemies.some(enemy => get.attitude(player, enemy) <= -9))) return 0;
							const val1 = game
								.filterPlayer()
								.map(current => {
									const cards = current.getCards("e"),
										att = get.sgnAttitude(player, current);
									return cards
										.map(card => {
											return Math.max(player.hasSkill("dcjuewu") ? 5 : 0, get.value(card, player)) - get.value(card, current) * att;
										})
										.reduce((p, c) => p + c, 0);
								})
								.reduce((p, c) => p + c, 0);
							const val2 = Array.from(ui.discardPile.childNodes)
								.filter(card => {
									return get.type(card) === "equip";
								})
								.map(card => {
									return Math.max(player.hasSkill("dcjuewu") ? 5 : 0, get.value(card, player));
								})
								.reduce((p, c) => p + c, 0);
							return Math.max(val1, val2) > 20 ? 4 : 0;
						},
					},
				},
			},
			//SP甄宓
			dcjijie: {
				audio: 2,
				trigger: {
					global: ["gainAfter", "loseAsyncAfter", "recoverAfter"],
				},
				getIndex(event, player) {
					if (event.name !== "loseAsync") return [[event.player]];
					return [
						game
							.filterPlayer(current => {
								return current !== player && _status.currentPhase !== current && event.getg(current).length > 0;
							})
							.sortBySeat(),
					];
				},
				filter(event, player, triggername, targets) {
					if (player.getStorage("dcjijie_used").includes(event.name == "recover" ? "recover" : "draw")) return false;
					if (event.name === "recover") return targets[0] !== player && _status.currentPhase !== targets[0] && player.isDamaged();
					return targets.some(current => {
						return current !== player && _status.currentPhase !== current && event.getg(current).length > 0;
					});
				},
				forced: true,
				logTarget(event, player, triggername, targets) {
					return targets;
				},
				async content(event, trigger, player) {
					player.addTempSkill("dcjijie_used");
					if (trigger.name === "recover") {
						player.markAuto("dcjijie_used", ["recover"]);
						await player.recover(trigger.num);
					} else {
						const count = game.countPlayer(current => {
							if (current === player || _status.currentPhase === current) return 0;
							return trigger.getg(current).length;
						});
						player.markAuto("dcjijie_used", ["draw"]);
						await player.draw(count);
					}
				},
				subSkill: {
					used: {
						charlotte: true,
						onremove: true,
					},
				},
			},
			dchuiji: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterTarget: true,
				chooseButton: {
					dialog(event, player) {
						const name = get.translation(event.result.targets[0]);
						const dialog = ui.create.dialog(
							`惠济：请选择要令${name}执行的选项`,
							[
								[
									["draw", "令其摸两张牌"],
									["equip", "令其随机使用牌堆中的一张装备牌"],
								],
								"textbutton",
							],
							"hidden"
						);
						return dialog;
					},
					filter(button, player) {
						const target = get.event().getParent().result.targets[0];
						const link = button.link;
						if (button.link === "equip" && target.isMin()) return false;
						return true;
					},
					check(button) {
						const player = get.player(),
							target = get.event().getParent().result.targets[0];
						const link = button.link;
						const att = Math.sign(get.attitude(player, target));
						const drawWugu = target.countCards("h") + 2 >= game.countPlayer();
						if (link === "draw") return (drawWugu ? -1 : 2) * att;
						return 1;
					},
					backup(links) {
						return {
							audio: "dchuiji",
							target: get.event().result.targets[0],
							link: links[0],
							filterTarget(card, player, target) {
								return target === lib.skill.dchuiji_backup.target;
							},
							selectTarget: -1,
							async content(event, trigger, player) {
								const link = lib.skill.dchuiji_backup.link;
								const { target } = event;
								if (link === "draw") await target.draw(2);
								else {
									const card = get.cardPile2(card => {
										if (get.type(card) !== "equip") return false;
										return target.canUse(card, target) && !get.cardtag(card, "gifts");
									});
									if (card) await target.chooseUseTarget(card, true).set("nopopup", true);
									else {
										game.log("但是牌堆里没有", target, "的装备！");
										await game.asyncDelayx();
									}
								}
								if (target.countCards("h") < game.countPlayer()) return;
								player
									.when({ global: "wuguRemained" })
									.filter(evt => {
										return evt.getParent(3) === event;
									})
									.vars({ originalOwner: target })
									.then(() => {
										const remained = trigger.remained.filterInD("d");
										if (!remained.length) return event.finish();
										player.line(originalOwner);
										originalOwner.gain(remained, "gain2");
									});
								await target.chooseUseTarget(
									{
										name: "wugu",
										storage: {
											fixedShownCards: target.getCards("h"),
										},
									},
									true
								);
							},
						};
					},
					prompt(links) {
						return "点击“确定”以执行效果";
					},
				},
				subSkill: {
					backup: {},
				},
				ai: {
					order(item, player) {
						if (!game.hasPlayer(current => current !== player && get.attitude(player, current) > 0) && game.hasPlayer(current => get.attitude(player, current) <= 0)) return 10;
						if (
							game.hasPlayer(current => {
								const del = player.countCards("h") - current.countCards("h"),
									toFind = [2, 4].find(num => Math.abs(del) === num);
								if (toFind === 4 && del < 0 && get.attitude(player, current) <= 0) {
									return true;
								}
								return false;
							})
						)
							return 10;
						return 1;
					},
					result: {
						target(player, target) {
							const att = get.attitude(player, target);
							const wugu = target.countCards("h") + 2 > game.countPlayer();
							if (wugu) return Math.min(0, att) * Math.min(3, target.countCards("h"));
							return Math.max(0, att) * Math.min(3, target.countCards("h"));
						},
					},
				},
			},
			//曹芳
			dczhimin: {
				audio: 2,
				trigger: { global: "roundStart" },
				filter(event, player) {
					return game.hasPlayer(current => current != player && current.countCards("h")) && player.getHp() > 0;
				},
				forced: true,
				group: ["dczhimin_mark", "dczhimin_draw"],
				async content(event, trigger, player) {
					const targets = await player
						.chooseTarget(
							`置民：请选择至多${get.cnNumber(player.getHp())}名其他角色`,
							"你获得这些角色各自手牌中的随机一张点数最小的牌",
							(card, player, target) => {
								return target !== player && target.countCards("h");
							},
							[1, player.getHp()],
							true
						)
						.set("ai", target => {
							const player = get.player();
							return get.effect(target, { name: "shunshou_copy", position: "h" }, player, player) + 0.1;
						})
						.forResultTargets();
					if (!targets || !targets.length) return;
					targets.sortBySeat(trigger.player);
					player.line(targets, "thunder");
					const toGain = [];
					for (const target of targets) {
						const cards = target.getCards("h"),
							minNumber = cards.map(card => get.number(card)).sort((a, b) => a - b)[0];
						const gainableCards = cards
							.filter(card => {
								return get.number(card) === minNumber && lib.filter.canBeGained(card, player, target);
							})
							.randomSort();
						toGain.push(gainableCards[0]);
					}
					if (toGain.length) await player.gain(toGain, "giveAuto");
					await game.asyncDelayx();
				},
				ai: {
					threaten: 5.8,
				},
				mod: {
					aiOrder(player, card, num) {
						if (
							num > 0 &&
							get.itemtype(card) === "card" &&
							card.hasGaintag("dczhimin_tag") &&
							player.countCards("h", cardx => {
								return cardx.hasGaintag("dczhimin_tag") && cardx !== card;
							}) < player.maxHp
						)
							return num / 10;
					},
				},
				subSkill: {
					mark: {
						audio: "dczhimin",
						trigger: {
							player: "gainAfter",
							global: "loseAsyncAfter",
						},
						forced: true,
						filter(event, player) {
							if (_status.currentPhase === player || !event.getg(player).some(card => get.position(card) === "h" && get.owner(card) === player)) return false;
							return true;
						},
						async content(event, trigger, player) {
							player.addGaintag(
								trigger.getg(player).filter(card => get.position(card) === "h" && get.owner(card) === player),
								"dczhimin_tag"
							);
						},
					},
					draw: {
						audio: "dczhimin",
						trigger: {
							player: "loseAfter",
							global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
						},
						forced: true,
						filter(event, player) {
							const evt = event.getl(player);
							if (!evt.hs.length) return false;
							return Object.values(evt.gaintag_map).flat().includes("dczhimin_tag");
						},
						async content(event, trigger, player) {
							const count = player.maxHp - player.countCards("h");
							if (count <= 0) return;
							await player.draw(count);
						},
					},
				},
			},
			dcjujian: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				zhuSkill: true,
				filter(event, player) {
					return game.hasPlayer(current => {
						return player.hasZhuSkill("dcjujian", current) && current.group === "wei" && current !== player;
					});
				},
				filterTarget(_, player, target) {
					return player.hasZhuSkill("dcjujian", target) && target.group === "wei" && target !== player;
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					await target.draw();
					target.addTempSkill("dcjujian_forbid", "roundStart");
					target.markAuto("dcjujian_forbid", player);
				},
				ai: {
					result: {
						target(player, target) {
							const num = target.countCards("hs", card => {
									return get.type(card) == "trick" && target.canUse(card, player) && get.effect(player, card, target, player) < -2;
								}),
								att = get.attitude(player, target);
							if (att < 0) return -0.74 * num;
							return 1.5;
						},
					},
				},
				subSkill: {
					forbid: {
						audio: "dcjujian",
						trigger: {
							player: "useCardToBefore",
						},
						filter(event, player) {
							if (get.type(event.card) !== "trick") return false;
							return player.getStorage("dcjujian_forbid").includes(event.target);
						},
						forced: true,
						charlotte: true,
						onremove: true,
						direct: true,
						async content(event, trigger, player) {
							await trigger.target.logSkill("dcjujian_forbid", player);
							trigger.cancel();
						},
						intro: {
							content: "使用普通锦囊牌对$无效",
						},
						ai: {
							effect: {
								player(card, player, target, current) {
									if (get.type(card) == "trick" && player.getStorage("dcjujian_forbid").includes(target)) return "zeroplayertarget";
								},
							},
						},
					},
				},
			},
			//谋司马懿
			dcsbquanmou: {
				audio: 2,
				audioname: ["dc_sb_simayi_shadow"],
				zhuanhuanji(player, skill) {
					player.storage[skill] = !player.storage[skill];
					player.changeSkin({ characterName: "dc_sb_simayi" }, "dc_sb_simayi" + (player.storage[skill] ? "_shadow" : ""));
				},
				marktext: "☯",
				enable: "phaseUse",
				filter(event, player) {
					const selected = player.getStorage("dcsbquanmou_selected");
					return game.hasPlayer(current => !selected.includes(current) && player.inRange(current) && current.countCards("he") > 0);
				},
				filterTarget(card, player, target) {
					if (player === target) return false;
					const selected = player.getStorage("dcsbquanmou_selected");
					return !selected.includes(target) && player.inRange(target) && target.countCards("he") > 0;
				},
				prompt() {
					const player = get.player();
					if (player.storage.dcsbquanmou) return "转换技。出牌阶段每名角色限一次，你可以令一名攻击范围内的其他角色交给你一张牌。当你于本阶段内下次对其造成伤害后，你可以选择除其外的至多三名其他角色，对这些角色依次造成1点伤害。";
					return "转换技。出牌阶段每名角色限一次，你可以令一名攻击范围内的其他角色交给你一张牌。当你于本阶段内下次对其造成伤害时，取消之。";
				},
				async content(event, trigger, player) {
					const target = event.targets[0];
					player.changeZhuanhuanji("dcsbquanmou");
					player.markAuto("dcsbquanmou_selected", [target]);
					const cards = await target.chooseCard("he", true, `选择交给${get.translation(player)}一张牌`).forResultCards();
					if (cards && cards.length) {
						await target.give(cards, player);
						const key = `dcsbquanmou_${Boolean(!player.storage.dcsbquanmou)}`;
						player.addTempSkill(key, { global: ["phaseUseBefore", "phaseChange"] });
						player.markAuto(key, [target]);
						target.addAdditionalSkill(`${key}_${player.playerid}`, `${key}_mark`);
					}
				},
				ai: {
					order: 9,
					result: {
						player: function (player, target) {
							if (player.storage.dcsbquanmou) return 1;
							return 1 + game.countPlayer(i => player !== i && target !== i && !i.hasSkill("false_mark") && get.attitude(player, i) < 0);
						},
						target: function (player, target) {
							let res = target.hasSkillTag("noh") ? 0 : -1;
							if (player.storage.dcsbquanmou) return res + 0.6;
							return res;
						},
					},
				},
				onremove: true,
				mark: true,
				intro: {
					content: storage => {
						if (storage) return "转换技。出牌阶段每名角色限一次，你可以令一名攻击范围内的其他角色交给你一张牌。当你于本阶段内下次对其造成伤害后，你可以选择除其外的至多三名其他角色，对这些角色依次造成1点伤害。";
						return "转换技。出牌阶段每名角色限一次，你可以令一名攻击范围内的其他角色交给你一张牌。当你于本阶段内下次对其造成伤害时，取消之。";
					},
				},
				group: "dcsbquanmou_change",
				subSkill: {
					change: {
						audio: "dcsbquanmou",
						audioname: ["dc_sb_simayi_shadow"],
						trigger: {
							global: "phaseBefore",
							player: "enterGame",
						},
						filter(event, player) {
							return event.name != "phase" || game.phaseNumber == 0;
						},
						prompt2(event, player) {
							//无名杀先阴后阳，不要问为什么
							return "切换【权谋】为状态" + (player.storage.dcsbquanmou ? "阳" : "阴");
						},
						check: () => Math.random() > 0.5,
						content() {
							player.changeZhuanhuanji("dcsbquanmou");
						},
					},
					true: {
						charlotte: true,
						audio: "dcsbquanmou",
						audioname: ["dc_sb_simayi_shadow"],
						trigger: { source: "damageSource" },
						forced: true,
						popup: false,
						filter(event, player) {
							return player.getStorage("dcsbquanmou_true").includes(event.player);
						},
						async content(event, trigger, player) {
							const target = trigger.player;
							player.getStorage("dcsbquanmou_true").remove(target);
							target.removeAdditionalSkill(`dcsbquanmou_true_${player.playerid}`);
							if (game.hasPlayer(current => current != player && current != target)) {
								const result = await player
									.chooseTarget([1, 3], `权谋：是否对${get.translation(target)}之外的至多三名其他角色各造成1点伤害？`, (card, player, target) => {
										return target != player && target != get.event().getTrigger().player;
									})
									.set("ai", target => {
										const player = get.player();
										return get.damageEffect(target, player, player);
									})
									.forResult();
								if (result.bool) {
									await player.logSkill("dcsbquanmou", result.targets);
									for (let i of result.targets) {
										if (i.isIn()) await i.damage();
									}
								}
							}
						},
						onremove(player, skill) {
							game.filterPlayer(current => {
								current.removeAdditionalSkill(`${skill}_${player.playerid}`);
							});
							delete player.storage[skill];
							delete player.storage.dcsbquanmou_selected;
						},
					},
					true_mark: {
						charlotte: true,
						mark: true,
						marktext: "讨",
						intro: {
							name: "权谋 - 阴",
							content: () => {
								return `当你下次受到${get.translation(_status.currentPhase)}造成的伤害后，其可以对除你之外的至多三名其他角色各造成1点伤害。`;
							},
						},
						ai: {
							threaten: 2.5,
							effect: {
								target(card, player, target) {
									if (get.tag(card, "damage") && player && player.hasSkill("dcsbquanmou_true")) {
										let tars = game.countPlayer(i => player !== i && target !== i && get.attitude(player, target) < 0 && !target.hasSkill("dcsbquanmou_false_mark"));
										return [1, 0, 1, (6 * Math.min(3, tars)) / (3 + Math.pow(target.countCards("h"), 2))];
									}
								},
							},
						},
					},
					false: {
						charlotte: true,
						audio: "dcsbquanmou",
						audioname: ["dc_sb_simayi_shadow"],
						trigger: { source: "damageBegin2" },
						forced: true,
						filter(event, player) {
							return player.getStorage("dcsbquanmou_false").includes(event.player);
						},
						async content(event, trigger, player) {
							const target = trigger.player;
							player.getStorage("dcsbquanmou_false").remove(target);
							target.removeAdditionalSkill(`dcsbquanmou_false_${player.playerid}`);
							trigger.cancel();
						},
						onremove(player, skill) {
							game.filterPlayer(current => {
								current.removeAdditionalSkill(`${skill}_${player.playerid}`);
							});
							delete player.storage[skill];
							delete player.storage.dcsbquanmou_selected;
						},
					},
					false_mark: {
						charlotte: true,
						mark: true,
						marktext: "抚",
						intro: {
							name: "权谋 - 阳",
							content: () => {
								return `当你下次受到${get.translation(_status.currentPhase)}造成的伤害时，防止此伤害。`;
							},
						},
						ai: {
							nodamage: true,
							nofire: true,
							nothunder: true,
							skillTagFilter(player, tag, arg) {
								return arg && arg.player && arg.player.hasSkill("dcsbquanmou_false");
							},
							effect: {
								target(card, player, target) {
									if (get.tag(card, "damage") && player && player.hasSkill("dcsbquanmou_false")) return "zeroplayertarget";
								},
							},
						},
					},
				},
			},
			dcsbpingliao: {
				audio: 2,
				audioname: ["dc_sb_simayi_shadow"],
				trigger: { player: "useCard" },
				forced: true,
				filter(event, player) {
					return event.card.name == "sha";
				},
				logTarget(event, player) {
					return game.filterPlayer(current => player.inRange(current));
				},
				async content(event, trigger, player) {
					const unrespondedTargets = [];
					const respondedTargets = [];
					let nonnonTargetResponded = false;
					const targets = game.filterPlayer().sortBySeat();
					const prompt = `###是否打出红色基本牌响应${get.translation(player)}？###${get.translation(player)}使用了一张不公开目标的${get.translation(trigger.card)}。若你选择响应且你不是此牌的隐藏目标，则其摸两张牌；若你选择不响应且你是此牌的隐藏目标，则你本回合内不能使用或打出手牌。`;
					for (let target of targets) {
						if (target.isIn() && player.inRange(target)) {
							const result = await target
								.chooseToRespond(prompt, (card, player) => {
									if (get.type(card) !== "basic") return false;
									const color = get.color(card);
									return color == "red" || color == "unsure";
								})
								.set("ai", card => {
									const player = get.player(),
										event = get.event();
									const source = event.getParent().player;
									//是队友且没有其他疑似队友的选手响应 那响应一下
									if (get.attitude(player, source) > 0) {
										if (
											!event.respondedTargets.some(current => {
												return get.attitude(player, current) > 0 || get.attitude(source, current) >= 0;
											})
										)
											return get.order(card);
										return -1;
									}
									else { //不残或者没有其他的闪就不响应
										if (player.hp > 1 || !player.hasCard("hs", i => {
											if (i == card || card.cards && card.cards.includes(i)) return false;
											let name = get.name(i, player);
											return name == "shan" || name == "tao" || name == "jiu";
										})) return 0;
									}
									return event.getRand("dcsbpingliao") > 1 / Math.max(1, player.hp) ? 0 : get.order(card);
								})
								.set("respondedTargets", respondedTargets)
								.forResult();
							if (result.bool) {
								respondedTargets.push(target);
								if (!trigger.targets.includes(target)) nonnonTargetResponded = true;
								await game.asyncDelay();
							} else if (trigger.targets.includes(target)) unrespondedTargets.push(target);
						}
					}
					unrespondedTargets.forEach(current => {
						current.addTempSkill("dcsbpingliao_blocker");
						game.log(current, "本回合内无法使用或打出手牌");
					});
					if (nonnonTargetResponded) {
						player.draw(2);
						player.addTempSkill("dcsbpingliao_buff", { global: "phaseChange" });
						player.addMark("dcsbpingliao_buff", 1, false);
					}
				},
				ai: {
					ignoreLogAI: true,
					skillTagFilter: function (player, tag, args) {
						if (args) {
							return args.card && get.name(args.card) == "sha";
						}
					},
				},
				group: "dcsbpingliao_hide",
				subSkill: {
					hide: {
						trigger: { player: "useCard0" },
						forced: true,
						filter(event, player) {
							return event.card.name == "sha";
						},
						async content(event, trigger, player) {
							trigger.hideTargets = true;
							game.log(player, "隐藏了", trigger.card, "的目标");
						},
					},
					buff: {
						onremove: true,
						charlotte: true,
						mod: {
							cardUsable(card, player, num) {
								if (card.name == "sha") return num + player.countMark("dcsbpingliao_buff");
							},
						},
						mark: true,
						intro: {
							content: "本阶段内使用【杀】的次数上限+#",
						},
					},
					blocker: {
						charlotte: true,
						mod: {
							cardEnabled2(card, player) {
								if (player.getCards("h").includes(card)) return false;
							},
						},
						mark: true,
						marktext: "封",
						intro: {
							content: "本回合内不能使用或打出手牌",
						},
					},
				},
			},
			//陈武董袭
			dcduanxie: {
				audio: "duanxie",
				inherit: "duanxie",
				selectTarget: 1,
			},
			//吕范
			diaodu: {
				audio: 2,
				trigger: { player: ["phaseUseBegin", "logSkill"] },
				filter(event, player) {
					if (event.name == "logSkill" && event.skill != "diancai") return false;
					return game.hasPlayer(target => {
						return get.distance(player, target) <= 1 && target.countGainableCards(player, "e");
					});
				},
				direct: true,
				async content(event, trigger, player) {
					const {
						result: { bool, targets },
					} = await player
						.chooseTarget(get.prompt2("diaodu"), (card, player, target) => {
							return get.distance(player, target) <= 1 && target.countGainableCards(player, "e");
						})
						.set("ai", target => {
							const player = get.event("player");
							return get.effect(target, { name: "shunshou_copy", position: "e" }, player, player);
						});
					if (bool) {
						const aim = targets[0];
						player.logSkill("diaodu", aim);
						const {
							result: { bool, cards },
						} = await player.gainPlayerCard(aim, "e", true);
						if (bool && game.hasPlayer(target => target != aim)) {
							const card = cards[0];
							const {
								result: { bool, targets },
							} = await player
								.chooseTarget(
									"调度：将" + get.translation(card) + "交给另一名角色",
									(card, player, target) => {
										return target != get.event("aim");
									},
									true
								)
								.set("ai", target => {
									const player = get.event("player");
									return get.attitude(player, target);
								})
								.set("aim", aim);
							if (bool && get.owner(card) == player) {
								const target = targets[0];
								player.line(target, "green");
								if (target != player) await player.give([card], target);
								if (get.owner(card) == target) {
									const {
										result: { bool },
									} = await target.chooseUseTarget(card);
									if (bool) await player.draw();
									else await target.draw();
								}
							}
						}
					}
				},
			},
			diancai: {
				audio: 2,
				inherit: "mbdiancai",
				filter(event, player) {
					if (_status.currentPhase === player) return false;
					let num = player
						.getHistory("lose", evt => {
							return evt.cards2 && evt.cards2.length && evt.getParent("phaseUse") == event;
						})
						.reduce((sum, evt) => {
							return sum + evt.cards2.length;
						}, 0);
					return num >= Math.min(5, player.getHp());
				},
			},
			//崔琰毛玠
			zhengbi: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				filter(event, player) {
					return game.hasPlayer(target => target != player);
				},
				direct: true,
				async content(event, trigger, player) {
					const {
						result: { bool, targets },
					} = await player.chooseTarget(get.prompt2("zhengbi"), lib.filter.notMe).set("ai", target => {
						const player = get.event("player");
						return -get.attitude(player, target) * target.countCards("he");
					});
					if (bool) {
						const target = targets[0],
							str = get.translation(target);
						player.logSkill("zhengbi", target);
						let choiceList = ["此阶段结束时，若" + str + "本阶段获得过牌，则你获得其手牌区和装备区各一张牌"];
						if (player.countCards("h", { type: "basic" })) choiceList.push("交给" + str + "一张基本牌，然后其交给你一张非基本牌或两张基本牌");
						const {
							result: { index },
						} = await player
							.chooseControl()
							.set("choiceList", choiceList)
							.set("ai", () => get.event("controls").length - 1);
						if (index == 0) {
							player.line(target);
							player
								.when("phaseUseEnd")
								.filter(evt => evt == trigger)
								.then(() => {
									if (target.isIn() && target.getHistory("gain", evt => evt.getParent("phaseUse") == trigger).length) {
										player.line(target);
										let num = (target.countGainableCards(player, "h") > 0) + (target.countGainableCards(player, "e") > 0);
										if (num) {
											player.gainPlayerCard(target, num, "he", true).set("filterButton", button => {
												return !ui.selected.buttons.some(but => get.position(button.link) == get.position(but.link));
											});
										}
									}
								})
								.vars({ target: target });
						} else {
							const {
								result: { bool },
							} = await player.chooseToGive(target, { type: "basic" }, true).set("prompt", "征辟：交给" + str + "一张基本牌");
							if (bool) {
								let choices = [];
								if (target.countCards("he", { type: ["trick", "delay", "equip"] })) choices.push("一张非基本牌");
								if (target.countCards("h", { type: "basic" }) > 1) choices.push("两张基本牌");
								if (choices.length) {
									const {
										result: { control },
									} = await target
										.chooseControl(choices)
										.set("ai", function (event, player) {
											if (choices.length > 1) {
												if (
													player.countCards("he", { type: ["trick", "delay", "equip"] }, function (card) {
														return get.value(card) < 7;
													})
												)
													return 0;
												return 1;
											}
											return 0;
										})
										.set("prompt", "征辟：交给" + get.translation(player) + "…</div>");
									const check = control == "一张非基本牌";
									await target.chooseToGive("he", check ? 1 : 2, { type: check ? ["trick", "delay", "equip"] : "basic" }, player, true).set("prompt", "征辟：交给" + get.translation(player) + control);
								} else if (target.countCards("h")) await target.give(target.getCards("h"), player);
							}
						}
					}
				},
			},
			fengying: {
				unique: true,
				limited: true,
				audio: 2,
				enable: "phaseUse",
				filter(event, player) {
					return player.countCards("h") && player.countCards("h") == player.countDiscardableCards(player, "h");
				},
				skillAnimation: true,
				animationColor: "thunder",
				async content(event, trigger, player) {
					player.awakenSkill("fengying");
					await player.discard(player.getCards("h"));
					const evt = player.insertPhase();
					player
						.when("phaseBegin")
						.filter(evtx => evtx == evt)
						.then(() => {
							if (player.isMinHp() && player.maxHp > 0 && player.countCards("h") < player.maxHp) {
								player.drawTo(player.maxHp);
							}
						});
				},
				ai: {
					order: 0.0001,
					result: {
						player(player) {
							return player.isMinHp() ? 1 : 0;
						},
					},
				},
			},
			//胡遵
			dczhantao: {
				audio: 2,
				trigger: { global: "damageEnd" },
				filter(event, player) {
					if (!event.player.isIn() || (event.player !== player && !player.inRange(event.player))) return false;
					return event.source && event.source != player;
				},
				check(event, player) {
					if (!event.source.isIn() || !event.card || typeof get.number(event.card) !== "number") return 0;
					return get.effect(event.source, { name: "sha" }, player, player) >= 0;
				},
				logTarget: "player",
				async content(event, trigger, player) {
					player
						.judge(card => {
							const evt = get.event().getParent(get.event("eventName")).getTrigger();
							if (!evt.source || !evt.source.isIn() || !evt.card || typeof get.number(evt.card) !== "number") return 0;
							if (get.number(card) > get.number(evt.card)) return 1.5;
							return 0;
						})
						.set("judge2", r => r.bool)
						.set("callback", () => {
							const evtx = event.getParent();
							const evt = event.getParent(evtx.eventName).getTrigger();
							if (!evt.source || !evt.source.isIn() || !evt.card || typeof get.number(evt.card) !== "number") return;
							if (event.judgeResult.number > get.number(evt.card)) {
								const sha = new lib.element.VCard({ name: "sha" }),
									target = evt.source;
								if (player.canUse(sha, target, false, false)) {
									player.useCard(sha, target, false);
								}
							}
						})
						.set("eventName", event.name);
				},
			},
			dcanjing: {
				audio: 2,
				trigger: { source: "damageSource" },
				filter(event, player) {
					return game.hasPlayer(current => current.isDamaged());
				},
				usable: 1,
				direct: true,
				async content(event, trigger, player) {
					const maxCount = player.getAllHistory("useSkill", evt => evt.skill === "dcanjing").length + 1;
					const result = await player
						.chooseTarget(get.prompt2("dcanjing"), (card, player, target) => target.isDamaged(), [1, maxCount])
						.set("ai", target => {
							return get.attitude(get.player(), target) > 0;
						})
						.forResult();
					if (!result.bool) return player.storage.counttrigger.dcanjing--;
					const targets = result.targets.slice();
					targets.sortBySeat(_status.currentPhase);
					player.logSkill("dcanjing", targets);
					for (const target of targets) await target.draw();
					const minHp = targets.map(i => i.getHp()).sort((a, b) => a - b)[0];
					await game.asyncDelayx();
					for (const target of targets) {
						if (!target.isIn()) continue;
						if (target.getHp() === minHp) await target.recover();
					}
				},
			},
			//诸葛梦雪
			dcjichun: {
				audio: 2,
				enable: "phaseUse",
				filter(event, player) {
					return player.countCards("he", card => lib.skill.dcjichun.filterCard(card, player));
				},
				filterCard(card, player) {
					if (!get.cardNameLength(card) || ui.selected.cards.length) return false;
					if (
						game.hasPlayer(target => {
							return target.countCards("h") < player.countCards("h");
						}) && !player.getStorage("dcjichun_used").includes("draw")
					)
						return true;
					if (
						lib.filter.cardDiscardable(card, player) &&
						game.hasPlayer(target => {
							return target.countCards("h") > player.countCards("h") && target.countDiscardableCards(player, "hej");
						}) && !player.getStorage("dcjichun_used").includes("discard")
					)
						return true;
					return false;
				},
				selectCard: [1, 2],
				filterTarget(cardx, player, target) {
					if (!ui.selected.cards.length) return false;
					const card = ui.selected.cards[0];
					if (target.countCards("h") < player.countCards("h")) return !player.getStorage("dcjichun_used").includes("draw");
					if (lib.filter.cardDiscardable(card, player) && target.countCards("h") > player.countCards("h") && target.countDiscardableCards(player, "hej")) {
						return !player.getStorage("dcjichun_used").includes("discard");
					}
					return false;
				},
				usable: 2,
				position: "he",
				check(card) {
					return get.cardNameLength(card);
				},
				complexCard: true,
				complexSelect: true,
				lose: false,
				discard: false,
				delay: false,
				targetprompt() {
					const target = ui.selected.targets[0],
						player = get.event("player");
					return target.countCards("h") < player.countCards("h") ? "给牌摸牌" : "双双弃牌";
				},
				async content(event, trigger, player) {
					const card = event.cards[0],
						target = event.target;
					const num = get.cardNameLength(card);
					await player.showCards([card], get.translation(player) + "发动了【寄春】");
					player.addTempSkill("dcjichun_used");
					if (target.countCards("h") < player.countCards("h")) {
						player.markAuto("dcjichun_used", "draw");
						await player.give(card, target);
						await player.draw(num);
					} else {
						player.markAuto("dcjichun_used", "discard");
						await player.discard(card);
						await player.discardPlayerCard(target, "hej", [1, num]);
					}
				},
				ai: {
					order: 7,
					result: {
						target(player, target) {
							return target.countCards("h") < player.countCards("h") ? get.effect(target, { name: "draw" }, player, target) : get.effect(target, { name: "guohe" }, player, target);
						},
					},
				},
				subSkill: {
					used: {
						charlotte: true,
						onremove: true,
					},
				},
			},
			dchanying: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				frequent: true,
				async content(event, trigger, player) {
					const card = get.cardPile(card => get.type(card) == "equip" && !get.cardtag(card, "gifts"));
					if (!card) {
						player.chat("无牌可得？！");
						game.log("但是牌堆已经没有装备牌了！");
						return;
					}
					await player.showCards([card], get.translation(player) + "发动了【寒英】");
					if (game.hasPlayer(target => target.countCards("h") == player.countCards("h") && target.hasUseTarget(card))) {
						const {
							result: { bool, targets },
						} = await player
							.chooseTarget(
								"请选择使用" + get.translation(card) + "的目标角色",
								(card, player, target) => {
									return target.countCards("h") == player.countCards("h") && target.hasUseTarget(get.event("card"));
								},
								true
							)
							.set("ai", target => get.effect(target, get.event("card"), target, get.event("player")))
							.set("card", card);
						if (bool) {
							const target = targets[0];
							player.line(target);
							target.chooseUseTarget(card, true, "nopopup");
						}
					} else {
						player.chat("无人可装？！");
						game.log("但是场上没有角色可以使用", card, "！");
					}
				},
			},
			//柏灵筠
			dclinghui: {
				audio: 2,
				trigger: { global: "phaseJieshuBegin" },
				filter(event, player) {
					if (_status.currentPhase === player) return true;
					return game.getGlobalHistory("everything", evt => evt.name == "dying").length;
				},
				frequent: true,
				async content(event, trigger, player) {
					let cards = get.cards(3);
					await game.cardsGotoOrdering(cards);
					const {
						result: { bool, links },
					} = await player
						.chooseButton(["灵慧：是否使用其中的一张牌并随机获得其中一张剩余牌？", cards])
						.set("filterButton", button => {
							return get.player().hasUseTarget(button.link);
						})
						.set("ai", button => {
							return get.event("player").getUseValue(button.link);
						});
					if (bool) {
						const card = links[0];
						cards.remove(card);
						player.$gain2(card, false);
						await game.asyncDelayx();
						await player.chooseUseTarget(true, card, false);
						cards = cards.filterInD();
						if (cards.length) {
							const cardx = cards.randomRemove();
							await player.gain(cardx, "gain2");
						}
					}
					if (cards.length) {
						cards.reverse();
						game.cardsGotoPile(cards.filterInD(), "insert");
						game.log(player, "将", get.cnNumber(cards.length), "张牌置于了牌堆顶");
					}
				},
			},
			dcxiace: {
				audio: 2,
				trigger: {
					player: "damageEnd",
					source: "damageSource",
				},
				filter(event, player) {
					const bool1 = event.player == player && !player.getStorage("dcxiace_used").includes("player") && game.hasPlayer(target => target != player && !target.hasSkill("fengyin"));
					const bool2 =
						event.source &&
						event.source == player &&
						!player.getStorage("dcxiace_used").includes("source") &&
						player.isDamaged() &&
						player.countCards("he", card => {
							if (_status.connectMode && get.position(card) == "h") return true;
							return lib.filter.cardDiscardable(card, player);
						});
					return bool1 || bool2;
				},
				direct: true,
				async content(event, trigger, player) {
					if (trigger.player == player && !player.getStorage("dcxiace_used").includes("player") && game.hasPlayer(target => target != player && !target.hasSkill("fengyin"))) {
						const {
							result: { bool, targets },
						} = await player
							.chooseTarget((card, player, target) => {
								return target != player && !target.hasSkill("fengyin");
							})
							.set("prompt", get.prompt("dcxiace"))
							.set("prompt2", "令一名其他角色的非锁定技于本回合失效")
							.set("ai", target => {
								const player = get.event("player");
								return (
									-get.sgn(get.attitude(player, target)) *
									(target.getSkills(null, false, false).filter(skill => {
										return !get.is.locked(skill);
									}).length +
										1) *
									(target === _status.currentPhase ? 10 : 1)
								);
							});
						if (bool) {
							const target = targets[0];
							player.logSkill("dcxiace", target);
							player.addTempSkill("dcxiace_used");
							player.markAuto("dcxiace_used", "player");
							target.addTempSkill("fengyin");
						}
					}
					if (
						trigger.source &&
						trigger.source == player &&
						!player.getStorage("dcxiace_used").includes("source") &&
						player.isDamaged() &&
						player.countCards("he", card => {
							if (_status.connectMode && get.position(card) == "h") return true;
							return lib.filter.cardDiscardable(card, player);
						}) &&
						player.hasSkill("dcxiace")
					) {
						const {
							result: { bool },
						} = await player
							.chooseToDiscard("he", get.prompt("dcxiace"), "弃置一张牌并回复1点体力")
							.set("ai", card => {
								const player = get.event("player");
								if (get.recoverEffect(player, player, player) <= 0) return 0;
								return 7 - get.value(card);
							})
							.set("logSkill", "dcxiace");
						if (bool) {
							player.addTempSkill("dcxiace_used");
							player.markAuto("dcxiace_used", "source");
							await player.recover();
						}
					}
				},
				subSkill: {
					used: {
						charlotte: true,
						onremove: true,
					},
				},
			},
			dcyuxin: {
				unique: true,
				limited: true,
				audio: 2,
				trigger: { global: "dying" },
				filter(event, player) {
					return event.player.hp < (event.player == player ? 1 : player.getHp());
				},
				prompt2(event, player) {
					return "令其将体力值回复至" + (event.player == player ? 1 : player.getHp()) + "点";
				},
				check(event, player) {
					if (get.recoverEffect(event.player, player, player) <= 0) return false;
					return lib.skill.luanfeng.check(event, player);
				},
				logTarget: "player",
				skillAnimation: true,
				animationColor: "thunder",
				async content(event, trigger, player) {
					player.awakenSkill("dcyuxin");
					trigger.player.recover((trigger.player == player ? 1 : player.getHp()) - trigger.player.hp);
				},
			},
			//清河公主
			dczhangji: {
				audio: 2,
				trigger: { global: "useCard" },
				filter: function (event, player) {
					return event.targets && event.targets.length > 1 && event.targets.includes(player);
				},
				forced: true,
				logTarget: "player",
				content: function* (event, map) {
					const player = map.player,
						trigger = map.trigger,
						target = trigger.player;
					let targets = trigger.targets.slice();
					targets.sortBySeat(_status.currentPhase || target);
					targets.remove(player);
					player
						.when({ global: "useCardToTargeted" })
						.filter(evt => targets.length && evt.getParent() == trigger && evt.targets.length == evt.getParent().triggeredTargets4.length)
						.then(() => {
							trigger.getParent().targets = [player].concat(targets);
							trigger.getParent().triggeredTargets4 = [player].concat(targets);
						})
						.vars({ targets: targets });
					player
						.when({ target: ["useCardToEnd", "useCardToExcluded"] })
						.filter(evt => targets.length && evt.getParent() == trigger)
						.then(() => {
							player.draw(targets.length);
						})
						.vars({ targets: targets });
				},
			},
			dczengou: {
				audio: 2,
				enable: "phaseUse",
				filter: function (event, player) {
					return player.maxHp > 0 && player.countCards("he") > 0;
				},
				filterCard: true,
				selectCard: () => [1, _status.event.player.maxHp],
				position: "he",
				filterTarget: lib.filter.notMe,
				discard: false,
				lose: false,
				delay: false,
				usable: 1,
				check: function (card) {
					if (card.name == "tao" || card.name == "jiu") return 0;
					return 1 / (get.value(card) || 0.5);
				},
				content: function* (event, map) {
					const player = map.player,
						cards = event.cards,
						target = event.target;
					yield player.give(cards, target).gaintag.add("dczengou_debuff");
					yield player.draw(cards.length);
					target.addSkill("dczengou_debuff");
				},
				ai: {
					order: 10,
					result: { target: -1 },
				},
				subSkill: {
					debuff: {
						charlotte: true,
						mark: true,
						intro: {
							content: "下次体力值增加或使用牌结算完毕后展示所有手牌，然后失去手牌中“谮构”牌数的体力值",
						},
						trigger: { player: ["changeHp", "useCardAfter"] },
						filter: function (event, player) {
							return event.name == "useCard" || event.num > 0;
						},
						forced: true,
						popup: false,
						content: function () {
							player.removeSkill("dczengou_debuff");
							const cards = player.getCards("h", card => card.hasGaintag("dczengou_debuff"));
							player.showHandcards();
							if (cards.length) player.loseHp(cards.length);
						},
						mod: {
							aiValue: function (player, card, num) {
								if (get.itemtype(card) == "card" && card.hasGaintag("dczengou_debuff")) return -1;
							},
							aiUseful: function () {
								return lib.skill.dczengou.subSkill.debuff.mod.aiValue.apply(this, arguments);
							},
							aiOrder: function (player, card, num) {
								if (get.itemtype(card) == "card" && card.hasGaintag("dczengou_debuff")) {
									const cards = player.getCards("h", card => card.hasGaintag("dczengou_debuff"));
									if (cards.length == 1) return num + 10;
									return 0;
								}
							},
						},
					},
				},
			},
			//曹宪
			dclingxi: {
				audio: 2,
				trigger: { player: ["phaseUseBegin", "phaseUseEnd"] },
				filter: function (event, player) {
					return player.countCards("he") && player.maxHp > 0;
				},
				direct: true,
				content: function* (event, map) {
					var player = map.player,
						num = player.maxHp;
					var result = yield player
						.chooseCard(get.prompt("dclingxi"), "将至多" + get.cnNumber(num) + "张牌称为“翼”置于武将牌上", "he", [1, num])
						.set("ai", card => {
							let player = _status.event.player,
								dis = player.needsToDiscard(0, (i, player) => {
									return !player.canIgnoreHandcard(i) && !ui.selected.cards.includes(i);
								}),
								cards = ui.selected.cards.concat(player.getExpansions("dclingxi")),
								suit = get.suit(card, false);
							if (_status.event.suits.length < 4) _status.event.suits.add(get.suit(ui.selected.cards.at(-1), false));
							if (_status.event.triggerName === "phaseUseEnd") {
								if (_status.event.suits.includes(suit)) return (dis ? 10 : 3) - get.useful(card);
								return (dis ? 6 : 1) - get.useful(card);
							}
							_status.event.hvt.remove(ui.selected.cards.at(-1));
							if (_status.event.hvt.length === 1 && card === _status.event.hvt[0]) return 0;
							let temp;
							if (
								!cards.some(i => {
									temp = get.suit(i, false);
									return cards.some(j => {
										return i !== j && suit === get.suit(j, false);
									});
								}) &&
								suit === temp
							)
								return 15 - get.value(card);
							if (!_status.event.hvt.length) {
								if (_status.event.suits.includes(suit)) return (dis ? 10 : 3) - get.useful(card);
								return (dis ? 6 : 1) - get.useful(card);
							}
							if (_status.event.hvt.includes(card)) {
								if (!_status.event.suits.includes(suit)) return 6 - get.value(card);
								if (card.name === "sha") return 3 - get.value(card);
								return 1 - get.value(card);
							}
							return 15 - get.value(card);
						})
						.set("complexCard", true)
						.set(
							"hvt",
							player.getCards("hs", card => {
								return card.name === "zhuge" || player.hasValueTarget(card, null, true);
							})
						)
						.set(
							"suits",
							(() => {
								let suits = [];
								player.getExpansions("dclingxi").forEach(i => {
									suits.add(get.suit(i, false));
								});
								return suits;
							})()
						)
						.set("triggerName", event.triggername);
					if (result.bool) {
						player.logSkill("dclingxi");
						player.addToExpansion(result.cards, player, "give").gaintag.add("dclingxi");
					}
				},
				marktext: "翼",
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				group: "dclingxi_effect",
				subSkill: {
					effect: {
						audio: "dclingxi",
						trigger: {
							player: "loseAfter",
							global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter"],
						},
						filter: function (event, player) {
							var num = 2 * player.getExpansions("dclingxi").reduce((list, card) => list.add(get.suit(card, false)), []).length;
							num -= player.countCards("h");
							if (!num) return false;
							if (event.name == "lose" && event.getlx !== false) {
								for (var i in event.gaintag_map) {
									if (event.gaintag_map[i].includes("dclingxi")) return true;
								}
								return false;
							}
							return game.getGlobalHistory("cardMove", function (evt) {
								if (evt.name != "lose" || event != evt.getParent()) return false;
								for (var i in evt.gaintag_map) {
									if (evt.gaintag_map[i].includes("dclingxi") && evt.player == player) return true;
								}
								return false;
							}).length;
						},
						forced: true,
						locked: false,
						content: function () {
							var num = 2 * player.getExpansions("dclingxi").reduce((list, card) => list.add(get.suit(card, false)), []).length;
							num -= player.countCards("h");
							if (num > 0) player.draw(num);
							else player.chooseToDiscard("h", -num, true);
						},
					},
				},
				ai: {
					combo: "dczhifou",
				},
			},
			dczhifou: {
				audio: 2,
				trigger: { player: "useCardAfter" },
				filter: function (event, player) {
					var num = player.getHistory("useSkill", evt => evt.skill == "dczhifou").length + 1;
					return player.getExpansions("dclingxi").length >= num;
				},
				direct: true,
				content: function* (event, map) {
					var player = map.player,
						cards = player.getExpansions("dclingxi");
					var num = player.getHistory("useSkill", evt => evt.skill == "dczhifou").length + 1;
					var result = yield player
						.chooseButton(["###" + get.prompt("dczhifou") + "###移去至少" + get.cnNumber(num) + "张武将牌上的“翼”", cards], [num, cards.length])
						.set("ai", button => {
							if (!_status.event.res.bool) return 0;
							if (_status.event.res.cards.includes(button.link)) return 1;
							return 0;
						})
						.set("num", num)
						.set(
							"res",
							(() => {
								if (
									player.isPhaseUsing() &&
									player.hasCard(i => {
										return player.hasValueTarget(i, null, true);
									}, "h")
								)
									return false;
								let suits = [],
									cs = player.getExpansions("dclingxi"),
									cards = [],
									temp = num;
								for (let i = 0; i < cs.length; i++) {
									if (!temp) break;
									let suit = get.suit(cs[i], false);
									if (suits.includes(suit)) {
										cards.push(cs.splice(i--, 1)[0]);
										temp--;
									} else suits.push(suit);
								}
								while (temp > 0) {
									cards.push(cs.pop());
									temp--;
								}
								temp = suits.length * 2 - player.countCards("h");
								if (temp > 0 || (!temp && num < Math.max(2, 5 - player.hp))) cs = true;
								else cs = false;
								return {
									bool: cs,
									cards: cards,
								};
							})()
						);
					if (result.bool) {
						player.logSkill("dczhifou");
						player.loseToDiscardpile(result.links);
						var list = [],
							choiceList = ["将一张牌称为“翼”置于你的武将牌上", "弃置两张牌", "失去1点体力"];
						if (!player.hasSkill("dczhifou_0") && game.hasPlayer(target => target.countCards("he"))) list.push("置入“翼”");
						else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + "</span>";
						if (
							!player.hasSkill("dczhifou_1") &&
							game.hasPlayer(target => {
								return target == player ? target.countDiscardableCards(target, "he") : target.countCards("he");
							})
						)
							list.push("弃置卡牌");
						else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
						if (!player.hasSkill("dczhifou_2")) list.push("失去体力");
						else choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + "</span>";
						if (!list.length) return;
						var str = "";
						for (var i of list) {
							str += i;
							str += "、";
						}
						str = str.slice(0, -1);
						var result2 = yield player
							.chooseTarget(
								"知否：令一名角色执行以下一项",
								str,
								(card, player, target) => {
									if (!player.hasSkill("dczhifou_2")) return true;
									if (!player.hasSkill("dczhifou_0") && target.countCards("he")) return true;
									return target == player ? target.countDiscardableCards(target, "he") : target.countCards("he");
								},
								true
							)
							.set("ai", target => {
								var player = _status.event.player,
									list = [];
								if (!player.hasSkill("dczhifou_0")) list.push(get.effect(target, { name: "guohe_copy2" }, target, player) / 2);
								if (!player.hasSkill("dczhifou_1")) list.push(get.effect(target, { name: "guohe_copy2" }, target, player));
								if (!player.hasSkill("dczhifou_2")) list.push(get.effect(target, { name: "losehp" }, player, player));
								return list.sort((a, b) => b - a)[0];
							});
						if (result2.bool) {
							var target = result2.targets[0];
							player.line(target);
							list = list.filter(control => {
								if (control == "失去体力") return true;
								if (control == "置入“翼”" && target.countCards("he")) return true;
								return target.countDiscardableCards(target, "he");
							});
							var result3;
							if (!list.length) {
								game.log(target, "没有可执行项");
								return;
							} else if (list.length == 1) result3 = { control: list[0] };
							else
								result3 = yield player
									.chooseControl(list)
									.set("prompt", "知否：请选择一项")
									.set(
										"choiceList",
										choiceList.map(str => "令" + get.translation(target) + str)
									)
									.set("ai", () => {
										var player = _status.event.player;
										var target = _status.event.target;
										var getNum = function (control) {
											return [get.effect(target, { name: "guohe_copy2" }, target, player) / 2, get.effect(target, { name: "guohe_copy2" }, target, player), get.effect(target, { name: "losehp" }, target, player)][["置入“翼”", "弃置卡牌", "失去体力"].indexOf(control)];
										};
										var controls = _status.event.controls.slice();
										return controls.sort((a, b) => getNum(b) - getNum(a))[0];
									})
									.set("target", target);
							switch (result3.control) {
								case "置入“翼”":
									player.addTempSkill("dczhifou_0");
									var result4 = yield target.chooseCard("he", choiceList[0], true);
									if (result4.bool) player.addToExpansion(result4.cards, target, "give").gaintag.add("dclingxi");
									break;
								case "弃置卡牌":
									player.addTempSkill("dczhifou_1");
									target.chooseToDiscard("he", 2, true);
									break;
								case "失去体力":
									player.addTempSkill("dczhifou_2");
									target.loseHp();
									break;
							}
						}
					}
				},
				subSkill: {
					0: { charlotte: true },
					1: { charlotte: true },
					2: { charlotte: true },
				},
				ai: {
					combo: "dclingxi",
				},
			},
			//周瑜
			//无 双 万 军 取 首
			dcsbronghuo: {
				audio: 2,
				audioname: ["dc_sb_zhouyu_shadow"],
				trigger: { player: "useCard1" },
				filter: function (event, player) {
					return (event.card.name == "sha" && game.hasNature(event.card, "fire")) || event.card.name == "huogong";
				},
				forced: true,
				content: function () {
					trigger.baseDamage = game.countGroup();
				},
				ai: { threaten: 3.5 },
			},
			dcsbyingmou: {
				mark: true,
				marktext: "☯",
				zhuanhuanji(player, skill) {
					player.storage[skill] = !player.storage[skill];
					player.changeSkin({ characterName: "dc_sb_zhouyu" }, "dc_sb_zhouyu" + (player.storage[skill] ? "_shadow" : ""));
				},
				intro: {
					content: function (storage) {
						if (!storage) return "每回合限一次，当你对其他角色使用牌后，你可以选择其中一名目标角色，你将手牌数摸至与其相同（至多摸五张），然后视为对其使用一张【火攻】。";
						return "每回合限一次，当你对其他角色使用牌后，你可以选择其中一名目标角色，令一名手牌数为全场最大的角色对其使用手牌中所有的【杀】和伤害类锦囊牌（若其没有可使用的牌则将手牌数弃至与你相同）。";
					},
				},
				audio: 2,
				audioname: ["dc_sb_zhouyu_shadow"],
				trigger: { player: "useCardAfter" },
				filter: function (event, player) {
					return event.targets.some(target => target != player);
				},
				usable: 1,
				direct: true,
				content: function* (event, map) {
					var result,
						player = map.player,
						targets = map.trigger.targets;
					var storage = player.storage.dcsbyingmou;
					if (storage) {
						result = yield player
							.chooseCardTarget({
								prompt: get.prompt("dcsbyingmou"),
								prompt2: "选择一名目标角色，令一名手牌数为全场最大的角色对其使用手牌中所有的【杀】和伤害类锦囊牌（若其没有可使用的牌则将手牌数弃至与你相同）",
								filterTarget: function (card, player, target) {
									if (!ui.selected.targets.length) return _status.event.targets.includes(target);
									return target.isMaxHandcard();
								},
								selectTarget: 2,
								complexSelect: true,
								complexTarget: true,
								multitarget: true,
								targetprompt: ["目标角色", "使用角色"],
								filterCard: () => false,
								selectCard: -1,
								ai2: function (target) {
									var player = _status.event.player;
									var getNum = function (player, target, source) {
										return player
											.getCards("h", card => {
												if (get.name(card) != "sha" && (get.type(card) != "trick" || !get.tag(card, "damage"))) return false;
												return player.canUse(card, target, false);
											})
											.reduce((sum, card) => sum + get.effect(target, card, player, source), 0);
									};
									if (!ui.selected.targets.length) {
										var targets = game.filterPlayer(target => target.isMaxHandcard());
										targets.sort((a, b) => getNum(b, target, player) - getNum(a, target, player));
										return getNum(targets[0], target, player) + 1;
									}
									return getNum(target, ui.selected.targets[0], player) + 1;
								},
							})
							.set("targets", targets);
					} else
						result = yield player
							.chooseTarget(get.prompt("dcsbyingmou"), "选择一名目标角色，将手牌数摸至与其相同，然后视为对其使用一张【火攻】", (card, player, target) => _status.event.targets.includes(target))
							.set("ai", target => {
								var player = _status.event.player;
								return Math.max(0, Math.min(5, target.countCards("h") - player.countCards("h"))) * 2 + get.effect(target, { name: "huogong" }, player, player);
							})
							.set("targets", targets);
					if (result.bool) {
						var target = result.targets[0];
						if (storage) {
							yield player.logSkill("dcsbyingmou", result.targets, false);
							player.line2(result.targets);
							player.changeZhuanhuanji("dcsbyingmou");
							var source = result.targets[1],
								discard = true;
							while (true) {
								var cards = source.getCards("h", card => {
									if (get.name(card) != "sha" && (get.type(card) != "trick" || !get.tag(card, "damage"))) return false;
									return source.canUse(card, target, false);
								});
								if (cards.length) {
									if (discard) discard = false;
									yield source.useCard(cards.randomGet(), target, false);
								} else break;
							}
							if (discard && player.countCards("h") < source.countCards("h")) source.chooseToDiscard(source.countCards("h") - player.countCards("h"), "h", true);
						} else {
							yield player.logSkill("dcsbyingmou", target);
							player.changeZhuanhuanji("dcsbyingmou");
							if (player.countCards("h") < target.countCards("h")) player.draw(Math.min(5, target.countCards("h") - player.countCards("h")));
							if (player.canUse({ name: "huogong" }, target, false)) player.useCard({ name: "huogong" }, target, false);
						}
					} else player.storage.counttrigger.dcsbyingmou--;
				},
				group: "dcsbyingmou_change",
				subSkill: {
					change: {
						audio: "dcsbyingmou",
						audioname: ["dc_sb_zhouyu_shadow"],
						trigger: {
							global: "phaseBefore",
							player: "enterGame",
						},
						filter(event, player) {
							return event.name != "phase" || game.phaseNumber == 0;
						},
						prompt2(event, player) {
							//无名杀先阴后阳，不要问为什么
							return "切换【英谋】为状态" + (player.storage.dcsbyingmou ? "阳" : "阴");
						},
						check: () => Math.random() > 0.5,
						content() {
							player.changeZhuanhuanji("dcsbyingmou");
						},
					},
				},
			},
			//鲁肃
			dcsbmingshi: {
				audio: 2,
				audioname: ["dc_sb_lusu_shadow"],
				trigger: { player: "phaseDrawBegin2" },
				filter: function (event, player) {
					return !event.numFixed;
				},
				frequent: true,
				content: function () {
					trigger.num += 2;
					player
						.when("phaseDrawEnd")
						.filter((evt, player) => evt == trigger && player.countCards("h"))
						.then(() => {
							var str = "明势：请展示三张牌并令一名其他角色选择获得其中的一张牌";
							if (player.countCards("h") <= 3) str = "明势：展示手牌并令一名其他角色选择获得其中的一张牌";
							player.chooseCardTarget({
								prompt: str,
								filterTarget: lib.filter.notMe,
								filterCard: true,
								selectCard: function () {
									var player = _status.event.player;
									if (player.countCards("h") <= 3) return -1;
									return 3;
								},
								position: "h",
								forced: true,
								ai1: function (card) {
									return -get.value(card);
								},
								ai2: function (target) {
									var player = _status.event.player;
									if (player.hasSkill("dcsbmengmou") && !get.is.blocked("dcsbmengmou", player) && player.storage.dcsbmengmou && get.attitude(player, target) < 0) return get.effect(target, { name: "losehp" }, player, player);
									return get.attitude(player, target);
								},
							});
						})
						.then(() => {
							if (result.bool) {
								var target = result.targets[0];
								event.target = target;
								var cards = result.cards;
								player.showCards(cards, get.translation(player) + "发动了【明势】");
								target
									.chooseButton(["明势：请获得其中一张牌", cards], true)
									.set("filterButton", button => {
										return lib.filter.canBeGained(button.link, _status.event.source, _status.event.player);
									})
									.set("ai", button => get.value(button.link))
									.set("source", player);
							} else event.finish();
						})
						.then(() => {
							if (result.bool) {
								var card = result.links[0];
								if (lib.filter.canBeGained(card, player, target)) target.gain(card, player, "giveAuto");
								else game.log("但", card, "不能被", player, "获得！");
							}
						});
				},
			},
			dcsbmengmou: {
				mark: true,
				marktext: "☯",
				zhuanhuanji(player, skill) {
					player.storage[skill] = !player.storage[skill];
					player.changeSkin({ characterName: "dc_sb_lusu" }, "dc_sb_lusu" + (player.storage[skill] ? "_shadow" : ""));
				},
				intro: {
					content: function (storage) {
						if (!storage) return "每回合限一次，当你得到其他角色的牌后，或其他角色得到你的牌后，你可以令该角色使用至多X张【杀】，且其每以此法造成1点伤害，其回复1点体力。（X为你的体力上限）";
						return "每回合限一次，当你得到其他角色的牌后，或其他角色得到你的牌后，你可令该角色打出至多X张【杀】，然后其失去Y点体力。（X为你的体力上限，Y为X-其打出【杀】数）";
					},
				},
				audio: 2,
				audioname: ["dc_sb_lusu_shadow"],
				trigger: { global: ["gainAfter", "loseAsyncAfter"] },
				filter: function (event, player) {
					if (typeof player.maxHp != "number" || player.maxHp <= 0) return false;
					if (event.name == "loseAsync" && event.type != "gain") return false;
					if (player.getStorage("dcsbmengmou_used").includes(player.storage.dcsbmengmou ? "yin" : "yang")) return false;
					var cards1 = event.getl(player).cards2,
						cards2 = event.getg(player);
					return (
						game.hasPlayer(function (current) {
							if (current == player) return false;
							var cardsx = event.getg(current);
							return cardsx.some(i => cards1.includes(i));
						}) ||
						game.hasPlayer(function (current) {
							if (current == player) return false;
							var cardsx = event.getl(current).cards2;
							return cards2.some(i => cardsx.includes(i));
						})
					);
				},
				direct: true,
				content: function* (event, map) {
					var player = map.player,
						trigger = map.trigger;
					var storage = player.storage.dcsbmengmou;
					player.addTempSkill("dcsbmengmou_effect", "dcsbmengmouAfter");
					var targets = [],
						num = player.maxHp;
					var cards1 = trigger.getl(player).cards2;
					var cards2 = trigger.getg(player);
					targets.addArray(
						game.filterPlayer(function (current) {
							if (current == player) return false;
							var cardsx = trigger.getg(current);
							return cardsx.some(i => cards1.includes(i));
						})
					);
					targets.addArray(
						game.filterPlayer(function (current) {
							if (current == player) return false;
							var cardsx = trigger.getl(current).cards2;
							return cards2.some(i => cardsx.includes(i));
						})
					);
					targets.sortBySeat();
					var check_true = function (player, target) {
						if (get.attitude(player, target) > 0) {
							if (
								target.countCards("hs", card => {
									if (get.name(card) != "sha") return false;
									return target.hasValueTarget(card);
								})
							)
								return 4;
							return 0.5;
						}
						if (get.attitude(player, target) < 0) {
							if (
								!target.countCards("hs", card => {
									if (get.name(card) != "sha") return false;
									return target.hasValueTarget(card);
								})
							) {
								if (
									target.countCards("hs", card => {
										if (get.name(card) != "sha") return false;
										return target.hasUseTarget(card);
									})
								)
									return -3;
								return -1;
							}
							return 0;
						}
						return 0;
					};
					var check_false = function (player, target) {
						if (get.attitude(player, target) < 0) return get.effect(target, { name: "losehp" }, player, player);
						return 0;
					};
					var result, target;
					if (targets.length == 1) {
						target = targets[0];
						var str;
						if (storage) str = "令" + get.translation(target) + "打出至多" + get.cnNumber(num) + "张【杀】，然后其失去Y点体力。（Y为" + num + "-其打出【杀】数）";
						else str = "令" + get.translation(target) + "使用至多" + get.cnNumber(num) + "张【杀】，其每以此法造成1点伤害，其回复1点体力";
						result = yield player.chooseBool(get.prompt("dcsbmengmou", target), str).set("choice", (storage ? check_false(player, target) : check_true(player, target)) > 0);
					} else {
						result = yield player
							.chooseTarget(get.prompt("dcsbmengmou"), lib.skill.dcsbmengmou.intro.content(storage), (card, player, target) => _status.event.targets.includes(target))
							.set("ai", target => {
								return _status.event.check(_status.event.player, target);
							})
							.set("targets", targets)
							.set("check", storage ? check_false : check_true)
							.set("ainmate", false);
					}
					if (result.bool) {
						if (!target) target = result.targets[0];
						yield player.logSkill("dcsbmengmou", target);
						player.addTempSkill("dcsbmengmou_used");
						player.markAuto("dcsbmengmou_used", [storage ? "yin" : "yang"]);
						player.changeZhuanhuanji("dcsbmengmou");
						while (num > 0) {
							num--;
							var result2;
							if (storage) {
								result2 = yield target
									.chooseToRespond((card, player) => {
										return get.name(card) == "sha";
									})
									.set("ai", card => {
										return 1 + Math.random();
									})
									.set("prompt", "盟谋：是否打出一张【杀】？")
									.set("prompt2", "当前进度:" + (3 - num) + "/3");
							} else
								result2 = yield target
									.chooseToUse(card => {
										if (!lib.filter.cardEnabled(card, _status.event.player, _status.event)) return false;
										return get.name(card) == "sha";
									})
									.set("prompt", "盟谋：是否使用一张【杀】？")
									.set("prompt2", "当前进度:" + (3 - num) + "/3");
							if (!result2.bool) {
								if (storage) {
									target.popup("杯具");
									target.loseHp(num + 1);
								}
								break;
							}
						}
					}
				},
				group: "dcsbmengmou_change",
				subSkill: {
					effect: {
						charlotte: true,
						trigger: { global: "damageSource" },
						filter: function (event, player) {
							if (!event.source || event.getParent().type != "card") return false;
							if (event.source.isHealthy() || event.card.name != "sha") return false;
							return event.getParent(4).name == "dcsbmengmou" && event.getParent(4).player == player;
						},
						forced: true,
						popup: false,
						firstDo: true,
						content: function () {
							trigger.source.recover(trigger.num);
						},
					},
					used: { charlotte: true, onremove: true },
					change: {
						audio: "dcsbmengmou",
						audioname: ["dc_sb_lusu_shadow"],
						trigger: {
							global: "phaseBefore",
							player: "enterGame",
						},
						filter(event, player) {
							return event.name != "phase" || game.phaseNumber == 0;
						},
						prompt2(event, player) {
							//无名杀先阴后阳，不要问为什么
							return "切换【盟谋】为状态" + (player.storage.dcsbmengmou ? "阳" : "阴");
						},
						check: () => Math.random() > 0.5,
						content() {
							player.changeZhuanhuanji("dcsbmengmou");
						},
					},
				},
			},
			//张臶
			dc_zj_a: {
				audio: 2,
				trigger: { player: "damageBegin2" },
				filter: function (event, player) {
					return event.getParent().type == "card";
				},
				forced: true,
				content: function () {
					var num = get.number(trigger.card);
					if (typeof num == "number" && num > 0) trigger.num = num;
					else trigger.cancel();
				},
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (get.tag(card, "damage") && typeof get.number(card) != "number") return "zeroplayertarget";
						},
					},
				},
			},
			dc_zj_b: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				filter: function (event, player) {
					return player.countDiscardableCards(player, "he");
				},
				direct: true,
				content: function* (event, map) {
					var player = map.player;
					var result = yield player.chooseTarget(get.prompt2("dc_zj_b"), lib.filter.notMe).set("ai", target => {
						var player = _status.event.player;
						if (!player.hasFriend()) return 0;
						return -game.countPlayer(current => current.inRange(target) && get.attitude(current, target) < 0 && get.damageEffect(target, current, current) > 0);
					});
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("dc_zj_b", target);
						player.discard(player.getCards("he")).discarder = player;
						target.addSkill("dc_zj_a");
						target.addSkill("dc_zj_b_threaten");
						player
							.when("phaseBegin")
							.then(() => {
								if (target.isIn()) {
									target.removeSkill("dc_zj_a");
									target.removeSkill("dc_zj_b_threaten");
								}
							})
							.vars({ target: target });
					}
				},
				subSkill: {
					//定要将你赶尽杀绝
					threaten: {
						charlotte: true,
						mark: true,
						marktext: "噩",
						intro: { content: "已经开始汗流浃背了" },
						ai: { threaten: 114514 * 1919810 },
					},
				},
			},
			//诸葛若雪
			dcqiongying: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				direct: true,
				filter: function (event, player) {
					return player.canMoveCard();
				},
				content: function* (event, map) {
					const player = map.player;
					event.pushHandler("onNextMoveCard", (event, option) => {
						if (_status.connectMode && event.step == 1 && event._result.bool && option.state == "end") {
							game.broadcastAll(() => {
								delete _status.noclearcountdown;
								game.stopCountChoose();
							});
						}
					});
					let result = yield player
						.moveCard(false, `###琼英###移动场上的一张牌，然后弃置一张与此牌花色相同的手牌（若没有则展示手牌）。`)
						.set("logSkill", "dcqiongying")
						.set("custom", {
							add: {},
							replace: {
								window: () => {
									if (get.event().name == "chooseTarget") ui.click.cancel();
								},
							},
						});
					if (result.bool) {
						const card = result.card,
							suit = get.suit(card);
						if (!player.hasCard({ suit: suit })) player.showHandcards();
						else player.chooseToDiscard({ suit: suit }, true, `请弃置一张${get.translation(suit)}手牌`);
					} else {
						player.getStat("skill").dcqiongying--;
					}
				},
				ai: {
					expose: 0.2,
					order: function (item, player) {
						if (player.countCards("h") <= 4) return 0.5;
						return 9;
					},
					result: {
						player: function (player) {
							if (player.canMoveCard(true)) return 1;
							return 0;
						},
					},
				},
			},
			dcnuanhui: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				filter(event, player) {
					return game.hasPlayer(current => current.countCards("e") > 0);
				},
				direct: true,
				content: function* (event, map) {
					const player = map.player;
					let result = yield player
						.chooseTarget(get.prompt("dcnuanhui"), "选择一名装备区有牌的角色，该角色可以依次使用X张基本牌（X为其装备区牌数且至少为1）", (card, player, target) => {
							return target.countCards("e") > 0;
						})
						.set("ai", target => {
							return get.event("aiTarget") == target ? 10 : 0;
						})
						.set(
							"aiTarget",
							(() => {
								const player = get.player();
								const list = get.inpileVCardList(info => {
									return info[0] == "basic";
								});
								if (!list.length) return null;
								const getUseValue = target => {
									if (get.attitude(player, target) <= 0) return -1;
									const toUse = [];
									const hp = target.hp;
									let eff = 0,
										count = Math.max(1, target.countCards("e"));
									while (count--) {
										target.hp = Math.min(target.maxHp, target.hp + toUse.filter(card => card.name == "tao").length);
										const listx = list
											.map(info => {
												const card = new lib.element.VCard({
													name: info[2],
													nature: info[3],
													isCard: true,
												});
												return [card, target.getUseValue(card)];
											})
											.sort((a, b) => {
												return b[1] - a[1];
											});
										const mostValuablePair = listx[0].slice();
										if (mostValuablePair[1] <= 0) mostValuablePair[1] = 0;
										eff += mostValuablePair[1];
										toUse.push(mostValuablePair[0]);
										target.hp = hp;
									}
									if (toUse.length > 1 && eff > 0) {
										eff -= target
											.getCards("e", card => {
												return lib.filter.cardDiscardable(card, target, "dcnuanhui");
											})
											.map(card => {
												return get.value(card, target);
											})
											.reduce((p, c) => {
												return p + c;
											}, 0);
									}
									return eff;
								};
								const playerList = game
									.filterPlayer()
									.map(current => [current, getUseValue(current)])
									.sort((a, b) => b[1] - a[1]);
								if (playerList[0][1] <= 0) return null;
								return playerList[0][0];
							})()
						);
					if (!result.bool) return event.finish();
					const target = result.targets[0];
					player.logSkill("dcnuanhui", target);
					if (!target.isUnderControl(true) && !target.isOnline()) game.delayx();
					const total = Math.max(1, target.countCards("e"));
					let count = 0,
						forced = false,
						used = [],
						discard = false;
					while (count < total) {
						const basicList = get.inpileVCardList(info => {
							return info[0] == "basic" && target.hasUseTarget({ name: info[2], nature: info[3], isCard: true });
						});
						if (!basicList.length) {
							game.log("但是", target, "无牌可出！");
							break;
						}
						const str = forced ? "视为使用一张基本牌" : "是否视为使用一张基本牌？";
						const result = yield target.chooseButton([str, [basicList, "vcard"]], forced).set("ai", button => {
							return get.player().getUseValue({
								name: button.link[2],
								nature: button.link[3],
								isCard: true,
							});
						});
						if (!result.bool) {
							game.log("但是", target, "不愿出牌！");
							break;
						}
						forced = true;
						const card = new lib.element.VCard({
							name: result.links[0][2],
							nature: result.links[0][3],
							isCard: true,
						});
						const result2 = yield target.chooseUseTarget(card, true, false);
						if (!discard && result2.bool) {
							if (used.includes(result.links[0][2])) discard = true;
							else used.add(result.links[0][2]);
						}
						count++;
					}
					if (discard) {
						const cards = target.getCards("e", card => {
							return lib.filter.cardDiscardable(card, target, "dcnuanhui");
						});
						if (cards.length) target.discard(cards).discarder = target;
					}
				},
				ai: {
					expose: 0.3,
					threaten: 3.7,
				},
			},
			//曹轶
			dcmiyi: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				direct: true,
				content: function* (event, map) {
					const player = map.player;
					if (_status.connectMode)
						game.broadcastAll(() => {
							_status.noclearcountdown = true;
						});
					let result = yield player
						.chooseControl(["回复体力", "受到伤害"], "cancel2")
						.set("choiceList", ["令你即将选择的角色各回复1点体力", "令你即将选择的角色各受到你造成的1点伤害"])
						.set("prompt", get.prompt("dcmiyi"))
						.set("ai", () => {
							return get.event("choice");
						})
						.set(
							"choice",
							(() => {
								let damage = 0;
								game.countPlayer(current => {
									let eff = get.damageEffect(current, player, player);
									if (!current.isDamaged()) {
										if (eff > 0) eff = -eff;
									} else if (current.hasSkillTag("maixie")) {
										if (get.attitude(player, current) <= 0) {
											if (current.getHp(true) >= 2) eff = 0;
											else eff /= 10;
										} else if (current.getHp(true) >= 2) {
											eff += 30;
										}
									} else eff /= 3;
									damage += eff;
								});
								if (damage < -20) return 0;
								if (damage > 5) return 1;
								if (lib.skill.mbhuiyao.getUnrealDamageTargets(player, [[player], game.filterPlayer()])) return 0;
								return "cancel2";
							})()
						);
					if (result.control == "cancel2") {
						if (_status.connectMode) {
							game.broadcastAll(() => {
								delete _status.noclearcountdown;
								game.stopCountChoose();
							});
						}
						return event.finish();
					}
					const func = ["recover", "damage"],
						ind = result.index;
					const fn = func[ind];
					result = yield player
						.chooseTarget(`蜜饴：令任意名角色${result.control.slice(0, 2)}1点${result.control.slice(2)}`, [1, Infinity])
						.set("ai", target => {
							const toDamage = get.event("toDamage");
							let eff = get.damageEffect(target, player, player);
							if (toDamage) {
								if (target.hasSkillTag("maixie")) {
									if (get.attitude(player, target) <= 0) {
										if (target.getHp(true) >= 2) eff = 0;
										else eff /= 10;
									} else if (target.getHp(true) >= 2) {
										eff += 30;
									}
								}
								return eff;
							}
							if (!target.isDamaged()) {
								eff *= -2;
							}
							if (target.getHp(true) >= 2) return -eff;
							return 0;
						})
						.set("toDamage", result.index == 1);
					if (_status.connectMode) {
						game.broadcastAll(() => {
							delete _status.noclearcountdown;
							game.stopCountChoose();
						});
					}
					if (!result.bool) return event.finish();
					const targets = result.targets.slice().sortBySeat();
					player.logSkill("dcmiyi", targets, fn == "damage" ? "fire" : "green");
					while (targets.length) {
						const target = targets.shift();
						if (!target.isIn()) continue;
						target[fn]();
						target
							.when({ global: "phaseJieshuBegin" })
							.vars({
								fn: func[ind ^ 1],
								source: player,
							})
							.then(() => {
								if (source.isIn()) {
									if (!trigger._dcmiyi_logged) {
										source.logSkill("dcmiyi");
										trigger._dcmiyi_logged = true;
									}
									source.line(player, fn == "damage" ? "fire" : "green");
								}
								player[fn](source);
							});
					}
				},
			},
			dcyinjun: {
				audio: 2,
				trigger: { player: "useCardAfter" },
				filter: function (event, player) {
					if (get.name(event.card, false) != "sha" && get.type2(event.card) != "trick") return false;
					if (event.targets.length != 1 || !event.targets[0].isIn()) return false;
					if (!player.canUse(new lib.element.VCard({ name: "sha" }), event.targets[0], false)) return false;
					return player.hasHistory("lose", evt => {
						if (evt.getParent() != event) return false;
						return event.cards.every(card => {
							return evt.hs.includes(card);
						});
					});
				},
				prompt2: function (event, player) {
					return `视为对${get.translation(event.targets)}使用一张无伤害来源的【杀】`;
				},
				check: function (event, player) {
					const sha = new lib.element.VCard({ name: "sha" });
					return Math.max(...[event.targets[0], player].map(source => get.effect(event.targets[0], sha, source, player))) > 0;
				},
				logTarget: "targets",
				content: function* (event, map) {
					const player = map.player,
						trigger = map.trigger,
						target = trigger.targets[0];
					yield (player.useCard(new lib.element.VCard({ name: "sha" }), target, false).oncard = () => {
						get.event().customArgs.default.customSource = {
							isDead: () => true,
						};
					});
					if (player.getHistory("useSkill", evt => evt.skill == "dcyinjun").length > player.getHp()) {
						player.tempBanSkill("dcyinjun");
					}
				},
			},
			//马伶俐
			dclima: {
				audio: 2,
				mod: {
					globalFrom: function (from, to, distance) {
						return (
							distance -
							Math.max(
								1,
								game.countPlayer(current => {
									return current.countCards("e", card => {
										return get.is.attackingMount(card) || get.is.defendingMount(card);
									});
								})
							)
						);
					},
				},
			},
			dcxiaoyin: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				filter: function (event, player) {
					return game.hasPlayer(current => get.distance(player, current) <= 1);
				},
				group: "dcxiaoyin_damage",
				prompt2: function (event, player) {
					return `亮出牌堆顶的${get.cnNumber(game.countPlayer(current => get.distance(player, current) <= 1))}张牌，获得其中的红色牌，将其中任意张黑色牌置于等量名座次连续的其他角色的武将牌上。`;
				},
				frequent: true,
				check: () => true,
				content: function* (event, map) {
					var player = map.player;
					var count = game.countPlayer(current => get.distance(player, current) <= 1);
					var cards = game.cardsGotoOrdering(get.cards(count)).cards;
					yield player.showCards(cards, `${get.translation(player)}【硝引】亮出`);
					player.gain(
						cards.filter(i => get.color(i, false) == "red"),
						"gain2"
					);
					var blackOnes = cards.filter(i => get.color(i, false) == "black");
					if (!blackOnes.length) return event.finish();
					event.videoId = lib.status.videoId++;
					var func = (cards, id) => {
						var dialog = ui.create.dialog("硝引：剩余的黑色牌", `<div class="text center">请选择至多${get.cnNumber(cards.length)}名座次连续的其他角色，然后将以下这些牌置于这些角色的武将牌上。</div>`, cards);
						dialog.videoId = id;
						return dialog;
					};
					if (player == game.me) func(blackOnes, event.videoId);
					else if (player.isOnline2()) {
						player.send(func, blackOnes, event.videoId);
					}
					var targets = game.filterPlayer(current => current != player);
					if (targets.length == 1) var result = { bool: true, targets: targets };
					else
						var result = yield player
							.chooseTarget([1, blackOnes.length], true, (card, player, target) => {
								if (player == target) return false;
								var selected = ui.selected.targets;
								if (!selected.length) return true;
								for (var i of selected) {
									if (i.getNext() == target || i.getPrevious() == target) return true;
								}
								return false;
							})
							.set("complexSelect", true)
							.set("complexTarget", true)
							.set("multitarget", true)
							.set("multiline", true)
							.set("ai", target => {
								if (get.event("aiTargets").includes(target)) return 10;
								return 0.1;
							})
							.set(
								"aiTargets",
								(() => {
									var targets = game.filterPlayer(i => i != player).sortBySeat(player);
									var maxEff = -Infinity,
										aiTargets = [];
									for (var i = 0; i < targets.length; i++) {
										for (var j = 0; j < blackOnes.length; j++) {
											if (targets.length < i + j) break;
											var targetsx = targets.slice(i, j);
											var tmpEff = targetsx
												.map(current => {
													return get.damageEffect(current, current, player, "fire");
												})
												.reduce((p, c) => {
													return p + c;
												}, 0);
											if (tmpEff > maxEff) {
												maxEff = tmpEff;
												aiTargets = targetsx;
											}
										}
									}
									return aiTargets;
								})()
							)
							.set("prompt", false);
					if (!result.bool) {
						event.finish();
						return;
					}
					var func = (num, id) => {
						var dialog = get.idDialog(id);
						if (dialog) dialog.content.childNodes[1].innerHTML = `<div class="text center">将${get.cnNumber(num)}张黑色牌按照选择的角色的座次顺序置于这些角色武将牌上</div>`;
					};
					var targets = result.targets.slice().sortBySeat(player);
					var num = targets.length;
					if (player == game.me) func(num, event.videoId);
					else if (player.isOnline2()) player.send(func, num, event.videoId);
					if (blackOnes.length == 1) var result = { bool: true, links: blackOnes };
					else
						var result = yield player
							.chooseButton(true, num)
							.set("dialog", event.videoId)
							.set("ai", () => 1);
					game.broadcastAll("closeDialog", event.videoId);
					if (result.bool) {
						var cards = result.links;
						player.line(targets);
						targets.forEach((current, ind) => {
							current.addToExpansion(cards[ind], "gain2").gaintag.add("dcxiaoyin");
							game.log(current, "将", cards[ind], "当“硝引”置于了武将牌上");
						});
					}
				},
				marktext: "硝",
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
				subSkill: {
					damage: {
						audio: "dcxiaoyin",
						trigger: { global: "damageBegin3" },
						filter: function (event, player) {
							if (!event.source || !event.source.isIn()) return false;
							return event.player.getExpansions("dcxiaoyin").length;
						},
						//direct:true,
						async cost(event, trigger, player) {
							const source = trigger.source,
								target = trigger.player;
							const cards = target.getExpansions("dcxiaoyin");
							if (trigger.hasNature("fire")) {
								const types = cards.map(i => get.type2(i, false));
								const str = get.translation(types).replace(/(.*)、/, "$1或");
								event.result = await source
									.chooseCard(`硝引：是否弃置一张${str}牌？`, `若如此做，将${get.translation(target)}的对应的“硝引”牌置入弃牌堆，令你对其造成的伤害+1`, "he", function (card, player) {
										if (!get.event("types").includes(get.type2(card))) return false;
										return lib.filter.cardDiscardable.apply(this, arguments);
									})
									.set("types", types)
									.set("ai", card => {
										if (get.event("goon")) return 7 - get.value(card);
										return 0;
									})
									.set("goon", get.damageEffect(target, player, player, "fire") > 0 && get.attitude(player, target) <= 0)
									.forResult();
							} else {
								event.result = await source
									.chooseBool(`###是否响应${get.translation(player)}的【硝引】？###获得${get.translation(target)}的一张“硝引”牌（${get.translation(cards)}），然后将你对其造成的此次伤害改为火焰伤害。`)
									.set(
										"choice",
										(() => {
											if (get.damageEffect(target, source, source, "fire") < get.damageEffect(target, source, source) - 5) return false;
											if (cards.map(i => get.value(i)).reduce((p, c) => p + c, 0) > 0) return true;
											return false;
										})()
									)
									.forResult();
							}
						},
						async content(event, trigger, player) {
							const source = trigger.source,
								target = trigger.player;
							if (trigger.hasNature("fire")) {
								source.line(target, "fire");
								const type = get.type2(event.cards[0]);
								await source.discard(event.cards).set("discarder", source);
								//await game.asyncDelayx();
								const cardsToDiscard = target.getExpansions("dcxiaoyin").filter(card => get.type2(card, false) === type);
								if (cardsToDiscard.length === 1) await target.loseToDiscardpile(cardsToDiscard);
								else if (cardsToDiscard.length > 1) {
									const result = await source.chooseButton([`请选择移去${get.translation(source)}的一张“硝引”牌`, cardsToDiscard], true).forResult();
									await target.loseToDiscardpile(result.links);
								}
								trigger.addNumber("num", 1);
							} else {
								source.line(target, "fire");
								const cards = target.getExpansions("dcxiaoyin");
								if (cards.length === 1) await source.gain(cards, target, "give");
								else if (cards.length > 1) {
									const result = await source.chooseButton([`请选择获得${get.translation(source)}的一张“硝引”牌`, cards], true).forResult();
									await source.gain(result.links, target, "give");
								}
								game.setNature(trigger, "fire");
							}
						},
					},
				},
				ai: {
					threaten: 4,
				},
			},
			dchuahuo: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				viewAs: {
					name: "sha",
					nature: "fire",
					storage: { dchuahuo: true },
				},
				filterCard: { color: "red" },
				position: "hs",
				filter: function (event, player) {
					return player.countCards("hs", { color: "red" });
				},
				check: function (card) {
					return 6 - get.value(card);
				},
				precontent: function () {
					event.getParent().addCount = false;
					player
						.when("useCardToPlayer")
						.filter(evt => evt.card.storage && evt.card.storage.dchuahuo)
						.then(() => {
							if (trigger.target.getExpansions("dcxiaoyin").length) {
								var targets = game.filterPlayer(current => {
									return current.getExpansions("dcxiaoyin").length;
								});
								player.chooseBool(`是否更改${get.translation(trigger.card)}的目标？`, `将此牌的目标改为所有有“硝引”的角色（${get.translation(targets)}）。`).set("choice", targets.map(current => get.effect(current, trigger.card, player, player)).reduce((p, c) => p + c, 0) > get.effect(trigger.target, trigger.card, player, player));
							} else event.finish();
						})
						.then(() => {
							if (result.bool) {
								trigger.targets.length = 0;
								trigger.getParent().triggeredTargets1.length = 0;
								trigger.untrigger();
								var targets = game.filterPlayer(current => {
									return current.getExpansions("dcxiaoyin").length;
								});
								player.line(targets, "fire");
								trigger.targets.addArray(targets);
								game.log(targets, "成为了", trigger.card, "的新目标");
								game.delayx();
							}
						});
				},
				ai: {
					order: () => get.order({ name: "sha" }) + 0.2,
					result: { player: 1 },
				},
			},
			//武陆逊
			dcxiongmu: {
				audio: 2,
				trigger: { global: "roundStart" },
				// filter:function(event,player){
				// 	return player.countCards('h')<player.maxHp;
				// },
				group: "dcxiongmu_minus",
				prompt2: function (event, player) {
					return (player.countCards("h") < player.maxHp ? "将手牌摸至" + get.cnNumber(player.maxHp) + "张，然后" : "") + "将任意张牌随机置入牌堆并从牌堆或弃牌堆中获得等量点数为8的牌。";
				},
				content: function () {
					"step 0";
					player.drawTo(player.maxHp);
					"step 1";
					var cards = player.getCards("he");
					if (!cards.length) event.finish();
					else if (cards.length == 1) event._result = { bool: true, cards: cards };
					else
						player.chooseCard("雄幕：将任意张牌置入牌堆的随机位置", "he", [1, Infinity], true).set("ai", card => {
							return 6 - get.value(card);
						});
					"step 2";
					if (result.bool) {
						var cards = result.cards;
						event.cards = cards;
						game.log(player, `将${get.cnNumber(cards.length)}张牌置入了牌堆`);
						player.loseToDiscardpile(cards, ui.cardPile, "blank").set("log", false).insert_index = function () {
							return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
						};
					} else event.finish();
					"step 3";
					var list = [],
						shown = [];
					var piles = ["cardPile", "discardPile"];
					for (var pile of piles) {
						for (var i = 0; i < ui[pile].childNodes.length; i++) {
							var card = ui[pile].childNodes[i];
							var number = get.number(card, false);
							if (!list.includes(card) && number == 8) {
								list.push(card);
								if (pile == "discardPile") shown.push(card);
								if (list.length >= cards.length) break;
							}
						}
						if (list.length >= cards.length) break;
					}
					if (list.length) {
						var next = player.gain(list);
						next.shown_cards = shown;
						next.set("animate", function (event) {
							var player = event.player,
								cards = event.cards,
								shown = event.shown_cards;
							if (shown.length < cards.length) {
								var num = cards.length - shown.length;
								player.$draw(num);
								game.log(player, "从牌堆获得了", get.cnNumber(num), "张点数为8的牌");
							}
							if (shown.length > 0) {
								player.$gain2(shown, false);
								game.log(player, "从弃牌堆获得了", shown);
							}
							return 500;
						});
						next.gaintag.add("dcxiongmu_tag");
						player.addTempSkill("dcxiongmu_tag", "roundStart");
					}
				},
				ai: {
					effect: {
						target: function (card, player, target) {
							if (target.countCards("h") > target.getHp() || player.hasSkillTag("jueqing", false, target)) return;
							if (player._dcxiongmu_temp) return;
							if (_status.event.getParent("useCard", true) || _status.event.getParent("_wuxie", true)) return;
							if (get.tag(card, "damage")) {
								if (target.getHistory("damage").length > 0) {
									return [1, -2];
								} else {
									if (get.attitude(player, target) > 0 && target.hp > 1) {
										return 0;
									}
									if (get.attitude(player, target) < 0 && !player.hasSkillTag("damageBonus")) {
										if (card.name == "sha") return;
										var sha = false;
										player._dcxiongmu_temp = true;
										var num = player.countCards("h", function (card) {
											if (card.name == "sha") {
												if (sha) {
													return false;
												} else {
													sha = true;
												}
											}
											return get.tag(card, "damage") && player.canUse(card, target) && get.effect(target, card, player, player) > 0;
										});
										delete player._dcxiongmu_temp;
										if (player.hasSkillTag("damage")) {
											num++;
										}
										if (num < 2) {
											var enemies = player.getEnemies();
											if (enemies.length == 1 && enemies[0] == target && player.needsToDiscard()) {
												return;
											}
											return 0;
										}
									}
								}
							}
						},
					},
				},
				subSkill: {
					minus: {
						audio: "dcxiongmu",
						trigger: { player: "damageBegin4" },
						filter: function (event, player) {
							return (
								player.countCards("h") <= player.getHp() &&
								game
									.getGlobalHistory(
										"everything",
										evt => {
											return evt.name == "damage" && evt.player == player;
										},
										event
									)
									.indexOf(event) == 0
							);
						},
						forced: true,
						locked: false,
						content: function () {
							trigger.num--;
						},
					},
					tag: {
						charlotte: true,
						onremove: function (player) {
							player.removeGaintag("dcxiongmu_tag");
						},
						mod: {
							ignoredHandcard: function (card, player) {
								if (card.hasGaintag("dcxiongmu_tag")) return true;
							},
							cardDiscardable: function (card, player, name) {
								if (name == "phaseDiscard" && card.hasGaintag("dcxiongmu_tag")) return false;
							},
						},
					},
				},
			},
			dczhangcai: {
				audio: 2,
				mod: {
					aiOrder: (player, card, num) => {
						if (num > 0 && get.tag(card, "draw") && ui.cardPile.childNodes.length + ui.discardPile.childNodes.length < 20) return 0;
					},
					aiValue: (player, card, num) => {
						if (num > 0 && card.name === "zhuge") return 20;
					},
					aiUseful: (player, card, num) => {
						if (num > 0 && card.name === "zhuge") return 10;
					},
				},
				trigger: {
					player: ["useCard", "respond"],
				},
				filter: function (event, player) {
					if (player.hasSkill("dczhangcai_all")) return true;
					return get.number(event.card) == 8;
				},
				prompt2: function (event, player) {
					const num = player.hasSkill("dczhangcai_all") ? get.number(event.card) : 8;
					let count = 1;
					if (typeof num == "number")
						count = Math.max(
							1,
							player.countCards("h", card => get.number(card) == num)
						);
					return "你可以摸" + get.cnNumber(count) + "张牌。";
				},
				check: (event, player) => {
					const num = player.hasSkill("dczhangcai_all") ? get.number(event.card) : 8;
					let count = 1;
					if (typeof num == "number")
						count = Math.max(
							1,
							player.countCards("h", card => get.number(card) == num)
						);
					return ui.cardPile.childNodes.length + ui.discardPile.childNodes.length >= count;
				},
				frequent: true,
				locked: false,
				content: function () {
					var num = player.hasSkill("dczhangcai_all") ? get.number(trigger.card) : 8;
					var count = 1;
					if (typeof num == "number")
						count = Math.max(
							1,
							player.countCards("h", card => get.number(card) == num)
						);
					player.draw(count);
				},
				ai: {
					threaten: 4,
					combo: "dcxiongmu"
				},
				subSkill: {
					all: {
						charlotte: true,
						mark: true,
						intro: {
							content: "当你使用或打出牌时，你可以摸X张牌（X为你手牌中与此牌点数相同的牌数且至少为1）",
						},
					},
				},
			},
			dcruxian: {
				audio: 2,
				enable: "phaseUse",
				limited: true,
				skillAnimation: true,
				animationColor: "wood",
				content: function () {
					"step 0";
					player.awakenSkill("dcruxian");
					player.addTempSkill("dczhangcai_all", { player: "phaseBegin" });
				},
				ai: {
					combo: "dczhangcai",
					order: 15,
					result: {
						player: function (player) {
							if (!player.hasSkill("dczhangcai")) return 0;
							if (player.countCards("hs", card => get.number(card) != 8 && player.hasValueTarget(card)) > 3 || player.hp == 1) return 5;
							return 0;
						},
					},
				},
			},
			//新杀许靖
			dcshangyu: {
				audio: 2,
				init: () => {
					game.addGlobalSkill("dcshangyu_ai");
				},
				onremove: () => {
					if (!game.hasPlayer(i => i.hasSkill("dcshangyu"), true)) game.removeGlobalSkill("dcshangyu_ai");
				},
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				filter: function (event, player) {
					return event.name != "phase" || game.phaseNumber == 0;
				},
				forced: true,
				content: function () {
					"step 0";
					var card = get.cardPile(card => get.name(card, false) == "sha");
					if (card) {
						event.card = card;
						player.gain(card, "gain2").gaintag.add("dcshangyu_tag");
						player.markAuto("dcshangyu", card);
					} else {
						player.chat("不是，连杀都没有？");
						event.finish();
					}
					"step 1";
					if (get.owner(card) == player && get.position(card) == "h" && game.hasPlayer(current => current != player)) {
						let targets = game
							.filterPlayer(
								i => {
									return get.attitude(player, i) > 0;
								},
								null,
								true
							)
							.sortBySeat(
								get.zhu(player) ||
									game.findPlayer(i => {
										return i.getSeatNum() === 1;
									})
							);
						if (targets.includes(player)) targets = targets.slice(0, targets.indexOf(player));
						player
							.chooseTarget(`是否将${get.translation(card)}交给一名其他角色？`, lib.filter.notMe)
							.set("ai", target => {
								let idx = _status.event.targets.indexOf(target);
								if (idx < 0) return -1;
								return 1 / (idx + 1);
							})
							.set("targets", targets);
					} else event.finish();
					"step 2";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target);
						if (get.mode() !== "identity" || player.identity !== "nei") player.addExpose(0.2);
						player.give(card, target).gaintag.add("dcshangyu_tag");
					}
					player.addSkill("dcshangyu_effect");
				},
				subSkill: {
					ai: {
						mod: {
							aiOrder(player, card, num) {
								if (
									get.itemtype(card) == "card" &&
									card.hasGaintag("dcshangyu_tag") &&
									game.hasPlayer(current => {
										return current.hasSkill("dcshangyu") && get.attitude(player, current) >= 0;
									})
								)
									return num + 0.1;
							},
							aiValue(player, card, num) {
								if (
									get.itemtype(card) == "card" &&
									card.hasGaintag("dcshangyu_tag") &&
									game.hasPlayer(current => {
										return current.hasSkill("dcshangyu") && get.attitude(player, current) >= 0;
									})
								)
									return num / 10;
							},
							aiUseful: function () {
								return lib.skill.dcshangyu_ai.mod.aiValue.apply(this, arguments);
							},
						},
						trigger: {
							player: "dieAfter",
						},
						filter: () => {
							return !game.hasPlayer(i => i.hasSkill("dcshangyu"), true);
						},
						silent: true,
						forceDie: true,
						forced: true,
						popup: false,
						content: () => {
							game.removeGlobalSkill("dcshangyu_ai");
						},
					},
					effect: {
						audio: "dcshangyu",
						trigger: {
							global: "damageSource",
						},
						filter: function (event, player) {
							return event.cards && event.cards.some(card => player.getStorage("dcshangyu").includes(card));
						},
						forced: true,
						charlotte: true,
						direct: true,
						group: ["dcshangyu_transfer", "dcshangyu_addTag"],
						content: function () {
							"step 0";
							var list = [player];
							if (trigger.source && trigger.source.isIn()) {
								player.logSkill("dcshangyu_effect", trigger.source);
								list.push(trigger.source);
							} else player.logSkill("dcshangyu_effect");
							list.sortBySeat();
							game.asyncDraw(list);
						},
					},
					transfer: {
						audio: "dcshangyu",
						trigger: {
							global: ["loseAfter", "loseAsyncAfter", "cardsDiscardAfter", "equipAfter"],
						},
						forced: true,
						direct: true,
						filter: function (event, player) {
							if (
								!game.hasPlayer(current => {
									return !player.getStorage("dcshangyu_transfer").includes(current);
								})
							)
								return false;
							return event.getd().some(card => {
								return get.position(card) == "d" && player.getStorage("dcshangyu").includes(card);
							});
						},
						content: function () {
							"step 0";
							var cards = trigger.getd().filter(card => {
									return get.position(card) == "d" && player.getStorage("dcshangyu").includes(card);
								}),
								targets = game
									.filterPlayer(current => {
										return !player.getStorage("dcshangyu_transfer").includes(current);
									})
									.sortBySeat(_status.currentPhase);
							if (targets.length && targets[0] === _status.currentPhase && !_status.currentPhase.getCardUsable("sha")) targets.push(targets.shift());
							event.cards = cards;
							player
								.chooseTarget(
									`赏誉：将${get.translation(cards)}交给一名可选角色`,
									(card, player, target) => {
										return !player.getStorage("dcshangyu_transfer").includes(target);
									},
									true
								)
								.set("ai", target => {
									let att = get.sgnAttitude(_status.event.player, target),
										idx = 1 + _status.event.targets.indexOf(target);
									if (att < 0) return -idx;
									return att + 1 / idx;
								})
								.set("targets", targets);
							"step 1";
							if (result.bool) {
								var target = result.targets[0];
								player.logSkill("dcshangyu_transfer", target);
								if (!player.storage.dcshangyu_transfer) {
									player.when({ global: "phaseAfter" }).then(() => {
										player.unmarkSkill("dcshangyu_transfer");
										delete player.storage.dcshangyu_transfer;
									});
								}
								player.markAuto("dcshangyu_transfer", target);
								target.gain(cards, "gain2").set("giver", player).gaintag.add("dcshangyu_tag");
							}
						},
						intro: {
							content: "本回合已交给过$",
						},
					},
					addTag: {
						trigger: {
							global: ["gainAfter", "loseAsyncAfter"],
						},
						charlotte: true,
						popup: false,
						silent: true,
						lastDo: true,
						filter: function (event, player) {
							return game.hasPlayer(current => {
								var cards = event.getg(current);
								return cards.some(card => player.getStorage("dcshangyu").includes(card));
							});
						},
						content: function () {
							game.countPlayer(current => {
								var cards = trigger.getg(current);
								if (cards.length) {
									cards = cards.filter(card => player.getStorage("dcshangyu").includes(card));
									current.addGaintag(cards, "dcshangyu_tag");
								}
							});
						},
					},
				},
			},
			dccaixia: {
				audio: 2,
				trigger: {
					player: "damageEnd",
					source: "damageSource",
				},
				filter: function (event, player) {
					return !player.hasMark("dccaixia_clear");
				},
				direct: true,
				locked: false,
				content: function () {
					"step 0";
					var choices = Array.from({
						length: Math.min(5, game.players.length + game.dead.length),
					}).map((_, i) => get.cnNumber(i + 1, true));
					player
						.chooseControl(choices, "cancel2")
						.set("prompt", get.prompt("dccaixia"))
						.set("prompt2", "你可以摸至多" + get.cnNumber(choices.length) + "张牌，但是你此后需要再使用等量的牌才可再发动本技能。")
						.set("ai", () => {
							return _status.event.choice;
						})
						.set(
							"choice",
							(function () {
								var cards = player.getCards("hs", card => get.name(card, player) !== "sha" && player.hasValueTarget(card));
								var damage = Math.min(player.getCardUsable({ name: "sha" }), player.countCards("hs", "sha")) + cards.filter(i => get.tag(i, "damage")).length;
								if (player.isPhaseUsing() || player.hp + player.hujia + player.countCards("hs", card => get.tag(card, "recover")) > 2) {
									if (damage) return Math.min(choices.length - 1, cards.length - damage);
									return Math.min(choices.length - 1, cards.length - 1);
								}
								return choices.length - 1;
							})()
						);
					"step 1";
					if (result.control != "cancel2") {
						player.logSkill("dccaixia");
						var num = result.index + 1;
						player.draw(num);
						player.addMark("dccaixia_clear", num, false);
						player.addSkill("dccaixia_clear");
					}
				},
				mod: {
					aiOrder: function (player, card, num) {
						if (!get.tag(card, "damage")) return;
						if (player.countMark("dccaixia_clear") > 1) return num / 3;
						return num + 6;
					},
				},
				subSkill: {
					clear: {
						trigger: { player: "useCard1" },
						filter: function (event, player) {
							return player.hasMark("dccaixia_clear");
						},
						forced: true,
						popup: false,
						charlotte: true,
						content: function () {
							player.removeMark("dccaixia_clear", 1, false);
						},
						intro: {
							name: "才瑕",
							name2: "瑕",
							content: "距离刷新技能还需使用&张牌",
						},
					},
				},
			},
			//十周年二乔
			dcxingwu: {
				intro: {
					content: "expansion",
					markcount: "expansion",
					onunmark: function (storage, player) {
						player.removeAdditionalSkill("dcluoyan");
					},
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				audio: "xingwu",
				trigger: { player: "phaseDiscardBegin" },
				filter: function (event, player) {
					return player.countCards("h");
				},
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseCard("h", get.prompt("dcxingwu"), "将一张手牌作为“舞”置于武将牌上")
						.set("ai", function (card) {
							var att = 1,
								list = [];
							for (var i of player.getExpansions("dcxingwu")) {
								if (!list.includes(get.suit(i))) list.push(get.suit(i));
							}
							if (!list.includes(get.suit(card))) att = 2;
							if (_status.event.goon) return (20 - get.value(card)) * att;
							return (7 - get.value(card)) * att;
						})
						.set("goon", player.needsToDiscard() || player.getExpansions("dcxingwu").length == 2);
					"step 1";
					if (result.bool) {
						player.logSkill("dcxingwu");
						var cards = result.cards;
						player.addToExpansion(cards, player, "give").gaintag.add("dcxingwu");
					}
					"step 2";
					game.delayx();
					if (player.getExpansions("dcxingwu").length > 2) {
						player.chooseButton(["是否移去三张“舞”并发射核弹？", player.getExpansions("dcxingwu")], 3).ai = button => {
							if (
								game.hasPlayer(function (current) {
									return get.attitude(player, current) < 0;
								})
							)
								return 1;
							return 0;
						};
					} else event.finish();
					"step 3";
					if (result.bool) {
						event.cards = result.links;
						var list = [],
							str = ["<span class='texiaotext' style='color:#66FF00'>小型</span>", "<span class='texiaotext' style='color:#6666FF'>中型</span>", "<span class='texiaotext' style='color:#FF0000'>巨型</span>"];
						for (var i of event.cards) {
							if (!list.includes(get.suit(i))) list.push(get.suit(i));
						}
						player.chooseTarget("请选择" + str[list.length - 1] + "核弹的投射的目标（伤害：" + list.length + "点）", lib.filter.notMe, true).ai = target => {
							var att = 1;
							if (target.sex == "male") att = 1.5;
							if ((target.hp == target.sex) == "male" ? 2 : 1) att *= 1.2;
							if (get.mode() == "identity" && player.identity == "fan" && target.isZhu) att *= 3;
							return -get.attitude(player, target) * att * Math.max(1, target.countCards("e"));
						};
					}
					"step 4";
					if (result.bool) {
						var list = [];
						for (var i of event.cards) {
							if (!list.includes(get.suit(i))) list.push(get.suit(i));
						}
						player.loseToDiscardpile(event.cards);
						player.logSkill("dcxingwu", result.targets[0]);
						player.discardPlayerCard(result.targets[0], "e", result.targets[0].countCards("e"), true);
						result.targets[0].damage(result.targets[0].sex == "female" ? 1 : list.length);
					}
				},
			},
			dcluoyan: {
				derivation: ["retianxiang", "liuli"],
				init: function (player) {
					if (player.getExpansions("dcxingwu").length) player.addAdditionalSkill("dcluoyan", ["retianxiang", "liuli"]);
					else player.removeAdditionalSkill("dcluoyan");
				},
				onremove: function (player) {
					player.removeAdditionalSkill("dcluoyan");
				},
				trigger: { player: ["loseAfter", "loseAsyncAfter", "addToExpansionAfter"] },
				filter: function (event, player) {
					var cards = player.getExpansions("dcxingwu"),
						skills = player.additionalSkills.dcluoyan;
					return !((cards.length && skills && skills.length) || (!cards.length && (!skills || !skills.length)));
				},
				forced: true,
				silent: true,
				content: function () {
					lib.skill.dcluoyan.init(player, "dcluoyan");
				},
				ai: {
					combo: "dcxingwu",
				},
			},
			retianxiang_daxiaoqiao: {
				audio: "tianxiang_daxiaoqiao",
				inherit: "retianxiang",
			},
			//田尚衣
			dcposuo: {
				onChooseToUse: function (event) {
					if (!game.online && !event.dcposuo_cards) {
						var player = event.player;
						var evtx = event.getParent("phaseUse");
						var suits = lib.suit.slice(0).reverse();
						suits = suits.filter(suit => !player.getStorage("dcposuo_suits").includes(suit) && player.countCards("hs", card => get.suit(card, player) == suit));
						if (
							!suits.length ||
							player.getHistory("sourceDamage", evt => {
								return evt.player != player && evt.getParent("phaseUse") == evtx;
							}).length
						)
							event.set("dcposuo_cards", undefined);
						else {
							var list = [],
								cards = Array.from(ui.cardPile.childNodes);
							cards.addArray(Array.from(ui.discardPile.childNodes));
							game.countPlayer(current => cards.addArray(current.getCards("hejxs")));
							for (var name of lib.inpile) {
								if (!get.tag({ name: name }, "damage") || get.type(new lib.element.VCard({ name: name })) === "delay") continue;
								let same = cards.filter(card => get.name(card, false) == name && !get.natureList(card, false).length);
								if (same.length) {
									for (var suit of suits) {
										if (same.some(card => get.suit(card, false) == suit)) {
											list.push([suit, "", name, undefined, suit]);
										}
									}
								}
								for (var nature of lib.inpile_nature) {
									same = cards.filter(card => get.name(card, false) == name && get.is.sameNature(get.natureList(card, false), nature));
									if (same.length) {
										for (var suit of suits) {
											if (same.some(card => get.suit(card, false) == suit)) {
												list.push([suit, "", name, nature, suit]);
											}
										}
									}
								}
							}
							event.set("dcposuo_cards", list);
						}
					}
				},
				audio: 2,
				enable: "phaseUse",
				filter: function (event, player) {
					return event.dcposuo_cards && event.dcposuo_cards.length;
				},
				chooseButton: {
					dialog: function (event, player) {
						return ui.create.dialog("婆娑", [event.dcposuo_cards, "vcard"], "hidden");
					},
					check: function (button) {
						var player = _status.event.player;
						return player.getUseValue({ name: button.link[2], nature: button.link[3] });
					},
					backup: function (links, player) {
						return {
							suit: links[0][4],
							filterCard: function (card, player) {
								return get.suit(card, player) == lib.skill.dcposuo_backup.suit;
							},
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
								isCard: true,
							},
							check: function (card) {
								return 6.5 - get.value(card);
							},
							precontent: function () {
								player.logSkill("dcposuo");
								delete event.result.skill;
								player.addTempSkill("dcposuo_suits", "phaseUseAfter");
								player.markAuto("dcposuo_suits", [get.suit(event.result.cards[0])]);
							},
						};
					},
					prompt: function (links, player) {
						var suit = links[0][4];
						var name = links[0][2];
						var nature = links[0][3];
						return "将一张" + get.translation(suit) + "牌当作" + (get.translation(nature) || "") + get.translation(name) + "使用";
					},
				},
				ai: {
					order: 10,
					result: { player: 1 },
				},
				subSkill: {
					suits: {
						charlotte: true,
						onremove: true,
					},
				},
			},
			dcxiaoren: {
				audio: 2,
				trigger: {
					source: "damageSource",
				},
				usable: 1,
				check: (event, player) => {
					let rev = game.countPlayer(i => {
						return i.isDamaged() && get.attitude(_status.event.player, i) > 0;
					});
					if (!event.player.isIn() || game.countPlayer() < 2) return rev;
					if (get.damageEffect(event.player.getPrevious(), player, _status.event.player) > -rev) return true;
					return get.damageEffect(event.player.getNext(), player, _status.event.player) > -rev;
				},
				content: function () {
					"step 0";
					player.addTempSkill("dcxiaoren_dying");
					event.target = trigger.player;
					"step 1";
					player.judge();
					"step 2";
					if (result.color == "red")
						player.chooseTarget("绡刃：是否令一名角色回复1点体力（若回满则额外摸一张牌）？").set("ai", target => {
							let rec = get.recoverEffect(target, _status.event.player, _status.event.player);
							if (target.getDamagedHp() <= 1) return rec + get.effect(target, { name: "draw" }, target, _status.event.player);
							return rec;
						});
					else if (result.color != "black" || !trigger.player.isIn() || game.countPlayer() < 2) event.goto(9);
					else event.goto(5);
					"step 3";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.line(target);
						target.recover();
					} else event.goto(9);
					"step 4";
					if (event.target.isHealthy()) event.target.draw();
					event.goto(9);
					"step 5";
					var targets = [].addArray([target.getPrevious(), target.getNext()]);
					if (targets.length > 1)
						player
							.chooseTarget(
								"绡刃：对其中一名角色造成1点伤害",
								(card, player, target) => {
									return _status.event.targets.includes(target);
								},
								true
							)
							.set("ai", target => {
								let player = _status.event.player;
								return get.damageEffect(target, player, player);
							})
							.set("targets", targets);
					else if (targets.length) event._result = { bool: true, targets: targets };
					"step 6";
					if (result.bool) {
						let target = result.targets[0];
						event.target = target;
						player.line(target);
						target.damage("nocard");
					} else event.goto(9);
					"step 7";
					if (player.storage.dcxiaoren_dying || get.is.blocked(event.name, player)) event._result = { bool: false };
					else if (event.frequent) event._result = { bool: true };
					else
						player
							.chooseBool("绡刃：是否再次进行判定并执行对应效果直到未能执行此项或有角色进入濒死状态？")
							.set("ai", function () {
								return _status.event.bool;
							})
							.set("bool", lib.skill.dcxiaoren.check({ player: event.target }, player));
					"step 8";
					if (result.bool) {
						event.frequent = true;
						event.goto(1);
					}
					"step 9";
					player.removeSkill("dcxiaoren_dying");
				},
				subSkill: {
					dying: {
						init: player => {
							delete player.storage.dcxiaoren_dying;
						},
						onremove: player => {
							delete player.storage.dcxiaoren_dying;
						},
						trigger: { global: "dying" },
						forced: true,
						popup: false,
						charlotte: true,
						content: function () {
							player.storage.dcxiaoren_dying = true;
						},
					},
				},
			},
			//孙翎鸾
			dclingyue: {
				audio: 2,
				trigger: { global: "damageSource" },
				forced: true,
				filter: function (event, player) {
					if (!event.source || !event.source.isIn()) return false;
					var history = event.source.actionHistory;
					for (var i = history.length - 1; i >= 0; i--) {
						if (i == history.length - 1) {
							if (history[i].sourceDamage.indexOf(event) > 0) return false;
						} else if (history[i].sourceDamage.some(evt => evt != event)) return false;
						if (history[i].isRound) break;
					}
					return true;
				},
				content: function () {
					var num = 1,
						current = _status.currentPhase;
					if (current && trigger.source != current) {
						var num = 0,
							players = game.players.slice(0).concat(game.dead);
						for (var target of players) {
							target.getHistory("sourceDamage", function (evt) {
								num += evt.num;
							});
						}
					}
					player.draw(num);
				},
			},
			dcpandi: {
				audio: 2,
				enable: "phaseUse",
				filter: function (event, player) {
					var players = event.dcpandi;
					if (!players || !players.length) return false;
					var source = player.storage.dcpandi_effect;
					return get.itemtype(source) != "player" || !source.isIn();
				},
				pandi_wrapKey: function () {
					var str = "";
					for (var arg of arguments) {
						if (arg === null || arg === undefined) {
							str += arg + "-";
							continue;
						}
						switch (get.itemtype(arg)) {
							case "player":
								str += "p:" + arg.playerid;
								break;
							case "card":
								if (arg.cardid) {
									str += "c:" + arg.cardid;
								} else {
									str += "c:" + arg.name;
								}
								break;
							default:
								str += "n:" + arg;
								break;
						}
						str += "-";
					}
					return str;
				},
				pandi_effect: function (target, card, player, viewer) {
					if (!_status.event) return get.effect(target, card, player, viewer);
					var key = lib.skill.dcpandi.pandi_wrapKey.apply(null, arguments);
					var effect = _status.event.getTempCache("effect", key);
					if (effect !== undefined) return effect;
					effect = get.effect(target, card, player, viewer);
					_status.event.putTempCache("effect", key, effect);
					return effect;
				},
				pandi_canUse: function (player, card, target, arg1, arg2) {
					if (!_status.event) return player.canUse(card, target, arg1, arg2);
					var key = lib.skill.dcpandi.pandi_wrapKey.apply(null, arguments);
					var effect = _status.event.getTempCache("canUse", key);
					if (effect !== undefined) return effect;
					effect = player.canUse(card, target, arg1, arg2);
					_status.event.putTempCache("canUse", key, effect);
					return effect;
				},
				pandi_effect_use: function (target, card, player, viewer) {
					if (!_status.event) return get.effect_use(target, card, player, viewer);
					var key = lib.skill.dcpandi.pandi_wrapKey.apply(null, arguments);
					var effect = _status.event.getTempCache("effect_use", key);
					if (effect !== undefined) return effect;
					effect = get.effect_use(target, card, player, viewer);
					_status.event.putTempCache("effect_use", key, effect);
					return effect;
				},
				onChooseToUse: function (event) {
					if (!game.online && event.type == "phase" && !event.dcpandi) {
						var players = game.filterPlayer(function (current) {
							return current != event.player && current.getHistory("sourceDamage").length == 0;
						});
						event.set("dcpandi", players);
					}
				},
				filterTarget: function (card, player, target) {
					var players = _status.event.dcpandi;
					if (!players || !players.length) return false;
					return players.includes(target);
				},
				content: function () {
					if (target.isIn()) {
						player.storage.dcpandi_effect = target;
						player.addTempSkill("dcpandi_effect", "phaseUseAfter");
					}
				},
				ai: {
					threaten: 4,
					order: 12,
					result: {
						player: function (player, target) {
							return player.getCards("hs").reduce(function (eff, card) {
								return Math.max(eff, lib.skill.dcpandi.getUseValue(card, target, player) - lib.skill.dcpandi.getUseValue(card, player, player));
							}, 0);
						},
					},
				},
				getUseValue: function (card, player, viewer) {
					if (typeof card == "string") {
						card = { name: card, isCard: true };
					}
					var key = lib.skill.dcpandi.pandi_wrapKey(card, player, viewer);
					if (_status.event) {
						var uv = _status.event.getTempCache("getUseValue", key);
						if (uv !== undefined) {
							return uv;
						}
					}
					var targets = game.filterPlayer();
					var value = [];
					var min = 0;
					var info = get.info(card);
					if (!info || info.notarget) {
						if (_status.event) {
							_status.event.putTempCache("getUseValue", key, 0);
						}
						return 0;
					}
					var range;
					var select = get.copy(info.selectTarget);
					if (select == undefined) {
						if (info.filterTarget == undefined) {
							if (_status.event) {
								_status.event.putTempCache("getUseValue", key, true);
							}
							return true;
						}
						range = [1, 1];
					} else if (typeof select == "number") range = [select, select];
					else if (get.itemtype(select) == "select") range = select;
					else if (typeof select == "function") range = select(card, player);
					if (info.singleCard) range = [1, 1];
					game.checkMod(card, player, range, "selectTarget", player);
					if (!range) {
						if (_status.event) {
							_status.event.putTempCache("getUseValue", key, 0);
						}
						return 0;
					}
					for (var i = 0; i < targets.length; i++) {
						if (lib.skill.dcpandi.pandi_canUse(player, card, targets[i], null, true)) {
							var eff = lib.skill.dcpandi.pandi_effect(targets[i], card, player, viewer);
							value.push(eff);
						}
					}
					value.sort(function (a, b) {
						return b - a;
					});
					for (var i = 0; i < value.length; i++) {
						if (i == range[1] || (range[1] != -1 && value[i] <= 0)) break;
						min += value[i];
					}
					if (_status.event) {
						_status.event.putTempCache("getUseValue", key, min);
					}
					return min;
				},
				subSkill: {
					effect: {
						audio: "dcpandi",
						charlotte: true,
						priority: Infinity,
						onremove: true,
						mark: "character",
						intro: {
							content: "下一张牌视为由$使用",
						},
						trigger: { player: "useCardBefore" },
						forced: true,
						filter: function (event, player) {
							var source = player.storage.dcpandi_effect;
							return get.itemtype(source) == "player" && source.isIn();
						},
						logTarget: (event, player) => player.storage.dcpandi_effect,
						content: function () {
							trigger.player = player.storage.dcpandi_effect;
							trigger.noai = true;
							player.removeSkill("dcpandi_effect");
							game.delay(0.5);
						},
						ai: {
							order: function (card, player, target, current) {
								if (typeof card != "object") return;
								var source = player.storage.dcpandi_effect;
								if (!source.isIn() || get.itemtype(source) != "player" || get.itemtype(source.storage.dcpandi_effect) == "player") return;
								return [0, lib.skill.dcpandi.pandi_effect_use(target, card, source, player), 0, lib.skill.dcpandi.pandi_effect(target, card, source, target)];
							},
						},
						mod: {
							selectCard: function (card, player, range) {
								var source = player.storage.dcpandi_effect;
								if (!source.isIn() || get.itemtype(source) != "player" || get.itemtype(source.storage.dcpandi_effect) == "player") return;
								var range,
									info = get.info(card);
								var select = get.copy(info.selectTarget);
								if (select == undefined) {
									if (info.filterTarget == undefined) return [0, 0];
									range = [1, 1];
								} else if (typeof select == "number") range = [select, select];
								else if (get.itemtype(select) == "select") range = select;
								else if (typeof select == "function") range = select(card, source);
								game.checkMod(card, source, range, "selectTarget", source);
							},
							cardEnabled2: function (card, player, event) {
								var source = player.storage.dcpandi_effect;
								if (!source.isIn() || get.itemtype(source) != "player" || get.itemtype(source.storage.dcpandi_effect) == "player") return;
								var check = game.checkMod(card, source, event, "unchanged", "cardEnabled2", source);
								return check;
							},
							cardEnabled: function (card, player, event) {
								var source = player.storage.dcpandi_effect;
								if (!source.isIn() || get.itemtype(source) != "player" || get.itemtype(source.storage.dcpandi_effect) == "player") return;
								if (event === "forceEnable") {
									var mod = game.checkMod(card, source, event, "unchanged", "cardEnabled", source);
									if (mod != "unchanged") return mod;
									return true;
								} else {
									var filter = get.info(card).enable;
									if (!filter) return;
									var mod = game.checkMod(card, player, source, "unchanged", "cardEnabled", source);
									if (mod != "unchanged") return mod;
									if (typeof filter == "boolean") return filter;
									if (typeof filter == "function") return filter(card, source, event);
								}
							},
							cardUsable: function (card, player, num) {
								var source = player.storage.dcpandi_effect;
								if (!source.isIn() || get.itemtype(source) != "player" || get.itemtype(source.storage.dcpandi_effect) == "player") return;
								var event = _status.event;
								if (event.type == "chooseToUse_button") event = event.getParent();
								if (source != _status.event.player) return true;
								if (info.updateUsable == "phaseUse") {
									if (event.getParent().name != "phaseUse") return true;
									if (event.getParent().player != source) return true;
								}
								event.addCount_extra = true;
								var num = info.usable;
								if (typeof num == "function") num = num(card, source);
								num = game.checkMod(card, source, num, event, "cardUsable", source);
								if (typeof num != "number") return true;
								if (source.countUsed(card) < num) return true;
								if (
									game.hasPlayer(function (current) {
										return game.checkMod(card, source, current, false, "cardUsableTarget", source);
									})
								) {
									return true;
								}
								return false;
							},
							playerEnabled: function (card, player, target) {
								var source = player.storage.dcpandi_effect;
								if (!source.isIn() || get.itemtype(source) != "player" || get.itemtype(source.storage.dcpandi_effect) == "player") return;
								return lib.filter.targetEnabledx(card, source, target);
							},
							targetInRange: function (card, player, target) {
								var source = player.storage.dcpandi_effect;
								if (!source.isIn() || get.itemtype(source) != "player" || get.itemtype(source.storage.dcpandi_effect) == "player") return;
								return lib.filter.targetInRange(card, source, target);
							},
						},
					},
				},
			},
			//新服灭霸
			dctongye: {
				audio: 2,
				trigger: {
					global: ["phaseBefore", "dieAfter"],
					player: "enterGame",
				},
				forced: true,
				filter: function (event, player) {
					if (game.countGroup() > 4) return false;
					if (event.name == "die") return true;
					return event.name != "phase" || game.phaseNumber == 0;
				},
				content: function *(event, map) {
					const player = map.player;
					player.removeSkill("dctongye_buff");
					player.addSkill("dctongye_buff");
					var num = game.countGroup();
					if (num <= 4) {
						player.addMark("dctongye_handcard", 3, false);
						game.log(player, "手牌上限", "#y+3");
						player.addMark("dctongye_draw", 4 - num, false);
						game.log(player, "摸牌阶段额定摸牌数", "#y+" + parseFloat(4 - num));
					}
					if (num <= 3) {
						player.addMark("dctongye_range", 3, false);
						game.log(player, "攻击范围", "#y+3");
					}
					if (num <= 2) {
						player.addMark("dctongye_sha", 3, false);
						game.log(player, "使用杀的次数上限", "#y+3");
					}
					if (num <= 1) {
						yield player.recover(3);
					}
				},
				subSkill: {
					buff: {
						audio: "dctongye",
						trigger: { player: "phaseDrawBegin2" },
						forced: true,
						filter: function (event, player) {
							if (!player.hasMark("dctongye_draw")) return false;
							return !event.numFixed;
						},
						content: function () {
							trigger.num += player.countMark("dctongye_draw");
						},
						charlotte: true,
						onremove: ["dctongye_handcard", "dctongye_range", "dctongye_sha", "dctongye_draw"],
						mark: true,
						marktext: "统",
						intro: {
							content: function (storage, player) {
								var str = "";
								var hand = player.countMark("dctongye_handcard"),
									range = player.countMark("dctongye_range"),
									sha = player.countMark("dctongye_sha"),
									draw = player.countMark("dctongye_draw");
								if (hand > 0) {
									str += "<li>手牌上限+" + hand + "；";
								}
								if (range > 0) {
									str += "<li>攻击范围+" + range + "；";
								}
								if (sha > 0) {
									str += "<li>使用【杀】的次数上限+" + sha + "；";
								}
								if (draw > 0) {
									str += "<li>摸牌阶段额定摸牌数+" + draw + "。";
								}
								str = str.slice(0, -1) + "。";
								return str;
							},
						},
						mod: {
							maxHandcard: function (player, num) {
								return num + player.countMark("dctongye_handcard");
							},
							attackRange: function (player, num) {
								return num + player.countMark("dctongye_range");
							},
							cardUsable: function (card, player, num) {
								if (card.name == "sha") {
									return num + player.countMark("dctongye_sha");
								}
							},
						},
						ai: {
							threaten: 2.6,
						},
					},
				},
			},
			dcmianyao: {
				audio: 2,
				trigger: {
					player: "phaseDrawEnd",
				},
				direct: true,
				filter: function (event, player) {
					return player.countCards("h") > 0;
				},
				content: function () {
					"step 0";
					player
						.chooseCard("h", get.prompt("dcmianyao"), "展示点数最小的一张牌并随机插入牌堆中，然后于回合结束时摸此牌点数张牌。", function (card, player) {
							var num = get.number(card, player);
							return !player.hasCard(card2 => {
								return card != card2 && get.number(card2, player) < num;
							});
						})
						.set("ai", card => {
							var player = _status.event.player;
							var value = player.getUseValue(card, null, true);
							if (value > 5 && get.number(card) <= 2) return 0;
							return 1 + 1 / Math.max(0.1, value);
						});
					"step 1";
					if (result.bool) {
						player.logSkill("dcmianyao");
						var card = result.cards[0];
						event.card = card;
						player.showCards([card], get.translation(player) + "发动了【免徭】");
					} else event.finish();
					"step 2";
					player.$throw(1, 1000);
					player.lose(card, ui.cardPile).insert_index = function () {
						return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
					};
					player.addTempSkill("dcmianyao_draw");
					var num = get.number(card);
					if (num > 0) player.addMark("dcmianyao_draw", num, false);
				},
				subSkill: {
					draw: {
						trigger: {
							player: "phaseEnd",
						},
						filter: function (event, player) {
							return player.hasMark("dcmianyao_draw");
						},
						forced: true,
						charlotte: true,
						onremove: true,
						content: function () {
							player.draw(player.countMark("dcmianyao_draw"));
						},
					},
				},
			},
			dcchangqu: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				selectTarget: function () {
					return [1, game.countPlayer() - 1];
				},
				complexSelect: true,
				complexTarget: true,
				multitarget: true,
				multiline: true,
				filterTarget: function (card, player, target) {
					if (player == target) return false;
					var next = player.getNext(),
						prev = player.getPrevious();
					var selected = ui.selected.targets;
					if (!selected.includes(next) && !selected.includes(prev)) return target == next || target == prev;
					for (var i of selected) {
						if (i.getNext() == target || i.getPrevious() == target) return true;
					}
					return false;
				},
				contentBefore: function () {
					event.getParent()._dcchangqu_targets = targets.slice();
				},
				content: function () {
					"step 0";
					event.targets = event.getParent()._dcchangqu_targets;
					var current = targets[0];
					current.addMark("dcchangqu_warship");
					current.addMark("dcchangqu_warshipx", 1, false);
					event.num = 0;
					game.delayx();
					"step 1";
					var target = targets.shift();
					event.target = target;
					var num = Math.max(1, event.num);
					var nextPlayer = targets.find(i => {
						return i.isIn();
					});
					if (target.hasMark("dcchangqu_warshipx")) {
						var prompt2 = "是否交给" + get.translation(player) + get.cnNumber(num) + "张手牌？" + (nextPlayer ? "若如此做，将“战舰”移动给" + get.translation(nextPlayer) + "，" : "，") + "否则你下次受到的属性伤害值+" + num;
						target
							.chooseCard(get.translation(player) + "对你发动了【长驱】", prompt2, num)
							.set("ai", card => {
								if (_status.event.att > 0) return 15 - get.value(card);
								if (_status.event.take) return 0;
								return 8.2 - 0.8 * Math.min(5, _status.event.target.hp + _status.event.target.hujia) - get.value(card);
							})
							.set("att", get.attitude(target, player))
							.set("take", function () {
								var base = num;
								var getEffect = function (target, player, num) {
									var natures = ["fire", "thunder", "ice"];
									return (
										natures
											.map(nature => {
												return (get.damageEffect(target, target, player, nature) * Math.sqrt(num)) / Math.min(1.5, 1 + target.countCards("h"));
											})
											.reduce((sum, eff) => {
												return sum + eff;
											}, 0) / natures.length
									);
								};
								var eff = getEffect(player, player, base);
								return targets
									.some((current, ind) => {
										var num = base + ind + 1;
										var effx = getEffect(current, player, num);
										return effx < eff;
									})
									.set("target", target);
							});
					} else event.goto(4);
					"step 2";
					if (result.bool) {
						var cards = result.cards;
						target.give(cards, player);
						event.num++;
					} else {
						target.addSkill("dcchangqu_add");
						target.addMark("dcchangqu_add", Math.max(1, event.num), false);
						target.link(true);
						event.goto(4);
					}
					"step 3";
					var nextPlayer = targets.find(i => {
						return i.isIn();
					});
					if (nextPlayer) {
						target.line(nextPlayer);
						nextPlayer.addMark("dcchangqu_warship", target.countMark("dcchangqu_warship"));
						nextPlayer.addMark("dcchangqu_warshipx", target.countMark("dcchangqu_warshipx"), false);
						event.goto(1);
						game.delayx();
					}
					target.removeMark("dcchangqu_warship", target.countMark("dcchangqu_warship"));
					target.removeMark("dcchangqu_warshipx", target.countMark("dcchangqu_warshipx"), false);
					"step 4";
					var targets = game.players.slice().concat(game.dead);
					targets.forEach(i => {
						delete i.storage.dcchangqu_warshipx;
					});
				},
				ai: {
					order: 10,
					expose: 0.05,
					result: {
						target: function (player, target) {
							let targets = game.filterPlayer(i => i != player);
							targets.sortBySeat(player);
							let targets2 = targets.slice(0).reverse();
							let sum = 0;
							var maxSum = -Infinity,
								maxIndex = -1;
							var maxSum2 = -Infinity,
								maxIndex2 = -1;
							for (var i = 0; i < targets.length; i++) {
								var current = targets[i];
								var att = -get.attitude(player, current) - 0.1;
								var val = Math.sqrt(i + 1) * att;
								val /= 0.01 + Math.max(3, current.countCards("h") / 2);
								sum += val;
								if (sum > maxSum) {
									maxSum = sum;
									maxIndex = i;
								}
							}
							sum = 0;
							for (var i = 0; i < targets2.length; i++) {
								var current = targets[i];
								var att = -get.attitude(player, current) - 0.1;
								var val = Math.sqrt(i + 1) * att;
								val /= 0.01 + Math.max(3, current.countCards("h") / 2);
								sum += val;
								if (sum > maxSum2) {
									maxSum2 = sum;
									maxIndex2 = i;
								}
							}
							if (maxSum < maxSum2) {
								targets = targets2;
								maxIndex = maxIndex2;
							}
							if (ui.selected.targets.length > maxIndex) return -100 * get.sgnAttitude(player, target);
							if (target == targets[ui.selected.targets.length]) return get.sgnAttitude(player, target);
							return 0;
						},
					},
				},
				subSkill: {
					warship: {
						marktext: "舰",
						intro: {
							name: "战舰",
							name2: "战舰",
							content: "这里停了&艘战舰！不过啥用没有。",
						},
					},
					add: {
						trigger: {
							player: "damageBegin3",
						},
						filter: function (event, player) {
							return event.hasNature() && player.hasMark("dcchangqu_add");
						},
						forced: true,
						onremove: true,
						charlotte: true,
						content: function () {
							"step 0";
							trigger.num += player.countMark("dcchangqu_add");
							player.removeSkill("dcchangqu_add");
						},
						marktext: "驱",
						intro: {
							content: "下次受到的属性伤害+#",
						},
					},
				},
			},
			//周不疑
			dcshiji: {
				audio: 2,
				trigger: {
					global: "phaseJieshuBegin",
				},
				filter: function (event, player) {
					return event.player.isIn() && !event.player.getHistory("sourceDamage").length;
				},
				direct: true,
				content: function () {
					"step 0";
					trigger.player.addTempSkill("dcshiji_forbidself");
					var list = [];
					for (var name of lib.inpile) {
						var type = get.type(name);
						if (type != "trick") continue;
						if (player.getStorage("dcshiji_used").includes(name)) continue;
						var card = {
							name: name,
							storage: { dcshiji: true },
						};
						if (trigger.player.hasUseTarget(card)) {
							list.push([type, "", name]);
						}
					}
					if (list.length) {
						player
							.chooseButton([get.prompt("dcshiji", trigger.player), [list, "vcard"]])
							.set("ai", button => {
								if (_status.event.tochoose) return _status.event.getTrigger().player.getUseValue({ name: button.link[2] });
								return 0;
							})
							.set(
								"tochoose",
								get.attitude(player, trigger.player) > 0 &&
									trigger.player.hasCard(card => {
										return get.value(card) < 7;
									}, "hes")
							);
					} else event.finish();
					"step 1";
					if (result.bool) {
						var card = {
							name: result.links[0][2],
							storage: { dcshiji: true },
						};
						var str = get.translation(card);
						player.logSkill("dcshiji", trigger.player);
						player.addTempSkill("dcshiji_used", "roundStart");
						player.markAuto("dcshiji_used", [card.name]);
						player.popup(str);
						game.log(player, "声明了", "#y" + str);
						game.broadcastAll(function (card) {
							lib.skill.dcshiji_backup.viewAs = card;
							lib.skill.dcshiji_backup.prompt = "十计：是否将一张牌当做" + get.translation(card) + "使用？";
						}, card);
						var next = trigger.player.chooseToUse();
						next.set("openskilldialog", "十计：是否将一张牌当做" + get.translation(card) + "使用？");
						next.set("norestore", true);
						next.set("addCount", false);
						next.set("_backupevent", "dcshiji_backup");
						next.set("custom", {
							add: {},
							replace: { window: function () {} },
						});
						next.backup("dcshiji_backup");
					}
				},
				subSkill: {
					backup: {
						filterCard: function (card) {
							return get.itemtype(card) == "card";
						},
						position: "hes",
						selectCard: 1,
						check: card => 7 - get.value(card),
						popname: true,
					},
					used: {
						charlotte: true,
						onremove: true,
						mark: true,
						marktext: "计",
						intro: {
							content: "本轮已声明过$",
						},
					},
					forbidself: {
						charlotte: true,
						mod: {
							targetEnabled: function (card, player, target) {
								if (player == target && card.storage && card.storage.dcshiji) return false;
							},
						},
					},
				},
			},
			dcsilun: {
				audio: 2,
				trigger: {
					player: ["phaseZhunbeiBegin", "damageEnd"],
				},
				frequent: true,
				content: function () {
					"step 0";
					player.draw(4);
					event.count = 0;
					event.equipCount = {};
					game.countPlayer(current => {
						event.equipCount[current.playerid] = current.countCards("e");
					}, true);
					"step 1";
					if (!player.countCards("he")) event.goto(5);
					else
						player.chooseCard("四论：选择一张牌（" + (event.count + 1) + "/" + "4）", "然后选择将此牌置于场上或牌堆的两端", true, "he").set("ai", card => {
							var player = _status.event.player;
							if (["equip", "delay"].includes(get.type(card)) && player.hasValueTarget(card)) return 50;
							return 50 - get.value(card);
						});
					"step 2";
					if (result.bool) {
						var card = result.cards[0];
						event.card = card;
						event.count++;
						var choices = ["牌堆顶", "牌堆底"];
						var type = get.type(card);
						if (
							(type == "equip" &&
								game.hasPlayer(current => {
									return current.canEquip(card);
								})) ||
							(type == "delay" &&
								game.hasPlayer(current => {
									return current.canAddJudge(card);
								}))
						)
							choices.unshift("场上");
						player
							.chooseControl(choices)
							.set("prompt", "请选择要将" + get.translation(card) + "置于的位置")
							.set("ai", () => {
								return _status.event.choice;
							})
							.set(
								"choice",
								(function () {
									if (["equip", "delay"].includes(get.type(card)) && player.hasValueTarget(card) && choices.includes("场上")) return "场上";
									var val = get.value(card);
									var next = _status.currentPhase;
									if (next) {
										if (trigger.name == "damage") next = next.getNext();
										if ((get.attitude(player, next) > 0 && val >= 6) || (get.attitude(player, next) < 0 && val <= 4.5)) return "牌堆顶";
									}
									return "牌堆底";
								})()
							);
					}
					"step 3";
					if (result.control == "场上") {
						var type = get.type(card);
						player
							.chooseTarget("将" + get.translation(card) + "置于一名角色的场上", true, (card, player, target) => {
								return _status.event.targets.includes(target);
							})
							.set(
								"targets",
								game.filterPlayer(current => {
									if (type == "equip") return current.canEquip(card);
									if (type == "delay") return current.canAddJudge(card);
									return false;
								})
							)
							.set("ai", target => {
								var player = _status.event.player;
								var card = _status.event.card;
								return (
									get.attitude(player, target) *
									(get.type(card) == "equip"
										? get.value(card, target)
										: get.effect(
												target,
												{
													name: card.viewAs || card.name,
													cards: [card],
												},
												target,
												target
										  ))
								);
							})
							.set("card", card);
					} else {
						player.$throw(card, 1000);
						var next = player.lose(card, ui.cardPile, "visible");
						if (result.control == "牌堆顶") next.insert_card = true;
						game.log(player, "将", card, "置于了", "#y" + result.control);
					}
					"step 4";
					if (result.bool && result.targets && result.targets.length) {
						var target = result.targets[0];
						player.line(target);
						player.$give(card, target, false);
						if (get.type(card) == "equip") {
							target.equip(card);
						} else {
							target.addJudge(card);
						}
					}
					"step 5";
					game.countPlayer(current => {
						var count = current.countCards("e");
						var prevCount = event.equipCount[current.playerid] || 0;
						if (count != prevCount) {
							current.link(false);
							current.turnOver(false);
						}
						event.equipCount[current.playerid] = count;
					});
					if (event.count < 4) event.goto(1);
				},
			},
			//杜预
			dcjianguo: {
				audio: 2,
				enable: "phaseUse",
				filter: function (event, player) {
					return ["discard", "draw"].some(i => !player.getStorage("dcjianguo_used").includes(i));
				},
				chooseButton: {
					dialog: function (event, player) {
						var dialog = ui.create.dialog("谏国：请选择一项", "hidden");
						dialog.add([
							[
								["discard", "令一名角色摸一张牌，然后弃置一半手牌"],
								["draw", "令一名角色弃置一张牌，然后摸等同于手牌数一半的牌"],
							],
							"textbutton",
						]);
						return dialog;
					},
					filter: function (button, player) {
						return !player.getStorage("dcjianguo_used").includes(button.link);
					},
					check: function (button) {
						var player = _status.event.player;
						if (button.link == "discard") {
							var discard = Math.max.apply(
								Math,
								game
									.filterPlayer(current => {
										return lib.skill.dcjianguo_discard.filterTarget(null, player, current);
									})
									.map(current => {
										return get.effect(current, "dcjianguo_discard", player, player);
									})
							);
							return discard;
						}
						if (button.link == "draw") {
							var draw = Math.max.apply(
								Math,
								game
									.filterPlayer(current => {
										return lib.skill.dcjianguo_draw.filterTarget(null, player, current);
									})
									.map(current => {
										return get.effect(current, "dcjianguo_draw", player, player);
									})
							);
							return draw;
						}
						return 0;
					},
					backup: function (links) {
						return get.copy(lib.skill["dcjianguo_" + links[0]]);
					},
					prompt: function (links) {
						if (links[0] == "discard") return "令一名角色摸一张牌，然后弃置一半手牌";
						return "令一名角色弃置一张牌，然后摸等同于手牌数一半的牌";
					},
				},
				ai: {
					order: 10,
					threaten: 2.8,
					result: {
						//想让杜预两个技能自我联动写起来太累了，开摆
						player: 1,
					},
				},
				subSkill: {
					used: {
						charlotte: true,
						onremove: true,
					},
					backup: { audio: "dcjianguo" },
					discard: {
						audio: "dcjianguo",
						filterTarget: () => true,
						filterCard: () => false,
						selectCard: -1,
						content: function () {
							"step 0";
							player.addTempSkill("dcjianguo_used", "phaseUseAfter");
							player.markAuto("dcjianguo_used", ["discard"]);
							target.draw();
							game.delayex();
							"step 1";
							var num = Math.ceil(target.countCards("h") / 2);
							if (num > 0) target.chooseToDiscard(num, true, "谏国：请弃置" + get.cnNumber(num) + "张手牌");
						},
						ai: {
							result: {
								target: function (player, target) {
									return 1.1 - Math.floor(target.countCards("h") / 2);
								},
							},
							tag: {
								gain: 1,
								loseCard: 2,
							},
						},
					},
					draw: {
						audio: "dcjianguo",
						filterTarget: function (card, player, target) {
							return target.countCards("he");
						},
						filterCard: () => false,
						selectCard: -1,
						content: function () {
							"step 0";
							player.addTempSkill("dcjianguo_used", "phaseUseAfter");
							player.markAuto("dcjianguo_used", ["draw"]);
							target.chooseToDiscard("he", true, "谏国：请弃置一张牌");
							"step 1";
							var num = Math.ceil(target.countCards("h") / 2);
							if (num > 0) target.draw(num);
						},
						ai: {
							result: {
								target: function (player, target) {
									var fix = 0;
									var num = target.countCards("h");
									if (player == target && num % 2 == 1 && num >= 5) fix += 1;
									return Math.ceil(num / 2 - 0.5) + fix;
								},
							},
							tag: {
								loseCard: 1,
								gain: 2,
							},
						},
					},
				},
			},
			dcdyqingshi: {
				audio: 2,
				trigger: {
					player: "useCardToPlayered",
				},
				filter: function (event, player) {
					if (player != _status.currentPhase) return false;
					if (!event.isFirstTarget) return false;
					if (event.card.name != "sha" && get.type(event.card, null, false) != "trick") return false;
					if (player.countCards("h") != player.getHistory("useCard").indexOf(event.getParent()) + 1) return false;
					return event.targets.some(target => {
						return target != player && target.isIn();
					});
				},
				direct: true,
				locked: false,
				content: function () {
					"step 0";
					var targets = trigger.targets.filter(target => {
						return target != player && target.isIn();
					});
					player
						.chooseTarget(get.prompt("dcdyqingshi"), "对一名不为你的目标角色造成1点伤害", (card, player, target) => {
							return _status.event.targets.includes(target);
						})
						.set("ai", target => {
							var player = _status.event.player;
							return get.damageEffect(target, player, player);
						})
						.set("targets", targets);
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("dcdyqingshi", target);
						target.damage();
					}
				},
				mod: {
					aiOrder: function (player, card, num) {
						if (_status.currentPhase != player) return;
						var cardsh = [];
						if (Array.isArray(card.cards)) {
							cardsh.addArray(
								card.cards.filter(card => {
									return get.position(card) == "h";
								})
							);
						}
						var del = player.countCards("h") - cardsh.length - player.getHistory("useCard").length - 1;
						if (del < 0) return;
						if (del > 0) {
							if (card.name == "sha" || get.type(card, null, player) != "trick") return num / 3;
							return num + 1;
						}
						return num + 15;
					},
				},
			},
			//甘糜
			dcchanjuan: {
				init: function (player) {
					if (!player.storage.dcchanjuan) {
						player.storage.dcchanjuan = {};
					}
				},
				audio: 2,
				trigger: { player: "useCardAfter" },
				filter: function (event, player) {
					if (
						event.targets.length != 1 ||
						!player.hasHistory("lose", evt => {
							if (evt.getParent() != event) return false;
							return event.cards.every(card => evt.hs.includes(card));
						})
					)
						return false;
					if (!["basic", "trick"].includes(get.type(event.card, null, false))) return false;
					if (event.getParent(2).name == "dcchanjuan") return false;
					return !player.storage.dcchanjuan[event.card.name] || player.storage.dcchanjuan[event.card.name] < 2;
				},
				direct: true,
				content: function () {
					"step 0";
					var card = {
						name: trigger.card.name,
						nature: trigger.card.nature,
						isCard: true,
					};
					player
						.chooseUseTarget(card, get.prompt("dcchanjuan"), false, false)
						.set("prompt2", "视为再使用一张" + get.translation(card))
						.set("logSkill", "dcchanjuan");
					"step 1";
					if (result.bool) {
						if (!player.storage.dcchanjuan[trigger.card.name]) player.storage.dcchanjuan[trigger.card.name] = 0;
						player.storage.dcchanjuan[trigger.card.name]++;
						var list1 = trigger.targets,
							list2 = result.targets;
						if (list1.slice().removeArray(list2).length == 0 && list2.slice().removeArray(list1).length == 0) player.draw();
					}
				},
				ai: { threaten: 2 },
				mark: true,
				intro: {
					markcount: storage => 0,
					content: function (storage) {
						var str = "已使用牌名：",
							names = Object.keys(storage);
						if (!names.length) str += "无";
						else
							names.forEach(name => {
								str += "<br><li>【";
								str += get.translation(name);
								str += "】：";
								str += storage[name] + "次";
							});
						return str;
					},
				},
			},
			dcxunbie: {
				unique: true,
				audio: 2,
				trigger: {
					player: "dying",
				},
				filter: function (event, player) {
					if (player.hp > 0) return false;
					var characters = ["dc_ganfuren", "dc_mifuren"];
					game.countPlayer(current => {
						if (current.name1 == "dc_ganfuren" || current.name2 == "dc_ganfuren") {
							characters.remove("dc_ganfuren");
						}
						if (current.name1 == "dc_mifuren" || current.name2 == "dc_mifuren") {
							characters.remove("dc_mifuren");
						}
					});
					return characters.length;
				},
				check: () => true,
				skillAnimation: true,
				animationColor: "fire",
				limited: true,
				derivation: ["dcyongjue", "dcshushen", "dcshenzhi", "dcguixiu", "dccunsi"],
				content: function () {
					"step 0";
					player.awakenSkill("dcxunbie");
					if (player.name1 == "ganfurenmifuren" || player.name2 == "ganfurenmifuren") {
						var characters = ["dc_ganfuren", "dc_mifuren"];
						game.countPlayer(current => {
							if (current.name1 == "dc_ganfuren" || current.name2 == "dc_ganfuren") {
								characters.remove("dc_ganfuren");
							}
							if (current.name1 == "dc_mifuren" || current.name2 == "dc_mifuren") {
								characters.remove("dc_mifuren");
							}
						});
						if (characters.length == 1) event._result = { control: characters[0] };
						else {
							player
								.chooseControl(characters)
								.set("dialog", ["选择要替换成的武将", [characters, "character"]])
								.set("ai", () => [0, 1].randomGet());
						}
					} else event.goto(2);
					"step 1";
					var character = result.control;
					if (!_status.characterlist) {
						lib.skill.pingjian.initList();
					}
					player.reinitCharacter("ganfurenmifuren", character);
					"step 2";
					player.recover(1 - player.hp);
					player.addTempSkill("dcxunbie_muteki");
				},
				subSkill: {
					muteki: {
						trigger: {
							player: "damageBegin4",
						},
						charlotte: true,
						forced: true,
						content: function () {
							trigger.cancel();
						},
						mark: true,
						intro: { content: "防止受到的所有伤害直到本回合结束" },
						ai: {
							nofire: true,
							nothunder: true,
							nodamage: true,
							effect: {
								target: function (card, player, target, current) {
									if (get.tag(card, "damage")) return "zeroplayertarget";
								},
							},
						},
					},
				},
			},
			//散装版糜夫人
			dcguixiu: {
				audio: "guixiu",
				trigger: {
					player: "phaseBegin",
				},
				forced: true,
				onremove: true,
				filter: function (event, player) {
					return !player.hasMark("dcguixiu");
				},
				group: "dcguixiu_rec",
				content: function () {
					player.addMark("dcguixiu", 1, false);
					player.draw(2);
				},
				subSkill: {
					rec: {
						audio: "guixiu",
						trigger: {
							player: "useSkillAfter",
						},
						forced: true,
						filter: function (event, player) {
							return event.skill == "dccunsi" && player.isDamaged();
						},
						content: function () {
							player.recover();
						},
					},
				},
			},
			dccunsi: {
				audio: "cunsi",
				enable: "phaseUse",
				limited: true,
				skillAnimation: true,
				animationColor: "orange",
				filterTarget: true,
				derivation: "dcyongjue",
				content: function () {
					"step 0";
					player.awakenSkill("dccunsi");
					target.addSkillLog("dcyongjue");
					if (target != player) player.draw(2);
				},
				ai: {
					order: 10,
					result: {
						target: 1,
					},
				},
			},
			dcyongjue: {
				audio: "yongjue",
				trigger: {
					player: "useCard",
				},
				filter: function (event, player) {
					var evtx = event.getParent("phaseUse");
					if (!evtx || evtx.player != player) return false;
					return (
						player
							.getHistory("useCard", evt => {
								return evt.card.name == "sha" && event.getParent("phaseUse") == evtx;
							})
							.indexOf(event) == 0
					);
				},
				direct: true,
				content: function () {
					"step 0";
					var choices = ["选项一"];
					var choiceList = ["令" + get.translation(trigger.card) + "不计入次数", "获得此牌"];
					if (trigger.cards.length) {
						choices.push("选项二");
						choiceList[1] = "获得" + get.translation(trigger.cards);
					} else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
					choices.push("cancel2");
					player
						.chooseControl(choices)
						.set("choiceList", choiceList)
						.set("ai", () => {
							return _status.event.choice;
						})
						.set(
							"choice",
							(function () {
								if (choices.length == 3 && trigger.addCount === false) return 1;
								if (player.getCardUsable({ name: "sha" }) < player.countCards("hs", "sha")) return 0;
								if (choices.length == 3) return 1;
								return 0;
							})()
						);
					"step 1";
					if (result.control == "cancel2") {
						event.finish();
						return;
					}
					player.logSkill("dcyongjue");
					game.log(player, "选择了", "#y" + result.control);
					if (result.control == "选项一") {
						if (trigger.addCount !== false) {
							trigger.addCount = false;
							trigger.player.getStat().card.sha--;
						}
					} else {
						var cards = trigger.cards.filterInD();
						if (cards.length) player.gain(cards, "gain2");
					}
				},
			},
			//散装版甘夫人
			dcshushen: {
				audio: "shushen",
				trigger: {
					player: "recoverEnd",
				},
				direct: true,
				content: function () {
					"step 0";
					event.num = trigger.num;
					"step 1";
					player.chooseTarget(get.prompt("dcshushen"), "选择一名其他角色，然后令其回复1点体力或令你与其各摸一张牌", lib.filter.notMe).set("ai", target => {
						var player = _status.event.player;
						return get.recoverEffect(target, player, player) / 2 + get.attitude(player, target);
					});
					"step 2";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("dcshushen", target);
						event.num--;
						var choices = ["选项二"];
						var choiceList = ["令" + get.translation(target) + "回复1点体力", "你与" + get.translation(target) + "各摸一张牌"];
						if (target.isDamaged()) choices.unshift("选项一");
						else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + "</span>";
						player
							.chooseControl(choices)
							.set("choiceList", choiceList)
							.set("prompt", "淑慎：请选择一项")
							.set("ai", () => {
								return _status.event.choice;
							})
							.set(
								"choice",
								(function () {
									if (target.hp <= 2 || get.recoverEffect(target, player, player) > 20) return 0;
									return "选项二";
								})()
							);
					} else event.finish();
					"step 3";
					if (result.control == "选项一") {
						target.recover();
					} else {
						var drawers = [player, target].sortBySeat(_status.currentPhase);
						game.asyncDraw(drawers);
					}
					"step 4";
					if (event.num > 0) event.goto(1);
				},
			},
			dcshenzhi: {
				audio: "shenzhi",
				trigger: {
					player: "phaseZhunbeiBegin",
				},
				filter: function (event, player) {
					return player.countCards("h") > player.hp;
				},
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseToDiscard(get.prompt("dcshenzhi"), "弃置一张手牌，然后回复1点体力")
						.set("logSkill", "dcshenzhi")
						.set("ai", card => {
							var player = _status.event.player;
							if (!player.isDamaged()) return 0;
							return Math.min(3, 10 - 2 * player.hp) - get.value(card);
						});
					"step 1";
					if (result.bool) {
						player.recover();
					}
				},
			},
			//阮籍
			dczhaowen: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				filter: function (event, player) {
					return player.countCards("h");
				},
				check: function (event, player) {
					return player.hasCard(card => {
						return get.color(card) == "black" || (get.color(card) == "red" && player.hasValueTarget(card));
					});
				},
				content: function () {
					"step 0";
					player.showHandcards();
					"step 1";
					player.addTempSkill("dczhaowen_effect");
					game.broadcastAll(function (cards) {
						cards.forEach(card => card.addGaintag("dczhaowen_tag"));
					}, player.getCards("h"));
				},
				ai: {
					threaten: 3,
				},
				subSkill: {
					effect: {
						audio: "dczhaowen",
						enable: "chooseToUse",
						charlotte: true,
						onremove: function (player) {
							player.removeGaintag("dczhaowen_tag");
						},
						hiddenCard: function (player, name) {
							return (
								get.type(name) == "trick" &&
								!player.getStorage("dczhaowen_viewed").includes(name) &&
								player.countCards("h", card => {
									return get.color(card) == "black" && card.hasGaintag("dczhaowen_tag");
								}) > 0
							);
						},
						filter: function (event, player) {
							if (
								!player.hasCard(card => {
									return get.color(card) == "black" && card.hasGaintag("dczhaowen_tag");
								})
							)
								return false;
							var storage = player.getStorage("dczhaowen_viewed");
							for (var i of lib.inpile) {
								if (!storage.includes(i) && get.type(i) == "trick" && event.filterCard(get.autoViewAs({ name: i }, "unsure"), player, event)) return true;
							}
							return false;
						},
						chooseButton: {
							dialog: function (event, player) {
								var cards = player.getCards("h", card => {
									return get.color(card) == "black" && card.hasGaintag("dczhaowen_tag");
								});
								var storage = player.getStorage("dczhaowen_viewed");
								var list = [];
								for (var i of lib.inpile) {
									if (!storage.includes(i) && get.type(i) == "trick" && event.filterCard(get.autoViewAs({ name: i }, "unsure"), player, event)) {
										list.push(["锦囊", "", i]);
									}
								}
								return ui.create.dialog("昭文", [list, "vcard"], "hidden");
							},
							check: function (button) {
								var player = _status.event.player;
								return player.getUseValue({ name: button.link[2] }) + 1;
							},
							backup: function (links, player) {
								return {
									audio: "dczhaowen",
									popname: true,
									filterCard: function (card, player) {
										return get.color(card) == "black" && card.hasGaintag("dczhaowen_tag");
									},
									selectCard: 1,
									position: "h",
									viewAs: {
										name: links[0][2],
									},
									onuse: function (links, player) {
										player.addTempSkill("dczhaowen_viewed");
										player.markAuto("dczhaowen_viewed", [links.card.name]);
									},
								};
							},
							prompt: function (links, player) {
								return "将一张展示过的黑色手牌当做" + get.translation(links[0][2]) + "使用";
							},
						},
						group: "dczhaowen_draw",
						mod: {
							aiOrder: function (player, card, num) {
								var cards = [];
								if (card.cards) cards.addArray(cards);
								if (get.itemtype(card) == "card") cards.push(card);
								for (var cardx of cards) {
									if (get.color(cardx) != "red") continue;
									if (cardx.hasGaintag("dczhaowen_tag")) return num + 0.2;
								}
							},
						},
						ai: {
							order: 12,
							result: {
								player: 1,
							},
						},
					},
					draw: {
						audio: "dczhaowen",
						forced: true,
						charlotte: true,
						trigger: { player: "useCard" },
						filter: function (event, player) {
							var cards = event.cards.filter(card => get.color(card, player) == "red");
							return player.hasHistory("lose", evt => {
								if (event != evt.getParent()) return false;
								for (var i in evt.gaintag_map) {
									if (evt.gaintag_map[i].includes("dczhaowen_tag")) {
										if (cards.some(card => card.cardid == i)) return true;
									}
								}
							});
						},
						content: function () {
							var num = 0;
							var cards = trigger.cards.filter(card => get.color(card, player) == "red");
							player.getHistory("lose", evt => {
								if (trigger != evt.getParent()) return false;
								for (var i in evt.gaintag_map) {
									if (evt.gaintag_map[i].includes("dczhaowen_tag")) {
										if (cards.some(card => card.cardid == i)) num++;
									}
								}
							});
							while (num--) player.draw();
						},
						ai: {
							effect: {
								player: (card, player, target) => {
									if (get.itemtype(card) === "card" && cardx.hasGaintag("dczhaowen_tag") && get.color(card, player) === "red") return [1, 1];
								},
							},
						},
					},
					viewed: {
						onremove: true,
						charlotte: true,
					},
					effect_backup: {
						audio: "dczhaowen",
					},
				},
			},
			dcjiudun: {
				audio: 2,
				trigger: { target: "useCardToTargeted" },
				filter: function (event, player) {
					if (event.player == player || get.color(event.card) != "black") return false;
					if (player.hasSkill("jiu"))
						return player.countCards("h", card => {
							return _status.connectMode || lib.filter.cardDiscardable(card, player, "dcjiudun");
						});
					return true;
				},
				direct: true,
				content: function () {
					"step 0";
					if (player.hasSkill("jiu")) {
						player
							.chooseToDiscard(get.prompt("dcjiudun"), '<div class="text center">弃置一张手牌，令' + get.translation(trigger.card) + "对你无效</div>")
							.set("logSkill", "dcjiudun")
							.set("ai", card => {
								if (_status.event.goon) return 4.5 + Math.max(0, 3 - player.hp) - get.value(card);
								return 0;
							})
							.set(
								"goon",
								(function () {
									if (get.effect(player, trigger.card, trigger.player, player) < -4 * Math.max(0, 5 - Math.sqrt(player.countCards("h")))) return true;
									return false;
								})()
							);
						event.goto(2);
					} else {
						player.chooseBool(get.prompt("dcjiudun"), "摸一张牌，然后视为使用一张【酒】").set("ai", () => 1);
					}
					"step 1";
					if (result.bool) {
						player.logSkill("dcjiudun");
						player.draw();
						player.chooseUseTarget("jiu", true);
					}
					event.finish();
					"step 2";
					if (result.bool) {
						trigger.excluded.add(player);
						game.log(trigger.card, "对", player, "无效");
					}
				},
				ai: {
					jiuSustain: true,
					skillTagFilter: function (player, tag, name) {
						if (name != "phase") return false;
					},
					effect: {
						target: (card, player, target) => {
							if (player === target || typeof card !== "object" || get.color(card) !== "black") return;
							if (target.hasSkill("jiu")) {
								if (
									card.name !== "huogong" &&
									get.tag(card, "damage") &&
									get.attitude(player, target) <= 0 &&
									target.hasCard(i => {
										return _status.connectMode || lib.filter.cardDiscardable(i, player, "dcjiudun");
									}, "h")
								)
									return [0, -1];
							} else return [1, 1.2];
						},
					},
				},
			},
			//武诸葛
			dcjincui: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				filter: function (event, player) {
					return true;
				},
				forced: true,
				group: "dcjincui_advent",
				content: function () {
					"step 0";
					var num = 0;
					for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
						var card = ui.cardPile.childNodes[i];
						if (get.number(card) == 7) {
							num++;
							if (num >= player.maxHp) break;
						}
					}
					if (num < 1) num = 1;
					if (num > player.hp) player.recover(num - player.hp);
					else if (num < player.hp) player.loseHp(player.hp - num);
					"step 1";
					var num = player.hp;
					var cards = get.cards(num);
					game.cardsGotoOrdering(cards);
					var next = player.chooseToMove();
					next.set("list", [["牌堆顶", cards], ["牌堆底"]]);
					next.set("prompt", "尽瘁：点击将牌移动到牌堆顶或牌堆底");
					next.processAI = function (list) {
						var cards = list[0][1],
							player = _status.event.player;
						var target = _status.event.getTrigger().name == "phaseZhunbei" ? player : player.next;
						var att = get.sgn(get.attitude(player, target));
						var top = [];
						var judges = target.getCards("j");
						var stopped = false;
						if (player != target || !target.hasWuxie()) {
							for (var i = 0; i < judges.length; i++) {
								var judge = get.judge(judges[i]);
								cards.sort(function (a, b) {
									return (judge(b) - judge(a)) * att;
								});
								if (judge(cards[0]) * att < 0) {
									stopped = true;
									break;
								} else {
									top.unshift(cards.shift());
								}
							}
						}
						var bottom;
						if (!stopped) {
							cards.sort(function (a, b) {
								return (get.value(b, player) - get.value(a, player)) * att;
							});
							while (cards.length) {
								if (get.value(cards[0], player) <= 5 == att > 0) break;
								top.unshift(cards.shift());
							}
						}
						bottom = cards;
						return [top, bottom];
					};
					"step 2";
					var top = result.moved[0];
					var bottom = result.moved[1];
					top.reverse();
					for (var i = 0; i < top.length; i++) {
						ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
					}
					for (i = 0; i < bottom.length; i++) {
						ui.cardPile.appendChild(bottom[i]);
					}
					if (event.triggername == "phaseZhunbeiBegin" && top.length == 0) {
						player.addTempSkill("reguanxing_on");
					}
					player.popup(get.cnNumber(top.length) + "上" + get.cnNumber(bottom.length) + "下");
					game.log(player, "将" + get.cnNumber(top.length) + "张牌置于牌堆顶");
					game.updateRoundNumber();
					game.delayx();
				},
				ai: {
					guanxing: true,
					effect: {
						target: function (card, player, target) {
							if (!get.tag(card, "damage")) return;
							var num = 0,
								bool = false;
							for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
								var card = ui.cardPile.childNodes[i];
								if (get.number(card) == 7) {
									num++;
									if (num >= target.hp) {
										bool = true;
										break;
									}
								}
							}
							if (bool) return 0.2;
						},
					},
					threaten: 0.6,
				},
				subSkill: {
					advent: {
						audio: "dcjincui",
						trigger: { global: "phaseBefore", player: "enterGame" },
						forced: true,
						filter: function (event, player) {
							return (event.name != "phase" || game.phaseNumber == 0) && player.countCards("h") < 7;
						},
						content: function () {
							player.drawTo(7);
						},
					},
				},
			},
			dcqingshi: {
				audio: 2,
				trigger: { player: "useCard" },
				filter: function (event, player) {
					if (!player.isPhaseUsing() || player.hasSkill("dcqingshi_blocker")) return false;
					if (player.getStorage("dcqingshi_clear").includes(event.card.name)) return false;
					if (
						player.hasCard(card => {
							return get.name(card) == event.card.name;
						})
					)
						return true;
					return false;
				},
				direct: true,
				content: function () {
					"step 0";
					var choices = [];
					var choiceList = ["令" + get.translation(trigger.card) + "对其中一个目标角色造成的伤害+1", "令任意名其他角色各摸一张牌", "摸三张牌，然后〖情势〗于本回合失效"];
					if (trigger.targets && trigger.targets.length) choices.push("选项一");
					else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + "(无目标角色)</span>";
					if (game.countPlayer(i => i != player)) choices.push("选项二");
					else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
					if (player.hp > 0) choices.push("选项三");
					else choiceList[2] = '<span style="opacity:0.5">' + choiceList[1] + "(体力值为0)</span>";
					player
						.chooseControl(choices, "cancel2")
						.set("choiceList", choiceList)
						.set("prompt", get.prompt("dcqingshi"))
						.set("ai", () => {
							return _status.event.choice;
						})
						.set(
							"choice",
							(() => {
								var choicesx = choices.slice();
								var cards = player.getCards("hs");
								var bool1 =
										get.tag(trigger.card, "damage") &&
										choicesx.includes("选项一") &&
										trigger.targets.some(current => {
											return get.attitude(player, current) < 0;
										}),
									bool2 = choicesx.includes("选项二");
								if (bool2)
									bool2 = game.countPlayer(function (current) {
										return player != current && get.attitude(player, current) > 0;
									});
								else bool2 = 0;
								if (bool1 || bool2) {
									for (var i = 0; i < cards.length; i++) {
										var name = get.name(cards[i]);
										if (player.getStorage("dcqingshi_clear").includes(name)) continue;
										for (var j = i + 1; j < cards.length; j++) {
											if (name === get.name(cards[j]) && get.position(cards[i]) + get.position(cards[j]) !== "ss" && player.hasValueTarget(cards[i])) {
												choicesx.remove("选项三");
												break;
											}
										}
									}
								}
								if (bool2 > 2) return "选项二";
								if (choicesx.includes("选项三")) return "选项三";
								if (bool2 === 2) return "选项二";
								if (bool1) return "选项一";
								if (bool2) return "选项二";
								return "cancel2";
							})()
						);
					"step 1";
					if (result.control != "cancel2") {
						player.logSkill("dcqingshi");
						game.log(player, "选择了", "#y" + result.control);
						var index = ["选项一", "选项二", "选项三"].indexOf(result.control) + 1;
						player.addTempSkill("dcqingshi_clear");
						player.markAuto("dcqingshi_clear", [trigger.card.name]);
						var next = game.createEvent("dcqingshi_after");
						next.player = player;
						next.card = trigger.card;
						next.setContent(lib.skill.dcqingshi["content" + index]);
					}
				},
				content1: function () {
					"step 0";
					player
						.chooseTarget("令" + get.translation(card) + "对其中一个目标造成的伤害+1", true, (card, player, target) => {
							return _status.event.targets.includes(target);
						})
						.set("ai", target => {
							return 2 - get.attitude(_status.event.player, target);
						})
						.set("targets", event.getParent().getTrigger().targets);
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target);
						player.addTempSkill("dcqingshi_ex");
						if (!player.storage.dcqingshi_ex) player.storage.dcqingshi_ex = [];
						player.storage.dcqingshi_ex.push([target, card]);
					}
				},
				content2: function () {
					"step 0";
					player.chooseTarget("令任意名其他角色各摸一张牌", [1, Infinity], true, lib.filter.notMe).set("ai", target => {
						return get.attitude(_status.event.player, target);
					});
					"step 1";
					if (result.bool) {
						var targets = result.targets;
						targets.sortBySeat();
						player.line(targets);
						game.asyncDraw(targets);
						game.delayex();
					}
				},
				content3: function () {
					"step 0";
					player.draw(3);
					player.addTempSkill("dcqingshi_blocker");
				},
				subSkill: {
					ex: {
						trigger: { source: "damageBegin1" },
						filter: function (event, player) {
							return (
								player.storage.dcqingshi_ex &&
								player.storage.dcqingshi_ex.some(info => {
									return info[0] == event.player && info[1] == event.card;
								})
							);
						},
						forced: true,
						charlotte: true,
						popup: false,
						onremove: true,
						content: function () {
							trigger.num++;
							for (var i = 0; i < player.storage.dcqingshi_ex.length; i++) {
								if (player.storage.dcqingshi_ex[i][1] == trigger.card) player.storage.dcqingshi_ex.splice(i--, 1);
							}
						},
					},
					clear: {
						onremove: true,
						charlotte: true,
					},
					blocker: { charlotte: true },
				},
				ai: {
					threaten: 6,
				},
			},
			dczhizhe: {
				audio: 2,
				enable: "phaseUse",
				limited: true,
				filterCard: true,
				position: "h",
				discard: false,
				lose: false,
				delay: false,
				skillAnimation: true,
				animationColor: "metal",
				check: function (card) {
					if (get.type(card) != "basic" && get.type(card) != "trick") return 0;
					return get.value(card) - 7.5;
				},
				content: function () {
					"step 0";
					var card = cards[0];
					player.awakenSkill("dczhizhe");
					var cardx = game.createCard2(card.name, card.suit, card.number, card.nature);
					player.gain(cardx).gaintag.add("dczhizhe");
					player.addSkill("dczhizhe_effect");
				},
				ai: {
					order: 15,
					result: {
						player: 1,
					},
				},
				subSkill: {
					effect: {
						mod: {
							aiOrder: function (player, card, num) {
								if (num > 0 && get.itemtype(card) === "card" && card.hasGaintag("dczhizhe")) return num + 0.16;
							},
							aiValue: function (player, card, num) {
								if (num > 0 && get.itemtype(card) === "card" && card.hasGaintag("dczhizhe")) return 2 * num;
							},
							aiUseful: function (player, card, num) {
								if (num > 0 && !player._dczhizhe_mod && get.itemtype(card) === "card" && card.hasGaintag("dczhizhe")) {
									if (player.canIgnoreHandcard(card)) return Infinity;
									player._dczhizhe_mod = true;
									if (
										player.hp < 3 &&
										player.needsToDiscard(0, (i, player) => {
											return !player.canIgnoreHandcard(i) && get.useful(i) > 6;
										})
									)
										return num * 1.5;
									return num * 10;
								}
							},
						},
						trigger: { player: ["useCardAfter", "respondAfter"] },
						charlotte: true,
						forced: true,
						filter: function (event, player) {
							return player.hasHistory("lose", function (evt) {
								if (evt.getParent() != event) return false;
								for (var i in evt.gaintag_map) {
									if (evt.gaintag_map[i].includes("dczhizhe")) {
										if (
											event.cards.some(card => {
												return get.position(card, true) == "o" && card.cardid == i;
											})
										)
											return true;
									}
								}
								return false;
							});
						},
						content: function () {
							"step 0";
							var cards = [];
							player.getHistory("lose", function (evt) {
								if (evt.getParent() != trigger) return false;
								for (var i in evt.gaintag_map) {
									if (evt.gaintag_map[i].includes("dczhizhe")) {
										var cardsx = trigger.cards.filter(card => {
											return get.position(card, true) == "o" && card.cardid == i;
										});
										if (cardsx.length) cards.addArray(cardsx);
									}
								}
							});
							if (cards.length) {
								player.gain(cards, "gain2").gaintag.addArray(["dczhizhe", "dczhizhe_clear"]);
								player.addTempSkill("dczhizhe_clear");
							}
						},
					},
					clear: {
						charlotte: true,
						onremove: function (player) {
							player.removeGaintag("dczhizhe_clear");
						},
						mod: {
							cardEnabled2: function (card, player) {
								var cards = [];
								if (card.cards) cards.addArray(cards);
								if (get.itemtype(card) == "card") cards.push(card);
								for (var cardx of cards) {
									if (cardx.hasGaintag("dczhizhe_clear")) return false;
								}
							},
							cardRespondable: function (card, player) {
								var cards = [];
								if (card.cards) cards.addArray(cards);
								if (get.itemtype(card) == "card") cards.push(card);
								for (var cardx of cards) {
									if (cardx.hasGaintag("dczhizhe_clear")) return false;
								}
							},
							cardSavable: function (card, player) {
								var cards = [];
								if (card.cards) cards.addArray(cards);
								if (get.itemtype(card) == "card") cards.push(card);
								for (var cardx of cards) {
									if (cardx.hasGaintag("dczhizhe_clear")) return false;
								}
							},
						},
					},
				},
			},
			//段巧笑
			dccaizhuang: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.hasCard(function (card) {
						return lib.filter.cardDiscardable(card, player, "dccaizhuang");
					}, "he");
				},
				complexCard: true,
				selectCard: [1, Infinity],
				position: "he",
				filterCard: true,
				check: function (card) {
					let cache = lib.skill.dccaizhuang.tempCache();
					if (!cache || cache.no) return 0;
					let player = _status.event.player,
						suit = get.suit(card);
					if (
						ui.selected.cards.filter(i => {
							return get.suit(i) === suit;
						}).length < (cache[suit] || 0)
					) {
						if (get.position(card) === "h") return 15 - get.value(card);
						return 9 - get.value(card);
					}
					return 0;
				},
				tempCache() {
					let cache = _status.event.getTempCache("dccaizhuang", "dsuits");
					if (cache) return cache;
					cache = { no: true };
					_status.event.putTempCache("dccaizhuang", "dsuits", cache);
					let player = _status.event.player,
						suits = {};
					lib.suit.forEach(i => {
						suits[i] = 0;
					});
					player.getCards("h", i => {
						let suit = get.suit(i);
						if (lib.suit.includes(suit)) suits[suit]++;
					});
					let sortedSuits = Object.fromEntries(Object.entries(suits).sort((a, b) => b[1] - a[1]));
					let dis = 0,
						idx = 0,
						dsuits = 0,
						leave = 0;
					for (let i in sortedSuits) {
						idx++;
						if (!sortedSuits[i]) continue;
						let num = 1;
						if (idx > 2 || sortedSuits[i] < 3) num = sortedSuits[i];
						cache[i] = num;
						dis += num;
						suits[i] -= num;
						dsuits++;
					}
					for (let i in suits) {
						if (suits[i]) leave++;
					}
					player.getCards("e", i => {
						let suit = get.suit(i);
						if (!cache[suit]) {
							dsuits++;
							cache[suit] = 1;
							dis++;
						}
					});
					let draw = 0,
						e = [0, 1, 4 / 3, 2, 4];
					if (dsuits <= leave) return false;
					do {
						draw += e[dsuits--];
					} while (dsuits > leave);
					if (draw > dis) {
						delete cache.no;
						_status.event.putTempCache("dccaizhuang", "dsuits", cache);
						return cache;
					}
					return false;
				},
				content: function () {
					"step 0";
					var suits = [];
					cards.forEach(i => {
						if (suits.length >= 4) return;
						let suit = get.suit(i, player);
						if (lib.suit.includes(suit)) suits.add(suit);
					});
					event.num = suits.length;
					"step 1";
					var suits = [];
					player.countCards("h", card => {
						if (suits.length >= 4) return;
						var suit = get.suit(card);
						if (lib.suit.includes(suit)) suits.add(suit);
					});
					if (suits.length >= event.num) event.finish();
					"step 2";
					player.draw();
					event.goto(1);
				},
				ai: {
					order: 2,
					result: { player: 1 },
				},
			},
			dchuayi: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				frequent: true,
				content: function () {
					"step 0";
					player.judge(() => 1).judge2 = result => result.bool;
					"step 1";
					var color = result.color;
					if (color == "red" || color == "black") player.addTempSkill("dchuayi_" + color, { player: "phaseBegin" });
				},
				subSkill: {
					red: {
						trigger: { global: "phaseEnd" },
						charlotte: true,
						forced: true,
						content: function () {
							player.draw();
						},
						mark: true,
						intro: {
							name: "华衣·红",
							content: "一名角色的回合结束时，你摸一张牌",
						},
					},
					black: {
						trigger: { player: "damageEnd" },
						charlotte: true,
						forced: true,
						content: function () {
							player.draw(2);
						},
						mark: true,
						intro: {
							name: "华衣·黑",
							content: "当你受到伤害后，摸两张牌",
						},
						ai: {
							maixie: true,
							maixie_hp: true,
							effect: {
								target: function (card, player, target) {
									if (get.tag(card, "damage")) {
										if (player.hasSkillTag("jueqing", false, target)) return [1, -2];
										if (!target.hasFriend()) return;
										var num = 1;
										if (get.attitude(player, target) > 0) {
											if (player.needsToDiscard()) num = 0.5;
											else num = 0.3;
										}
										if (target.hp >= 4) return [1, num * 2];
										if (target.hp == 3) return [1, num * 1.5];
										if (target.hp == 2) return [1, num * 0.5];
									}
								},
							},
						},
					},
				},
			},
			//张瑾云
			dchuizhi: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				direct: true,
				content: function () {
					"step 0";
					player
						.chooseToDiscard(get.prompt("dchuizhi"), "你可以选择弃置任意张手牌并点击“确定”，将手牌摸至与全场手牌数最多的角色数相同。", [0, Infinity])
						.set("logSkill", "dchuizhi")
						.set("ai", card => {
							if (_status.event.isMax) {
								if (ui.selected.cards.length) return -get.value(card);
								return 0;
							}
							return 6 - get.value(card);
						})
						.set("isMax", player.isMaxHandcard());
					"step 1";
					if (result.bool) {
						var num = 0,
							targets = game.filterPlayer();
						for (var current of targets) {
							if (current.isMaxHandcard()) {
								num = current.countCards("h");
								break;
							}
						}
						num = Math.max(1, Math.min(5, num - player.countCards("h")));
						player.draw(num);
					}
				},
			},
			dcjijiao: {
				audio: 2,
				enable: "phaseUse",
				limited: true,
				skillAnimation: true,
				animationColor: "orange",
				init: function (player) {
					player.addSkill("dcjijiao_machi");
				},
				onremove: function (player) {
					player.removeSkill("dcjijiao_machi");
				},
				onChooseToUse: function (event) {
					if (event.dcjijiao == undefined && !game.online) {
						var bool = lib.skill.dcjijiao.getCards(event.player, true);
						event.set("dcjijiao", bool);
					}
				},
				filter: function (event, player) {
					return event.dcjijiao;
				},
				filterTarget: true,
				getCards: function (player, bool) {
					const cards = Array.from(ui.discardPile.childNodes);
					const gains = game
						.getAllGlobalHistory("everything", evt => {
							if (evt.name == "lose" || evt.name == "loseAsync") {
								if(!evt.getl) return false;
								if (evt.type != "discard" || evt.getlx === false) return false;
								// 临时修改（by 棘手怀念摧毁）
								// return evt.getl(player)?.cards2?.length > 0;
								var evtx = evt.getl(player);
								return evtx && evtx.cards2 && evtx.cards2.length > 0;
							}
							// 临时修改（by 棘手怀念摧毁）
							return evt.name == "useCard" && evt.player == player && evt.cards && evt.cards.length > 0;
							// return evt.name == "useCard" && evt.player == player && evt.cards?.length > 0;
						})
						.reduce((list, evt) => {
							if (evt.name == "useCard") return list.addArray(evt.cards);
							// 临时修改（by 棘手怀念摧毁）
							// return list.addArray(evt.getl(player)?.cards2);
							return list.addArray(evt.getl(player) && evt.getl(player).cards2);
						}, [])
						.filter(i => cards.includes(i));
					if (bool) return gains.some(card => get.type(card) == "trick");
					return gains.filter(card => get.type(card) == "trick");
				},
				content: function () {
					player.awakenSkill("dcjijiao");
					var cards = lib.skill.dcjijiao.getCards(player);
					if (cards.length) {
						target.gain(cards, "gain2").gaintag.add("dcjijiao");
						target.addSkill("dcjijiao_nowuxie");
					}
				},
				ai: {
					order: 1,
					result: {
						target: function (player, target) {
							if (ui.cardPile.childNodes.length > game.players.length * 5 && !player.hasSkill("dcjijiao_risutoa") && !game.hasPlayer(current => current.hp <= 1) && game.countPlayer(current => current.hp === 2 && current.countCards("hes") < 3) <= 1) return 0;
							return 5;
						},
					},
				},
				subSkill: {
					machi: {
						charlotte: true,
						forced: true,
						popup: false,
						trigger: {
							global: ["washCard", "die"],
						},
						filter: function (event, player) {
							return player.hasSkill("dcjijiao", null, false, false);
						},
						content: function () {
							player.addSkill("dcjijiao_risutoa");
						},
					},
					risutoa: {
						charlotte: true,
						forced: true,
						popup: false,
						trigger: { global: "phaseAfter" },
						content: function () {
							if (player.awakenedSkills.includes("dcjijiao")) {
								player.restoreSkill("dcjijiao");
								game.log(player, "重置了", "#g【继椒】");
								//player.removeSkill('dcjijiao_machi');
							}
							player.removeSkill("dcjijiao_risutoa");
						},
					},
					nowuxie: {
						trigger: { player: "useCard1" },
						forced: true,
						charlotte: true,
						firstDo: true,
						popup: false,
						filter: function (event, player) {
							if (get.type(event.card) != "trick") return false;
							return player.hasHistory("lose", function (evt) {
								if (evt.getParent() != event) return false;
								for (var i in evt.gaintag_map) {
									if (evt.gaintag_map[i].includes("dcjijiao")) return true;
								}
								return false;
							});
						},
						content: function () {
							trigger.nowuxie = true;
						},
						onremove: function (player) {
							player.removeGaintag("dcjijiao");
						},
					},
				},
			},
			//桓范
			dcjianzheng: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return target.countCards("h") && target != player;
				},
				content: function () {
					"step 0";
					var forced = target.hasCard(i => player.hasUseTarget(i), "h");
					player
						.choosePlayerCard(target, "h", "visible", forced, "获得并使用其中一张牌")
						.set("filterButton", button => {
							return _status.event.player.hasUseTarget(button.link);
						})
						.set("ai", button => {
							return _status.event.player.getUseValue(button.link);
						});
					"step 1";
					if (result.bool) {
						var card = result.links[0];
						event.card = card;
						player.gain(card, "giveAuto");
					} else event.goto(3);
					"step 2";
					if (get.position(card) == "h" && get.owner(card) == player && player.hasUseTarget(card)) {
						if (get.name(card, player) == "sha") player.chooseUseTarget(card, true, false);
						else player.chooseUseTarget(card, true);
					}
					"step 3";
					if (
						player.hasHistory("useCard", evt => {
							return evt.getParent(2).name == "dcjianzheng" && evt.targets.includes(target);
						})
					) {
						player.link(true);
						target.link(true);
					} else event.finish();
					"step 4";
					target.viewHandcards(player);
				},
				ai: {
					order: 10,
					expose: 0.2,
					result: {
						target: function (player, target) {
							return -Math.sqrt(target.countCards("h"));
						},
					},
				},
			},
			//fumo!
			dcfumou: {
				audio: 2,
				trigger: { player: "damageEnd" },
				direct: true,
				filter: function (event, player) {
					return player.getDamagedHp() > 0;
				},
				content: function () {
					"step 0";
					event.num = trigger.num;
					"step 1";
					player.chooseTarget(get.prompt2("dcfumou"), [1, player.getDamagedHp()]).set("ai", target => {
						var att = get.attitude(_status.event.player, target);
						if (target.countCards("h") >= 3 && (!target.isDamaged() || !target.countCards("e"))) {
							if (!target.canMoveCard()) return -att;
							else if (!target.canMoveCard(true)) return -att / 5;
						}
						return att;
					});
					"step 2";
					if (result.bool) {
						var targets = result.targets;
						targets.sortBySeat(player);
						event.targets = targets;
						player.logSkill("dcfumou", targets);
						event.num--;
					} else event.finish();
					"step 3";
					var target = targets.shift();
					event.target = target;
					var choices = [];
					var choiceList = ["移动场上的一张牌", "弃置所有手牌并摸两张牌", "弃置装备区里的所有牌并回复1点体力"];
					if (target.canMoveCard()) choices.push("选项一");
					else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + "</span>";
					if (
						target.countCards("h") &&
						!target.hasCard(card => {
							return !lib.filter.cardDiscardable(card, target, "dcfumou");
						}, "h")
					)
						choices.push("选项二");
					else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "</span>";
					if (
						target.countCards("e") &&
						!target.hasCard(card => {
							return !lib.filter.cardDiscardable(card, target, "dcfumou");
						}, "h")
					)
						choices.push("选项三");
					else choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + "</span>";
					if (choices.length) {
						target
							.chooseControl(choices)
							.set("prompt", "腹谋：请选择一项")
							.set("choiceList", choiceList)
							.set("ai", () => {
								return _status.event.choice;
							})
							.set(
								"choice",
								(function () {
									if (choices.length == 1) return choices[0];
									var func = (choice, target) => {
										switch (choice) {
											case "选项一":
												if (target.canMoveCard(true)) return 5;
												return 0;
											case "选项二":
												return 4 - target.getCards("h").reduce((acc, card) => {
													return acc + get.value(card);
												}, 0) / 3;
											case "选项三":
												var e2 = target.getEquip(2);
												if (target.isHealthy()) return -1.8 * target.countCards("e") - (e2 ? 1 : 0);
												if (!e2 && target.hp + target.countCards("hs", ["tao", "jiu"]) < 2) return 6;
												let rec = get.recoverEffect(target, target, target) / 4 - target.getCards("e").reduce((acc, card) => {
													return acc + get.value(card);
												}, 0) / 3;
												if (!e2) rec += 2;
												return rec;
										}
									};
									var choicesx = choices.map(i => [i, func(i, target)]).sort((a, b) => b[1] - a[1]);
									return choicesx[0][0];
								})()
							);
					} else event.goto(5);
					"step 4";
					game.log(target, "选择了", "#y" + result.control);
					if (result.control == "选项一") {
						target.moveCard(true);
					} else if (result.control == "选项二") {
						target.chooseToDiscard(true, "h", target.countCards("h"));
						target.draw(2);
					} else {
						target.chooseToDiscard(true, "e", target.countCards("e"));
						target.recover();
					}
					"step 5";
					if (event.targets.length) event.goto(3);
					// else if(event.num) event.goto(1);
				},
				ai: {
					maixie: true,
					maixie_hp: true,
					effect: {
						target: function (card, player, target) {
							if (get.tag(card, "damage")) {
								if (player.hasSkillTag("jueqing", false, target)) return [1, -2];
								if (!target.hasFriend()) return;
								var num = 1;
								if (get.attitude(player, target) > 0) {
									if (player.needsToDiscard()) num = 0.7;
									else num = 0.5;
								}
								if (target.hp == 2 && target.hasFriend()) return [1, num * 1.5];
								if (target.hp >= 2) return [1, num];
							}
						},
					},
				},
			},
			//陈泰
			dcctjiuxian: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterCard: lib.filter.cardRecastable,
				selectCard: function () {
					return Math.ceil(_status.event.player.countCards("h") / 2);
				},
				check: function (card) {
					return 6.5 - get.value(card);
				},
				discard: false,
				lose: false,
				delay: false,
				content: function () {
					"step 0";
					player.recast(cards);
					"step 1";
					player.addTempSkill("dcctjiuxian_help");
					player.chooseUseTarget(
						{
							name: "juedou",
							isCard: true,
							storage: { dcctjiuxian: true },
						},
						true
					);
				},
				ai: {
					order: function () {
						return 0.9 * get.order({ name: "juedou" });
					},
					tag: {
						respond: 2,
						respondSha: 2,
						damage: 1,
					},
					result: {
						player: function (player) {
							let target = null,
								maxval = 0;
							for (let i of game.players) {
								let jdeff = get.effect(
									i,
									{
										name: "juedou",
										isCard: true,
										cards: ui.selected.cards,
										storage: { dcctjiuxian: true },
									},
									player,
									player
								);
								if (
									i === player ||
									!player.canUse(
										{
											name: "juedou",
											isCard: true,
											cards: ui.selected.cards,
											storage: { dcctjiuxian: true },
										},
										i
									) ||
									jdeff < 0
								)
									continue;
								let receff = 0;
								game.filterPlayer(function (current) {
									if (player != current && i.inRange(current) && current.isDamaged()) receff = Math.max(receff, get.recoverEffect(current, i, i));
								});
								if (jdeff + receff / 5 > maxval) {
									target = i;
									maxval = jdeff + receff / 5;
								}
							}
							if (target) return maxval / 80;
							return 0;
						},
					},
				},
				subSkill: {
					help: {
						trigger: { global: "damageSource" },
						filter: function (event, player) {
							return (
								event.card &&
								event.card.storage &&
								event.card.storage.dcctjiuxian &&
								event.player.isIn() &&
								event.getParent(2).targets.includes(event.player) &&
								game.hasPlayer(current => {
									return current != player && event.player.inRange(current) && current.isDamaged();
								})
							);
						},
						direct: true,
						forced: true,
						charlotte: true,
						content: function () {
							"step 0";
							player
								.chooseTarget("救陷：是否令其攻击范围内的一名其他角色回复1点体力？", (card, player, target) => {
									if (_status.event.player == target) return false;
									return target.isDamaged() && _status.event.targetx.inRange(target);
								})
								.set("targetx", trigger.player)
								.set("ai", target => get.recoverEffect(target, _status.event.player, _status.event.player));
							"step 1";
							if (result.bool) {
								var target = result.targets[0];
								player.logSkill("dcctjiuxian_help", target);
								target.recover(player);
							}
						},
					},
				},
			},
			dcchenyong: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				frequent: true,
				filter: function (event, player) {
					return player.getHistory("useCard").length;
				},
				content: function () {
					var types = [];
					var history = player.getHistory("useCard");
					for (var evt of history) {
						types.add(get.type2(evt.card));
					}
					var num = types.length;
					player.draw(num);
				},
				ai: { threaten: 2.2 },
			},
			//孙瑜
			dcquanshou: {
				audio: 2,
				trigger: { global: "phaseBegin" },
				filter: function (event, player) {
					return event.player.countCards("h") <= event.player.maxHp;
				},
				logTarget: "player",
				check: function (event, player) {
					if (get.attitude(player, event.player) > 0) return true;
					const draw = event.player.maxHp - event.player.countCards("h");
					return draw <= 2 && event.player.getHp(true) - draw >= 1;
				},
				content: function () {
					"step 0";
					var draw = Math.min(5, trigger.player.maxHp - trigger.player.countCards("h"));
					trigger.player
						.chooseControl()
						.set("choiceList", [(draw > 0 ? "摸" + get.cnNumber(draw) + "张牌，然后" : "令") + "你本回合使用【杀】的次数上限-1", "当你本回合使用牌被抵消后，" + get.translation(player) + "摸一张牌"])
						.set("ai", () => _status.event.choice)
						.set(
							"choice",
							(function () {
								var draw = Math.min(5, Math.max(0, trigger.player.maxHp - trigger.player.countCards("h")));
								if (get.attitude(trigger.player, player) > 0) {
									if (draw >= 3 || trigger.player.getCardUsable("sha") > 1) return "选项一";
									if (
										!draw ||
										(draw <= 1 &&
											trigger.player.countCards("hs", card => {
												return get.name(card) == "sha" && trigger.player.hasValueTarget(card);
											}))
									)
										return "选项二";
									return "选项一";
								} else {
									if (draw >= 4) return "选项一";
									if (
										draw < 2 &&
										trigger.player.countCards("hs", card => {
											return trigger.player.hasValueTarget(card);
										})
									)
										return "选项二";
									return "选项一";
								}
							})()
						)
						.set("prompt", "劝守：请选择一项");
					"step 1";
					game.log(trigger.player, "选择了", "#y" + result.control);
					if (result.control == "选项一") {
						var draw = Math.min(5, trigger.player.maxHp - trigger.player.countCards("h"));
						if (draw > 0) trigger.player.draw(draw);
						trigger.player.addTempSkill("dcquanshou_sha");
						trigger.player.addMark("dcquanshou_sha", 1, false);
					} else {
						trigger.player.addTempSkill("dcquanshou_respond");
						trigger.player.markAuto("dcquanshou_respond", [player]);
					}
				},
				ai: {
					expose: 0.1,
				},
				subSkill: {
					sha: {
						charlotte: true,
						onremove: true,
						marktext: "守",
						intro: { content: "使用【杀】的次数上限-#" },
						mod: {
							cardUsable: function (card, player, num) {
								if (card.name == "sha") return num - player.countMark("dcquanshou_sha");
							},
						},
					},
					respond: {
						trigger: { player: ["shaMiss", "eventNeutralized"] },
						filter: function (event, player) {
							if (event.type != "card" && event.name != "_wuxie") return false;
							return player.getStorage("dcquanshou_respond").some(i => i.isIn());
						},
						forced: true,
						popup: false,
						charlotte: true,
						onremove: true,
						marktext: '<span style="text-decoration: line-through;">守</span>',
						intro: { content: "本回合使用的牌被抵消后，$摸一张牌" },
						content: function () {
							var targets = player.getStorage("dcquanshou_respond");
							targets.sortBySeat();
							for (var target of targets) {
								if (target.isIn()) {
									target.logSkill("dcquanshou_respond", player);
									target.draw();
								}
							}
						},
					},
				},
			},
			dcshexue: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				filter: function (event, player) {
					var cards = lib.skill.dcshexue.getLast();
					return cards.some(card => player.hasUseTarget(card, false));
				},
				getLast: function () {
					var cards = [];
					for (var current of game.filterPlayer()) {
						var history = current.actionHistory;
						if (history.length < 2) continue;
						if (history[history.length - 2].isMe) {
							var evts = history[history.length - 2].useCard;
							for (var i = evts.length - 1; i >= 0; i--) {
								var evt = evts[i];
								if (get.type(evt.card) != "basic" && get.type(evt.card) != "trick") continue;
								var evtx = evt.getParent("phaseUse");
								if (evtx && evtx.player == current) cards.push({ name: evt.card.name, nature: evt.card.nature });
							}
						}
					}
					return cards;
				},
				direct: true,
				group: "dcshexue_end",
				content: function () {
					"step 0";
					var cards = lib.skill.dcshexue.getLast();
					cards = cards.filter(card => player.hasUseTarget(card, false));
					player.chooseButton(["设学：是否将一张牌当作其中一张牌使用？", [cards, "vcard"]]);
					"step 1";
					if (!result.bool) return;
					var card = result.links[0];
					game.broadcastAll(function (card) {
						lib.skill.dcshexue_backup.viewAs = card;
					}, card);
					var next = player.chooseToUse();
					next.set("openskilldialog", `###${get.prompt("dcshexue")}###将一张牌当做${get.translation(card.nature) || ""}【${get.translation(card.name)}】使用`);
					next.set("norestore", true);
					next.set("addCount", false);
					next.set("_backupevent", "dcshexue_backup");
					next.set("custom", {
						add: {},
						replace: { window: function () {} },
					});
					next.backup("dcshexue_backup");
				},
				subSkill: {
					backup: {
						audio: "dcshexue",
						filterCard: function (card) {
							return get.itemtype(card) == "card";
						},
						filterTarget: lib.filter.targetEnabled,
						position: "hes",
						selectCard: 1,
						check: card => 6 - get.value(card),
						popname: true,
					},
					end: {
						audio: "dcshexue",
						trigger: { player: "phaseUseEnd" },
						filter: function (event, player) {
							return player.getHistory("useCard", evt => {
								return evt.getParent("phaseUse") == event && (get.type(evt.card) == "basic" || get.type(evt.card) == "trick");
							}).length;
						},
						prompt2: function (event, player) {
							return "令下一回合的角色于其出牌阶段开始时选择是否将一张牌当做你本阶段使用过的一张基本牌或普通锦囊牌使用？";
						},
						check: function (event, player) {
							let evt = event.getParent("phase").getParent();
							let nextPlayer = player.getNext();
							if (evt && evt.next && evt.next.length) {
								nextPlayer = evt.next[0].player;
							}
							return get.attitude(player, nextPlayer) > 0;
						},
						content: function () {
							var history = player.getHistory("useCard", evt => {
								return evt.getParent("phaseUse") == trigger && (get.type(evt.card) == "basic" || get.type(evt.card) == "trick");
							});
							player.addSkill("dcshexue_studyclear");
							if (!player.storage.dcshexue_studyclear) player.storage.dcshexue_studyclear = [];
							history.forEach(evt => {
								var card = evt.card;
								card = { name: card.name, nature: card.nature };
								player.storage.dcshexue_studyclear.push(card);
							});
						},
					},
					study: {
						trigger: { player: "phaseUseBegin" },
						filter: function (event, player) {
							return player.getStorage("dcshexue_study").some(i => event.player.hasUseTarget(i, false));
						},
						onremove: true,
						charlotte: true,
						direct: true,
						async content(event, trigger, player) {
							let cards = player.getStorage("dcshexue_study");
							const result = await player.chooseButton(["设学：是否将一张牌当作其中一张牌使用？", [cards, "vcard"]])
								.set("ai", button => {
									return get.event().player.getUseValue(button.link, false);
								})
								.forResult();
							if (!result.bool) return;
							const card = result.links[0];
							if (!trigger.player.hasUseTarget(card, false)) return;
							game.broadcastAll(function (card) {
								lib.skill.dcshexue_backup.viewAs = card;
								lib.skill.dcshexue_backup.prompt = "设学：是否将一张牌当做" + get.translation(card) + "使用？";
							}, card);
							await trigger.player.chooseToUse()
								.set("openskilldialog", `###${get.prompt("dcshexue_study")}###
									将一张牌当做${get.translation(card.nature) || ""}【${get.translation(card.name)}】使用`)
								.set("norestore", true)
								.set("addCount", false)
								.set("_backupevent", "dcshexue_backup")
								.set("custom", {
									add: {},
									replace: { window: function () {} },
								})
								.backup("dcshexue_backup");
						},
					},
					studyclear: {
						trigger: { global: "phaseBegin" },
						charlotte: true,
						forceDie: true,
						silent: true,
						onremove: true,
						lastDo: true,
						content: function () {
							trigger.player.addTempSkill("dcshexue_study");
							if (!trigger.player.storage.dcshexue_study) trigger.player.storage.dcshexue_study = [];
							trigger.player.storage.dcshexue_study = trigger.player.storage.dcshexue_study.concat(player.getStorage("dcshexue_studyclear"));
							player.removeSkill("dcshexue_studyclear");
						},
					},
				},
			},
			//郤正
			dcdanyi: {
				audio: 2,
				trigger: { player: "useCardToPlayered" },
				filter: function (event, player) {
					if (!event.isFirstTarget) return false;
					if (!event.targets || !event.targets.length) return false;
					var evt = lib.skill.dcjianying.getLastUsed(player, event.getParent());
					if (!evt || !evt.targets || !evt.targets.length) return false;
					return event.targets.some(target => evt.targets.includes(target));
				},
				frequent: true,
				locked: false,
				content: function () {
					var evt = lib.skill.dcjianying.getLastUsed(player, trigger.getParent());
					player.draw(trigger.targets.filter(target => evt.targets.includes(target)).length);
				},
				mod: {
					aiOrder: function (player, card, num) {
						var evt = player.getLastUsed();
						if (
							evt &&
							evt.targets &&
							evt.targets.length &&
							game.hasPlayer(current => {
								return evt.targets.includes(current) && player.canUse(card, current) && get.effect(current, card, player, player) > 0;
							})
						)
							return num + 10;
					},
				},
				ai: {
					effect: {
						player: function (card, player, target) {
							var evt = player.getLastUsed();
							if (evt && evt.targets.includes(target)) return [1, 1];
						},
					},
				},
			},
			dcwencan: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					if (ui.selected.targets.length) {
						if (ui.selected.targets[0].hp == target.hp) return false;
					}
					return target != player;
				},
				selectTarget: [1, 2],
				complexTarget: true,
				multiline: true,
				content: function () {
					"step 0";
					target
						.chooseToDiscard(get.translation(player) + "对你发动了【文灿】", "是否弃置两张花色不同的牌？或者点击“取消”，令其本回合对你使用牌无距离和次数限制", "he", 2, (card, player) => {
							if (!ui.selected.cards.length) return true;
							var suit = get.suit(card, player);
							for (var i of ui.selected.cards) {
								if (get.suit(i, player) == suit) return false;
							}
							return true;
						})
						.set("complexCard", true)
						.set("ai", card => {
							if (_status.event.nofear) return 0;
							return 5 - get.value(card);
						})
						.set(
							"nofear",
							player.countCards("hs", card => {
								return get.tag(card, "damage") && player.canUse(card, target, false) && get.effect(target, card, player, target) <= 0;
							}) < target.hp
						);
					"step 1";
					if (!result.bool) {
						player.addTempSkill("dcwencan_paoxiao");
						player.markAuto("dcwencan_paoxiao", [target]);
					}
				},
				subSkill: {
					paoxiao: {
						charlotte: true,
						onremove: true,
						marktext: "灿",
						intro: { content: "对$使用牌无距离和次数限制" },
						mod: {
							cardUsableTarget: function (card, player, target) {
								if (player.getStorage("dcwencan_paoxiao").includes(target)) return true;
							},
							targetInRange: function (card, player, target) {
								if (player.getStorage("dcwencan_paoxiao").includes(target)) return true;
							},
						},
					},
				},
				ai: {
					order: 9,
					result: { target: -1 },
				},
			},
			//芮姬
			dcwangyuan: {
				audio: 2,
				trigger: {
					player: ["loseAfter", "logSkill"],
					global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
				},
				frequent: true,
				filter: function (event, player, name) {
					if (player == _status.currentPhase) return name == "logSkill" && event.skill == "dcliying" && player.getExpansions("dcwangyuan").length < game.countPlayer2();
					if (name == "logSkill") return false;
					if (player.getExpansions("dcwangyuan").length >= game.countPlayer2()) return false;
					if (event.name == "gain" && event.player == player) return false;
					var evt = event.getl(player);
					return evt && evt.cards2 && evt.cards2.length > 0;
				},
				content: function () {
					"step 0";
					var cards = player.getExpansions("dcwangyuan");
					var card = get.cardPile2(cardx => {
						var type = get.type2(cardx);
						return (type == "basic" || type == "trick") && !cards.some(cardxx => get.name(cardx, false) == get.name(cardxx, false));
					});
					if (card) player.addToExpansion(card, "gain2").gaintag.add("dcwangyuan");
				},
				ai: {
					combo: "dclingyin",
				},
				marktext: "妄",
				intro: {
					name: "妄(妄缘/铃音)",
					content: "expansion",
					markcount: "expansion",
				},
			},
			dclingyin: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				filter: function (event, player) {
					return player.getExpansions("dcwangyuan").length;
				},
				direct: true,
				content: function () {
					"step 0";
					var cards = player.getExpansions("dcwangyuan");
					player
						.chooseButton([get.prompt("dclingyin") + "（当前轮数：" + get.cnNumber(game.roundNumber, true) + "）", cards], [1, game.roundNumber])
						.set("ai", button => {
							var color = _status.event.color,
								player = _status.event.player;
							if (ui.selected.buttons.length > 0 && ui.selected.buttons.length == player.getExpansions("dcwangyuan").length - 1) return 0;
							if (color == 1) return get.value(button.link);
							if (color) return get.color(button.link) == color ? 1 : 0;
							return 0;
						})
						.set(
							"color",
							(function () {
								var cardsR = cards.filter(i => get.color(i) == "red");
								if (cardsR.length == cards.length || cardsR.length == 0 || cards.length <= game.roundNumber) return 1;
								if (cardsR.length <= game.roundNumber) return "red";
								if (cards.length - cardsR.length <= game.roundNumber) return "black";
								return 1;
							})()
						);
					"step 1";
					if (result.bool) {
						player.logSkill("dclingyin");
						var cards = result.links;
						player.gain(cards, "gain2");
						var cardsx = player.getExpansions("dcwangyuan").removeArray(cards);
						if (cardsx.length <= 1 || get.color(cardsx) != "none") {
							player.addTempSkill("dclingyin_effect");
							player.addMark("dclingyin_effect", 1, false);
							game.log(player, "获得了", "#g【铃音】", "的后续效果");
						}
					}
				},
				ai: {
					combo: "dcwangyuan",
					threaten: 3,
				},
				subSkill: {
					effect: {
						audio: "dclingyin",
						enable: "phaseUse",
						trigger: { source: "damageBegin1" },
						viewAs: { name: "juedou" },
						charlotte: true,
						forced: true,
						onremove: true,
						prompt: "将一张武器牌或防具牌当【决斗】使用",
						filterCard: function (card) {
							return get.subtype(card) == "equip1" || get.subtype(card) == "equip2";
						},
						position: "hes",
						filter: function (event, player) {
							if (event.name == "chooseToUse") return player.countCards("hes", { subtype: ["equip1", "equip2"] }) > 0;
							return event.player != player;
						},
						content: function () {
							trigger.num += player.countMark("dclingyin_effect");
						},
						ai: {
							damageBonus: true,
						},
					},
				},
			},
			dcliying: {
				audio: 2,
				usable: 1,
				trigger: {
					player: "gainAfter",
					global: "loseAsyncAfter",
				},
				filter: function (event, player) {
					var cards = event.getg(player).filter(i => get.owner(i) == player && get.position(i) == "h");
					if (!cards.length) return false;
					var evt = event.getParent("phaseDraw");
					if (evt && evt.name == "phaseDraw") return false;
					return true;
				},
				direct: true,
				content: function () {
					"step 0";
					var cards = trigger.getg(player).filter(i => get.owner(i) == player && get.position(i) == "h");
					player
						.chooseCardTarget({
							prompt: get.prompt("dcliying"),
							prompt2: "选择本次获得的任意张牌交给一名其他角色，然后摸一张牌",
							filterTarget: lib.filter.notMe,
							filterCard: card => _status.event.cards.includes(card),
							cards: cards,
							selectCard: [1, cards.length],
							ai1: function (card) {
								if (ui.selected.cards.length) return 0;
								return 3 / (Math.abs(get.value(card)) + 0.1);
							},
							ai2: function (target) {
								return get.value(ui.selected.cards, target) * get.attitude(_status.event.player, target);
							},
						})
						.set("cards", cards);
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("dcliying", target);
						player.give(result.cards, target);
						player.draw();
						//if(player!=_status.currentPhase) event.finish();
					} else {
						player.storage.counttrigger.dcliying--;
						event.finish();
					} /*
					'step 2'
					var cards=player.getExpansions('dcwangyuan');
					var card=get.cardPile2(cardx=>{
						var type=get.type2(cardx);
						return (type=='basic'||type=='trick')&&!cards.some(cardxx=>get.name(cardx,false)==get.name(cardxx,false));
					});
					if(card) player.addToExpansion(card,'gain2').gaintag.add('dcwangyuan');*/
				},
			},
			//谢灵毓
			dcyuandi: {
				audio: 2,
				init: () => {
					game.addGlobalSkill("dcyuandi_ai");
				},
				onremove: () => {
					if (!game.hasPlayer(i => i.hasSkill("dcyuandi"), true)) game.removeGlobalSkill("dcyuandi_ai");
				},
				trigger: { global: "useCard" },
				filter: function (event, player) {
					var evt = event.getParent("phaseUse");
					if (!evt || evt.player != event.player) return false;
					if (event.player == player || !event.targets || event.targets.length > 1 || event.targets[0] != event.player) return false;
					return (
						event.player
							.getHistory("useCard", evtx => {
								return evtx.getParent("phaseUse") == evt;
							})
							.indexOf(event) == 0
					);
				},
				direct: true,
				content: function () {
					"step 0";
					var target = trigger.player;
					var name = get.translation(target);
					var choices = ["选项二"];
					var choiceList = ["弃置" + name + "一张手牌", "你与" + name + "各摸一张牌"];
					if (target.countDiscardableCards(player, "h")) choices.unshift("选项一");
					else choiceList[0] = '<span style="opacity:0.5; ">' + choiceList[0] + "</span>";
					player
						.chooseControl(choices, "cancel2")
						.set("choiceList", choiceList)
						.set("ai", () => {
							return _status.event.choice;
						})
						.set("prompt", get.prompt("dcyuandi", trigger.player))
						.set(
							"choice",
							(function () {
								if (get.attitude(player, target) < 0) {
									if (choices.includes("选项一")) return "选项一";
									return "cancel2";
								}
								return "选项二";
							})()
						);
					"step 1";
					if (result.control != "cancel2") {
						var target = trigger.player;
						player.logSkill("dcyuandi", target);
						if (result.control == "选项一") {
							player.discardPlayerCard(target, "h", true);
							if (get.mode() !== "identity" || player.identity !== "nei") player.addExpose(0.15);
						} else game.asyncDraw([target, player]);
					}
				},
				subSkill: {
					ai: {
						mod: {
							aiOrder: function (player, card, num) {
								var info = get.info(card);
								if (!info || !info.toself) return;
								var evt = _status.event.getParent("phaseUse");
								if (!evt || evt.player != player) return;
								if (player.hasHistory("useCard", evtx => evtx.getParent("phaseUse") == evt)) return;
								if (
									game.hasPlayer(current => {
										return current.hasSkill("dcyuandi") && get.attitude(player, current) >= 0;
									})
								)
									return num + 10;
								return num / 3;
							},
						},
						trigger: { player: "dieAfter" },
						filter: () => {
							return !game.hasPlayer(i => i.hasSkill("dcyuandi"), true);
						},
						silent: true,
						forceDie: true,
						content: () => {
							game.removeGlobalSkill("dcyuandi_ai");
						},
					},
				},
			},
			dcxinyou: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.countCards("h") < player.maxHp || player.isDamaged();
				},
				content: function () {
					"step 0";
					player.recover(player.getDamagedHp(true));
					player.drawTo(player.maxHp);
					"step 1";
					var check = 0;
					if (
						player.hasHistory("gain", evt => {
							return evt.getParent(2) == event && evt.cards.length >= 3;
						})
					)
						check |= 1;
					if (
						game.getGlobalHistory("changeHp", evt => {
							return evt.getParent().name == "recover" && evt.getParent(2) == event;
						}).length
					)
						check |= 2;
					if (check > 0) {
						player.addTempSkill("dcxinyou_effect");
						player.storage.dcxinyou_effect = check;
					}
				},
				ai: {
					order: 1,
					result: { player: 1 },
				},
				subSkill: {
					effect: {
						audio: "dcxinyou",
						trigger: { player: "phaseJieshuBegin" },
						charlotte: true,
						forced: true,
						onremove: true,
						filter: function (event, player) {
							return player.storage.dcxinyou_effect;
						},
						content: function () {
							if ((player.storage.dcxinyou_effect & 1) > 0) player.loseHp();
							if ((player.storage.dcxinyou_effect & 2) > 0) player.chooseToDiscard("心幽：请弃置一张牌", 1, true, "he");
						},
					},
				},
			},
			//笮融
			dccansi: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				content: function () {
					"step 0";
					player.recover();
					if (!game.hasPlayer(current => current != player)) event.finish();
					else
						player.chooseTarget("残肆：选择一名其他角色", true, lib.filter.notMe).set("ai", target => {
							var player = _status.event.player;
							var list = ["recover", "sha", "juedou", "huogong"];
							return list.reduce((p, c) => {
								return p + get.effect(target, { name: c }, player, player);
							}, 0);
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.line(target, "fire");
						target.recover();
						event.list = ["sha", "juedou", "huogong"];
						player.addTempSkill("dccansi_draw");
						player.storage.dccansi_draw = target;
					} else event.finish();
					"step 2";
					var card = { name: event.list.shift(), isCard: true };
					if (target.isIn() && player.canUse(card, target, false)) player.useCard(card, target, false);
					if (event.list.length) event.redo();
					"step 3";
					player.removeSkill("dccansi_draw");
				},
				subSkill: {
					draw: {
						trigger: { global: "damageEnd" },
						forced: true,
						charlotte: true,
						onremove: true,
						filter: function (event, player) {
							return event.getParent(3).name == "dccansi" && player.storage.dccansi_draw == event.player;
						},
						content: function () {
							for (var i = 0; i < trigger.num; i++) {
								player.draw(2);
							}
						},
					},
				},
				ai: {
					threaten: 5,
					expose: 0.3,
				},
			},
			dcfozong: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				filter: function (event, player) {
					return player.countCards("h") > 7;
				},
				forced: true,
				direct: true,
				intro: {
					markcount: "expansion",
					content: "expansion",
				},
				content: function () {
					"step 0";
					var num = player.countCards("h") - 7;
					player.chooseCard("佛宗：将" + get.cnNumber(num) + "张手牌置于武将上", true, num);
					"step 1";
					if (result.bool) {
						var cards = result.cards;
						player.logSkill("dcfozong");
						player.addToExpansion(cards, player, "give").gaintag.add("dcfozong");
					}
					"step 2";
					var cards = player.getExpansions("dcfozong");
					if (cards.length < 7) event.finish();
					else {
						event.targets = game.filterPlayer(i => i != player).sortBySeat(player);
						game.delayx();
					}
					"step 3";
					var target = targets.shift();
					event.target = target;
					player.line(target);
					var cards = player.getExpansions("dcfozong");
					if (!cards.length) event._result = { bool: false };
					else
						target
							.chooseButton(['###佛宗###<div class="text center">获得一张牌并令' + get.translation(player) + "回复1点体力，或点击“取消”令其失去1点体力</div>", cards])
							.set("ai", button => {
								if (_status.event.refuse) return get.value(button.link) - 7.5;
								return get.value(button.link);
							})
							.set("refuse", get.attitude(target, player) < 1 && get.effect(player, { name: "losehp" }, player, target) > 0);
					"step 4";
					if (result.bool) {
						var card = result.links[0];
						target.gain(card, "give", player);
						player.recover(target);
					} else player.loseHp();
					"step 5";
					if (targets.length) event.goto(3);
				},
				ai: { halfneg: true },
			},
			//滕芳兰
			dcluochong: {
				audio: 2,
				trigger: { global: "roundStart" },
				filter: function (event, player) {
					return game.hasPlayer(current => current.countDiscardableCards(player, "hej") > 0);
				},
				direct: true,
				async content(event, trigger, player) {
					if (_status.connectMode)
						game.broadcastAll(function () {
							_status.noclearcountdown = true;
						});
					const lose_list = [];
					let num = 4 - player.countMark("dcluochong");
					while (num > 0) {
						const result = await player
							.chooseTarget(get.prompt("dcluochong"), `弃置任意名角色区域内的累计至多${num}张牌`, (card, player, target) => {
								return target.hasCard(card => {
									const discarded = _status.event.lose_list.find(item => item[0] == target);
									if (discarded && discarded[1].includes(card)) return false;
									return lib.filter.canBeDiscarded(card, player, target, "dcluochong");
								}, "hej");
							})
							.set("ai", target => {
								const player = _status.event.player,
									discarded = _status.event.lose_list.find(item => item[0] == target);
								if (discarded) {
									if (target == player) return 0;
									const num = discarded[1].length;
									if (num > 1 && player.hp + player.hujia > 2) return 0;
								}
								if (target == player) {
									if (ui.cardPile.childNodes.length > 80 && player.hasCard(card => get.value(card) < 8)) return 20;
									return 0;
								}
								return get.effect(target, { name: "guohe_copy2" }, player, player);
							})
							.set("lose_list", lose_list)
							.forResult();
						if (result.bool) {
							const target = result.targets[0];
							const cards = await player
								.choosePlayerCard(target, true, "hej", [1, num], `选择弃置${get.translation(target)}区域内的牌`)
								.set("filterButton", button => {
									const card = button.link,
										target = _status.event.target,
										player = get.player();
									const discarded = _status.event.lose_list.find(item => item[0] == target);
									if (discarded && discarded[1].includes(card)) return false;
									return lib.filter.canBeDiscarded(card, player, target, "dcluochong");
								})
								.set("lose_list", lose_list)
								.set("ai", button => {
									if (ui.selected.buttons.length > 0) return false;
									var val = get.buttonValue(button);
									if (get.attitude(_status.event.player, _status.event.target) > 0) return -val;
									return val;
								})
								.forResultCards();
							num -= cards.length;
							const index = lose_list.find(item => item[0] == target);
							if (!index) {
								lose_list.push([target, cards]);
							} else {
								index[1].addArray(cards);
							}
						} else {
							break;
						}
					}
					if (_status.connectMode) {
						game.broadcastAll(function () {
							delete _status.noclearcountdown;
							game.stopCountChoose();
						});
					}
					if (lose_list.length > 0) {
						lib.tempSortSeat = trigger.player;
						lose_list.sort((a, b) => {
							return lib.sort.seat(a[0], b[0]);
						});
						delete lib.tempSortSeat;
						player.logSkill(
							"dcluochong",
							lose_list.map(i => i[0])
						);
						if (lose_list.some(i => i[1].length > 2)) {
							game.log(player, "可弃置牌数", "#g-1");
							player.addMark("dcluochong", 1, false);
						}
						if (lose_list[0].length == 1) {
							lose_list[0][0].discard(lose_list[0][1]);
						} else {
							game.loseAsync({
								lose_list: lose_list,
								discarder: player,
							}).setContent("discardMultiple");
						}
					}
				},
				ai: {
					threaten: 2.5,
					effect: {
						target: function (card, player, target, current) {
							if (get.type(card) == "delay" && current < 0) {
								var current = _status.currentPhase;
								if (current.getSeatNum() > target.getSeatNum()) return "zerotarget";
							}
						},
					},
				},
			},
			dcaichen: {
				audio: 2,
				init: function (player) {
					game.addGlobalSkill("dcaichen_hit");
				},
				onremove: function (player) {
					if (!game.hasPlayer(current => current.hasSkill("dcaichen"), true)) game.removeGlobalSkill("dcaichen_hit");
				},
				trigger: {
					player: ["loseAfter", "phaseDiscardBefore"],
					global: "loseAsyncAfter",
					target: "useCardToTargeted",
				},
				filter: function (event, player, name) {
					if (event.name == "phaseDiscard") return ui.cardPile.childNodes.length > 40;
					if (name == "useCardToTargeted") return ui.cardPile.childNodes.length < 40 && get.suit(event.card) == "spade";
					if (event.getParent().name != "dcluochong") return false;
					if (event.name == "loseAsync" && !event.getl(player).cards.length) return false;
					return ui.cardPile.childNodes.length > 80;
				},
				forced: true,
				content: function () {
					if (trigger.name.indexOf("lose") == 0) player.draw(2);
					else if (trigger.name == "phaseDiscard") {
						trigger.cancel();
						game.log(player, "跳过了弃牌阶段");
					} else {
						trigger.directHit.add(player);
						game.log(player, "不可响应", trigger.card);
					}
				},
				subSkill: {
					hit: {
						trigger: { player: "dieAfter" },
						filter: function (event, player) {
							return !game.hasPlayer(current => current.hasSkill("dcaichen"), true);
						},
						silent: true,
						forceDie: true,
						content: function () {
							game.removeGlobalSkill("dcaichen_hit");
						},
						ai: {
							directHit_ai: true,
							skillTagFilter: function (player, tag, arg) {
								return arg && arg.card && arg.target && arg.target.hasSkill("dcaichen") && ui.cardPile.childNodes.length < 40 && get.suit(arg.card) === "spade";
							},
						},
					},
				},
			},
			//杨彪
			dczhaohan: {
				audio: 2,
				trigger: { player: "phaseDrawBegin2" },
				frequent: true,
				filter: function (event, player) {
					return !event.numFixed;
				},
				content: function () {
					trigger.num += 2;
					trigger.dczhaohan = true;
					player.addTempSkill("dczhaohan_choose", "phaseDrawAfter");
				},
				subSkill: {
					choose: {
						trigger: { player: "gainAfter" },
						filter: function (event, player) {
							return event.getParent(2).dczhaohan && player.countCards("h") >= 2;
						},
						forced: true,
						charlotte: true,
						popup: false,
						content: function () {
							"step 0";
							var choices = [],
								choiceList = ["将两张手牌交给一名没有手牌的角色", "弃置两张手牌"];
							if (game.hasPlayer(current => current.countCards("h") == 0)) choices.push("选项一");
							else choiceList[0] = '<span style="opacity:0.5; ">' + choiceList[0] + "</span>";
							choices.push("选项二");
							if (choices.length == 1) event._result = { control: "选项二" };
							else
								player
									.chooseControl(choices)
									.set("choiceList", choiceList)
									.set("ai", () => _status.event.choice)
									.set(
										"choice",
										(function () {
											if (
												game.hasPlayer(current => {
													return current.countCards("h") == 0 && get.attitude(player, current) > 0;
												})
											)
												return "选项一";
											return "选项二";
										})()
									);
							"step 1";
							if (result.control == "选项一") {
								player.chooseCardTarget({
									filterCard: true,
									selectCard: 2,
									forced: true,
									filterTarget: function (card, player, target) {
										return !target.countCards("h");
									},
									ai1: function (card) {
										return 7 - get.value(card);
									},
									ai2: function (target) {
										return get.attitude(_status.event.player, target);
									},
									prompt: "将两张手牌交给一名没有手牌的角色",
								});
							} else {
								player.chooseToDiscard("昭汉：请弃置两张手牌", true, 2);
								event.finish();
							}
							"step 2";
							if (result.bool) {
								player.give(result.cards, result.targets[0]);
							}
						},
					},
				},
			},
			oldjinjie: {
				audio: "dcjinjie",
				trigger: { global: "dying" },
				hasPhase: function (player) {
					var history = player.actionHistory;
					for (var i = history.length - 1; i >= 0; i--) {
						if (history[i].isMe && !history[i].isSkipped) return true;
						if (history[i].isRound) break;
					}
					return false;
				},
				direct: true,
				content: function () {
					"step 0";
					player.chooseBool(get.prompt("oldjinjie", trigger.player), "令其摸一张牌").set("ai", () => {
						return get.attitude(_status.event.player, _status.event.getTrigger().player) > 0;
					});
					"step 1";
					if (result.bool) {
						player.logSkill("oldjinjie", trigger.player);
						trigger.player.draw();
					} else event.finish();
					if (lib.skill.oldjinjie.hasPhase(player)) event.finish();
					"step 2";
					var num = 0;
					var history = player.actionHistory;
					for (var i = history.length - 1; i >= 0; i--) {
						for (var evt of history[i].useSkill) {
							if (evt.skill == "oldjinjie") num++;
						}
						if (history[i].isRound) break;
					}
					if (num == 0) {
						player.chooseBool(get.prompt("oldjinjie", trigger.player), "令其回复1点体力").set("ai", () => {
							var player = _status.event.player;
							return get.effect(_status.event.getTrigger().player, { name: "tao" }, player, player) > 0;
						});
					} else {
						player
							.chooseToDiscard(get.prompt("oldjinjie", trigger.player), "弃置" + get.cnNumber(num) + "张牌，令其回复1点体力", "he", num)
							.set("ai", card => {
								if (_status.event.eff > 0) return get.value({ name: "tao" }) - get.value(card);
								return 0;
							})
							.set("eff", get.effect(trigger.player, { name: "tao" }, player, player));
					}
					"step 3";
					if (result.bool) {
						player.line(trigger.player, "green");
						trigger.player.recover();
					}
				},
			},
			dcjinjie: {
				audio: 2,
				trigger: { global: "dying" },
				async cost(event, trigger, player) {
					const target = trigger.player;
					const result = await player
						.chooseControl(
							[0, 1, 2, 3].map(i => get.cnNumber(i, true)),
							"cancel2"
						)
						.set("prompt", get.prompt("dcjinjie", target))
						.set("prompt2", `令${get.translation(target)}摸至多三张牌，然后你可以弃置等量的牌令其回复1点体力。`)
						.set("ai", () => {
							return get.event("choice");
						})
						.set(
							"choice",
							(() => {
								if (get.attitude(player, target) <= 0) return "cancel2";
								if (target === player) return 3;
								const unusefulCount = player.countCards("he", card => {
									return lib.filter.cardDiscardable(card, player, "dcjinjie") && get.value(card) < 5 && !player.canSaveCard(card, target);
								});
								if (
									[player, target]
										.unique()
										.map(current => {
											return current.countCards("hs", card => {
												return player.canSaveCard(card, target);
											});
										})
										.reduce((p, c) => p + c) > unusefulCount
								) {
									return 3;
								}
								return Math.min(3, unusefulCount);
							})()
						)
						.forResult();
					if (result.control !== "cancel2") {
						event.result = {
							bool: true,
							cost_data: {
								index: result.index,
							},
						};
					}
				},
				round: 1,
				logTarget: "player",
				async content(event, trigger, player) {
					const num = event.cost_data.index,
						target = trigger.player;
					if (num > 0) await target.draw(num);
					let next;
					if (num > 0) {
						next = player
							.chooseToDiscard(`尽节：是否弃置${get.cnNumber(num)}张牌，令${get.translation(target)}回复1点体力？`, num, "he")
							.set("ai", card => {
								if (get.event("goon")) {
									return 100 / Math.max(0.01, get.value(card) + 20);
								}
								return 0;
							})
							.set(
								"goon",
								(() => {
									if (get.attitude(player, target) <= 0) return false;
									const count = player.countCards("hs", card => {
										return player.canSaveCard(card, target);
									});
									return (
										!count ||
										(count > 0 &&
											player.countCards("he", card => {
												return get.value(card) < 5;
											}) >= num)
									);
								})()
							);
					} else {
						next = player.chooseBool(`尽节：是否令${get.translation(target)}回复1点体力？`).set("choice", get.attitude(player, target) > 0);
					}
					const bool = await next.forResultBool();
					if (bool) {
						player.line(target, "green");
						await target.recover();
					}
				},
				subSkill: {
					round: {},
				},
			},
			oldjue: {
				audio: "dcjue",
				trigger: { player: "phaseZhunbeiBegin" },
				direct: true,
				filter: function (event, player) {
					return game.hasPlayer(current => (current.getHp() > player.getHp() || current.countCards("h") > player.countCards("h")) && player.canUse("sha", current, false));
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt("oldjue"), "视为对一名体力值或手牌数大于你的角色使用一张【杀】", (card, player, target) => {
							return player.canUse("sha", target, false) && (target.getHp() > player.getHp() || target.countCards("h") > player.countCards("h"));
						})
						.set("ai", target => {
							return get.effect(target, { name: "sha" }, _status.event.player);
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("oldjue", target);
						player.useCard({ name: "sha", isCard: true }, target, false);
					}
				},
			},
			dcjue: {
				audio: 2,
				trigger: { global: "phaseJieshuBegin" },
				filter(event, player) {
					if (!lib.skill.dcjue.getCards().length) return false;
					return (
						(event.player !== player && event.player.isIn()) ||
						(event.player === player &&
							game.hasPlayer(current => {
								return current.isIn();
							}))
					);
				},
				round: 1,
				async cost(event, trigger, player) {
					let maxLimit = lib.skill.dcjue.getCards().length;
					if (trigger.player === player) {
						event.result = await player
							.chooseTarget(get.prompt("dcjue"), `选择一名其他角色，视为对其依次随机使用X次【杀】/【过河拆桥】/【五谷丰登】（X为${maxLimit}与其体力上限中的较小值）。`)
							.set("filterTarget", lib.filter.notMe)
							.set("ai", target => {
								return -get.attitude(get.player(), target);
							})
							.forResult();
					} else {
						const target = trigger.player;
						maxLimit = Math.min(maxLimit, target.maxHp);
						event.result = await player
							.chooseBool(get.prompt("dcjue", target), `视为对${get.translation(target)}依次随机使用${get.cnNumber(maxLimit)}次【杀】/【过河拆桥】/【五谷丰登】。`)
							.set("choice", get.attitude(player, target) < 0)
							.forResult();
					}
				},
				logTarget: "player",
				getCards() {
					const cards = [];
					game.countPlayer2(current => {
						current.getHistory("lose", evt => {
							if (evt.type == "discard") cards.addArray(evt.cards.filterInD("d"));
						});
					});
					return cards;
				},
				async content(event, trigger, player) {
					const target = event.targets ? event.targets[0] : trigger.player;
					const nameList = ["sha", "guohe", "wugu"];
					let maxLimit = Math.min(lib.skill.dcjue.getCards().length, target.maxHp);
					while (maxLimit--) {
						if (!target.isIn()) return;
						const list = nameList.slice().randomSort();
						for (const name of list) {
							const card = new lib.element.VCard({ name });
							let targets = [player, target].filter(current => player.canUse(card, current));
							if (targets.length) {
								await player.useCard(card, targets);
								// 临时修改（by 棘手怀念摧毁）
								await game.asyncDelayx();
								// await game.delayx();
								break;
							}
						}
					}
				},
			},
			//杨弘
			dcjianji: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.getAttackRange() >= 1;
				},
				selectTarget: function () {
					return [1, _status.event.player.getAttackRange()];
				},
				complexSelect: true,
				complexTarget: true,
				filterTarget: function (card, player, target) {
					var selected = ui.selected.targets;
					if (!selected.length) return true;
					for (var i of selected) {
						if (i.getNext() == target || i.getPrevious() == target) return true;
					}
					return false;
				},
				contentBefore: function () {
					event.getParent()._dcjianji_discarded = [];
				},
				content: function () {
					"step 0";
					if (target.countCards("he") > 0) target.chooseToDiscard(true, "he");
					else event.finish();
					"step 1";
					if (result.bool) {
						event.getParent()._dcjianji_discarded.push(target);
					}
				},
				contentAfter: function () {
					"step 0";
					var list = targets.filter(target => {
						var num = target.countCards("h");
						return targets.every(targetx => {
							return targetx.countCards("h") <= num;
						});
					});
					if (list.length) {
						event.list = list;
						event.current = event.list.shift();
						event.getParent()._dcjianji_discarded.remove(player);
						event.targets = event.getParent()._dcjianji_discarded;
					} else event.finish();
					"step 1";
					var targets = event.targets.slice();
					targets.remove(event.current);
					if (!targets.length) event._result = { bool: false };
					else
						event.current
							.chooseTarget("间计：是否视为对除" + get.translation(player) + "外的弃置过牌的一名角色使用一张杀？", (card, player, target) => {
								return _status.event.targets.includes(target) && player.canUse("sha", target, false);
							})
							.set("targets", event.targets)
							.set("ai", target => {
								var player = _status.event.player;
								return get.effect(target, { name: "sha" }, player, player);
							});
					"step 2";
					if (result.bool) {
						event.current.useCard({ name: "sha", isCard: true }, result.targets, false);
					}
					"step 3";
					if (event.list.length) {
						event.current = event.list.shift();
						event.goto(1);
					}
				},
				ai: {
					order: 7,
					result: {
						target: function (player, target) {
							var eff = get.effect(target, { name: "guohe_copy2" }, player, target) / 2;
							if (ui.selected.targets.length && eff < 0) {
								var len = target.countCards("h");
								if (
									ui.selected.targets.every(i => {
										return i.countCards("h") < len + 1;
									}) &&
									ui.selected.targets.some(i => {
										return get.effect(i, { name: "sha" }, target, player) > 0;
									})
								)
									return 0.1;
							}
							return ui.selected.targets.reduce((p, c) => p + get.effect(c, { name: "guohe_copy2" }, player, c) / 2, 0) + eff;
						},
					},
				},
			},
			dcyuanmo: {
				audio: 2,
				trigger: { player: ["damageEnd", "phaseZhunbeiBegin"] },
				direct: true,
				group: "dcyuanmo_add",
				init: function (player) {
					player.storage.dcyuanmo_range = 0;
				},
				change: function (player, num) {
					player.addSkill("dcyuanmo_range");
					if (typeof player.storage.dcyuanmo_range !== "number") player.storage.dcyuanmo_range = 0;
					if (!num) return;
					player.storage.dcyuanmo_range += num;
					if (player.storage.dcyuanmo_range != 0) player.markSkill("dcyuanmo_range");
					else player.unmarkSkill("dcyuanmo_range");
					game.log(player, "的攻击范围", (num > 0 ? "+" : "") + num);
				},
				content: function () {
					"step 0";
					event.targets = game.filterPlayer(current => player.inRange(current));
					var choiceList = ["攻击范围+1。然后若你攻击范围内的角色数因此增加，你可以获得其中任意名角色的一张牌", "攻击范围-1。然后你摸两张牌"];
					player
						.chooseControl("cancel2")
						.set("prompt", get.prompt("dcyuanmo"))
						.set("choiceList", choiceList)
						.set("ai", () => {
							return _status.event.choice;
						})
						.set(
							"choice",
							(function () {
								if (
									trigger.name == "phaseZhunbei" &&
									player.getAttackRange() == 1 &&
									!player.hasCard(card => {
										if (get.subtype(card) != "equip1" && !player.hasUseTarget(card)) return false;
										var num = 1;
										var info = get.info(card, false);
										if (info && info.distance && typeof info.distance.attackFrom == "number") num -= info.distance.attackFrom;
										return num > 1;
									}, "hs")
								)
									return "选项一";
								var targets = event.targets.slice(),
									targetsx = [];
								var _tmp = player.storage.dcyuanmo_range;
								player.storage.dcyuanmo_range++;
								try {
									targetsx = game.filterPlayer(current => player.inRange(current));
								} catch (e) {
									player.storage.dcyuanmo_range = _tmp;
								}
								player.storage.dcyuanmo_range = _tmp;
								targetsx.removeArray(targets);
								return targetsx.reduce((p, c) => {
									return p + Math.max(0, get.effect(c, { name: "shunshou_copy2" }, player, player));
								}, 0) >
									get.effect(player, { name: "draw" }, player, player) * 1.3
									? "选项一"
									: "选项二";
							})()
						);
					"step 1";
					if (result.control == "cancel2") {
						event.finish();
						return;
					}
					player.logSkill("dcyuanmo");
					if (result.control == "选项一") {
						lib.skill.dcyuanmo.change(player, 1);
						var targetsx = game.filterPlayer(current => player.inRange(current));
						if (targetsx.length <= targets.length) {
							event.finish();
						} else event.targets = targetsx.removeArray(targets);
					} else {
						lib.skill.dcyuanmo.change(player, -1);
						player.draw(2);
						event.finish();
					}
					"step 2";
					player
						.chooseTarget("远谟：获得任意名本次进入你攻击范围的角色的一张牌", [1, targets.length], (card, player, target) => {
							return _status.event.getParent().targets.includes(target) && target.countGainableCards(player, "he") > 0;
						})
						.set("ai", target => {
							var player = _status.event.player;
							return get.effect(target, { name: "shunshou_copy2" }, player, player);
						});
					"step 3";
					if (result.bool) {
						var targets = result.targets.sortBySeat();
						player.line(targets);
						for (var target of targets) {
							player.gainPlayerCard(target, "he", true);
						}
					}
				},
				subSkill: {
					add: {
						audio: "dcyuanmo",
						trigger: { player: "phaseJieshuBegin" },
						filter: function (event, player) {
							return !game.hasPlayer(current => player.inRange(current));
						},
						prompt2: "令你的攻击范围+1",
						check: () => true,
						content: function () {
							lib.skill.dcyuanmo.change(player, 1);
						},
					},
					range: {
						charlotte: true,
						intro: {
							content: function (storage, player) {
								var num = player.storage.dcyuanmo_range;
								return "攻击范围" + (num >= 0 ? "+" : "") + num;
							},
						},
						mod: {
							attackRange: function (player, num) {
								return num + player.countMark("dcyuanmo_range");
							},
						},
					},
				},
			},
			//薛灵芸
			dcxialei: {
				audio: 2,
				trigger: {
					player: "loseAfter",
					global: ["cardsDiscardAfter", "loseAsyncAfter", "equipAfter"],
				},
				filter: function (event, player) {
					if (player.countMark("dcxialei_clear") >= 3) return false;
					if (event.name != "cardsDiscard") {
						return event.getd(player, "cards2").some(i => get.color(i, player) == "red");
					} else {
						if (!event.cards.filterInD("d").some(i => get.color(i, player) == "red")) return false;
						var evt = event.getParent();
						if (evt.name != "orderingDiscard") return false;
						var evtx = evt.relatedEvent || evt.getParent();
						if (evtx.player != player) return false;
						return player.hasHistory("lose", evtxx => {
							return evtx == (evtxx.relatedEvent || evtxx.getParent()) && evtxx.cards2.length > 0;
						});
					}
				},
				content: function () {
					"step 0";
					var cards = get.cards(3 - player.countMark("dcxialei_clear"));
					event.cards = cards;
					game.cardsGotoOrdering(cards);
					if (cards.length == 1) event._result = { bool: true, links: cards };
					else player.chooseButton(["霞泪：获得其中的一张牌", cards], true);
					"step 1";
					if (result.bool) {
						var card = result.links[0];
						player.gain(card, "draw");
						event.cards.remove(card);
						if (event.cards.length) {
							player
								.chooseBool()
								.set("createDialog", ["是否将剩余牌置于牌堆底？", event.cards])
								.set("ai", () => _status.event.bool)
								.set(
									"bool",
									(function () {
										if (!player.hasSkill("dcanzhi")) return Math.random() < 0.5;
										if (player.hasSkill("dcanzhi_blocker")) {
											var next = _status.currentPhase.getNext();
											var judges = next.getCards("j");
											var val = 0;
											if (judges.length && !next.hasWuxie()) {
												var att = get.attitude(player, next);
												for (var i = 0; ; i++) {
													var judge = judges[i] && get.judge(judges[i]),
														card = event.cards[i];
													if (!judge || !card) break;
													val += judge(card) * att;
													i++;
												}
											}
											if (val > 0) return false;
											else if (val == 0) return Math.random() < 0.5;
											return true;
										}
										var card = event.cards[0];
										if (
											get.color(card, player) == "red" &&
											player.isPhaseUsing() &&
											player.countCards("hs", card => {
												return get.color(card) == "red" && player.hasValueTarget(card) && ["basic", "trick"].includes(get.type(card));
											}) > 0
										)
											return false;
										if (get.color(card, player) == "black") return false;
										return true;
									})()
								);
						} else event.goto(3);
					} else event.finish();
					"step 2";
					if (result.bool) {
						player.popup("牌堆底");
						game.log(player, "将" + get.cnNumber(event.cards.length) + "张牌置于了牌堆底");
					} else player.popup("牌堆顶");
					while (cards.length) {
						var card = cards.pop();
						card.fix();
						if (result.bool) ui.cardPile.appendChild(card);
						else ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
					}
					game.updateRoundNumber();
					"step 3";
					player.addMark("dcxialei_clear", 1, false);
					player.addTempSkill("dcxialei_clear");
				},
				subSkill: { clear: { onremove: true } },
			},
			dcanzhi: {
				enable: "phaseUse",
				filter: function (event, player) {
					return !player.hasSkill("dcanzhi_blocker");
				},
				group: "dcanzhi_damage",
				content: function () {
					"step 0";
					player.judge(result => {
						if (get.color(result) == "red") return _status.event.getParent().player.countMark("dcxialei_clear") / 2;
						return 2;
					}).judge2 = result => result.bool;
					"step 1";
					if (result.color == "red") {
						player.removeSkill("dcxialei_clear");
						event.finish();
					} else if (result.color == "black") {
						player.addTempSkill("dcanzhi_blocker");
						player
							.chooseTarget("暗织：是否令一名非当前回合角色获得本回合进入弃牌堆的两张牌？", (card, player, target) => {
								return target != _status.currentPhase;
							})
							.set("ai", target => {
								return get.effect(target, { name: "wuzhong" }, _status.event.player);
							});
					} else event.finish();
					"step 2";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.line(target);
						var cards = [];
						game.getGlobalHistory("cardMove", evt => {
							if ((evt.name == "lose" && evt.position == ui.discardPile) || evt.name == "cardsDiscard") {
								cards.addArray(evt.cards.filterInD("d"));
							}
						});
						if (cards.length) {
							player.chooseButton(["暗织：选择令" + get.translation(target) + "获得的牌", cards], true, Math.min(cards.length, 2)).set("ai", button => {
								var player = _status.event.player,
									target = _status.event.getParent().target;
								return get.sgnAttitude(player, target) * get.value(button.link, target);
							});
						}
					} else event.finish();
					"step 3";
					if (result.bool) {
						target.gain(result.links, "gain2");
					}
				},
				ai: {
					combo: "dcxialei",
					order: function (item, player) {
						if (player.countMark("dcxialei_clear") >= 2) return 10;
						if (player.hasHistory("useSkill", evt => evt.skill == "dcxialei") && get.color(ui.cardPile.firstChild, player) == "red" && player.countMark("dcxialei_clear") > 0) return 9;
						return 1;
					},
					result: {
						player: function (player) {
							return 1;
						},
					},
				},
				subSkill: {
					damage: {
						audio: "dcanzhi",
						trigger: { player: "damageEnd" },
						filter: function (event, player) {
							return !player.hasSkill("dcanzhi_blocker");
						},
						check: function (event, player) {
							return game.hasPlayer(current => {
								return get.attitude(player, current) > 0 && current != _status.currentPhase;
							});
						},
						prompt2: "你判定，若结果为红色，你重置〖霞泪〗的观看牌数；若结果为黑色，〖暗织〗于本回合失效，然后你可以令一名非当前回合角色获得本回合进入弃牌堆的两张牌。",
						content: function () {
							event.setContent(lib.skill.dcanzhi.content);
							event.goto(0);
						},
					},
					blocker: { charlotte: true },
				},
			},
			//十周年王允
			dclianji: {
				enable: "phaseUse",
				audio: "wylianji",
				usable: 1,
				check: function (card) {
					return 5 - get.value(card);
				},
				filterTarget: function (card, player, target) {
					return target != player;
				},
				filterCard: true,
				content: function () {
					"step 0";
					var card = get.cardPile2(function (card) {
						return get.subtype(card) == "equip1" && targets[0].hasUseTarget(card);
					});
					if (card) {
						if (card.name == "qinggang" && !lib.inpile.includes("qibaodao")) {
							card.remove();
							card = game.createCard("qibaodao", card.suit, card.number);
						}
						targets[0].chooseUseTarget(card, true, "nopopup", "nothrow");
					} else {
						player.chat("没有装备牌了吗");
						game.log("但是牌堆里已经没有装备牌了！");
					}
					"step 1";
					game.updateRoundNumber();
					targets[0]
						.chooseToUse(get.translation(player) + "对你发动了【连计】", { name: "sha" })
						.set("targetRequired", true)
						.set("complexSelect", true)
						.set("filterTarget", function (card, player, target) {
							if (target == _status.event.source) return false;
							return lib.filter.filterTarget.apply(this, arguments);
						})
						.set("addCount", false)
						.set("source", player)
						.set("prompt2", "对除" + get.translation(player) + "外的一名角色使用一张【杀】，并将装备区内的武器牌交给其中一名目标角色；或点击“取消”，令" + get.translation(player) + "视为对你使用一张【杀】，并获得你装备区内的武器牌");
					"step 2";
					var card = targets[0].getEquips(1);
					if (result.bool) {
						player.addSkill("dclianji_1");
						if (card.length && result.targets.filter(target => target.isIn()).length > 0) {
							event.card = card;
							targets[0]
								.chooseTarget(true, "将" + get.translation(card) + "交给一名目标角色", (card, player, target) => {
									return _status.event.targets.includes(target);
								})
								.set("ai", function (target) {
									var card = _status.event.getParent().card[0];
									return (target.hasSkillTag("nogain") ? 0 : get.attitude(_status.event.player, target)) * Math.max(0.1, target.getUseValue(card));
								})
								.set("targets", result.targets);
						} else event.finish();
					} else {
						player.addSkill("dclianji_2");
						event.goto(4);
					}
					"step 3";
					targets[0].give(card, result.targets[0], "give");
					event.finish();
					"step 4";
					player.useCard({ name: "sha", isCard: true }, targets[0], false);
					"step 5";
					var card = targets[0].getEquips(1);
					if (card.length) targets[0].give(card, player, "give");
				},
				ai: {
					order: 4,
					result: {
						target: function (player, target) {
							if (game.countPlayer() == 2) return -3;
							if (!target.getEquip(1)) {
								if (
									game.hasPlayer(function (current) {
										return current != target && !current.hasSkillTag("nogain") && get.attitude(current, target) > 0;
									})
								)
									return 3;
								return -3;
							}
							if (
								!game.hasPlayer(function (current) {
									return current != target && !current.hasSkillTag("nogain") && get.attitude(current, target) > 0;
								})
							)
								return -6;
							return 4 - get.value(target.getEquip(1));
						},
					},
				},
				subSkill: {
					1: { charlotte: true, onremove: true },
					2: { charlotte: true, onremove: true },
				},
			},
			dcmoucheng: {
				trigger: { player: "phaseZhunbeiBegin" },
				audio: "moucheng",
				forced: true,
				juexingji: true,
				skillAnimation: true,
				animationColor: "gray",
				derivation: "xinjingong",
				unique: true,
				filter: function (event, player) {
					return player.hasSkill("dclianji_1") && player.hasSkill("dclianji_2");
				},
				content: function () {
					player.awakenSkill("dcmoucheng");
					player.changeSkills(["xinjingong"], ["dclianji"]);
				},
				ai: {
					combo: "dclianji"
				},
			},
			//周宣
			dcwumei: {
				audio: 2,
				trigger: { player: "phaseBeginStart" },
				filter: function (event, player) {
					return !player.hasSkill("dcwumei_used");
				},
				direct: true,
				content: function () {
					"step 0";
					player.chooseTarget(get.prompt2("dcwumei")).set("ai", target => {
						return get.attitude(_status.event.player, target);
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("dcwumei", target);
						player.addTempSkill("dcwumei_used", "roundStart");
						target.insertPhase();
						target.addTempSkill("dcwumei_wake", "phaseAfter");
						var targets = game.filterPlayer();
						if (!target.storage.dcwumei_wake) target.storage.dcwumei_wake = [[], []];
						for (var targetx of targets) {
							target.storage.dcwumei_wake[0].push(targetx);
							target.storage.dcwumei_wake[1].push(targetx.hp);
						}
						target.markSkill("dcwumei_wake");
						if (!trigger._finished) {
							player.phaseNumber--;
							trigger.finish();
							trigger.untrigger(true);
							trigger._triggered = 5;
							game.players
								.slice()
								.concat(game.dead)
								.forEach(current => {
									current.getHistory().isSkipped = true;
									current.getStat().isSkipped = true;
								});
							var evt = player.insertPhase();
							evt.relatedEvent = trigger.relatedEvent || trigger.getParent(2);
							if (trigger.skill) evt.skill = trigger.skill;
							else delete evt.skill;
							evt.wumei_phase = true;
							if (!lib.onround.includes(lib.skill.dcwumei.onRound)) {
								lib.onround.push(lib.skill.dcwumei.onRound);
							}
							game.broadcastAll(function (player) {
								player.classList.remove("glow_phase");
								delete _status.currentPhase;
							}, player);
						}
					}
				},
				onRound(event) {
					return !event.wumei_phase;
				},
				subSkill: {
					used: { charlotte: true },
					wake: {
						init: function (player) {
							game.addGlobalSkill("dcwumei_all");
						},
						onremove: function (player) {
							game.removeGlobalSkill("dcwumei_all");
							delete player.storage.dcwumei_wake;
						},
						trigger: { player: "phaseJieshuBegin" },
						charlotte: true,
						popup: false,
						forced: true,
						filter: function (event, player) {
							return player.storage.dcwumei_wake && player.storage.dcwumei_wake.length;
						},
						content: function () {
							var storage = player.storage.dcwumei_wake;
							for (var i = 0; i < storage[0].length; i++) {
								var target = storage[0][i];
								if (target && target.isIn()) {
									if (target.hp != storage[1][i]) {
										game.log(target, "将体力从", get.cnNumber(target.hp, true), "改为", get.cnNumber(storage[1][i], true));
										target.changeHp(storage[1][i] - target.hp)._triggered = null;
									}
								}
							}
							player.removeSkill("dcwumei_wake");
						},
						marktext: "寐",
						intro: {
							markcount: function (storage, player) {
								if (!storage || !storage.length) return 0;
								return storage[0].length;
							},
							content: function (storage, player) {
								if (!storage || !storage.length) return "无信息";
								var str = "所有角色于回合开始时的体力值：<br>";
								for (var i = 0; i < storage[0].length; i++) {
									var str2 = get.translation(storage[0][i]) + "：" + storage[1][i];
									if (!storage[0][i].isIn()) str2 = '<span style="opacity:0.5">' + str2 + "（已故）</span>";
									str += "<li>" + str2;
								}
								return str;
							},
						},
					},
					all: {
						mod: {
							aiOrder(player, card, num) {
								if (num <= 0) return;
								if (get.tag(card, "recover") && !_status.event.dying && player.hp > 0) return 0;
								if (get.tag(card, "damage")) {
									if (card.name == "sha" && game.hasPlayer(cur => {
										return (
											cur.hp < 2 &&
											player.canUse(card, cur, null, true) &&
											get.effect(cur, card, player, player) > 0
										);
									})) return num;
									if (player.needsToDiscard()) return num / 5;
									return 0;
								}
							}
						},
						trigger: { player: "dieAfter" },
						filter: function (event, player) {
							return !game.hasPlayer(current => current.hasSkill("dcwumei_wake"), true);
						},
						silent: true,
						forceDie: true,
						content: function () {
							game.removeGlobalSkill("dcwumei_all");
						},
					},
				},
			},
			dczhanmeng: {
				audio: 2,
				trigger: { player: "useCard" },
				filter(event, player) {
					return (
						!player.hasSkill("dczhanmeng_choice1") ||
						!player.hasSkill("dczhanmeng_choice2") ||
						(!player.hasSkill("dczhanmeng_choice0") &&
							!game.hasPlayer2(current => {
								const history = current.actionHistory;
								if (history.length < 2) return false;
								for (let i = history.length - 2; i >= 0; i--) {
									if (history[i].isSkipped) continue;
									const list = history[i].useCard.map(evt => evt.card.name);
									return list.includes(event.card.name);
								}
								return false;
							}, true))
					);
				},
				direct: true,
				content() {
					"step 0";
					var list = [];
					var choiceList = ["上回合若没有同名牌被使用过，你获得一张非伤害牌", "下回合当同名牌首次被使用后，你获得一张伤害牌", "令一名其他角色弃置两张牌，若点数之和大于10，你对其造成1点火焰伤害"];
					var used = game.hasPlayer2(current => {
						var history = current.actionHistory;
						if (history.length < 2) return false;
						for (let i = history.length - 2; i >= 0; i--) {
							if (history[i].isSkipped) continue;
							const list = history[i].useCard.map(evt => evt.card.name);
							return list.includes(trigger.card.name);
						}
						return false;
					}, true);
					if (!player.hasSkill("dczhanmeng_choice0") && !used) list.push("选项一");
					else choiceList[0] = '<span style="opacity:0.5; ">' + choiceList[0] + (used ? "（同名牌被使用过）" : "（已选择）") + "</span>";
					if (!player.hasSkill("dczhanmeng_choice1")) list.push("选项二");
					else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + "（已选择）</span>";
					var other = game.hasPlayer(current => current != player);
					if (!player.hasSkill("dczhanmeng_choice2") && other) list.push("选项三");
					else choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + (!other ? "（没人啦）" : "（已选择）") + "</span>";
					list.push("cancel2");
					player
						.chooseControl(list)
						.set("prompt", get.prompt("dczhanmeng"))
						.set("ai", () => {
							var choices = _status.event.controls.slice().remove("cancel2");
							var player = _status.event.player,
								evt = _status.event.getTrigger();
							if (!game.hasPlayer(current => get.attitude(player, current) < 0)) choices.remove("选项三");
							else if (choices.includes("选项三")) return "选项三";
							if (choices.includes("选项二")) {
								if (evt.card.name == "sha") return "选项二";
								if (get.type(evt.card, null, false) == "equip") choices.remove("选项二");
							}
							if (!choices.length) return "cancel2";
							return choices.randomGet();
						})
						.set("choiceList", choiceList);
					"step 1";
					if (result.control == "cancel2") {
						event.finish();
						return;
					}
					if (result.control == "选项一") {
						player.logSkill("dczhanmeng");
						game.log(player, "选择了", "#y" + result.control);
						player.addTempSkill("dczhanmeng_choice0");
						var card = get.cardPile2(card => {
							return !get.tag(card, "damage");
						});
						if (card) player.gain(card, "gain2");
						event.finish();
					} else if (result.control == "选项二") {
						player.logSkill("dczhanmeng");
						game.log(player, "选择了", "#y" + result.control);
						player.addTempSkill("dczhanmeng_choice1");
						trigger["dczhanmeng_" + player.playerid] = true;
						player.addSkill("dczhanmeng_delay");
						event.finish();
					} else {
						player.addTempSkill("dczhanmeng_choice2");
						player.chooseTarget("占梦：令一名其他角色弃置两张牌", lib.filter.notMe, true).set("ai", target => {
							var player = _status.event.player;
							var eff1 = get.effect(target, { name: "guohe_copy2" }, player, player) + 0.1;
							var eff2 = get.damageEffect(target, player, player, "fire") + 0.1;
							if (eff1 < 0 && eff2 < 0) return -eff1 * eff2;
							return eff1 * eff2;
						});
					}
					"step 2";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("dczhanmeng", target);
						game.log(player, "选择了", "#y选项三");
						target.chooseToDiscard(2, "he", true);
					} else event.finish();
					"step 3";
					if (result.bool) {
						var cards = result.cards;
						var num = 0;
						for (var card of cards) {
							num += get.number(card, false);
						}
						if (num > 10) {
							player.line(target, "fire");
							target.damage("fire");
						}
					}
				},
				ai: { threaten: 8 },
				subSkill: {
					delay: {
						trigger: { global: ["useCardAfter", "phaseBeginStart"] },
						charlotte: true,
						forced: true,
						popup: false,
						silent: true,
						filter(event, player, name) {
							var history = player.actionHistory;
							if (history.length < 2) return false;
							var list = history[history.length - 2].useCard;
							if (name == "phaseBeginStart") {
								return !list.some(evt => evt["dczhanmeng_" + player.playerid]);
							}
							for (var evt of list) {
								if (
									evt["dczhanmeng_" + player.playerid] &&
									event.card.name == evt.card.name &&
									game
										.getGlobalHistory("useCard", evtx => {
											return evtx.card.name == event.card.name;
										})
										.indexOf(event) == 0
								)
									return true;
							}
							return false;
						},
						content() {
							if (event.triggername != "phaseBeginStart") {
								player.logSkill("dczhanmeng_delay");
								var card = get.cardPile2(card => {
									return get.tag(card, "damage");
								});
								if (card) player.gain(card, "gain2");
							} else player.removeSkill("dczhanmeng_delay");
						},
					},
					choice0: { charlotte: true },
					choice1: { charlotte: true },
					choice2: { charlotte: true },
				},
			},
			//程秉
			dcjingzao: {
				audio: 2,
				enable: "phaseUse",
				filter: function (event, player) {
					if (3 + player.countMark("dcjingzao_add") - player.countMark("dcjingzao_ban") <= 0) return false;
					return game.hasPlayer(current => lib.skill.dcjingzao.filterTarget(null, player, current));
				},
				filterTarget: function (card, player, target) {
					return player != target && !target.hasSkill("dcjingzao_temp");
				},
				content: function () {
					"step 0";
					target.addTempSkill("dcjingzao_temp");
					var cards = get.cards(3 + player.countMark("dcjingzao_add") - player.countMark("dcjingzao_ban"), true);
					event.cards = cards;
					game.log(player, "亮出了", event.cards);
					event.videoId = lib.status.videoId++;
					game.broadcastAll(
						function (player, target, id, cards) {
							var str = get.translation(player) + "对" + (target == game.me ? "你" : get.translation(target)) + "发动了【经造】";
							var dialog = ui.create.dialog(str, cards);
							dialog.videoId = id;
						},
						player,
						target,
						event.videoId,
						event.cards
					);
					game.addVideo("showCards", player, [get.translation(player) + "发动了【经造】", get.cardsInfo(event.cards)]);
					game.delay();
					"step 1";
					target
						.chooseToDiscard("he")
						.set("prompt", false)
						.set("filterCard", card => {
							var names = _status.event.getParent().cards.map(i => i.name);
							return names.includes(get.name(card));
						})
						.set("ai", card => {
							var target = _status.event.player,
								player = _status.event.getParent().player;
							var att = get.attitude(target, player),
								val = get.value(card);
							if (!lib.skill.dcjingzao.filter(null, player)) {
								if (att > 0) return 0;
								return 6 - val;
							} else {
								if (att > 0) return 4 - val;
								return 0;
							}
						});
					var update = function (id, source) {
						var dialog = get.idDialog(id);
						if (dialog) {
							var div = ui.create.div("", dialog.content, 1);
							var name = get.translation(source);
							div.innerHTML = "弃置一张满足条件的牌，然后" + name + "〖经造〗本回合亮出牌数+1；或点“取消”令" + name + "随机获得每种牌名的牌各一张，且〖经造〗本回合失效";
							ui.update();
						}
					};
					if (target == game.me) update(event.videoId, player);
					else if (target.isOnline()) target.send(update, event.videoId, player);
					"step 2";
					game.broadcastAll("closeDialog", event.videoId);
					if (result.bool) {
						player.addTempSkill("dcjingzao_add");
						player.addMark("dcjingzao_add", 1, false);
					} else {
						var cards = cards.randomSort(),
							cards2 = [];
						for (var card of cards) {
							if (!cards2.map(i => i.name).includes(card.name)) cards2.push(card);
						}
						if (cards2.length) player.gain(cards2, "gain2");
						player.addTempSkill("dcjingzao_ban");
						player.addMark("dcjingzao_ban", cards2.length, false);
					}
				},
				ai: {
					order: 7,
					result: {
						player: 1,
					},
				},
				subSkill: {
					add: { charlotte: true, onremove: true },
					ban: { charlotte: true, onremove: true },
					temp: { charlotte: true },
				},
			},
			dcenyu: {
				audio: 2,
				trigger: { target: "useCardToTargeted" },
				forced: true,
				filter: function (event, player) {
					return (
						event.player != player &&
						game.hasPlayer2(current => {
							return current.hasHistory("useCard", evt => {
								return evt.card.name == event.card.name && evt != event.getParent() && evt.targets && evt.targets.includes(player);
							});
						}) &&
						(event.card.name == "sha" || get.type(event.card) == "trick")
					);
				},
				content: function () {
					trigger.getParent().excluded.add(player);
				},
				ai: {
					effect: {
						target: (card, player, target) => {
							if (player === target) return;
							if (
								game.hasPlayer2(current => {
									return current.hasHistory("useCard", evt => evt.card.name == card.name && evt.targets && evt.targets.includes(target));
								}) &&
								(card.name == "sha" || get.type(card) == "trick")
							)
								return "zeroplayertarget";
						},
					},
				},
			},
			//董贵人
			dclianzhi: {
				audio: 2,
				trigger: { player: "dying" },
				usable: 1,
				forced: true,
				locked: false,
				derivation: "dcshouze",
				group: ["dclianzhi_connect", "dclianzhi_reproach"],
				filter: function (event, player) {
					return player.getStorage("dclianzhi").filter(i => i && i.isIn()).length;
				},
				content: function () {
					player.recover();
					game.asyncDraw([player].concat(player.getStorage("dclianzhi").filter(i => i && i.isIn())).sortBySeat());
				},
				ai: {
					threaten: 0.6,
				},
				subSkill: {
					connect: {
						audio: "dclianzhi",
						trigger: {
							player: "enterGame",
							global: "phaseBefore",
						},
						forced: true,
						direct: true,
						filter: function (event, player) {
							return game.hasPlayer(current => current != player) && (event.name != "phase" || game.phaseNumber == 0);
						},
						content: function () {
							"step 0";
							player
								.chooseTarget("连枝：请选择一名其他角色", lib.translate.dclianzhi_info, true, (card, player, target) => {
									return target != player && !player.getStorage("dclianzhi").includes(target);
								})
								.set("ai", target => {
									var att = get.attitude(_status.event.player, target);
									if (att > 0) return att + 1;
									if (att == 0) return Math.random();
									return att;
								})
								.set("animate", false);
							"step 1";
							if (result.bool) {
								var target = result.targets[0];
								player.logSkill("dclianzhi");
								player.markAuto("dclianzhi", [target]);
							}
						},
					},
					reproach: {
						audio: "dclianzhi",
						trigger: { global: "dieAfter" },
						filter: function (event, player) {
							return player.getStorage("dclianzhi").includes(event.player);
						},
						direct: true,
						content: function () {
							"step 0";
							var num = Math.max(1, player.countMark("dclingfang"));
							player
								.chooseTarget(get.prompt("dclianzhi"), "选择一名其他角色，你与其各获得〖受责〗，且其获得" + num + "枚“绞”标记", (card, player, target) => {
									return target != player;
								})
								.set("ai", target => -get.attitude(_status.event.player, target));
							"step 1";
							if (result.bool) {
								var target = result.targets[0];
								player.logSkill("dclianzhi_reproach", target);
								player.addSkills("dcshouze");
								target.addSkills("dcshouze");
								target.addMark("dclingfang", Math.max(1, player.countMark("dclingfang")));
							}
						},
					},
				},
			},
			dclingfang: {
				audio: 2,
				trigger: {
					player: "phaseZhunbeiBegin",
					global: "useCardAfter",
				},
				forced: true,
				filter: function (event, player) {
					if (event.name != "useCard") return true;
					if (get.color(event.card) != "black") return false;
					if (event.player == player) return !event.targets || !event.targets.includes(player);
					return event.targets && event.targets.includes(player);
				},
				content: function () {
					player.addMark("dclingfang", 1);
				},
				ai: {
					combo: "dcfengying",
				},
				marktext: "绞",
				intro: {
					name: "绞",
					name2: "绞",
					content: "mark",
				},
			},
			dcfengying: {
				audio: 2,
				enable: "chooseToUse",
				group: "dcfengying_record",
				locked: false,
				filter: function (event, player) {
					var mark = player.countMark("dclingfang");
					if (mark <= 0 || !player.hasCard(card => get.number(card) <= mark, "hs")) return false;
					var storage = player.getStorage("dcfengying");
					if (!storage.length) return false;
					var storage2 = player.getStorage("dcfengying_used");
					return storage.some(name => {
						return !storage2.includes(name) && event.filterCard(get.autoViewAs({ name }, "unsure"), player, event);
					});
				},
				hiddenCard: function (player, name) {
					var list = player.getStorage("dcfengying");
					if (player.getStorage("dcfengying_used").includes(name)) return false;
					return list.includes(name) && player.hasCard(card => get.number(card) <= player.countMark("dclingfang"), "hs");
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = [];
						for (var name of player.storage.dcfengying) {
							if (get.type(name) == "basic") list.push(["基本", "", name]);
							if (get.type(name) == "trick") list.push(["锦囊", "", name]);
						}
						return ui.create.dialog("风影", [list, "vcard"]);
					},
					filter: function (button, player) {
						var card = { name: button.link[2], storage: { dcfengying: true } };
						if (player.getStorage("dcfengying_used").includes(card.name)) return false;
						return _status.event.getParent().filterCard(get.autoViewAs(card, "unsure"), player, _status.event.getParent());
					},
					check: function (button) {
						var player = _status.event.player;
						if (player.countCards("hs", button.link[2]) > 0) return 0;
						if (button.link[2] == "wugu") return;
						var effect = player.getUseValue(button.link[2]);
						if (effect > 0) return effect;
						return 0;
					},
					backup: function (links, player) {
						return {
							filterCard: function (card, player, event) {
								return get.number(card) <= player.countMark("dclingfang");
							},
							audio: "dcfengying",
							selectCard: 1,
							popname: true,
							check: function (card) {
								return 6 - get.value(card) + get.number(card) / 15;
							},
							position: "hs",
							viewAs: {
								name: links[0][2],
								storage: { dcfengying: true },
							},
							precontent: function () {
								player.logSkill("dcfengying");
								player.addTempSkill("dcfengying_used");
								player.markAuto("dcfengying_used", [event.result.card.name]);
								event.getParent().addCount = false;
								delete event.result.skill;
							},
						};
					},
					prompt: function (links, player) {
						return "将一张点数不大于" + get.strNumber(player.countMark("dclingfang")) + "的手牌当做" + get.translation(links[0][2]) + "使用（无距离和次数限制）";
					},
				},
				mod: {
					targetInRange: function (card) {
						if (card.storage && card.storage.dcfengying) return true;
					},
					cardUsable: function (card, player) {
						if (card.storage && card.storage.dcfengying) return Infinity;
					},
				},
				ai: {
					order: 4,
					result: {
						player: function (player) {
							if (_status.event.dying) return get.attitude(player, _status.event.dying);
							return 1;
						},
					},
					threaten: 2,
					combo: "dclingfang",
				},
				subSkill: {
					record: {
						trigger: { global: "phaseBegin" },
						filter: function (event, player) {
							return ui.discardPile.childNodes.length > 0;
						},
						forced: true,
						popup: false,
						content: function () {
							player.storage.dcfengying = [];
							for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
								var card = ui.discardPile.childNodes[i];
								if (get.color(card, false) != "black") continue;
								if (!["basic", "trick"].includes(get.type(card))) continue;
								player.storage.dcfengying.add(card.name);
							}
							player.storage.dcfengying.sort((a, b) => {
								return lib.inpile.indexOf(a) - lib.inpile.indexOf(b);
							});
						},
					},
					used: {
						charlotte: true,
						onremove: true,
						intro: {
							content: "已使用过$",
						},
					},
				},
			},
			dcshouze: {
				audio: true,
				trigger: { player: "phaseJieshuBegin" },
				forced: true,
				filter: function (event, player) {
					return player.countMark("dclingfang") > 0;
				},
				content: function () {
					"step 0";
					player.removeMark("dclingfang", 1);
					"step 1";
					var card = get.discardPile(card => get.color(card, false) == "black");
					if (card) player.gain(card, "gain2");
					player.loseHp();
				},
				ai: {
					combo: "dclingfang",
					neg: true
				},
			},
			//袁姬
			dcmengchi: {
				audio: "dcfangdu",
				trigger: { player: ["linkBefore", "damageEnd"] },
				forced: true,
				filter: function (event, player) {
					var num = player.getStat("gain");
					if (num && num > 0) return false;
					if (event.name == "link") return !player.isLinked();
					return event.hasNature();
				},
				content: function () {
					if (trigger.name == "link") trigger.cancel();
					else player.recover();
				},
				ai: {
					effect: {
						target: function (card, player, target, current) {
							if (get.itemtype(player) != "player" || player._dcmengchi_aiChecking || target.getStat("gain")) return;
							if (card.name == "tiesuo" && !target.isLinked()) return 0;
							if (player.hasSkillTag("jueqing", false, target)) return;
							if (!get.tag(card, "damage") || get.tag(card, "natureDamage")) return;
							if (target.hp <= 1) return 0.75;
							if (
								!target.hasSkillTag("filterDamage", null, {
									player: player,
									card: card,
								}) &&
								player.hasSkillTag("damageBonus", false, {
									target: target,
									card: card,
								})
							) {
								if (target.hp > 2) return 0.5;
								return 0.75;
							}
							if (get.attitude(player, target) > 0) return [0, 0];
							var sha = player.getCardUsable({ name: "sha" });
							player._dcmengchi_aiChecking = true;
							var num = player.countCards("h", function (card) {
								if (get.name(card) == "sha") {
									if (sha == 0) return false;
									else sha--;
								}
								return player.canUse(card, target) && get.effect(target, card, player, player) > 0;
							});
							delete player._dcmengchi_aiChecking;
							if (player.hasSkillTag("damage")) num++;
							if (num < 2) return [0, 0];
						},
					},
				},
				mod: {
					cardEnabled: function (card, player) {
						if (!player.getStat("gain")) return false;
					},
					cardSavable: function (card, player) {
						if (!player.getStat("gain")) return false;
					},
				},
			},
			dcfangdu: {
				audio: 2,
				trigger: {
					player: "damageEnd",
				},
				forced: true,
				filter: function (event, player) {
					if (player == _status.currentPhase) return false;
					return (
						(!event.hasNature() &&
							!player.hasHistory(
								"damage",
								evt => {
									return !evt.hasNature() && evt != event;
								},
								event
							)) ||
						(event.hasNature() &&
							!player.hasHistory(
								"damage",
								evt => {
									return evt.hasNature() && evt != event;
								},
								event
							) &&
							event.source &&
							event.source.isIn() &&
							event.source.countGainableCards(player, "h"))
					);
				},
				content: function () {
					"step 0";
					if (!trigger.hasNature()) {
						player.recover();
					} else {
						var cards = trigger.source.getGainableCards(player, "h");
						if (cards.length) {
							player.gain(cards.randomGet(), trigger.source, "giveAuto", "bySelf");
						}
					}
				},
				ai: {
					effect: {
						target: function (card, player, target) {
							if (player._dcfangdu_aiChecking || target == _status.currentPhase) return;
							if (!get.tag(card, "damage") || player.hasSkillTag("jueqing", false, target)) return;
							if (_status.event.getParent("useCard", true) || _status.event.getParent("_wuxie", true)) return;
							if (!get.tag(card, "natureDamage")) {
								if (target.hasHistory("damage", evt => !evt.hasNature())) return 1.5;
								else if (
									target.hp <= 1 ||
									(player.hasSkillTag("damageBonus", false, {
										target: target,
										card: card,
									}) &&
										!target.hasSkillTag("filterDamage", null, {
											player: player,
											card: card,
										}))
								)
									return 0.75;
								else {
									if (get.attitude(player, target) > 0) return [0, 0];
									var sha = player.getCardUsable({ name: "sha" });
									player._dcfangdu_aiChecking = true;
									var num = player.countCards("h", function (card) {
										if (get.name(card) == "sha") {
											if (sha == 0) return false;
											else sha--;
										}
										return player.canUse(card, target) && get.effect(target, card, player, player) > 0;
									});
									delete player._dcfangdu_aiChecking;
									if (player.hasSkillTag("damage")) num++;
									if (num < 2) return [0, 0];
								}
							}
							if (get.tag(card, "natureDamage") && !target.hasHistory("damage", evt => evt.hasNature()) && player.countCards("he") > 1) return [1, 1, 1, -1];
						},
					},
				},
			},
			dcjiexing: {
				audio: 2,
				trigger: { player: ["recoverEnd", "damageEnd", "loseHpEnd"] },
				check: function (event, player) {
					var current = _status.currentPhase;
					if (!player.hasSkill("dcmengchi") || get.attitude(player, current) >= 0) return true;
					var num = player.getStat("gain");
					if (num && num > 0) return true;
					if (current.countCards("hs", card => current.canUse(card, player) && get.effect(player, card, current, player) < 0) >= 2) return false;
					return true;
				},
				frequent: "check",
				content: function () {
					player.draw().gaintag = ["dcjiexing"];
					player.addTempSkill("dcjiexing_add");
				},
				subSkill: {
					add: {
						charlotte: true,
						mod: {
							ignoredHandcard: function (card, player) {
								if (card.hasGaintag("dcjiexing")) return true;
							},
							cardDiscardable: function (card, player, name) {
								if (name == "phaseDiscard" && card.hasGaintag("dcjiexing")) return false;
							},
						},
						onremove: function (player) {
							player.removeGaintag("dcjiexing");
						},
					},
				},
				ai: {
					effect: {
						target: function (card, player, target) {
							if (get.tag(card, "recover")) return [1, 1];
							if (get.tag(card, "damage")) {
								var draw = 0.9;
								if (target.hasSkill("dcmengchi") && target.getStat("gain")) draw = 1.8;
								if (
									target.hp <= 1 ||
									(card.name == "sha" && player.hasSkill("jiu")) ||
									(get.itemtype(player) == "player" &&
										!target.hasSkillTag("filterDamage", null, {
											player: player,
											card: card,
										}) &&
										player.hasSkillTag("damageBonus", false, {
											target: target,
											card: card,
										}))
								) {
									if (target.hp > 2) return [1, draw];
									return;
								}
								return [1, draw];
							}
						},
					},
				},
			},
			//朱建平
			olddcxiangmian: {
				audio: "dcxiangmian",
				trigger: { global: "phaseJieshuBegin" },
				filter: function (event, player) {
					return !player.getStorage("olddcxiangmian").includes(event.player) && player != event.player;
				},
				logTarget: "player",
				check: function (event, player) {
					return get.attitude(player, event.player) < 0;
				},
				content: function () {
					"step 0";
					player.judge(card => 2 / Math.sqrt(get.number(card, false))).set("judge2", result => result.bool);
					"step 1";
					player.markAuto("olddcxiangmian", [trigger.player]);
					trigger.player.addSkill("olddcxiangmian_countdown");
					if (!trigger.player.storage["olddcxiangmian_countdown"]) trigger.player.storage["olddcxiangmian_countdown"] = [];
					[player.playerid, result.suit, result.number].forEach(i => trigger.player.storage["olddcxiangmian_countdown"].push(i));
					trigger.player.markSkill("olddcxiangmian_countdown");
				},
				intro: { content: "已对$发动过技能" },
				ai: {
					expose: 0.3,
				},
				subSkill: {
					countdown: {
						trigger: { player: "useCardAfter" },
						mark: true,
						marktext: "噬",
						silent: true,
						forced: true,
						charlotte: true,
						intro: {
							markcount: function (storage) {
								if (storage) {
									var list = storage.filter((_, i) => i % 3 == 2);
									return Math.min.apply(null, list);
								}
							},
							content: function (storage, player) {
								var str = "使用";
								for (var i = 0; i < storage.length / 3; i++) {
									str += get.cnNumber(storage[i * 3 + 2]) + "张" + get.translation(storage[i * 3 + 1]) + "牌、";
								}
								str = str.slice(0, -1);
								str += "后，失去等同于体力值的体力";
								return str;
							},
						},
						filter: function (event, player) {
							if (!player.getStorage("olddcxiangmian_countdown").length) return false;
							return player
								.getStorage("olddcxiangmian_countdown")
								.filter((_, i) => i % 3 == 1)
								.includes(get.suit(event.card, player));
						},
						content: function () {
							"step 0";
							var storage = player.getStorage("olddcxiangmian_countdown");
							for (var i = 0; i < storage.length / 3; i++) {
								if (storage[i * 3 + 1] == get.suit(trigger.card, player)) {
									storage[i * 3 + 2]--;
								}
							}
							player.markSkill("olddcxiangmian_countdown");
							"step 1";
							var storage = player.getStorage("olddcxiangmian_countdown");
							for (var i = 0; i < storage.length / 3; i++) {
								if (storage[i * 3 + 2] <= 0) {
									if (!event.isMine() && !event.isOnline()) game.delayx();
									player.logSkill("olddcxiangmian_countdown");
									var target = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
									player.storage["olddcxiangmian_countdown"].splice(i * 3, 3);
									if (!player.getStorage("olddcxiangmian_countdown").length) {
										player.removeSkill("olddcxiangmian_countdown");
									}
									if (player.hp > 0) player.loseHp(player.hp);
									i--;
								}
							}
						},
						ai: {
							effect: {
								player_use: function (card, player, target) {
									if (typeof card != "object") return;
									var storage = player.getStorage("olddcxiangmian_countdown");
									for (var i = 0; i < storage.length / 3; i++) {
										if (get.suit(card, player) == storage[i * 3 + 1] && storage[i * 3 + 2] == 1) {
											if (!player.canSave(player) && !get.tag(card, "save")) return [0, -100, 0, 0];
											return [1, -2 * player.hp, 1, 0];
										}
									}
								},
							},
						},
					},
				},
			},
			dcxiangmian: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return game.hasPlayer(current => lib.skill.dcxiangmian.filterTarget(null, player, current));
				},
				filterTarget: function (card, player, target) {
					return !player.getStorage("dcxiangmian").includes(target) && player != target;
				},
				content: function () {
					"step 0";
					target.judge(card => -2 / Math.sqrt(get.number(card, false))).set("judge2", result => (result.bool === false ? true : false));
					"step 1";
					player.markAuto("dcxiangmian", [target]);
					target.addSkill("dcxiangmian_countdown");
					if (!target.storage["dcxiangmian_countdown"]) target.storage["dcxiangmian_countdown"] = [];
					[player.playerid, result.suit, result.number].forEach(i => target.storage["dcxiangmian_countdown"].push(i));
					target.markSkill("dcxiangmian_countdown");
				},
				intro: { content: "已对$发动过技能" },
				ai: {
					expose: 0.3,
					order: 10,
					result: { target: -5 },
				},
				subSkill: {
					countdown: {
						trigger: { player: "useCardAfter" },
						mark: true,
						marktext: "💀",
						silent: true,
						forced: true,
						charlotte: true,
						intro: {
							markcount: function (storage) {
								if (storage) {
									var list = storage.filter((_, i) => i % 3 == 2);
									return Math.min.apply(null, list);
								}
							},
							content: function (storage, player) {
								if (!storage) return;
								var str = "使用";
								str +=
									get.cnNumber(
										Math.min.apply(
											null,
											storage.filter((_, i) => i % 3 == 2)
										)
									) + "张牌后，或使用一张";
								for (var i = 0; i < storage.length / 3; i++) {
									str += get.translation(storage[i * 3 + 1]) + "、";
								}
								str = str.slice(0, -1);
								str += "后，失去等同于体力值的体力";
								return str;
							},
						},
						filter: function (event, player) {
							if (!player.getStorage("dcxiangmian_countdown").length) return false;
							//return (player.getStorage('dcxiangmian_countdown').filter((_,i)=>i%3==1)).includes(get.suit(event.card,player));
							return true;
						},
						content: function () {
							"step 0";
							var storage = player.getStorage("dcxiangmian_countdown");
							for (var i = 0; i < storage.length / 3; i++) {
								if (storage[i * 3 + 1] == get.suit(trigger.card, player)) {
									storage[i * 3 + 2] = 0;
								} else storage[i * 3 + 2]--;
							}
							player.markSkill("dcxiangmian_countdown");
							"step 1";
							var storage = player.getStorage("dcxiangmian_countdown");
							for (var i = 0; i < storage.length / 3; i++) {
								if (storage[i * 3 + 2] <= 0) {
									if (!event.isMine() && !event.isOnline()) game.delayx();
									player.logSkill("dcxiangmian_countdown");
									player.storage["dcxiangmian_countdown"].splice(i * 3, 3);
									if (!player.getStorage("dcxiangmian_countdown").length) {
										player.removeSkill("dcxiangmian_countdown");
									}
									if (player.hp > 0) player.loseHp(player.hp);
									i--;
								}
							}
						},
						ai: {
							effect: {
								player_use: function (card, player, target) {
									if (typeof card != "object") return;
									var storage = player.getStorage("dcxiangmian_countdown");
									for (var i = 0; i < storage.length / 3; i++) {
										if ((storage[i * 3 + 2] == 1 || get.suit(card, player) == storage[i * 3 + 1])) {
											if (!player.canSave(player) && !get.tag(card, "save")) return [0, -100, 0, 0];
											return [1, -2 * player.hp, 1, 0];
										}
									}
								},
							},
						},
					},
				},
			},
			dctianji: {
				audio: 2,
				trigger: { global: "cardsDiscardAfter" },
				forced: true,
				filter: function (event, player) {
					var evt = event.getParent().relatedEvent;
					return evt && evt.name == "judge" && event.cards.filterInD("d").length;
				},
				content: function () {
					var card = trigger.cards[0],
						cards = [],
						func = ["type2", "suit", "number"];
					for (var fn of func) {
						var cardx = get.cardPile2(cardxx => {
							if (get[fn](card, player) == get[fn](cardxx, player) && !cards.includes(cardxx)) {
								return true;
							}
						});
						if (cardx) cards.push(cardx);
					}
					/*if(cards.length&&!player.isMaxHandcard(true)) player.draw();
					else*/ if (cards.length) player.gain(cards, "gain2");
				},
			},
			//赵直
			dctongguan: {
				trigger: {
					global: "phaseBegin",
				},
				filter: function (event, player) {
					return (
						event.player
							.getAllHistory()
							.filter(history => {
								return history.isMe && !history.isSkipped;
							})
							.indexOf(event.player.getHistory()) === 0 &&
						lib.skill.dctongguan.derivation.some(i => {
							return (player.getStorage("dctongguan")[i] || 0) < 2;
						})
					);
				},
				forced: true,
				locked: false,
				logTarget: "player",
				derivation: ["dctongguan_wuyong", "dctongguan_gangying", "dctongguan_duomou", "dctongguan_guojue", "dctongguan_renzhi"],
				content: function () {
					"step 0";
					var skills = lib.skill.dctongguan.derivation.slice();
					player
						.chooseControl(
							skills.filter(i => {
								return (player.getStorage("dctongguan")[i] || 0) < 2;
							})
						)
						.set(
							"choiceList",
							skills.map(i => {
								var info = "";
								switch (player.getStorage("dctongguan")[i]) {
									case 1:
										info = ' style="opacity:0.65;"';
										break;
									case 2:
										info = ' style="text-decoration:line-through; opacity:0.3;"';
										break;
								}
								return '<div class="skill">「' + get.translation(lib.translate[i + "_ab"] || get.translation(i).slice(0, 2)) + "」</div>" + "<div" + info + ">" + get.skillInfoTranslation(i, player) + "（已选过" + get.cnNumber(player.getStorage("dctongguan")[i] || 0) + "次）" + "</div>";
							})
						)
						.set("displayIndex", false)
						.set("prompt", "统观：为" + get.translation(trigger.player) + "选择一个属性")
						.set("ai", function () {
							var controls = _status.event.controls,
								target = _status.event.getTrigger().player;
							var str = target
								.getSkills(null, false, false)
								.map(i => get.skillInfoTranslation(i))
								.join("");
							var choices = [];
							if (controls.includes("dctongguan_wuyong") && /你对\S{1,15}造成\S{1,10}伤害/.test(str)) choices.push("dctongguan_wuyong");
							if (controls.includes("dctongguan_gangying") && /回复\S{1,5}体力/.test(str) && _status.event.player.getFriends().length) choices.push("dctongguan_gangying");
							if (controls.includes("dctongguan_duomou") && /你(可|可以)?摸\S{1,3}张牌/.test(str)) choices.push("dctongguan_duomou");
							if (controls.includes("dctongguan_guojue") && /(当【过河拆桥】使用|((弃置|获得)\S{1,5}其他角色\S{1,7}牌|))/.test(str)) choices.push("dctongguan_guojue");
							if (controls.includes("dctongguan_renzhi") && /交给\S{0,5}其他角色/.test(str) && _status.event.player.getFriends().length) choices.push("dctongguan_renzhi");
							if (choices.length) return choices.randomGet();
							return _status.event.controls.randomGet();
						});
					"step 1";
					if (result.control) {
						var skill = result.control;
						var func = lib.skill.dctongguan.localMark;
						if (event.player == game.me) func(skill, trigger.player);
						else if (event.isOnline()) player.send(func, skill, trigger.player);
						// game.log(player,'为',trigger.player,'选择了','#g「'+get.translation(skill)+'」','属性');
						game.log(player, "为", trigger.player, "选择了", "#g一个属性");
						// player.popup(skill);
						trigger.player.addSkill(skill);
						if (!player.storage.dctongguan) player.storage.dctongguan = {};
						if (!player.storage.dctongguan[skill]) player.storage.dctongguan[skill] = 0;
						player.storage.dctongguan[skill]++;
					}
				},
				localMark: function (skill, player) {
					var name = skill,
						info;
					if (player.marks[name]) player.updateMarks();
					if (lib.skill[name]) info = lib.skill[name].intro;
					if (!info) return;
					if (player.marks[name]) player.marks[name].info = info;
					else player.marks[name] = player.mark(name, info);
					player.updateMarks();
				},
				ai: {
					combo: "dcmengjie",
				},
				subSkill: {
					forceFinish: { charlotte: true },
					wuyong: {
						marktext: "勇",
						intro: {
							name: "武勇",
							content: "属性目标：造成伤害",
						},
						charlotte: true,
						silent: true,
						nopop: true,
					},
					gangying: {
						marktext: "刚",
						intro: {
							name: "刚硬",
							content: "属性目标：回复体力，或手牌数大于体力值",
						},
						charlotte: true,
						silent: true,
						nopop: true,
					},
					duomou: {
						marktext: "谋",
						intro: {
							name: "多谋",
							content: "属性目标：于摸牌阶段外摸牌",
						},
						charlotte: true,
						silent: true,
						nopop: true,
					},
					guojue: {
						marktext: "决",
						intro: {
							name: "果决",
							content: "属性目标：弃置或获得其他角色牌",
						},
						charlotte: true,
						silent: true,
						nopop: true,
					},
					renzhi: {
						marktext: "仁",
						intro: {
							name: "仁智",
							content: "属性目标：交给其他角色牌",
						},
						charlotte: true,
						silent: true,
						nopop: true,
					},
				},
			},
			dcmengjie: {
				trigger: {
					global: "phaseEnd",
				},
				forced: true,
				direct: true,
				locked: false,
				filter: function (event, player) {
					var target = event.player;
					if (
						(target.hasSkill("dctongguan_gangying") &&
							(target.countCards("h") > target.hp ||
								game.getGlobalHistory("changeHp", function (evt) {
									return evt.player == target && (evt.getParent().name == "recover" || target.countCards("h") > target.hp);
								}).length > 0)) ||
						(target.hasSkill("dctongguan_wuyong") && target.getHistory("sourceDamage").length) ||
						(target.hasSkill("dctongguan_duomou") && target.getHistory("gain", evt => evt.getParent().name == "draw" && evt.getParent("phaseDraw").name != "phaseDraw").length)
					) {
						return true;
					}
					var guojue = false,
						renzhi = false;
					game.countPlayer2(current => {
						if (current == target) return false;
						if (
							!guojue &&
							current.hasHistory("lose", evt => {
								if (evt.type == "discard") {
									if ((evt.discarder || evt.getParent(2).player) != target) return false;
									if (!evt.getl(current).cards2.length) return false;
									return true;
								} else if (evt.type == "gain") {
									var evtx = evt.getParent();
									if (evtx.giver || evtx.getParent().name == "gift") return false;
									var cards = evtx.getg(target);
									if (!cards.length) return false;
									var cards2 = evtx.getl(current).cards2;
									for (var card of cards2) {
										if (cards.includes(card)) return true;
									}
								}
								return false;
							})
						)
							guojue = true;
						if (
							!renzhi &&
							current.hasHistory("gain", evt => {
								if (evt.giver != target || evt.getParent().name == "gift") return false;
								return evt.cards.length;
							})
						)
							renzhi = true;
					});
					return (target.hasSkill("dctongguan_guojue") && guojue) || (target.hasSkill("dctongguan_renzhi") && renzhi);
				},
				rules: [
					target => target.getHistory("sourceDamage").length,
					target =>
						target.countCards("h") > target.hp ||
						game.getGlobalHistory("changeHp", function (evt) {
							return evt.player == target && evt.getParent().name == "recover";
						}).length > 0 ||
						target.countCards("h") > target.hp,
					target => target.getHistory("gain", evt => evt.getParent().name == "draw" && evt.getParent("phaseDraw").name != "phaseDraw").length,
					(target, bool) => bool,
					(target, bool) => bool,
				],
				content: function () {
					"step 0";
					event.nowProperty = 0;
					var target = trigger.player;
					var guojue = false,
						renzhi = false;
					game.countPlayer2(current => {
						if (current == target) return false;
						if (
							!guojue &&
							current.hasHistory("lose", evt => {
								if (evt.type == "discard") {
									if ((evt.discarder || evt.getParent(2).player) != target) return false;
									if (!evt.getl(current).cards2.length) return false;
									return true;
								} else if (evt.type == "gain") {
									var evtx = evt.getParent();
									if (evtx.giver || evtx.getParent().name == "gift") return false;
									var cards = evtx.getg(target);
									if (!cards.length) return false;
									var cards2 = evtx.getl(current).cards2;
									for (var card of cards2) {
										if (cards.includes(card)) return true;
									}
								}
								return false;
							})
						)
							guojue = true;
						if (
							!renzhi &&
							current.hasHistory("gain", evt => {
								if (evt.giver != target || evt.getParent().name == "gift") return false;
								return evt.cards.length;
							})
						)
							renzhi = true;
					});
					event.guojue = guojue;
					event.renzhi = renzhi;
					"step 1";
					if (event.nowProperty >= 5) {
						event.finish();
						return;
					}
					var skills = lib.skill.dctongguan.derivation;
					if (trigger.player.hasSkill(skills[event.nowProperty]) && lib.skill.dcmengjie.rules[event.nowProperty](trigger.player, event[event.nowProperty == 3 ? "guojue" : "renzhi"])) {
						event.goto(2 + event.nowProperty * 2);
					} else event.redo();
					event.nowProperty++;
					"step 2";
					if (!game.hasPlayer(current => current != player)) event._result = { bool: false };
					else player.chooseTarget("梦解：对一名其他角色造成1点伤害", true, lib.filter.notMe).set("ai", target => get.damageEffect(target, player, player));
					"step 3";
					if (result.bool) {
						player.logSkill("dcmengjie", result.targets[0]);
						result.targets[0].damage();
					}
					game.delayx();
					event.goto(1);
					"step 4";
					if (game.hasPlayer(target => target != player && target.isDamaged()))
						player
							.chooseTarget("梦解：令一名角色回复1点体力", function (card, player, target) {
								return target.isDamaged();
							})
							.set("ai", target => get.recoverEffect(target, player, player));
					else event._result = { bool: false };
					"step 5";
					if (result.bool) {
						player.logSkill("dcmengjie", result.targets[0]);
						result.targets[0].recover();
					}
					game.delayx();
					event.goto(1);
					"step 6";
					player.logSkill("dcmengjie");
					player.draw(2);
					"step 7";
					game.delayx();
					event.goto(1);
					"step 8";
					if (game.hasPlayer(target => target.countDiscardableCards(player, "hej")))
						player
							.chooseTarget("梦解：弃置一名角色区域内至多两张牌", true, (card, player, target) => {
								return target.countDiscardableCards(player, "hej");
							})
							.set("ai", target => get.effect(target, { name: "guohe" }, player, player));
					else event._result = { bool: false };
					"step 9";
					if (result.bool) {
						player.logSkill("dcmengjie", result.targets[0]);
						player.discardPlayerCard(result.targets[0], true, "hej", [1, 2]);
					}
					game.delayx();
					event.goto(1);
					"step 10";
					if (!game.hasPlayer(current => current != player)) event._result = { bool: false };
					else
						player
							.chooseTarget("梦解：令一名其他角色将手牌补至上限", true, (card, player, target) => {
								return target != player;
							})
							.set("ai", target => {
								var att = get.attitude(_status.event.player, target);
								if (target.hasSkillTag("nogain")) att /= 6;
								if (att > 2) {
									return Math.min(5, target.maxHp) - target.countCards("h");
								}
								return att / 3;
							});
					"step 11";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("dcmengjie", target);
						var num = Math.min(5, target.maxHp - target.countCards("h"));
						target.draw(num);
					}
					game.delayx();
					event.goto(1);
				},
				ai: {
					combo: "dctongguan",
				},
			},
			//刘晔
			dcpoyuan: {
				audio: 2,
				trigger: {
					global: "phaseBefore",
					player: ["phaseZhunbeiBegin", "enterGame"],
				},
				filter: function (event, player) {
					if (event.name == "phase" && game.phaseNumber > 0) return false;
					if (player.getEquip("pilitoushiche")) {
						return game.hasPlayer(function (current) {
							return current != player && current.countDiscardableCards(player, "he") > 0;
						});
					} else {
						return player.hasEquipableSlot(5);
					}
				},
				direct: true,
				content: function () {
					"step 0";
					if (player.getEquip("pilitoushiche")) {
						event.goto(2);
						player
							.chooseTarget(get.prompt("dcpoyuan"), "弃置一名其他角色的至多两张牌", function (card, player, target) {
								return target != player && target.countDiscardableCards(player, "he") > 0;
							})
							.set("ai", function (target) {
								var player = _status.event.player,
									cards = target.getDiscardableCards(player, "he");
								var att = get.attitude(player, target);
								if (att < 0 && target.hasSkillTag("noe")) att /= 2;
								var zheng = [],
									fu = [];
								for (var i of cards) {
									var val = get.value(i, target);
									if (val > 0) zheng.push(i);
									else fu.push(i);
								}
								zheng.sort((a, b) => get.value(b, target) - get.value(a, target));
								fu.sort((a, b) => get.value(b, target) - get.value(a, target));
								zheng = zheng.slice(0, 2);
								fu = fu.slice(0, 2);
								var eff1 = 0,
									eff2 = 0;
								for (var i of zheng) eff1 += get.value(i, target);
								for (var i of fu) {
									if (get.position(i) == "e") eff2 += 1 - get.value(i, target);
								}
								return -att * Math.max(eff1, eff2);
							});
					} else {
						player.chooseBool(get.prompt("dcpoyuan"), "装备一张【霹雳投石车】").set("ai", function () {
							return true;
						});
					}
					"step 1";
					if (result.bool) {
						player.logSkill("dcpoyuan");
						var card = game.createCard("pilitoushiche", "diamond", 9);
						player.$gain2(card);
						game.delayx();
						player.equip(card);
					}
					event.finish();
					"step 2";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("dcpoyuan", target);
						player.discardPlayerCard(target, true, "he", [1, 2]);
					}
				},
			},
			dchuace: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return event.dchuace && event.dchuace.length > 0 && player.countCards("hs") > 0;
				},
				onChooseToUse: function (event) {
					if (game.online || event.dchuace) return;
					var list = lib.inpile.filter(function (i) {
						return get.type(i) == "trick" && lib.filter.filterCard({ name: i }, event.player, event);
					});
					if (!list.length) {
						event.set("dchuace", list);
						return;
					}
					var history = _status.globalHistory;
					var stop = false;
					for (var i = history.length - 1; i >= 0; i--) {
						var evt = history[i];
						if (!stop) {
							if (evt.isRound) stop = true;
							continue;
						} else {
							for (var j of evt.useCard) list.remove(j.card.name);
							if (evt.isRound) break;
						}
					}
					event.set("dchuace", list);
				},
				chooseButton: {
					dialog: function (event, player) {
						return ui.create.dialog("画策", [event.dchuace, "vcard"], "hidden");
					},
					check: function (button) {
						var player = _status.event.player,
							card = { name: button.link[2] };
						return player.getUseValue(card);
					},
					backup: function (links, player) {
						return {
							audio: "dchuace",
							viewAs: { name: links[0][2] },
							ai1: card => 7 - get.value(card),
							filterCard: true,
							position: "hs",
							popname: true,
						};
					},
					prompt: function (links, player) {
						return "将一张手牌当做【" + get.translation(links[0][2]) + "】使用";
					},
				},
				ai: {
					order: 6,
					result: { player: 1 },
				},
				subSkill: { backup: {} },
			},
			pilitoushiche: {
				trigger: { player: ["useCard", "respond"] },
				forced: true,
				equipSkill: true,
				filter: function (event, player) {
					return get.type(event.card) == "basic";
				},
				content: function () {
					if (player == _status.currentPhase) trigger.baseDamage++;
					else player.draw();
				},
				mod: {
					targetInRange: function (card, player) {
						if (get.type(card) == "basic" && player == _status.currentPhase) return true;
					},
				},
			},
			//路易
			dcyaoyi: {
				audio: 2,
				getZhuanhuanji: function (player, bool) {
					var skills = player.getSkills(null, false, false).filter(function (i) {
						return get.is.zhuanhuanji(i, player);
					});
					if (!bool) return skills;
					if (!skills.length) return "none";
					var state = lib.skill.dcyaoyi.getState(player, skills[0]);
					for (var i = 1; i < skills.length; i++) {
						if (lib.skill.dcyaoyi.getState(player, skills[i]) != state) return "none";
					}
					return state;
				},
				getState: function (player, skill) {
					var info = get.info(skill),
						zhuanhuan = info.zhuanhuanji;
					if (zhuanhuan && zhuanhuan == "number") return player.countMark(skill) % 2 == 1;
					return Boolean(player.storage[skill]);
				},
				trigger: {
					player: "enterGame",
					global: "phaseBefore",
				},
				forced: true,
				filter: function (event, player) {
					if (event.name == "phase" && game.phaseNumber != 0) return false;
					return game.hasPlayer(function (current) {
						return lib.skill.dcyaoyi.getZhuanhuanji(current).length == 0;
					});
				},
				logTarget: function () {
					return game.filterPlayer(function (current) {
						return lib.skill.dcyaoyi.getZhuanhuanji(current).length == 0;
					});
				},
				content: function () {
					var targets = lib.skill.dcyaoyi.logTarget().sortBySeat();
					for (var target of targets) target.addSkills("dcshoutan");
					game.delayx();
				},
				global: "dcyaoyi_blocker",
				subSkill: {
					blocker: {
						mod: {
							targetEnabled: function (card, player, target) {
								if (
									player == target ||
									!game.hasPlayer(function (current) {
										return current.hasSkill("dcyaoyi");
									})
								)
									return;
								var state1 = lib.skill.dcyaoyi.getZhuanhuanji(player, true);
								if (state1 == "none") return;
								if (lib.skill.dcyaoyi.getZhuanhuanji(target, true) == state1) return false;
							},
							cardSavable: function (card, player, target) {
								if (
									player == target ||
									!game.hasPlayer(function (current) {
										return current.hasSkill("dcyaoyi");
									})
								)
									return;
								var state1 = lib.skill.dcyaoyi.getZhuanhuanji(player, true);
								if (state1 == "none") return;
								if (lib.skill.dcyaoyi.getZhuanhuanji(target, true) == state1) return false;
							},
						},
					},
				},
			},
			dcshoutan: {
				audio: 2,
				enable: "phaseUse",
				position: "h",
				filter: function (event, player) {
					if (player.hasSkill("dcyaoyi")) return !player.hasSkill("dcshoutan_blocker", null, null, false);
					return player.countCards("h") > 0 && !player.getStat("skill").dcshoutan;
				},
				selectCard: function () {
					if (_status.event.player.hasSkill("dcyaoyi")) return [0, 1];
					return [1, 1];
				},
				filterCard: function (card, player) {
					if (player.hasSkill("dcyaoyi")) return false;
					var color = get.color(card, player);
					if (player.storage.dcshoutan) return color == "black";
					return color != "black";
				},
				prompt: function () {
					var player = _status.event.player;
					if (player.hasSkill("dcyaoyi")) return "点击“确认”来变更转换技状态";
					if (player.storage.dcshoutan) return "弃置一张黑色手牌，变更转换技状态";
					return "弃置一张非黑色手牌，变更转换技状态";
				},
				check: function (card) {
					return 11 - get.value(card);
				},
				content: function () {
					player.changeZhuanhuanji("dcshoutan");
					player.addTempSkill("dcshoutan_blocker", {
						player: ["useCard1", "useSkillBegin", "phaseUseEnd"],
					});
				},
				zhuanhuanji: true,
				mark: true,
				marktext: "☯",
				intro: {
					content: function (storage, player) {
						if (storage) return "转换技。出牌阶段限一次，你可以弃置一张黑色手牌。";
						return "转换技。出牌阶段限一次，你可以弃置一张不为黑色的手牌。";
					},
				},
				ai: {
					order: 0.1,
					result: {
						player: function (player) {
							var base = 0;
							if (ui.selected.cards.length) base = get.value(ui.selected.cards[0]);
							var status = player.storage.dcshoutan;
							var cards = player.getCards("hs", function (card) {
								return !ui.selected.cards.includes(card);
							});
							for (var card of cards) {
								var val1 = player.getUseValue(card, null, true);
								player.storage.dcshoutan = !status;
								var val2 = 0;
								try {
									val2 = player.getUseValue(card, null, true);
								} catch (e) {
									player.storage.dcshoutan = status;
								}
								player.storage.dcshoutan = status;
								if (val2 > val1) base -= val2 - val1;
							}
							if (base < 0) return 1;
							return 0;
						},
					},
				},
				subSkill: { blocker: { charlotte: true } },
			},
			dcfuxue: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				direct: true,
				filter: function (event, player) {
					return player.hp > 0 && ui.discardPile.childNodes.length > 0;
				},
				content: function () {
					"step 0";
					var cards = Array.from(ui.discardPile.childNodes);
					var gains = cards.slice(0);
					var history = game.getAllGlobalHistory("cardMove", function (evt) {
						if (evt.name == "lose") return evt.position == ui.discardPile;
						return evt.name == "cardsDiscard";
					});
					for (var i = history.length - 1; i >= 0; i--) {
						var evt = history[i];
						var cards2 = evt.cards.filter(function (card) {
							return cards.includes(card);
						});
						if (cards2.length) {
							if (lib.skill.dcfuxue.isUse(evt)) {
								gains.removeArray(cards2);
							}
							cards.removeArray(cards2);
						}
						if (!cards.length) break;
					}
					if (gains.length) {
						var num = player.hp;
						player.chooseButton(["复学：选择获得" + (num > 0 ? "至多" : "") + get.cnNumber(num) + "张牌", gains], [1, num]).set("ai", function (button) {
							var player = _status.event.player,
								card = button.link;
							var getn = function (card) {
								return player.countCards("h", card.name) + ui.selected.buttons.filter(button => button.link.name == card.name).length;
							};
							var val = player.getUseValue(card);
							if (card.name == "tao" && getn(card) >= player.getDamagedHp()) return 0;
							if (card.name == "sha" && getn(card) >= player.getCardUsable("sha")) return 0;
							return val;
						});
					} else event.finish();
					"step 1";
					if (result.bool) {
						player.logSkill("dcfuxue");
						player.gain(result.links, "gain2").gaintag.add("dcfuxue");
					}
				},
				isUse: function (event) {
					if (event.name != "cardsDiscard") return false;
					var evtx = event.getParent();
					if (evtx.name != "orderingDiscard") return false;
					var evt2 = evtx.relatedEvent || evtx.getParent();
					return evt2.name == "phaseJudge" || evt2.name == "useCard";
				},
				group: "dcfuxue_draw",
				subSkill: {
					draw: {
						audio: "dcfuxue",
						trigger: { player: "phaseJieshuBegin" },
						forced: true,
						locked: false,
						mod: {
							aiOrder: function (player, card, num) {
								if (get.itemtype(card) == "card" && card.hasGaintag("dcfuxue")) return num + 0.5;
							},
						},
						filter: function (event, player) {
							return (
								player.hp > 0 &&
								!player.hasCard(function (card) {
									return card.hasGaintag("dcfuxue");
								}, "h")
							);
						},
						content: function () {
							player.draw(player.hp);
						},
					},
				},
			},
			//丁尚涴
			dcfengyan: {
				enable: "phaseUse",
				usable: 2,
				chooseButton: {
					dialog: function (event, player) {
						var dialog = ui.create.dialog("讽言：请选择一项", "hidden");
						dialog.add([
							[
								["gain", "令一名体力值不大于你的其他角色交给你一张手牌"],
								["sha", "视为对一名手牌数不大于你的其他角色使用一张【杀】"],
							],
							"textbutton",
						]);
						return dialog;
					},
					filter: function (button, player) {
						return !player.getStorage("dcfengyan_used").includes(button.link);
					},
					check: function (button) {
						var player = _status.event.player;
						if (
							button.link == "gain" &&
							game.hasPlayer(function (current) {
								return lib.skill.dcfengyan_gain.filterTarget(null, player, current) && get.effect(current, "dcfengyan_gain", player, player) > 0;
							})
						)
							return 4;
						if (
							button.link == "sha" &&
							game.hasPlayer(function (current) {
								return lib.skill.dcfengyan_sha.filterTarget(null, player, current) && get.effect(current, "dcfengyan_sha", player, player) > 0;
							})
						)
							return 4;
						return 2;
					},
					backup: function (links) {
						return get.copy(lib.skill["dcfengyan_" + links[0]]);
					},
					prompt: function (links) {
						if (links[0] == "gain") return "令一名体力值不大于你的其他角色交给你一张手牌";
						return "视为对一名手牌数不大于你的其他角色使用【杀】";
					},
				},
				ai: {
					order: 10,
					threaten: 1.7,
					result: { player: 1 },
				},
				subSkill: {
					used: {
						charlotte: true,
						onremove: true,
					},
					backup: { audio: "dcfengyan" },
					gain: {
						audio: "dcfengyan",
						filterTarget: function (card, player, target) {
							return target != player && target.hp <= player.hp && target.countCards("h") > 0;
						},
						filterCard: () => false,
						selectCard: -1,
						content: function () {
							"step 0";
							player.addTempSkill("dcfengyan_used", "phaseUseAfter");
							player.markAuto("dcfengyan_used", "gain");
							target.chooseCard("h", true, "交给" + get.translation(player) + "一张牌");
							"step 1";
							if (result.bool) target.give(result.cards, player);
						},
						ai: {
							tag: {
								loseCard: 1,
								gain: 1,
							},
							result: {
								player: 0.1,
								target: -1,
							},
						},
					},
					sha: {
						audio: "dcfengyan",
						filterTarget: function (card, player, target) {
							return target != player && target.countCards("h") <= player.countCards("h") && player.canUse("sha", target, false);
						},
						filterCard: () => false,
						selectCard: -1,
						content: function () {
							player.addTempSkill("dcfengyan_used", "phaseUseAfter");
							player.markAuto("dcfengyan_used", "sha");
							player.useCard(
								{
									name: "sha",
									isCard: true,
								},
								target,
								false
							);
						},
						ai: {
							result: {
								player: function (player, target) {
									return get.effect(
										target,
										{
											name: "sha",
											isCard: true,
										},
										player,
										player
									);
								},
							},
						},
					},
				},
			},
			dcfudao: {
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				forced: true,
				locked: false,
				filter: function (event, player) {
					return (event.name != "phase" || game.phaseNumber == 0) && game.hasPlayer(current => current != player);
				},
				content: function () {
					"step 0";
					player.chooseTarget(true, lib.filter.notMe, "抚悼：请选择一名“继子”", "你或“继子”每回合首次使用牌指定对方为目标后各摸两张牌；杀死你或“继子”的角色称为“决裂”。你或“继子”对“决裂”造成的伤害+1。“决裂”对你使用牌后，其本回合内不能再使用牌。").set("ai", function (target) {
						return get.attitude(_status.event.player, target);
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("dcfudao", target);
						game.log(target, "成为了", player, "的继子");
						player.addSkill("dcfudao_effect");
						target.addSkill("dcfudao_effect");
						player.markAuto("dcfudao_effect", [target]);
						target.markAuto("dcfudao_effect", [player]);
					}
				},
				group: "dcfudao_refuse",
				subSkill: {
					effect: {
						trigger: { player: "useCardToPlayered" },
						forced: true,
						charlotte: true,
						usable: 1,
						filter: function (event, player) {
							var target = event.target;
							if (player == target || !target.isIn()) return false;
							return player.getStorage("dcfudao_effect").includes(target);
						},
						logTarget: "target",
						content: function () {
							"step 0";
							var list = [player, trigger.target];
							list.sortBySeat();
							game.asyncDraw(list, 2);
							"step 1";
							game.delayx();
						},
						marktext: "继",
						intro: { content: "已和$成为继母子关系" },
						group: ["dcfudao_revenge", "dcfudao_deadmark"],
					},
					deadmark: {
						trigger: { player: "dieBegin" },
						forced: true,
						popup: false,
						lastDo: true,
						silent: true,
						filter: function (event, player) {
							return get.itemtype(event.source) == "player";
						},
						content: function () {
							trigger.source.markAuto("dcfudao_deadmark", [player]);
						},
						marktext: "裂",
						intro: {
							name: "决裂",
							content: "你害死了$！",
						},
					},
					revenge: {
						trigger: { source: "damageBegin1" },
						forced: true,
						filter: function (event, player) {
							var storage1 = event.player.getStorage("dcfudao_deadmark"),
								storage2 = player.getStorage("dcfudao_effect");
							for (var i of storage1) {
								if (storage2.includes(i)) return true;
							}
							return false;
						},
						content: function () {
							trigger.num++;
						},
						logTarget: "player",
					},
					refuse: {
						trigger: { target: "useCardToTargeted" },
						forced: true,
						filter: function (event, player) {
							var storage1 = event.player.getStorage("dcfudao_deadmark"),
								storage2 = player.getStorage("dcfudao_effect");
							return storage1.some(i => storage2.includes(i)) && get.color(event.card) == "black";
						},
						content: function () {
							trigger.player.addTempSkill("dcfudao_blocker");
						},
						logTarget: "player",
					},
					blocker: {
						charlotte: true,
						mod: {
							cardEnabled: () => false,
							cardSavable: () => false,
						},
					},
				},
			},
			//全惠解
			dchuishu: {
				audio: 2,
				getList: function (player) {
					if (!player.storage.dchuishu) return [3, 1, 2];
					return player.storage.dchuishu.slice(0);
				},
				trigger: { player: "phaseDrawEnd" },
				content: function () {
					"step 0";
					var list = lib.skill.dchuishu.getList(player);
					event.list = list;
					player.draw(list[0]);
					"step 1";
					player.addTempSkill("dchuishu_effect");
					player.chooseToDiscard("h", true, event.list[1]);
				},
				onremove: true,
				mark: true,
				intro: {
					markcount: function (storage, player) {
						var list = lib.skill.dchuishu.getList(player);
						return Math.max.apply(Math, list);
					},
					content: function (storage, player) {
						var list = lib.skill.dchuishu.getList(player);
						return "摸牌阶段结束时，你可以摸[" + list[0] + "]张牌。若如此做：你弃置[" + list[1] + "]张手牌，且当你于本回合内弃置第[" + list[2] + "]+1张牌后，你从弃牌堆中获得[" + list[2] + "]张非基本牌。";
					},
				},
				subSkill: {
					effect: {
						charlotte: true,
						audio: "dchuishu",
						trigger: {
							player: "loseAfter",
							global: "loseAsyncAfter",
						},
						filter: function (event, player) {
							var num = lib.skill.dchuishu.getList(player)[2];
							if (typeof num != "number") return false;
							if (event.type != "discard" || event.getlx === false) return false;
							var evt = event.getl(player);
							if (evt.cards2.length == 0) return false;
							var prev = 0,
								goon = true;
							player.getHistory("lose", function (evt) {
								if (!goon || evt.type != "discard") return false;
								prev += evt.cards2.length;
								if (evt == event || event.getParent() == event) {
									goon = false;
									return false;
								}
							});
							return prev > num;
						},
						forced: true,
						popup: false,
						firstDo: true,
						content: function () {
							var num = lib.skill.dchuishu.getList(player)[2];
							var cards = [];
							for (var i = 0; i < num; i++) {
								var card = get.discardPile(function (card) {
									return get.type(card) != "basic" && !cards.includes(card);
								});
								if (card) cards.push(card);
								else break;
							}
							if (cards.length) player.gain(cards, "gain2");
						},
					},
				},
			},
			dcyishu: {
				audio: 2,
				trigger: {
					player: ["loseAfter"],
					global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
				},
				forced: true,
				filter: function (event, player) {
					var evt = event.getl(player);
					if (!evt || !evt.cards2.length) return false;
					return !player.isPhaseUsing() && player.hasSkill("dchuishu", null, null, false);
				},
				content: function () {
					"step 0";
					var list = lib.skill.dchuishu.getList(player);
					var min = list[0],
						max = list[0];
					for (var i of list) {
						if (i < min) min = i;
						if (i > max) max = i;
					}
					var exps = ["摸牌数[", "弃牌数[", "目标牌数["];
					var choices_min = [],
						choices_max = [];
					for (var i = 0; i < list.length; i++) {
						if (list[i] == min) choices_min.push(exps[i] + min + "]");
						if (list[i] == max) choices_max.push(exps[i] + max + "]");
					}
					if (choices_min.length == 1 && choices_max.length == 1) {
						event._result = { bool: true, min: choices_min[0], max: choices_max[0] };
					} else {
						if (player.isUnderControl()) game.swapPlayerAuto(player);
						var switchToAuto = function () {
							_status.imchoosing = false;
							event._result = {
								bool: true,
								min: choices_min[0],
								max: choices_max[0],
							};
							if (event.dialog) event.dialog.close();
							if (event.control) event.control.close();
						};
						var chooseButton = function (player, min, max) {
							var event = _status.event;
							player = player || event.player;
							var list = lib.skill.dchuishu.getList(player);
							if (!event._result) event._result = {};
							var dialog = ui.create.dialog("###易数：请选择更改的数值###令〖慧淑〗的一个最小数值+2并令一个最大数值-1", "forcebutton", "hidden");
							event.dialog = dialog;
							dialog.addText("最小值+2");
							var table = document.createElement("div");
							table.classList.add("add-setting");
							table.style.margin = "0";
							table.style.width = "100%";
							table.style.position = "relative";
							for (var i = 0; i < min.length; i++) {
								var td = ui.create.div(".shadowed.reduce_radius.pointerdiv.tdnode");
								td.link = min[i];
								table.appendChild(td);
								td.innerHTML = "<span>" + min[i] + "</span>";
								td.addEventListener(lib.config.touchscreen ? "touchend" : "click", function () {
									if (_status.dragged) return;
									if (_status.justdragged) return;
									_status.tempNoButton = true;
									setTimeout(function () {
										_status.tempNoButton = false;
									}, 500);
									var link = this.link;
									var current = this.parentNode.querySelector(".bluebg");
									if (current) current.classList.remove("bluebg");
									this.classList.add("bluebg");
									event._result.min = link;
								});
							}
							dialog.content.appendChild(table);
							dialog.addText("最大值-1");
							var table2 = document.createElement("div");
							table2.classList.add("add-setting");
							table2.style.margin = "0";
							table2.style.width = "100%";
							table2.style.position = "relative";
							for (var i = 0; i < max.length; i++) {
								var td = ui.create.div(".shadowed.reduce_radius.pointerdiv.tdnode");
								td.link = max[i];
								table2.appendChild(td);
								td.innerHTML = "<span>" + max[i] + "</span>";
								td.addEventListener(lib.config.touchscreen ? "touchend" : "click", function () {
									if (_status.dragged) return;
									if (_status.justdragged) return;
									_status.tempNoButton = true;
									setTimeout(function () {
										_status.tempNoButton = false;
									}, 500);
									var link = this.link;
									var current = this.parentNode.querySelector(".bluebg");
									if (current) current.classList.remove("bluebg");
									this.classList.add("bluebg");
									event._result.max = link;
								});
							}
							dialog.content.appendChild(table2);
							dialog.add("　　");
							event.dialog.open();
							event.switchToAuto = function () {
								event._result = {
									bool: true,
									min: min[0],
									max: max[0],
								};
								event.dialog.close();
								event.control.close();
								game.resume();
								_status.imchoosing = false;
							};
							event.control = ui.create.control("ok", function (link) {
								var result = event._result;
								if (!result.min || !result.max) return;
								result.bool = true;
								event.dialog.close();
								event.control.close();
								game.resume();
								_status.imchoosing = false;
							});
							for (var i = 0; i < event.dialog.buttons.length; i++) {
								event.dialog.buttons[i].classList.add("selectable");
							}
							game.pause();
							game.countChoose();
						};
						if (event.isMine()) chooseButton(player, choices_min, choices_max);
						else if (event.isOnline()) {
							event.player.send(chooseButton, event.player, choices_min, choices_max);
							event.player.wait();
							game.pause();
						} else switchToAuto();
					}
					"step 1";
					var map = event.result || result;
					if (map.bool) {
						var min = map.min,
							max = map.max;
						min = min.slice(0, min.indexOf("["));
						max = max.slice(0, max.indexOf("["));
						var exps = ["摸牌数", "弃牌数", "目标牌数"];
						var list = lib.skill.dchuishu.getList(player);
						list[exps.indexOf(min)] += 2;
						list[exps.indexOf(max)]--;
						game.log(player, "令", "#g【慧淑】", "中的", "#y" + min, "+2");
						game.log(player, "令", "#g【慧淑】", "中的", "#y" + max, "-1");
						player.storage.dchuishu = list;
					} else event.finish();
					"step 2";
					player.markSkill("dchuishu");
					game.delayx();
				},
				ai: { combo: "dchuishu" },
			},
			dcligong: {
				audio: 2,
				juexingji: true,
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				filter: function (event, player) {
					if (!player.hasSkill("dchuishu")) return false;
					var list = lib.skill.dchuishu.getList(player);
					for (var i of list) {
						if (i >= 5) return true;
					}
					return false;
				},
				skillAnimation: true,
				animationColor: "wood",
				content: function () {
					"step 0";
					player.awakenSkill("dcligong");
					player.gainMaxHp();
					player.recover();
					"step 1";
					player.removeSkills("dcyishu");
					"step 2";
					var list;
					if (_status.characterlist) {
						list = [];
						for (var i = 0; i < _status.characterlist.length; i++) {
							var name = _status.characterlist[i];
							if (lib.character[name][1] == "wu" && (lib.character[name][0] == "female" || lib.character[name][0] == "double")) list.push(name);
						}
					} else if (_status.connectMode) {
						list = get.charactersOL(function (i) {
							return lib.character[i][1] != "wu" || (lib.character[i][0] != "female" && lib.character[i][0] != "double");
						});
					} else {
						list = get.gainableCharacters(function (info) {
							return info[1] == "wu" && (info[0] == "female" || info[0] == "double");
						});
					}
					var players = game.players.concat(game.dead);
					for (var i = 0; i < players.length; i++) {
						list.remove(players[i].name);
						list.remove(players[i].name1);
						list.remove(players[i].name2);
					}
					list = list.randomGets(4);
					var skills = [];
					for (var i of list) {
						skills.addArray(
							(lib.character[i][3] || []).filter(function (skill) {
								var info = get.info(skill);
								return info && !info.charlotte;
							})
						);
					}
					if (!list.length || !skills.length) {
						event.result = {
							bool: false,
							skills: [],
						};
						return;
					}
					if (player.isUnderControl()) {
						game.swapPlayerAuto(player);
					}
					var switchToAuto = function () {
						_status.imchoosing = false;
						event._result = {
							bool: true,
							skills: skills.randomGets(2),
						};
						if (event.dialog) event.dialog.close();
						if (event.control) event.control.close();
					};
					var chooseButton = function (list, skills) {
						var event = _status.event;
						if (!event._result) event._result = {};
						event._result.skills = [];
						var rSkill = event._result.skills;
						var dialog = ui.create.dialog("请选择获得至多两个技能", [list, "character"], "hidden");
						event.dialog = dialog;
						var table = document.createElement("div");
						table.classList.add("add-setting");
						table.style.margin = "0";
						table.style.width = "100%";
						table.style.position = "relative";
						for (var i = 0; i < skills.length; i++) {
							var td = ui.create.div(".shadowed.reduce_radius.pointerdiv.tdnode");
							td.link = skills[i];
							table.appendChild(td);
							td.innerHTML = "<span>" + get.translation(skills[i]) + "</span>";
							td.addEventListener(lib.config.touchscreen ? "touchend" : "click", function () {
								if (_status.dragged) return;
								if (_status.justdragged) return;
								_status.tempNoButton = true;
								setTimeout(function () {
									_status.tempNoButton = false;
								}, 500);
								var link = this.link;
								if (!this.classList.contains("bluebg")) {
									if (rSkill.length >= 2) return;
									rSkill.add(link);
									this.classList.add("bluebg");
								} else {
									this.classList.remove("bluebg");
									rSkill.remove(link);
								}
							});
						}
						dialog.content.appendChild(table);
						dialog.add("　　");
						dialog.open();

						event.switchToAuto = function () {
							event.dialog.close();
							event.control.close();
							game.resume();
							_status.imchoosing = false;
						};
						event.control = ui.create.control("ok", function (link) {
							event.dialog.close();
							event.control.close();
							game.resume();
							_status.imchoosing = false;
						});
						for (var i = 0; i < event.dialog.buttons.length; i++) {
							event.dialog.buttons[i].classList.add("selectable");
						}
						game.pause();
						game.countChoose();
					};
					if (event.isMine()) {
						chooseButton(list, skills);
					} else if (event.isOnline()) {
						event.player.send(chooseButton, list, skills);
						event.player.wait();
						game.pause();
					} else {
						switchToAuto();
					}
					"step 3";
					var map = event.result || result;
					if (map.skills && map.skills.length) {
						//player.removeSkill('dchuishu');
						//for(var i of map.skills) player.addSkillLog(i);
						player.changeSkills(map.skills, ["dchuishu"]);
						player.markAuto("zhuSkill_dcligong", map.skills);
					} else {
						player.draw(3);
					}
				},
				ai: {
					combo: "dchuishu",
				},
			},
			//杜夔
			dcfanyin: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				filter: function (event, player) {
					return ui.cardPile.childNodes.length > 0;
				},
				frequent: true,
				locked: false,
				content: function () {
					"step 0";
					var card = false;
					if (typeof event.num != "number") {
						var num = false;
						for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
							var cardx = ui.cardPile.childNodes[i],
								numc = get.number(cardx, false);
							if (!num || numc < num) {
								num = numc;
								card = cardx;
								if (num == 1) break;
							}
						}
						event.num = num;
					} else {
						card = get.cardPile2(function (card) {
							return get.number(card, false) == event.num;
						});
					}
					if (!card) event.finish();
					else {
						event.card = card;
						game.cardsGotoOrdering(card);
						player.showCards(card, get.translation(player) + "发动了【泛音】");
					}
					"step 1";
					if (!player.hasUseTarget(card, false)) event._result = { index: 1 };
					else {
						player
							.chooseControl()
							.set("choiceList", ["使用" + get.translation(card) + "（无距离限制）", "令本回合使用的下一张牌可以多选择一个目标"])
							.set("ai", function () {
								var player = _status.event.player,
									card = _status.event.getParent().card;
								if (player.hasValueTarget(card, false)) return 0;
								return 1;
							});
					}
					"step 2";
					if (result.index == 0) {
						var cardx = get.autoViewAs(card);
						cardx.storage.dcfanyin = true;
						player.chooseUseTarget(cardx, [card], true, false);
					} else {
						player.addTempSkill("dcfanyin_effect");
						player.addMark("dcfanyin_effect", 1, false);
					}
					event.num *= 2;
					if (event.num <= 13) event.goto(0);
				},
				mod: {
					targetInRange: function (card) {
						if (card.storage && card.storage.dcfanyin) return true;
					},
				},
				subSkill: {
					effect: {
						audio: "dcfanyin",
						trigger: { player: "useCard2" },
						forced: true,
						charlotte: true,
						popup: false,
						onremove: true,
						filter: function (event, player) {
							var type = get.type(event.card, null, false);
							return type == "basic" || type == "trick";
						},
						content: function () {
							"step 0";
							var num = player.countMark("dcfanyin_effect");
							player.removeSkill("dcfanyin_effect");
							var filter = function (event, player) {
								var card = event.card,
									info = get.info(card);
								if (info.allowMultiple == false) return false;
								if (event.targets && !info.multitarget) {
									if (
										game.hasPlayer(function (current) {
											return !event.targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && lib.filter.targetInRange(card, player, current);
										})
									) {
										return true;
									}
								}
								return false;
							};
							if (!filter(trigger, player)) event.finish();
							else {
								var prompt = "为" + get.translation(trigger.card) + "增加至多" + get.cnNumber(num) + "个目标？";
								trigger.player
									.chooseTarget(get.prompt("dcfanyin_effect"), prompt, [1, num], function (card, player, target) {
										var player = _status.event.player;
										return !_status.event.targets.includes(target) && lib.filter.targetEnabled2(_status.event.card, player, target) && lib.filter.targetInRange(_status.event.card, player, target);
									})
									.set("ai", function (target) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										return get.effect(target, trigger.card, player, player);
									})
									.set("card", trigger.card)
									.set("targets", trigger.targets);
							}
							"step 1";
							if (result.bool) {
								if (!event.isMine() && !event.isOnline()) game.delayx();
							} else event.finish();
							"step 2";
							player.logSkill("dcfanyin_effect", result.targets);
							game.log(result.targets, "也成为了", trigger.card, "的目标");
							trigger.targets.addArray(result.targets);
						},
						intro: { content: "使用下一张牌选择目标后，可以增加#个目标" },
					},
				},
			},
			dcpeiqi: {
				audio: 2,
				trigger: { player: "damageEnd" },
				filter: function (event, player) {
					return player.canMoveCard();
				},
				check: function (event, player) {
					return player.canMoveCard(true);
				},
				content: function () {
					"step 0";
					player.moveCard(true);
					"step 1";
					if (result.bool && player.canMoveCard()) {
						var goon = true,
							players = game.filterPlayer();
						for (var i = 0; i < players.length; i++) {
							for (var j = i + 1; j < players.length; j++) {
								if (!players[i].inRange(players[j]) || !players[i].inRangeOf(players[j])) {
									goon = false;
									break;
								}
							}
							if (!goon) break;
						}
						if (goon) player.moveCard();
					}
				},
			},
			//张奋和大风车
			dcwanglu: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				content: function () {
					if (!player.hasEquipableSlot(5) || player.getEquip("dagongche")) {
						var next = player.phaseUse();
						event.next.remove(next);
						trigger.getParent().next.push(next);
					} else {
						var card = game.createCard("dagongche", "spade", 9);
						player.$gain2(card);
						game.delayx();
						player.equip(card);
					}
				},
				broadcast: function (player) {
					var card = player.getEquip("dagongche");
					if (card)
						game.broadcast(
							function (card, storage) {
								card.storage = storage;
							},
							card,
							card.storage
						);
				},
			},
			dcxianzhu: {
				audio: 2,
				trigger: { source: "damageSource" },
				direct: true,
				filter: function (event, player) {
					if (!event.card || event.card.name != "sha") return false;
					var card = player.getEquip("dagongche");
					if (!card) return false;
					var num = 0;
					for (var i = 1; i <= 3; i++) {
						var key = "大攻车选项" + get.cnNumber(i, true);
						if (card.storage[key]) num += card.storage[key];
					}
					return num < 5;
				},
				content: function () {
					"step 0";
					var choiceList = ["令【杀】无距离限制且无视防具", "令【杀】的可选目标数+1", "令后续的弃牌数量+1"];
					var list = [];
					var card = player.getEquip("dagongche");
					for (var i = 1; i <= 3; i++) {
						var key = "大攻车选项" + get.cnNumber(i, true);
						var num = card.storage[key];
						if (i == 1) {
							if (!num) list.push("选项一");
							else choiceList[0] = '<span style="opacity:0.5; ">' + choiceList[0] + "（已强化）</span>";
						} else {
							list.push("选项" + get.cnNumber(i, true));
							if (num) choiceList[i - 1] += "（已强化" + num + "次）";
						}
					}
					player
						.chooseControl(list, "cancel2")
						.set("prompt", "是否发动【陷筑】强化【大攻车】？")
						.set("choiceList", choiceList)
						.set("ai", function () {
							var player = _status.event.player,
								controls = _status.event.controls.slice(0);
							var getval = function (choice) {
								var card = player.getEquip("dagongche");
								if (choice == "选项一") {
									card.storage.大攻车选项一 = 1;
									var goon = false;
									if (
										game.hasPlayer(function (current) {
											var eff1 = 0,
												eff2 = 0;
											var cardx = { name: "sha", isCard: true };
											if (player.canUse(cardx, current)) eff1 = get.effect(current, cardx, player, player);
											cardx.storage = { dagongche: true };
											if (player.canUse(cardx, current)) eff2 = get.effect(current, cardx, player, player);
											return eff2 > eff1;
										})
									)
										goon = true;
									delete card.storage.大攻车选项一;
									if (goon) return 5;
									return 0;
								} else if (choice == "选项二") {
									var num = 1;
									if (card.storage.大攻车选项二) num += card.storage.大攻车选项二;
									var cardx = { name: "sha", isCard: true };
									if (
										game.countPlayer(function (current) {
											return player.canUse(cardx, current) && get.effect(current, cardx, player, player) > 0;
										}) > num
									)
										return 2;
								} else if (choice == "选项三") return 1;
								return 0;
							};
							var eff = 0,
								current = "cancel2";
							for (var i of controls) {
								var effx = getval(i);
								if (effx > eff) {
									eff = effx;
									current = i;
								}
							}
							return current;
						});
					"step 1";
					if (result.control != "cancel2") {
						player.logSkill("dcxianzhu");
						var card = player.getEquip("dagongche"),
							key = "大攻车" + result.control;
						if (!card.storage[key]) card.storage[key] = 0;
						card.storage[key]++;
						lib.skill.dcwanglu.broadcast(player);
					}
				},
				ai: {
					combo: "dcwanglu",
				},
			},
			dcchaixie: {
				audio: 2,
				trigger: {
					player: ["loseAfter"],
					global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
				},
				forced: true,
				filter: function (event, player) {
					var evt = event.getl(player);
					if (!evt || !evt.es || !evt.es.length) return false;
					for (var card of evt.es) {
						if (card.name == "dagongche") {
							for (var i = 1; i <= 3; i++) {
								if (card.storage["大攻车选项" + get.cnNumber(i, true)]) return true;
							}
						}
					}
					return false;
				},
				content: function () {
					var num = 0;
					var evt = trigger.getl(player);
					for (var card of evt.es) {
						if (card.name == "dagongche") {
							for (var i = 1; i <= 3; i++) {
								var key = "大攻车选项" + get.cnNumber(i, true);
								if (card.storage[key]) num += card.storage[key];
							}
						}
					}
					player.draw(num);
				},
				ai: {
					combo: "dcwanglu",
				},
			},
			dagongche_skill: {
				trigger: { player: "phaseUseBegin" },
				direct: true,
				filter: function (event, player) {
					var cardx = {
						name: "sha",
						isCard: true,
						storage: { dagongche: true },
					};
					return player.hasUseTarget(cardx);
				},
				equipSkill: true,
				content: function () {
					var card = {
						name: "sha",
						isCard: true,
						storage: { dagongche: true },
					};
					lib.skill.dcwanglu.broadcast(player);
					player.chooseUseTarget(card, "大攻车：是否视为使用【杀】？", false).logSkill = "dagongche_skill";
				},
				mod: {
					targetInRange: function (card, player, target) {
						if (card.storage && card.storage.dagongche) {
							var cardx = player.getEquip("dagongche");
							if (cardx && cardx.storage.大攻车选项一) return true;
						}
					},
					selectTarget: function (card, player, range) {
						if (card.storage && card.storage.dagongche && range[1] != -1) {
							var cardx = player.getEquip("dagongche");
							if (cardx && cardx.storage.大攻车选项二) range[1] += cardx.storage.大攻车选项二;
						}
					},
					canBeDiscarded: function (card) {
						if (card.name == "dagongche" && get.position(card) == "e") {
							for (var i = 1; i <= 3; i++) {
								if (card.storage["大攻车选项" + get.cnNumber(i, true)]) return;
							}
							return false;
						}
					},
				},
				ai: {
					unequip: true,
					skillTagFilter: function (player, tag, arg) {
						if (!arg || !arg.card || !arg.card.storage || !arg.card.storage.dagongche) return false;
						var card = player.getEquip("dagongche");
						if (!card || !card.storage.大攻车选项一) return false;
					},
				},
				group: "dagongche_skill_discard",
				subSkill: {
					discard: {
						trigger: { source: "damageSource" },
						equipSkill: true,
						forced: true,
						filter: function (event, player) {
							if (!event.card || !event.card.storage || !event.card.storage.dagongche) return false;
							if (event.getParent().type != "card") return false;
							return event.player.hasCard(function (card) {
								return lib.filter.canBeDiscarded(card, event.player, player);
							}, "he");
						},
						logTarget: "player",
						content: function () {
							var num = 1;
							var cardx = player.getEquip("dagongche");
							if (cardx && cardx.storage.大攻车选项三) num += cardx.storage.大攻车选项三;
							player.discardPlayerCard(trigger.player, true, num, "he");
						},
					},
				},
			},
			//刘徽
			dcgeyuan: {
				audio: 2,
				trigger: {
					global: ["loseAfter", "loseAsyncAfter", "cardsDiscardAfter", "equipAfter"],
				},
				forced: true,
				filter: function (event, player) {
					var cards = event.getd();
					for (var i of cards) {
						if (lib.skill.dcgeyuan.filterNumber(player, get.number(i, false))) return true;
					}
					return false;
				},
				content: function () {
					"step 0";
					event.cards = trigger.getd();
					"step 1";
					var card = false;
					for (var i of cards) {
						if (lib.skill.dcgeyuan.filterNumber(player, get.number(i, false))) {
							card = i;
							cards.remove(card);
							break;
						}
					}
					if (card) {
						var number = get.number(card, false);
						game.log(player, "将", "#y" + get.strNumber(number), "记录为", "#g“圆环之弧”");
						player.markAuto("dcgeyuan_homura", [number]);
						player.markSkill("dcgeyuan");
						if (player.getStorage("dcgeyuan").length > player.getStorage("dcgeyuan_homura").length) {
							if (cards.length > 0) event.redo();
							else event.finish();
						} else if (player.storage.dcgusuan) event.goto(5);
					} else event.finish();
					"step 2";
					var list = player.getStorage("dcgeyuan_homura");
					var num1 = list[0],
						num2 = list[list.length - 1];
					event.cards2 = [];
					var lose_list = [],
						players = game.filterPlayer();
					for (var current of players) {
						var cards = current.getCards("ej", function (card) {
							var num = get.number(card);
							return num == num1 || num == num2;
						});
						if (cards.length > 0) {
							current.$throw(cards);
							lose_list.push([current, cards]);
							event.cards2.addArray(cards);
						}
					}
					if (lose_list.length) {
						event.lose_list = lose_list;
						game.loseAsync({
							lose_list: lose_list,
						}).setContent("chooseToCompareLose");
					}
					"step 3";
					var list = player.getStorage("dcgeyuan_homura");
					var num1 = list[0],
						num2 = list[list.length - 1];
					var cards = event.cards2;
					for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
						var card = ui.cardPile.childNodes[i];
						var number = get.number(card, false);
						if (number == num1 || number == num2) cards.push(card);
					}
					if (cards.length > 0) {
						if (event.lose_list) game.delayx();
						player.gain(cards, "gain2");
					}
					"step 4";
					var list = player.getStorage("dcgeyuan_homura");
					var num1 = list[0],
						num2 = list[list.length - 1];
					player.storage.dcgeyuan_homura = [];
					game.log(player, "清空了", "#g“圆环之弧”");
					player.markSkill("dcgeyuan");
					if (player.getStorage("dcgeyuan").length > 3) {
						player.unmarkAuto("dcgeyuan", [num1, num2]);
						game.log(player, "从", "#g“圆环之理”", "中移除了", "#y" + get.strNumber(num1), "和", "#y" + get.strNumber(num2));
					}
					event.finish();
					"step 5";
					player.chooseTarget("割圆：选择至多三名角色", "第一名角色摸三张牌，第二名角色弃置四张牌，第三名角色将所有手牌与牌堆底的牌交换", true, [1, 3]);
					"step 6";
					if (result.bool) {
						var targets = result.targets;
						event.targets = targets;
						player.line(targets);
						targets[0].draw(3);
						if (targets.length < 2) event.goto(4);
					} else event.goto(4);
					"step 7";
					if (targets[1].countCards("he") > 0) targets[1].chooseToDiscard("he", true, 4);
					if (targets.length < 3) event.goto(4);
					"step 8";
					var target = targets[2];
					var cards = get.bottomCards(5);
					game.cardsGotoOrdering(cards);
					var hs = target.getCards("h");
					if (hs.length > 0) target.lose(hs, ui.cardPile);
					target.gain(cards, "draw");
					event.goto(4);
				},
				group: "dcgeyuan_kyubey",
				filterNumber: function (player, num) {
					var list1 = player.getStorage("dcgeyuan");
					var list2 = player.getStorage("dcgeyuan_homura");
					if (!list1.includes(num)) return false;
					if (!list2.length) return true;
					if (list2.includes(num)) return false;
					var madoka = list1.indexOf(num);
					for (var i of list2) {
						var homura = list1.indexOf(i);
						var dist = Math.abs(madoka - homura);
						if (dist == 1 || dist == list1.length - 1) return true;
					}
					return false;
				},
				subSkill: {
					kyubey: {
						audio: "dcgeyuan",
						trigger: {
							global: "phaseBefore",
							player: "enterGame",
						},
						forced: true,
						filter: function (event, player) {
							return (event.name != "phase" || game.phaseNumber == 0) && !player.storage.dcgusuan;
						},
						content: function () {
							var list = [];
							for (var i = 1; i <= 13; i++) {
								list.push(i);
							}
							list.randomSort();
							player.storage.dcgeyuan = list;
							player.markSkill("dcgeyuan");
							var str = "#y";
							for (var i = 0; i < 13; i++) {
								str += get.strNumber(list[i]);
								if (i != 12) str += ",";
							}
							game.log(player, "将", "#y“圆环之理”", "赋值为", str);
						},
					},
				},
				intro: {
					name: "圆环之理",
					markcount: function (storage, player) {
						if (!player.storage.dcgeyuan || !player.getStorage("dcgeyuan_homura").length) return 0;
						var list = player.storage.dcgeyuan.filter(i => lib.skill.dcgeyuan.filterNumber(player, i));
						if (!list.length) return 0;
						list = list.map(num => {
							var list = [1, 10, 11, 12, 13];
							if (list.includes(num)) return ["A", "X", "J", "Q", "K"][list.indexOf(num)];
							return parseFloat(num);
						});
						return list.reduce((str, num) => {
							return str + num;
						}, "");
					},
					mark: function (dialog, storage, player) {
						dialog.content.style["overflow-x"] = "visible";
						var list = storage;
						if (!storage || !storage.length) return "（圆环之理尚不存在）";
						var list2 = player.getStorage("dcgeyuan_homura");
						var core = document.createElement("div");
						core.style.width = "0";
						var centerX = -15,
							centerY = 80,
							radius = 80;
						var radian = (Math.PI * 2) / list.length;
						var fulllist = ["Ａ", "２", "３", "４", "５", "６", "７", "８", "９", "10", "Ｊ", "Ｑ", "Ｋ"];
						for (var i = 0; i < list.length; i++) {
							var td = document.createElement("div");
							var color = "";
							if (list2[0] == list[i]) color = ' class="yellowtext"';
							else if (list2.includes(list[i])) color = ' class="greentext"';
							td.innerHTML = "<span" + color + ">[" + fulllist[list[i] - 1] + "]</span>";
							td.style.position = "absolute";
							core.appendChild(td);
							td.style.left = centerX + radius * Math.sin(radian * i) + "px";
							td.style.top = centerY - radius * Math.cos(radian * i) + "px";
						}
						dialog.content.appendChild(core);
					},
				},
			},
			dcjieshu: {
				audio: 2,
				trigger: { player: ["useCard", "respond"] },
				forced: true,
				filter: function (event, player) {
					var num = get.number(event.card, false);
					if (typeof num != "number") return false;
					return lib.skill.dcgeyuan.filterNumber(player, num);
				},
				content: function () {
					player.draw();
				},
				mod: {
					ignoredHandcard: function (card, player) {
						if (!player.getStorage("dcgeyuan").includes(get.number(card))) return true;
					},
					cardDiscardable: function (card, player, name) {
						if (name == "phaseDiscard" && !player.getStorage("dcgeyuan").includes(get.number(card))) return false;
					},
				},
				ai: {
					combo: "dcgeyuan",
				},
			},
			dcgusuan: {
				audio: 2,
				trigger: { global: "phaseEnd" },
				forced: true,
				juexingji: true,
				skillAnimation: true,
				animationColor: "soil",
				filter: function (event, player) {
					return player.getStorage("dcgeyuan").length == 3;
				},
				content: function () {
					player.awakenSkill("dcgusuan");
					player.storage.dcgusuan = true;
					player.loseMaxHp();
				},
				ai: { combo: "dcgeyuan" },
				derivation: "dcgeyuan_magica",
			},
			//王昶
			dckaiji: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					if (player.maxHp <= 0) return false;
					if (!player.storage.dckaiji) return true;
					return player.hasCard(card => lib.filter.cardDiscardable(card, player, "phaseUse"), "he");
				},
				filterCard: function (card, player) {
					if (!player.storage.dckaiji) return false;
					return true;
				},
				position: "he",
				selectCard: function () {
					var player = _status.event.player;
					return player.storage.dckaiji ? [1, player.maxHp] : -1;
				},
				check: function (card) {
					var player = _status.event.player;
					if (!player.hasSkill("dcpingxi")) {
						if (ui.selected.cards.length) return 0;
						if (player.needsToDiscard()) return 12 - get.value(card);
						return 2 * player.hp + 1.5 - get.value(card);
					}
					var num = lib.skill.dcpingxi.getNum() + ui.selected.cards.length;
					if (
						num <
						game.countPlayer(function (current) {
							if (current == player || current.countCards("he") == 0) return false;
							return get.effect(current, { name: "guohe_copy2" }, player, player) + get.effect(current, { name: "sha" }, player, player) > 0;
						})
					) {
						if (
							get.position(card) == "h" &&
							player.needsToDiscard(0, (i, player) => {
								return !ui.selected.cards.includes(i) && !player.canIgnoreHandcard(i);
							})
						)
							return 7 + 1 / Math.max(1, get.value(card));
						return 7 - get.value(card);
					}
					return 0;
				},
				content: function () {
					player.changeZhuanhuanji("dckaiji");
					if (!cards.length) player.draw(Math.min(player.maxHp, 5));
				},
				zhuanhuanji: true,
				mark: true,
				marktext: "☯",
				intro: {
					content: storage => "转换技。出牌阶段限一次，你可以" + (storage ? "弃置至多X张牌" : "摸X张牌") + "（X为你的体力上限且至多为5）。",
				},
				ai: {
					threaten: 1.6,
					order: function (item, player) {
						if (player.storage.dckaiji) return 0.1;
						return 8;
					},
					result: { player: 1 },
				},
			},
			dcpingxi: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				getNum: function () {
					var num = 0;
					game.getGlobalHistory("cardMove", function (evt) {
						if (evt.name == "lose" && evt.type == "discard") num += evt.cards2.length;
					});
					return num;
				},
				filter: function (event, player) {
					return (
						lib.skill.dcpingxi.getNum() > 0 &&
						game.hasPlayer(function (current) {
							return current != player;
						})
					);
				},
				content: function () {
					"step 0";
					var num = lib.skill.dcpingxi.getNum();
					player
						.chooseTarget(
							[1, num],
							function (card, player, target) {
								return target != player;
							},
							get.prompt("dcpingxi"),
							"选择至多" + get.cnNumber(num) + "名其他角色。弃置这些角色的各一张牌，然后视为对这些角色使用一张【杀】"
						)
						.set("ai", function (target) {
							var player = _status.event.player;
							return get.effect(target, { name: "guohe_copy2" }, player, player) + get.effect(target, { name: "sha" }, player, player);
						});
					"step 1";
					if (result.bool) {
						var targets = result.targets.sortBySeat();
						event.targets = targets;
						player.logSkill("dcpingxi", targets);
						event.num = 0;
					} else event.finish();
					"step 2";
					var target = targets[num];
					if (
						target.hasCard(function (card) {
							return lib.filter.canBeDiscarded(card, player, target);
						}, "he")
					)
						player.discardPlayerCard(target, "he", true);
					event.num++;
					if (event.num < targets.length) event.redo();
					"step 3";
					var targetsx = targets.filter(function (target) {
						return player.canUse("sha", target, false);
					});
					if (targetsx.length > 0)
						player.useCard(
							{
								name: "sha",
								isCard: true,
							},
							targetsx
						);
				},
			},
			//赵昂
			dczhongjie: {
				audio: 2,
				round: 1,
				trigger: { global: "dying" },
				logTarget: "player",
				filter: function (event, player) {
					return event.player.hp < 1 && event.reason && event.reason.name == "loseHp";
				},
				check: function (event, player) {
					return get.attitude(player, event.player) > 2;
				},
				content: function () {
					trigger.player.recover();
					trigger.player.draw();
				},
				ai: {
					combo: "dcsushou"
				},
			},
			dcsushou: {
				audio: 2,
				trigger: { global: "phaseUseBegin" },
				filter: function (event, player) {
					return player.hp > 0 && event.player.isMaxHandcard(true);
				},
				logTarget: "player",
				check: function (event, player) {
					var num = player.hp;
					if (player.hasSkill("dczhongjie") && (player.storage.dczhongjie_roundcount || 0) < game.roundNumber) num++;
					return num > 1;
				},
				content: function () {
					"step 0";
					player.loseHp();
					event.target = trigger.player;
					"step 1";
					var num = player.getDamagedHp();
					if (num > 0) player.draw(num);
					if (player == target) event.finish();
					"step 2";
					var ts = target.getCards("h");
					if (ts.length < 2) event.finish();
					else {
						var hs = player.getCards("h");
						ts = ts.randomGets(Math.floor(ts.length / 2));
						if (!hs.length) {
							player.viewCards(get.translation(target) + "的部分手牌");
							event.finish();
							return;
						}
						var next = player.chooseToMove("夙守：交换至多" + get.cnNumber(Math.min(hs.length, ts.length, player.getDamagedHp())) + "张牌");
						next.set("list", [
							[get.translation(target) + "的部分手牌", ts, "dcsushou_tag"],
							["你的手牌", hs],
						]);
						next.set("filterMove", function (from, to, moved) {
							if (typeof to == "number") return false;
							var player = _status.event.player;
							var hs = player.getCards("h");
							var changed = hs.filter(function (card) {
								return !moved[1].includes(card);
							});
							var changed2 = moved[1].filter(function (card) {
								return !hs.includes(card);
							});
							if (changed.length < player.getDamagedHp()) return true;
							var pos1 = moved[0].includes(from.link) ? 0 : 1,
								pos2 = moved[0].includes(to.link) ? 0 : 1;
							if (pos1 == pos2) return true;
							if (pos1 == 0) {
								if (changed.includes(from.link)) return true;
								return changed2.includes(to.link);
							}
							if (changed2.includes(from.link)) return true;
							return changed.includes(to.link);
						});
						next.set("max", Math.min(hs.length, ts.length, player.getDamagedHp()));
						next.set("processAI", function (list) {
							if (_status.event.max) {
								let gain = list[0][1]
										.sort((a, b) => {
											return player.getUseValue(b, null, true) - player.getUseValue(a, null, true);
										})
										.slice(0, _status.event.max),
									give = list[1][1]
										.sort((a, b) => {
											return get.value(a, player) - get.value(b, player);
										})
										.slice(0, _status.event.max);
								for (let i of gain) {
									if (get.value(i, player) < get.value(give[0], player)) continue;
									let j = give.shift();
									list[0][1].remove(i);
									list[0][1].push(j);
									list[1][1].remove(j);
									list[1][1].push(i);
									if (!give.length) break;
								}
							}
							return [list[0][1], list[1][1]];
						});
					}
					"step 3";
					var moved = result.moved;
					var hs = player.getCards("h"),
						ts = target.getCards("h");
					var cards1 = [],
						cards2 = [];
					for (var i of result.moved[0]) {
						if (!ts.includes(i)) cards1.push(i);
					}
					for (var i of result.moved[1]) {
						if (!hs.includes(i)) cards2.push(i);
					}
					if (cards1.length) {
						player.swapHandcards(target, cards1, cards2);
					}
				},
			},
			//蓝曹华
			caiyi: {
				audio: 2,
				zhuanhuanji: true,
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				onremove: function (player) {
					delete player.storage.caiyi;
					delete player.storage.caiyi_info;
				},
				filter: function (event, player) {
					if (player.storage.caiyi_info) {
						if (player.storage.caiyi_info[player.storage.caiyi ? 1 : 0].length >= 4) return false;
					}
					return true;
				},
				choices: [
					["回复X点体力", "摸X张牌", "复原武将牌", "随机执行一个已经移除过的选项"],
					["受到X点伤害", "弃置X张牌", "翻面并横置", "随机执行一个已经移除过的选项"],
				],
				filterx: [
					[player => player.isDamaged(), () => true, player => player.isTurnedOver() || player.isLinked(), () => true],
					[
						() => true,
						player =>
							player.hasCard(function (card) {
								return lib.filter.cardDiscardable(card, player, "caiyi");
							}, "he"),
						player => !player.isTurnedOver() || !player.isLinked(),
						() => true,
					],
				],
				content: function () {
					"step 0";
					if (!player.storage.caiyi_info) player.storage.caiyi_info = [[], []];
					var index = player.storage.caiyi ? 1 : 0;
					event.index = index;
					var list = player.storage.caiyi_info[index],
						choices = lib.skill.caiyi.choices[index],
						numbers = ["⒈", "；⒉", "；⒊", "；⒋"];
					event.num = 4 - list.length;
					var str = "令一名角色选择执行其中一项：";
					for (var i = 0; i < 4; i++) {
						if (list.includes(i)) continue;
						if (i == 3 && !list.length) continue;
						str += numbers.shift();
						str += choices[i];
					}
					str += "。";
					str = str.replace(/X/g, get.cnNumber(event.num));
					player.chooseTarget(get.prompt("caiyi") + "（当前状态：" + (index ? "阳" : "阴") + "）", str).set("ai", function (target) {
						var player = _status.event.player;
						return (player.storage.caiyi ? -1 : 1) * get.attitude(player, target);
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("caiyi", target);
						player.changeZhuanhuanji("caiyi");
						event.goto(event.index == 1 ? 5 : 2);
					} else event.finish();
					"step 2";
					var list = [],
						str = get.cnNumber(num);
					var choiceList = ["回复" + str + "点体力。", "摸" + str + "张牌。", "将武将牌翻至正面且重置。", "随机执行一个已经被移除的选项。"];
					var storage = player.storage.caiyi_info[event.index];
					for (var i = 0; i < 4; i++) {
						if (storage.includes(i)) {
							choiceList[i] = '<span style="text-decoration:line-through; opacity:0.5; ">' + choiceList[i] + "</span>";
						} else if (!lib.skill.caiyi.filterx[event.index][i](target) || (i == 3 && !storage.length)) {
							choiceList[i] = '<span style="opacity:0.5;">' + choiceList[i] + "</span>";
						} else list.push("选项" + get.cnNumber(i + 1, true));
					}
					if (!list.length) {
						event.finish();
						return;
					}
					target
						.chooseControl(list)
						.set("choiceList", choiceList)
						.set("ai", function () {
							var evt = _status.event,
								player = evt.player;
							var list = evt.controls.slice(0);
							var gett = function (choice) {
								if (choice == "cancel2") return 0.1;
								var max = 0,
									func = {
										选项一: function (current) {
											max = get.recoverEffect(current, player, player) * Math.min(evt.getParent().num, player.getDamagedHp());
										},
										选项二: function (target) {
											max = get.effect(target, { name: "draw" }, player, player) * evt.getParent().num;
										},
										选项三: function (target) {
											if (player.isTurnedOver()) max += 25;
											if (player.isLinked()) max += get.effect(player, { name: "tiesuo" }, player, player);
										},
										选项四: function (target) {
											max = 3;
										},
									}[choice];
								func(player);
								return max;
							};
							return list.sort(function (a, b) {
								return gett(b) - gett(a);
							})[0];
						});
					"step 3";
					var index2 = ["选项一", "选项二", "选项三", "选项四"].indexOf(result.control);
					player.storage.caiyi_info[event.index].push(index2);
					if (index2 == 3) {
						var list = player.storage.caiyi_info[event.index].filter(function (i) {
							return i != 3 && lib.skill.caiyi.filterx[event.index][i](target);
						});
						if (!list.length) {
							event.finish();
							return;
						}
						index2 = list.randomGet();
					}
					switch (index2) {
						case 0:
							target.recover(num);
							break;
						case 1:
							target.draw(num);
							break;
						case 2:
							!target.isTurnedOver() || target.turnOver();
							break;
					}
					if (index2 != 2) event.finish();
					"step 4";
					!target.isLinked() || target.link();
					event.finish();
					"step 5";
					var list = [],
						str = get.cnNumber(num);
					var choiceList = ["受到" + str + "点伤害。", "弃置" + str + "张牌。", "将武将牌翻至背面并横置。", "随机执行一个已经被移除的选项。"];
					var storage = player.storage.caiyi_info[event.index];
					for (var i = 0; i < 4; i++) {
						if (storage.includes(i)) {
							choiceList[i] = '<span style="text-decoration:line-through; opacity:0.5; ">' + choiceList[i] + "</span>";
						} else if (!lib.skill.caiyi.filterx[event.index][i](target) || (i == 3 && !storage.length)) {
							choiceList[i] = '<span style="opacity:0.5;">' + choiceList[i] + "</span>";
						} else list.push("选项" + get.cnNumber(i + 1, true));
					}
					if (!list.length) {
						event.finish();
						return;
					}
					target
						.chooseControl(list)
						.set("choiceList", choiceList)
						.set("ai", function () {
							var evt = _status.event,
								player = evt.player;
							var list = evt.controls.slice(0);
							var gett = function (choice) {
								if (choice == "cancel2") return 0.1;
								var max = 0,
									func = {
										选项一: function (current) {
											max = get.effect(current, { name: "damage" }, player, player) * evt.getParent().num;
										},
										选项二: function (target) {
											max = get.effect(target, { name: "guohe_copy2" }, player, player) * Math.min(player.countCards("he"), evt.getParent().num);
										},
										选项三: function (target) {
											if (!player.isTurnedOver()) max -= 5;
											if (!player.isLinked()) max += get.effect(player, { name: "tiesuo" }, player, player);
										},
										选项四: function (target) {
											max = -3;
										},
									}[choice];
								func(player);
								return max;
							};
							return list.sort(function (a, b) {
								return gett(b) - gett(a);
							})[0];
						});
					"step 6";
					var index2 = ["选项一", "选项二", "选项三", "选项四"].indexOf(result.control);
					player.storage.caiyi_info[event.index].push(index2);
					if (index2 == 3) {
						var list = player.storage.caiyi_info[event.index].filter(function (i) {
							return i != 3 && lib.skill.caiyi.filterx[event.index][i](target);
						});
						if (!list.length) {
							event.finish();
							return;
						}
						index2 = list.randomGet();
					}
					switch (index2) {
						case 0:
							target.damage(num);
							break;
						case 1:
							target.chooseToDiscard(num, true, "he");
							break;
						case 2:
							target.isTurnedOver() || target.turnOver();
							break;
					}
					if (index2 != 2) event.finish();
					"step 7";
					target.isLinked() || target.link();
					event.finish();
				},
				mark: true,
				marktext: "☯",
				intro: {
					content: function (storage) {
						if (storage) return "转换技。结束阶段，你可令一名角色选择并执行一项，然后移除此选项：⒈受到X点伤害。⒉弃置X张牌。⒊翻面并横置。⒋随机执行一个已经移除过的阳选项。（X为该阴阳态剩余选项的数量）。";
						return "转换技。结束阶段，你可令一名角色选择并执行一项，然后移除此选项：⒈回复X点体力。⒉摸X张牌，⒊复原武将牌。⒋随机执行一个已经移除过的阴选项。⒋随机执行一个已经移除过的阳选项。（X为该阴阳态剩余选项的数量）。";
					},
				},
			},
			guili: {
				audio: 2,
				trigger: { player: "phaseBegin" },
				forced: true,
				locked: false,
				filter: function (event, player) {
					return player.phaseNumber == 1 && game.hasPlayer(current => current != player);
				},
				content: function () {
					"step 0";
					player.chooseTarget(lib.filter.notMe, true, "请选择【归离】的目标", lib.translate.guili_info).set("ai", function (target) {
						return -get.threaten(target);
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "green");
						game.log(player, "选择了", target);
						player.storage.guili_insert = target;
						player.addSkill("guili_insert");
						game.delayx();
					}
				},
				onremove: true,
				subSkill: {
					insert: {
						mark: true,
						intro: {
							content: "players",
						},
						trigger: { global: "phaseAfter" },
						forced: true,
						charlotte: true,
						logTarget: "player",
						filter: function (event, player) {
							if (event.player != player.storage.guili_insert) return false;
							if (event.player.getHistory("sourceDamage").length > 0) return false;
							var history = event.player.actionHistory;
							if (history[history.length - 1].isRound) return true;
							for (var i = history.length - 2; i >= 0; i--) {
								if (history[i].isMe) return false;
								if (history[i].isRound) return true;
							}
							return false;
						},
						content: function () {
							player.insertPhase();
						},
					},
				},
			},
			//刘虞
			dcsuifu: {
				audio: 2,
				trigger: { global: "phaseJieshuBegin" },
				filter: function (event, player) {
					if (player == event.player || !event.player.countCards("h")) return false;
					var num = 0;
					game.countPlayer(function (current) {
						if (current == player || current.getSeatNum() == 1) {
							current.getHistory("damage", function (evt) {
								num += evt.num;
							});
						}
					});
					return num >= 2;
				},
				seatRelated: true,
				logTarget: "player",
				check: function (event, player) {
					return get.attitude(player, event.player) <= 0;
				},
				content: function () {
					"step 0";
					var target = trigger.player,
						cards = target.getCards("h");
					target.lose(cards, ui.cardPile, "insert");
					target.$throw(cards.length);
					game.updateRoundNumber();
					game.log(player, "将", target, "的", get.cnNumber(cards.length), "张手牌置于牌堆顶");
					"step 1";
					game.delayx();
					player.chooseUseTarget({ name: "wugu", isCard: true }, true);
				},
			},
			dcpijing: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				content: function () {
					"step 0";
					player.chooseTarget([1, game.countPlayer()], get.prompt("dcpijing"), "令任意名角色获得技能〖自牧〗").set("ai", function (target) {
						return get.attitude(_status.event.player, target);
					});
					"step 1";
					if (result.bool) {
						var targets = result.targets;
						targets.add(player);
						targets.sortBySeat();
						player.logSkill("dcpijing", targets);
						game.countPlayer(function (current) {
							if (!targets.includes(current)) current.removeSkills("dczimu");
							else current.addSkills("dczimu");
						});
						game.delayx();
					}
				},
				derivation: "dczimu",
			},
			dczimu: {
				audio: 2,
				trigger: { player: "damageEnd" },
				forced: true,
				mark: true,
				logTarget: function (event, player) {
					return game
						.filterPlayer(function (current) {
							return current.hasSkill("dczimu", null, null, false);
						})
						.sortBySeat();
				},
				content: function () {
					"step 0";
					var list = game.filterPlayer(function (current) {
						return current.hasSkill("dczimu", null, null, false);
					});
					if (list.length > 0) {
						if (list.length == 1) list[0].draw();
						else {
							game.asyncDraw(list);
							event.delay = true;
						}
					}
					"step 1";
					player.removeSkills("dczimu");
					if (event.delay) game.delayx();
				},
				marktext: "牧",
				intro: {
					content: "锁定技。当你受到伤害后，你令所有拥有〖自牧〗的角色各摸一张牌，然后你失去〖自牧〗。",
				},
			},
			//黄祖
			dcjinggong: {
				audio: 2,
				enable: "chooseToUse",
				locked: false,
				mod: {
					targetInRange: function (card) {
						if (card.storage && card.storage.dcjinggong) return true;
					},
				},
				viewAsFilter: function (player) {
					return player.hasCard(function (card) {
						return get.type(card) == "equip";
					}, "ehs");
				},
				position: "hes",
				filterCard: { type: "equip" },
				viewAs: {
					name: "sha",
					storage: { dcjinggong: true },
				},
				check: function (card) {
					return 6 - get.value(card);
				},
				ai: {
					respondSha: true,
					skillTagFilter: function (player) {
						return player.hasCard(function (card) {
							return get.type(card) == "equip";
						}, "ehs");
					},
				},
				group: "dcjinggong_base",
				subSkill: {
					base: {
						trigger: { player: "useCard1" },
						forced: true,
						popup: false,
						firstDo: true,
						filter: function (event, player) {
							return event.skill == "dcjinggong" && event.targets.length > 0;
						},
						content: function () {
							trigger.baseDamage = Math.min(5, get.distance(player, trigger.targets[0]));
						},
					},
				},
			},
			dcxiaojuan: {
				audio: 2,
				trigger: { player: "useCardToPlayered" },
				logTarget: "target",
				filter: function (event, player) {
					return event.targets.length == 1 && player != event.target && event.target.countCards("h") > 1;
				},
				check: function (event, player) {
					var target = event.target;
					if (get.attitude(player, target) >= 0) return false;
					if (get.color(event.card) == "none") return true;
					return Math.floor(target.countCards("h") / 2) >= Math.floor(player.countCards("h") / 2);
				},
				content: function () {
					"step 0";
					var target = trigger.target;
					event.target = target;
					var num = Math.floor(target.countCards("h") / 2);
					if (num > 0) player.discardPlayerCard(target, "h", num, true);
					else event.finish();
					"step 1";
					var suit = get.suit(trigger.card);
					if (result.bool && lib.suit.includes(suit) && player.countCards("h") > 1) {
						var bool = false;
						for (var i of result.cards) {
							if (get.suit(i, target) == suit) {
								bool = true;
								break;
							}
						}
						if (!bool) event.finish();
					} else event.finish();
					"step 2";
					if (player.countCards("h") > 0) player.chooseToDiscard("h", 1, true);
				},
			},
			//来莺儿
			xiaowu: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				selectTarget: function () {
					return [1, game.countPlayer() - 1];
				},
				complexSelect: true,
				complexTarget: true,
				filterTarget: function (card, player, target) {
					if (player == target) return false;
					var next = player.getNext(),
						prev = player.getPrevious();
					var selected = ui.selected.targets;
					if (!selected.includes(next) && !selected.includes(prev)) return target == next || target == prev;
					for (var i of selected) {
						if (i.getNext() == target || i.getPrevious() == target) return true;
					}
					return false;
				},
				contentBefore: function () {
					event.getParent()._xiaowu_targets = [];
				},
				content: function () {
					"step 0";
					if (!target.isIn()) {
						event.finish();
						return;
					}
					target
						.chooseControl()
						.set("choiceList", ["令" + get.translation(player) + "摸一张牌", "令自己摸一张牌"])
						.set("ai", function () {
							var player = _status.event.player,
								target = _status.event.getParent().player;
							var all = _status.event.getParent().targets.length,
								dam = _status.event.getParent(2)._xiaowu_targets.length;
							if (get.attitude(player, target) > 0 || dam >= Math.floor(all / 2)) return 0;
							return 1;
						});
					"step 1";
					if (result.index == 0) {
						player.draw();
					} else {
						target.draw();
						event.getParent()._xiaowu_targets.push(target);
					}
				},
				contentAfter: function () {
					var targetsx = event.getParent()._xiaowu_targets;
					var num = targets.length - targetsx.length - targetsx.length;
					if (num > 0) player.addMark("shawu", 1);
					else if (num < 0) {
						player.line(targetsx, "fire");
						for (var i of targetsx) i.damage();
					}
				},
				ai: {
					order: 8,
					result: { player: 1 },
				},
			},
			huaping: {
				audio: 2,
				trigger: { global: "die" },
				limited: true,
				skillAnimation: true,
				animationColor: "fire",
				filter: function (event, player) {
					return player != event.player;
				},
				logTarget: "player",
				check: function (event, player) {
					return get.rank(event.player.name, true) >= 5;
				},
				content: function () {
					player.awakenSkill("huaping");
					var skills = trigger.player.getSkills(null, false, false).filter(function (i) {
						var info = get.info(i);
						return info && !info.charlotte;
					});
					if (skills.length) {
						//for(var i of skills) player.addSkillLog(i);
						player.addSkills(skills);
					}
					player.removeSkills("xiaowu");
					var num = player.countMark("shawu");
					if (num > 0) {
						player.removeMark("shawu", num);
						player.draw(num);
					}
				},
				group: "huaping_give",
				subSkill: {
					give: {
						audio: "huaping",
						trigger: { player: "die" },
						direct: true,
						filter: function (event, player) {
							return event.player == player;
						},
						forceDie: true,
						skillAnimation: true,
						animationColor: "gray",
						content: function () {
							"step 0";
							player
								.chooseTarget(get.prompt("huaping"), "令一名其他角色获得〖沙舞〗", lib.filter.notMe)
								.set("forceDie", true)
								.set("ai", function (target) {
									return get.attitude(_status.event.player, target) + 100;
								});
							"step 1";
							if (result.bool) {
								var target = result.targets[0];
								player.awakenSkill("huaping");
								player.logSkill("huaping_give", target);
								target.addSkills("shawu");
								var num = player.countMark("shawu");
								if (num > 0) {
									player.removeMark("shawu", num);
									target.addMark("shawu", num);
								}
							}
						},
					},
				},
				derivation: "shawu",
			},
			shawu: {
				audio: 2,
				trigger: { player: "useCardToTargeted" },
				direct: true,
				filter: function (event, player) {
					return (
						event.card.name == "sha" &&
						event.player.isIn() &&
						(player.hasMark("shawu") ||
							player.countCards("h", function (card) {
								return lib.filter.cardDiscardable(card, player, "shawu");
							}) > 1)
					);
				},
				content: function () {
					"step 0";
					var list = [];
					if (
						player.countCards("h", function (card) {
							return lib.filter.cardDiscardable(card, player, "shawu");
						}) > 1
					)
						list.push("弃置手牌");
					if (player.hasMark("shawu")) list.push("移除标记");
					list.push("cancel2");
					player
						.chooseControl(list)
						.set("prompt", get.prompt("shawu", trigger.target))
						.set("prompt2", "弃置两张手牌，或移去一枚“沙”并摸两张牌，然后对该角色造成1点伤害")
						.set("ai", function () {
							var player = _status.event.player,
								target = _status.event.getTrigger().target;
							if (get.damageEffect(target, player, player) <= 0) return "cancel2";
							if (player.hasMark("shawu")) return "移除标记";
							if (
								player.countCards("h", function (card) {
									return lib.filter.cardDiscardable(card, player, "shawu") && get.value(card) <= 6.5;
								}) > 1
							)
								return "弃置手牌";
							return "cancel2";
						});
					"step 1";
					var target = trigger.target;
					if (result.control == "cancel2") {
						event.finish();
						return;
					} else if (result.control == "移除标记") {
						player.logSkill("shawu", target);
						player.removeMark("shawu", 1);
						player.draw(2);
						target.damage();
						event.finish();
					} else {
						player.chooseToDiscard("h", true, 2).logSkill = ["shawu", target];
					}
					"step 2";
					trigger.target.damage();
				},
				intro: {
					content: "mark",
				},
			},
			//曹髦
			qianlong: {
				audio: 2,
				trigger: { player: "damageEnd" },
				frequent: true,
				content: function () {
					"step 0";
					var cards = get.cards(3);
					event.cards = cards;
					game.cardsGotoOrdering(cards);
					//展示牌
					game.log(player, "展示了", event.cards);
					event.videoId = lib.status.videoId++;
					game.broadcastAll(
						function (player, id, cards) {
							if (player == game.me || player.isUnderControl()) return;
							var str = get.translation(player) + "发动了【潜龙】";
							var dialog = ui.create.dialog(str, cards);
							dialog.videoId = id;
						},
						player,
						event.videoId,
						event.cards
					);
					game.addVideo("showCards", player, [get.translation(player) + "发动了【潜龙】", get.cardsInfo(event.cards)]);
					if (player != game.me && !player.isUnderControl() && !player.isOnline()) game.delay(2);
					//选牌
					var next = player.chooseToMove("潜龙：获得至多" + get.cnNumber(Math.min(3, player.getDamagedHp())) + "张牌并将其余牌置于牌堆底");
					next.set("list", [["置于牌堆底", cards], ["自己获得"]]);
					next.set("filterMove", function (from, to, moved) {
						if (moved[0].includes(from.link)) {
							if (typeof to == "number") {
								if (to == 1) {
									if (moved[1].length >= _status.event.player.getDamagedHp()) return false;
								}
								return true;
							}
						}
						return true;
					});
					next.set("processAI", function (list) {
						let cards = list[0][1].slice(0),
							player = _status.event.player;
						cards.sort((a, b) => {
							return get.value(b, player) - get.value(a, player);
						});
						if (!player.storage.juetao && player.hasSkill("juetao") && player.hasSha()) {
							let gain,
								bottom,
								pai = cards.filter(card => card.name !== "sha");
							pai.sort((a, b) => {
								return get.value(b, player) - get.value(a, player);
							});
							gain = pai.splice(0, player.getDamagedHp());
							bottom = cards.slice(0);
							bottom.removeArray(gain);
							return [bottom, gain];
						}
						return [cards, cards.splice(0, player.getDamagedHp())];
					});
					"step 1";
					game.broadcastAll("closeDialog", event.videoId);
					game.addVideo("cardDialog", null, event.videoId);
					var moved = result.moved;
					if (moved[0].length > 0) {
						for (var i of moved[0]) {
							i.fix();
							ui.cardPile.appendChild(i);
						}
					}
					if (moved[1].length > 0) player.gain(moved[1], "gain2");
				},
				ai: {
					maixie: true,
					maixie_hp: true,
					effect: {
						target: function (card, player, target) {
							if (get.tag(card, "damage")) {
								if (player.hasSkillTag("jueqing", false, target)) return;
								if (!target.hasFriend()) return;
								var num = 1;
								if (!player.needsToDiscard() && target.isDamaged()) {
									num = 0.7;
								} else {
									num = 0.5;
								}
								if (target.hp >= 4) return [1, num * 2];
								if (target.hp == 3) return [1, num * 1.5];
								if (target.hp == 2) return [1, num * 0.5];
							}
						},
					},
				},
			},
			fensi: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				content: function () {
					"step 0";
					if (
						!game.hasPlayer(function (current) {
							return current != player && current.hp >= player.hp;
						})
					) {
						player.damage();
						event.finish();
						return;
					} else {
						player
							.chooseTarget(true, "忿肆：对一名体力值不小于你的角色造成1点伤害", function (card, player, target) {
								return target.hp >= player.hp;
							})
							.set("ai", function (target) {
								var player = _status.event.player;
								return get.damageEffect(target, player, player);
							});
					}
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.line(target, "green");
						target.damage();
					} else event.finish();
					"step 2";
					if (target.isIn() && target.canUse("sha", player, false)) target.useCard({ name: "sha", isCard: true }, player, false, "noai");
				},
			},
			juetao: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				direct: true,
				limited: true,
				skillAnimation: true,
				animationColor: "thunder",
				filter: function (event, player) {
					return player.hp == 1;
				},
				content: function () {
					"step 0";
					player.chooseTarget(get.prompt2("juetao"), lib.filter.notMe).set("ai", function (target) {
						let att = -get.attitude(_status.event.player, target);
						if (att <= 0) return att;
						if (target.hasSkillTag("nodamage") || target.getEquip("qimenbagua")) return 0.01 * att;
						if (target.getEquip("tengjia") || target.getEquip("renwang")) return 0.3 * att;
						if (target.getEquip("rewrite_tengjia") || target.getEquip("rewrite_renwang")) return 0.2 * att;
						if (
							target.hasSkillTag(
								"freeShan",
								false,
								{
									player: _status.event.player,
								},
								true
							)
						)
							return 0.3 * att;
						if (target.getEquip(2)) return att / 2;
						return 1.2 * att;
					});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						player.logSkill("juetao", target);
						player.awakenSkill("juetao");
					} else event.finish();
					"step 2";
					var card = get.bottomCards()[0];
					game.cardsGotoOrdering(card);
					player.showCards(card);
					player
						.chooseUseTarget(card, true, false, "nodistance")
						.set("filterTarget", function (card, player, target) {
							var evt = _status.event;
							if (_status.event.name == "chooseTarget") evt = evt.getParent();
							if (target != player && target != evt.juetao_target) return false;
							return lib.filter.targetEnabledx(card, player, target);
						})
						.set("juetao_target", target);
					"step 3";
					if (result.bool && target.isIn()) event.goto(2);
				},
			},
			zhushi: {
				audio: 2,
				usable: 1,
				trigger: { global: "recoverEnd" },
				direct: true,
				zhuSkill: true,
				filter: function (event, player) {
					return player != event.player && event.player.group == "wei" && event.player == _status.currentPhase && event.player.isIn() && player.hasZhuSkill("zhushi", event.player);
				},
				content: function () {
					"step 0";
					var str = get.translation(player);
					trigger.player
						.chooseBool("是否响应" + get.translation(player) + "的主公技【助势】？", "令" + get.translation(player) + "摸一张牌")
						.set("goon", get.attitude(trigger.player, player) > 0)
						.set("ai", () => _status.event.goon);
					"step 1";
					if (result.bool) {
						player.logSkill("zhushi");
						trigger.player.line(player, "thunder");
						player.draw();
					} else player.storage.counttrigger.zhushi--;
				},
			},
			//骆统
			renzheng: {
				audio: 2,
				trigger: { global: ["damageCancelled", "damageZero", "damageAfter"] },
				forced: true,
				filter: function (event, player, name) {
					if (name == "damageCancelled") return true;
					for (var i of event.change_history) {
						if (i < 0) return true;
					}
					return false;
				},
				content: function () {
					player.draw(2);
				},
			},
			jinjian: {
				audio: 2,
				trigger: { source: "damageBegin1" },
				logTarget: "player",
				filter: function (event, player) {
					return !event.jinjian_source2 && !player.hasSkill("jinjian_source2");
				},
				prompt2: "令即将对其造成的伤害+1",
				check: function (event, player) {
					return (
						get.attitude(player, event.player) < 0 &&
						!event.player.hasSkillTag("filterDamage", null, {
							player: player,
							card: event.card,
						})
					);
				},
				content: function () {
					trigger.jinjian_source = true;
					trigger.num++;
					player.addTempSkill("jinjian_source2");
				},
				group: "jinjian_player",
				subSkill: {
					player: {
						audio: "jinjian",
						trigger: { player: "damageBegin4" },
						filter: function (event, player) {
							return !event.jinjian_player2 && !player.hasSkill("jinjian_player2");
						},
						prompt2: "令即将受到的伤害-1",
						content: function () {
							trigger.jinjian_player = true;
							trigger.num--;
							player.addTempSkill("jinjian_player2");
						},
					},
					source2: {
						trigger: { source: "damageBegin1" },
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							return !event.jinjian_source;
						},
						content: function () {
							trigger.num--;
							trigger.jinjian_source2 = true;
							player.removeSkill("jinjian_source2");
						},
						marktext: " -1 ",
						intro: {
							content: "下次造成的伤害-1",
						},
					},
					player2: {
						trigger: { player: "damageBegin3" },
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							return !event.jinjian_player;
						},
						content: function () {
							trigger.num++;
							trigger.jinjian_player2 = true;
							player.removeSkill("jinjian_player2");
						},
						marktext: " +1 ",
						intro: {
							content: "下次受到的伤害+1",
						},
					},
				},
				ai: {
					maixie_defend: true,
					threaten: 0.9,
					effect: {
						target: function (card, player, target) {
							if (player.hasSkillTag("jueqing", false, target)) return;
							//if(target.hujia) return;
							if (player._jinjian_tmp) return;
							if (_status.event.getParent("useCard", true) || _status.event.getParent("_wuxie", true)) return;
							if (get.tag(card, "damage")) {
								if (target.hasSkill("jinjian_player2")) {
									return [1, -2];
								} else {
									if (get.attitude(player, target) > 0) {
										return [0, 0.2];
									}
									if (get.attitude(player, target) < 0 && !player.hasSkillTag("damageBonus")) {
										var sha = player.getCardUsable({ name: "sha" });
										player._jinjian_tmp = true;
										var num = player.countCards("h", function (card) {
											if (card.name == "sha") {
												if (sha == 0) {
													return false;
												} else {
													sha--;
												}
											}
											return get.tag(card, "damage") && player.canUse(card, target) && get.effect(target, card, player, player) > 0;
										});
										delete player._jinjian_tmp;
										if (player.hasSkillTag("damage")) {
											num++;
										}
										if (num < 2) {
											return [0, 0.8];
										}
									}
								}
							}
						},
					},
				},
			},
			//冯妤
			tiqi: {
				audio: 2,
				trigger: { global: ["phaseDrawEnd", "phaseDrawSkipped", "phaseDrawCancelled"] },
				filter: function (event, player) {
					if (player == event.player) return false;
					var num = 0;
					event.player.getHistory("gain", function (evt) {
						if (evt.getParent().name == "draw" && evt.getParent("phaseDraw") == event) num += evt.cards.length;
					});
					return num != 2;
				},
				frequent: true,
				logTarget: "player",
				content: function () {
					"step 0";
					var num = 0;
					trigger.player.getHistory("gain", function (evt) {
						if (evt.getParent().name == "draw" && evt.getParent("phaseDraw") == trigger) num += evt.cards.length;
					});
					num = Math.abs(num - 2);
					event.num = num;
					player.draw(num);
					"step 1";
					if (trigger.player.isIn()) {
						player
							.chooseControl(" +" + num + " ", " -" + num + " ", "cancel2")
							.set("prompt", "是否改变" + get.translation(trigger.player) + "本回合的手牌上限？")
							.set("ai", function () {
								var sgn = get.sgn(get.attitude(_status.event.player, _status.event.getTrigger().player));
								if (sgn == 0) return 2;
								if (sgn == 1) return 0;
								return 1;
							});
					} else event.finish();
					"step 2";
					if (result.index < 2) {
						var target = trigger.player;
						player.line(target);
						if (!target.storage.tiqi_effect) target.storage.tiqi_effect = 0;
						target.storage.tiqi_effect += num * get.sgn(0.5 - result.index);
						target.addTempSkill("tiqi_effect");
						target.markSkill("tiqi_effect");
					}
				},
				subSkill: {
					effect: {
						mod: {
							maxHandcard: function (player, num) {
								if (typeof player.storage.tiqi_effect == "number") return num + player.storage.tiqi_effect;
							},
						},
						charlotte: true,
						onremove: true,
						mark: true,
						intro: {
							content: num => "手牌上限" + (num < 0 ? "" : "+") + num,
						},
					},
				},
			},
			baoshu: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				direct: true,
				filter: function (event, player) {
					return player.maxHp > 0;
				},
				content: function () {
					"step 0";
					player.chooseTarget([1, player.maxHp], get.prompt("baoshu"), "令至多" + get.cnNumber(player.maxHp) + "名角色重置武将牌并获得“梳”").set("ai", function (target) {
						var att = get.attitude(player, target);
						if (att <= 0) return 0;
						//if(target.isTurnedOver()) return 3*att;
						if (target.isLinked() && get.effect(target, { name: "tiesuo" }, player, player) > 0) return 1.6 * att;
						if (ui.selected.targets.length >= Math.sqrt(1 + player.maxHp)) return 0;
						if (target != player) return 1.3 * att;
						return att;
					});
					"step 1";
					if (result.bool) {
						var targets = result.targets;
						targets.sortBySeat();
						player.logSkill("baoshu", targets);
						event.targets = targets;
						event.num = 0;
						event.num2 = 1 + player.maxHp - targets.length;
					} else event.finish();
					"step 2";
					var target = targets[num];
					event.target = target;
					if (!target.isIn()) {
						if (num < targets.length - 1) {
							event.num++;
							event.goto(2);
						} else event.finish();
					} else if (target.isLinked()) target.link();
					"step 3";
					if (target.isIn()){
						target.addSkill("baoshu_draw");
						target.addMark("baoshu", event.num2);
					}
					if (num < targets.length - 1) {
						event.num++;
						event.goto(2);
					} else event.finish();
				},
				marktext: "梳",
				intro: {
					name2: "梳",
					content: "mark",
					onunmark(storage, player){
						delete player.storage.baoshu;
						player.removeSkill("baoshu_draw");
					}
				},
				//group: "baoshu_draw",
				subSkill: {
					draw: {
						trigger: { player: "phaseDrawBegin2" },
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							return !event.numFixed && player.hasMark("baoshu");
						},
						content: function () {
							var num = player.countMark("baoshu");
							trigger.num += num;
							trigger.player.removeMark("baoshu", num);
						},
					},
				},
			},
			//吴范
			tianyun: {
				audio: 2,
				trigger: { global: "phaseBegin" },
				frequent: true,
				filter: function (event, player) {
					return event.player.getSeatNum() == game.roundNumber && player.countCards("h") > 0;
				},
				seatRelated: true,
				content: function () {
					"step 0";
					var suits = [],
						hs = player.getCards("h");
					for (var i of hs) {
						suits.add(get.suit(i, player));
					}
					var num = suits.length;
					event.num = num;
					var cards = get.cards(num);
					game.cardsGotoOrdering(cards);
					var next = player.chooseToMove();
					next.set("list", [["牌堆顶", cards], ["牌堆底"]]);
					next.set("prompt", "天运：点击将牌移动到牌堆顶或牌堆底");
					next.processAI = function (list) {
						var cards = list[0][1];
						return [[], cards];
					};
					"step 1";
					var top = result.moved[0];
					var bottom = result.moved[1];
					top.reverse();
					for (var i = 0; i < top.length; i++) {
						ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
					}
					for (i = 0; i < bottom.length; i++) {
						ui.cardPile.appendChild(bottom[i]);
					}
					player.popup(get.cnNumber(top.length) + "上" + get.cnNumber(bottom.length) + "下");
					game.log(player, "将" + get.cnNumber(top.length) + "张牌置于牌堆顶");
					game.updateRoundNumber();
					if (top.length) {
						game.delayx();
						event.finish();
					}
					"step 2";
					player
						.chooseTarget("是否令一名角色摸" + get.cnNumber(num) + "张牌，然后失去1点体力？")
						.set("", function (target) {
							if (!_status.event.goon || target.hasSkillTag("nogain")) return 0;
							return get.attitude(_status.event.player, target) * Math.sqrt(Math.max(1, 5 - target.getCards("h")));
						})
						.set("goon", num > 1 && player.hp > 5 - num);
					"step 3";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "green");
						target.draw(num);
						player.loseHp();
					} else game.delayx();
				},
				group: "tianyun_gain",
				subSkill: {
					gain: {
						audio: "tianyun",
						trigger: {
							global: "phaseBefore",
							player: "enterGame",
						},
						forced: true,
						locked: false,
						filter: function (event, player) {
							if (event.name == "phase" && game.phaseNumber != 0) return false;
							var suits = lib.suit.slice(0),
								hs = player.getCards("h");
							for (var i of hs) {
								suits.remove(get.suit(i, player));
								if (!suits.length) return false;
							}
							return true;
						},
						content: function () {
							var suits = lib.suit.slice(0),
								hs = player.getCards("h");
							for (var i of hs) {
								suits.remove(get.suit(i, player));
							}
							var cards = [];
							for (var i of suits) {
								var card = get.cardPile(function (card) {
									return get.suit(card, false) == i;
								});
								if (card) cards.push(card);
							}
							if (cards.length) player.gain(cards, "gain2");
						},
					},
				},
			},
			wfyuyan: {
				audio: 2,
				derivation: "refenyin",
				trigger: { global: "roundStart" },
				forced: true,
				locked: false,
				derivation: "iwasawa_refenyin",
				content: function () {
					"step 0";
					var next = player
						.chooseTarget("请选择【预言】的目标", true)
						.set("animate", false)
						.set("ai", function () {
							return Math.random();
						});
					"step 1";
					if (result.bool) {
						player.storage.wfyuyan = result.targets[0];
						player.addSkill("wfyuyan_dying");
						player.addSkill("wfyuyan_damage");
					}
				},
				subSkill: {
					dying: {
						trigger: { global: "dying" },
						forced: true,
						charlotte: true,
						popup: false,
						content: function () {
							if (trigger.player == player.storage.wfyuyan) {
								player.logSkill("wfyuyan", trigger.player);
								player.addTempSkill("iwasawa_refenyin", { player: "phaseEnd" });
							}
							player.removeSkill("wfyuyan_dying");
						},
					},
					damage: {
						trigger: { global: "damageSource" },
						forced: true,
						popup: false,
						charlotte: true,
						filter: function (event, player) {
							return event.source && event.source.isIn();
						},
						content: function () {
							if (trigger.source == player.storage.wfyuyan) {
								player.logSkill("wfyuyan", trigger.source);
								player.draw(2);
							}
							player.removeSkill("wfyuyan_damage");
						},
					},
				},
			},
			//张宝
			xinzhoufu: {
				audio: "zhoufu",
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.countCards("he") > 0;
				},
				filterCard: true,
				filterTarget: function (card, player, target) {
					return target != player && !target.getExpansions("xinzhoufu2").length;
				},
				check: function (card) {
					return 6 - get.value(card);
				},
				position: "he",
				discard: false,
				lose: false,
				delay: false,
				content: function () {
					target.addToExpansion(cards, player, "give").gaintag.add("xinzhoufu2");
					target.addSkill("xinzhoufu_judge");
				},
				ai: {
					order: 9,
					result: {
						target: function (player, target) {
							if (player.inRange(target)) return -1.3;
							return -1;
						},
					},
				},
				subSkill: {
					judge: {
						audio: "zhoufu",
						trigger: { player: "judgeBefore" },
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							return !event.directresult && player.getExpansions("xinzhoufu2").length;
						},
						content: function () {
							var cards = [player.getExpansions("xinzhoufu2")[0]];
							trigger.directresult = cards[0];
						},
					},
				},
			},
			xinzhoufu2: {
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
			},
			xinyingbing: {
				audio: "yingbin",
				trigger: { player: "useCardToPlayered" },
				forced: true,
				logTarget: "target",
				filter: function (event, player) {
					return (
						event.target.getExpansions("xinzhoufu2").length > 0 &&
						!player.hasHistory("gain", function (evt) {
							var evtx = evt.getParent(2);
							return evtx && evtx.name == "xinyingbing" && evtx._trigger.target == event.target;
						})
					);
				},
				content: function () {
					player.draw(2);
				},
				ai: {
					effect: {
						player: function (card, player, target) {
							if (
								target &&
								target.getExpansions("xinzhoufu2").length > 0 &&
								!player.hasHistory("gain", function (evt) {
									var evtx = evt.getParent(2);
									return evtx && evtx.name == "xinyingbing" && evtx._trigger.target == target;
								})
							)
								return [1, 2];
						},
					},
					combo: "xinzhoufu",
				},
			},
			//孙翊
			syjiqiao: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				content: function () {
					var cards = get.cards(player.maxHp);
					cards.sort(function (a, b) {
						return get.color(b).length - get.color(a).length;
					});
					player.addToExpansion(cards, "gain2").gaintag.add("syjiqiao");
					player.addTempSkill("syjiqiao_gain", "phaseUseAfter");
				},
				onremove: function (player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				intro: {
					content: "expansion",
					markcount: "expansion",
				},
				subSkill: {
					gain: {
						audio: "syjiqiao",
						trigger: { player: "useCardAfter" },
						charlotte: true,
						forced: true,
						filter: function (event, player) {
							return player.hasCard(card => card.hasGaintag("syjiqiao"), "x");
						},
						content: function () {
							"step 0";
							var cards = player.getExpansions("syjiqiao");
							var dialog = ["激峭：选择获得一张牌"];
							var reds = [],
								blacks = [];
							for (var i of cards) (get.color(i) == "red" ? reds : blacks).push(i);
							if (reds.length > 0) {
								dialog.push('<div class="text center">红色牌</div>');
								dialog.push(reds);
							}
							if (blacks.length > 0) {
								dialog.push('<div class="text center">黑色牌</div>');
								dialog.push(blacks);
							}
							player.chooseButton(dialog, true).set("ai", function (button) {
								var player = _status.event.player;
								var color = get.color(button.link),
									cards = player.getExpansions("syjiqiao");
								var num1 = cards.filter(card => get.color(card) == color).length,
									num2 = cards.length - num1;
								if (num1 >= num2) return get.value(button.link);
								return 0;
							});
							"step 1";
							if (result.bool) {
								player.gain(result.links, "gain2");
							} else event.finish();
							"step 2";
							var map = { red: 0, black: 0 },
								cards = player.getExpansions("syjiqiao");
							for (var i of cards) {
								var color = get.color(i, false);
								if (map[color] != undefined) map[color]++;
							}
							if (map.red == map.black) player.recover();
							else player.loseHp();
						},
						onremove: function (player) {
							var cards = player.getExpansions("syjiqiao");
							if (cards.length) player.loseToDiscardpile(cards);
						},
					},
				},
			},
			syxiongyi: {
				audio: 2,
				skillAnimation: true,
				animationColor: "wood",
				limited: true,
				enable: "chooseToUse",
				filter: function (event, player) {
					if (event.type != "dying") return false;
					if (player != event.dying) return false;
					return true;
				},
				async content(event, trigger, player) {
					"step 0";
					player.awakenSkill("syxiongyi");
					if (!_status.characterlist) {
						lib.skill.pingjian.initList();
					}
					if (_status.characterlist.includes("xushi")) {
						if (player.name2 && get.character(player.name2)[3].includes("syxiongyi")) {
							await player.reinitCharacter(player.name2, "xushi");
						} else {
							await player.reinitCharacter(player.name1, "xushi");
						}
						if (player.hp < 3) await player.recover(3 - player.hp);
					} else {
						await player.addSkills("olhunzi");
						if (player.hp < 1) await player.recover(1 - player.hp);
					}
				},
				ai: {
					order: 1,
					save: true,
					skillTagFilter: function (player, arg, target) {
						return player == target;
					},
					result: {
						player: 10,
					},
				},
				derivation: ["olhunzi", "reyingzi", "gzyinghun"],
			},
			gzyinghun_re_sunyi: { audio: 1 },
			reyingzi_re_sunyi: { audio: 1 },
			//曹金玉
			yuqi: {
				audio: 2,
				trigger: { global: "damageEnd" },
				init: function (player) {
					if (!player.storage.yuqi) player.storage.yuqi = [0, 3, 1, 1];
				},
				getInfo: function (player) {
					if (!player.storage.yuqi) player.storage.yuqi = [0, 3, 1, 1];
					return player.storage.yuqi;
				},
				onremove: true,
				usable: 2,
				filter: function (event, player) {
					var list = lib.skill.yuqi.getInfo(player);
					return event.player.isIn() && get.distance(player, event.player) <= list[0];
				},
				logTarget: "player",
				content: function () {
					"step 0";
					event.list = lib.skill.yuqi.getInfo(player);
					var cards = get.cards(event.list[1]);
					event.cards = cards;
					game.cardsGotoOrdering(cards);
					var next = player.chooseToMove(true, "隅泣（若对话框显示不完整，可下滑操作）");
					next.set("list", [["牌堆顶的牌", cards], ["交给" + get.translation(trigger.player) + "（至少一张" + (event.list[2] > 1 ? "，至多" + get.cnNumber(event.list[2]) + "张" : "") + "）"], ["交给自己（至多" + get.cnNumber(event.list[3]) + "张）"]]);
					next.set("filterMove", function (from, to, moved) {
						var info = lib.skill.yuqi.getInfo(_status.event.player);
						if (to == 1) return moved[1].length < info[2];
						if (to == 2) return moved[2].length < info[3];
						return true;
					});
					next.set("processAI", function (list) {
						var cards = list[0][1].slice(0).sort(function (a, b) {
								return get.value(b, "raw") - get.value(a, "raw");
							}),
							player = _status.event.player,
							target = _status.event.getTrigger().player;
						var info = lib.skill.yuqi.getInfo(_status.event.player);
						var cards1 = cards.splice(0, Math.min(info[3], cards.length - 1));
						var card2;
						if (get.attitude(player, target) > 0) card2 = cards.shift();
						else card2 = cards.pop();
						return [cards, [card2], cards1];
					});
					next.set("filterOk", function (moved) {
						return moved[1].length > 0;
					});
					"step 1";
					if (result.bool) {
						var moved = result.moved;
						cards.removeArray(moved[1]);
						cards.removeArray(moved[2]);
						while (cards.length) {
							ui.cardPile.insertBefore(cards.pop().fix(), ui.cardPile.firstChild);
						}
						var list = [[trigger.player, moved[1]]];
						if (moved[2].length) list.push([player, moved[2]]);
						game.loseAsync({
							gain_list: list,
							giver: player,
							animate: "draw",
						}).setContent("gaincardMultiple");
					}
				},
				mark: true,
				intro: {
					content: function (storage, player) {
						var info = lib.skill.yuqi.getInfo(player);
						return '<div class="text center"><span class=thundertext>蓝色：' + info[0] + "</span>　<span class=firetext>红色：" + info[1] + "</span><br><span class=greentext>绿色：" + info[2] + "</span>　<span class=yellowtext>黄色：" + info[3] + "</span></div>";
					},
				},
				ai: {
					threaten: 8.8,
				},
			},
			shanshen: {
				audio: 2,
				trigger: { global: "die" },
				direct: true,
				content: function () {
					"step 0";
					event.goon = !player.hasAllHistory("sourceDamage", function (evt) {
						return evt.player == trigger.player;
					});
					var list = lib.skill.yuqi.getInfo(player);
					player
						.chooseControl("<span class=thundertext>蓝色(" + list[0] + ")</span>", "<span class=firetext>红色(" + list[1] + ")</span>", "<span class=greentext>绿色(" + list[2] + ")</span>", "<span class=yellowtext>黄色(" + list[3] + ")</span>", "cancel2")
						.set("prompt", get.prompt("shanshen"))
						.set("prompt2", "令〖隅泣〗中的一个数字+2" + (event.goon ? "并回复1点体力" : ""))
						.set("ai", function () {
							var player = _status.event.player,
								info = lib.skill.yuqi.getInfo(player);
							if (
								info[0] < info[3] &&
								game.countPlayer(function (current) {
									return get.distance(player, current) <= info[0];
								}) < Math.min(3, game.countPlayer())
							)
								return 0;
							if (info[3] < info[1] - 1) return 3;
							if (info[1] < 5) return 1;
							if (
								info[0] < 5 &&
								game.hasPlayer(function (current) {
									return current != player && get.distance(player, current) > info[0];
								})
							)
								return 0;
							return 2;
						});
					"step 1";
					if (result.control != "cancel2") {
						player.logSkill("shanshen", trigger.player);
						var list = lib.skill.yuqi.getInfo(player);
						list[result.index] = Math.min(5, list[result.index] + 2);
						game.log(player, "将", result.control, "数字改为", "#y" + list[result.index]);
						player.markSkill("yuqi");
						if (event.goon) player.recover();
					}
				},
				ai: {
					combo: "yuqi",
				},
			},
			xianjing: {
				audio: 2,
				trigger: { player: "phaseZhunbeiBegin" },
				direct: true,
				content: function () {
					"step 0";
					var list = lib.skill.yuqi.getInfo(player);
					player
						.chooseControl("<span class=thundertext>蓝色(" + list[0] + ")</span>", "<span class=firetext>红色(" + list[1] + ")</span>", "<span class=greentext>绿色(" + list[2] + ")</span>", "<span class=yellowtext>黄色(" + list[3] + ")</span>", "cancel2")
						.set("prompt", get.prompt("xianjing"))
						.set("prompt2", "令〖隅泣〗中的一个数字+1")
						.set("ai", function () {
							var player = _status.event.player,
								info = lib.skill.yuqi.getInfo(player);
							if (
								info[0] < info[3] &&
								game.countPlayer(function (current) {
									return get.distance(player, current) <= info[0];
								}) < Math.min(3, game.countPlayer())
							)
								return 0;
							if (info[3] < info[1] - 1) return 3;
							if (info[1] < 5) return 1;
							if (
								info[0] < 5 &&
								game.hasPlayer(function (current) {
									return current != player && get.distance(player, current) > info[0];
								})
							)
								return 0;
							return 2;
						});
					"step 1";
					if (result.control != "cancel2") {
						player.logSkill("xianjing");
						var list = lib.skill.yuqi.getInfo(player);
						list[result.index] = Math.min(5, list[result.index] + 1);
						game.log(player, "将", result.control, "数字改为", "#y" + list[result.index]);
						player.markSkill("yuqi");
						if (player.isDamaged()) event.finish();
					} else event.finish();
					"step 2";
					var list = lib.skill.yuqi.getInfo(player);
					player
						.chooseControl("<span class=thundertext>蓝色(" + list[0] + ")</span>", "<span class=firetext>红色(" + list[1] + ")</span>", "<span class=greentext>绿色(" + list[2] + ")</span>", "<span class=yellowtext>黄色(" + list[3] + ")</span>", "cancel2")
						.set("prompt", "是否令〖隅泣〗中的一个数字+1？")
						.set("ai", function () {
							var player = _status.event.player,
								info = lib.skill.yuqi.getInfo(player);
							if (
								info[0] < info[3] &&
								game.countPlayer(function (current) {
									return get.distance(player, current) <= info[0];
								}) < Math.min(3, game.countPlayer())
							)
								return 0;
							if (info[3] < info[1] - 1) return 3;
							if (info[1] < 5) return 1;
							if (
								info[0] < 5 &&
								game.hasPlayer(function (current) {
									return current != player && get.distance(player, current) > info[0];
								})
							)
								return 0;
							return 2;
						});
					"step 3";
					if (result.control != "cancel2") {
						var list = lib.skill.yuqi.getInfo(player);
						list[result.index] = Math.min(5, list[result.index] + 1);
						game.log(player, "将", result.control, "数字改为", "#y" + list[result.index]);
						player.markSkill("yuqi");
					}
				},
				ai: {
					combo: "yuqi",
				},
			},
			//周夷
			zhukou: {
				audio: 2,
				trigger: { source: "damageSource" },
				filter: function (event, player) {
					if (!player.getHistory("useCard").length) return false;
					var evt = event.getParent("phaseUse");
					if (!evt || !evt.player) return false;
					return (
						player
							.getHistory("sourceDamage", function (evtx) {
								return evtx.getParent("phaseUse") == evt;
							})
							.indexOf(event) == 0
					);
				},
				frequent: true,
				content: function () {
					player.draw(player.getHistory("useCard").length);
				},
				group: "zhukou_all",
				subSkill: {
					all: {
						audio: "zhukou",
						trigger: { player: "phaseJieshuBegin" },
						filter: function (event, player) {
							return game.countPlayer(current => current != player) > 1 && !player.getHistory("sourceDamage").length;
						},
						direct: true,
						content: function () {
							"step 0";
							player.chooseTarget(get.prompt("zhukou"), "对两名其他角色各造成1点伤害", 2, lib.filter.notMe).set("ai", function (target) {
								var player = _status.event.player;
								return get.damageEffect(target, player, player);
							});
							"step 1";
							if (result.bool) {
								var targets = result.targets.sortBySeat();
								player.logSkill("zhukou", targets);
								for (var i of targets) i.damage();
							}
						},
					},
				},
			},
			mengqing: {
				trigger: { player: "phaseZhunbeiBegin" },
				forced: true,
				filter: function (event, player) {
					return game.countPlayer(current => current.isDamaged()) > player.hp;
				},
				juexingji: true,
				skillAnimation: true,
				animationColor: "wood",
				content: function () {
					player.awakenSkill("mengqing");
					player.gainMaxHp(3);
					player.recover(3);
					//player.removeSkill('zhukou');
					//player.addSkill('yuyun');
					player.changeSkills(["yuyun"], ["zhukou"]);
				},
				derivation: "yuyun",
			},
			yuyun: {
				trigger: { player: "phaseUseBegin" },
				forced: true,
				filter: function (event, player) {
					return player.hp > 0 || player.maxHp > 1;
				},
				content: function () {
					"step 0";
					if (player.maxHp <= 1) event._result = { control: "失去体力", index: 0 };
					else if (player.hp < 1) event._result = { control: "减体力上限", index: 1 };
					else
						player
							.chooseControl("失去体力", "减体力上限")
							.set("prompt", "玉陨：失去1点体力或减1点体力上限")
							.set("ai", function () {
								var player = _status.event.player;
								if (player.hp < 2 || player.getDamagedHp() > 2) return 1;
								return 0;
							});
					"step 1";
					if (result.index == 1) player.loseMaxHp();
					else player.loseHp();
					"step 2";
					var list = ["选项一：摸两张牌", "选项二：对一名其他角色造成1点伤害，且本回合对其使用【杀】无距离和次数限制", "选项三：本回合手牌上限视为无限", "选项四：获得一名其他角色区域内的一张牌", "选项五：令一名其他角色将手牌数摸至体力上限（至多摸至五张）"];
					var next = player.chooseButton([
						"玉陨：请选择一" + (player.getDamagedHp() > 0 ? "至" + get.cnNumber(player.getDamagedHp() + 1) : "") + "项",
						[
							list.map((item, i) => {
								return [i, item];
							}),
							"textbutton",
						],
					]);
					next.set("dialog", event.videoId);
					next.set("forced", true);
					next.set("ai", function (button) {
						var player = _status.event.player;
						switch (button.link) {
							case 0:
								return 2;
							case 1:
								return (
									Math.max(
										0.5,
										player.countCards("hs", function (card) {
											return get.name(card) == "sha" && player.hasValueTarget(card);
										}) - player.getCardUsable({ name: "sha" })
									) +
									Math.max.apply(
										Math,
										game
											.filterPlayer(function (current) {
												return current != player;
											})
											.map(function (target) {
												return get.damageEffect(target, player, player);
											})
									)
								);
							case 2:
								return player.needsToDiscard() / 4;
							case 3:
								var num = 0;
								return (
									0.8 *
									Math.max.apply(
										Math,
										game
											.filterPlayer(function (current) {
												return current != player && current.hasCard(card => lib.filter.canBeGained(card, current, player), "hej");
											})
											.map(function (target) {
												return get.effect(target, { name: "shunshou_copy" }, player, player);
											})
									)
								);
							case 4:
								var num = 0;
								game.countPlayer(function (current) {
									if (current != player && get.attitude(player, current) > 0) {
										var num2 = Math.min(5, current.maxHp) - current.countCards("h");
										if (num2 > num) num = num2;
									}
								});
								return num * 0.8;
						}
					});
					if (player.getDamagedHp() > 0) next.set("selectButton", [1, 1 + player.getDamagedHp()]);
					"step 3";
					result.links.sort();
					for (var i of result.links) game.log(player, "选择了", "#g【玉陨】", "的", "#y选项" + get.cnNumber(1 + i, true));
					event.links = result.links;
					if (result.links.includes(0)) player.draw(2);
					if (result.links.includes(2)) player.addTempSkill("yuyun_114514");
					"step 4";
					if (
						event.links.includes(1) &&
						game.hasPlayer(function (current) {
							return current != player;
						})
					)
						player.chooseTarget(lib.filter.notMe, true, "对一名其他角色造成1点伤害").set("ai", function (target) {
							var player = _status.event.player;
							return get.damageEffect(target, player, player);
						});
					else if (event.links.includes(3)) event.goto(6);
					else if (event.links.includes(4)) event.goto(8);
					else event.finish();
					"step 5";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "green");
						target.damage();
						player.markAuto("yuyun_sha", [target]);
						player.addTempSkill("yuyun_sha");
					}
					if (event.links.includes(3)) event.goto(6);
					else if (event.links.includes(4)) event.goto(8);
					else event.finish();
					"step 6";
					if (
						event.links.includes(3) &&
						game.hasPlayer(function (current) {
							return current != player && current.hasCard(card => lib.filter.canBeGained(card, current, player), "hej");
						})
					) {
						player
							.chooseTarget(true, "获得一名其他角色区域内的一张牌", function (card, player, current) {
								return current != player && current.hasCard(card => lib.filter.canBeGained(card, current, player), "hej");
							})
							.set("ai", function (target) {
								var player = _status.event.player;
								return get.effect(target, { name: "shunshou_copy" }, player, player);
							});
					} else if (event.links.includes(4)) event.goto(8);
					else event.finish();
					"step 7";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "green");
						player.gainPlayerCard(target, "hej", true);
					}
					if (!event.links.includes(4)) event.finish();
					"step 8";
					if (
						event.links.includes(4) &&
						game.hasPlayer(function (current) {
							return current != player && current.countCards("h") < Math.min(5, current.maxHp);
						})
					) {
						player
							.chooseTarget(true, "令一名其他角色将手牌数摸至体力上限", function (card, player, current) {
								return current != player && current.countCards("h") < Math.min(5, current.maxHp);
							})
							.set("ai", function (target) {
								var att = get.attitude(_status.event.player, target);
								if (target.hasSkillTag("nogain")) att /= 6;
								if (att > 2) {
									return Math.min(5, target.maxHp) - target.countCards("h");
								}
								return att / 3;
							});
					} else event.finish();
					"step 9";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "green");
						target.drawTo(Math.min(5, target.maxHp));
					}
				},
				subSkill: {
					114514: {
						mod: {
							maxHandcardFinal: function (player, num) {
								return 114514;
							},
						},
						charlotte: true,
					},
					sha: {
						mod: {
							cardUsableTarget: function (card, player, target) {
								if (card.name == "sha" && player.getStorage("yuyun_sha").includes(target)) return Infinity;
							},
							targetInRange: function (card, player, target) {
								if (card.name == "sha" && player.getStorage("yuyun_sha").includes(target)) return true;
							},
						},
						charlotte: true,
						onremove: true,
					},
				},
			},
			//潘淑
			zhiren: {
				audio: 2,
				trigger: { player: "useCard" },
				filter: function (event, player) {
					return (
						(player == _status.currentPhase || player.hasSkill("yaner_zhiren")) &&
						event.card.isCard &&
						player
							.getHistory("useCard", function (evt) {
								return evt.card.isCard;
							})
							.indexOf(event) == 0
					);
				},
				frequent: true,
				locked: false,
				content: function () {
					"step 0";
					event.num = get.translation(trigger.card.name).length;
					player.chooseToGuanxing(event.num);
					if (event.num < 2) event.finish();
					"step 1";
					if (
						!game.hasPlayer(function (current) {
							return current.countDiscardableCards(player, "e") > 0;
						})
					) {
						event.goto(3);
					} else
						player
							.chooseTarget("织纴：是否弃置一名角色装备区内的一张牌？", function (card, player, target) {
								return target.countDiscardableCards(player, "e") > 0;
							})
							.set("ai", function (target) {
								var player = _status.event.player,
									att = get.attitude(player, target),
									es = target.getCards("e"),
									val = 0;
								for (var i of es) {
									var eff = -(get.value(i, target) - 0.1) * att;
									if (eff > val) val = eff;
								}
								return eff;
							});
					"step 2";
					if (result.bool) {
						var target = result.targets[0];
						player.addExpose(0.15);
						player.line(target, "green");
						player.discardPlayerCard(target, "e", true);
					} else event.goto(5);
					if (event.num < 3) event.finish();
					"step 3";
					if (
						!game.hasPlayer(function (current) {
							return current.countDiscardableCards(player, "j") > 0;
						})
					) {
						if (event.num < 3) event.finish();
						else event.goto(5);
					} else
						player
							.chooseTarget("织纴：是否弃置一名角色判定区内的一张牌？", function (card, player, target) {
								return target.countDiscardableCards(player, "j") > 0;
							})
							.set("ai", function (target) {
								var player = _status.event.player,
									att = get.attitude(player, target),
									es = target.getCards("j"),
									val = 0;
								for (var i of es) {
									var eff = -get.effect(target, i, target, player);
									if (eff > val) val = eff;
								}
								return eff;
							});
					"step 4";
					if (result.bool) {
						var target = result.targets[0];
						player.addExpose(0.15);
						player.line(target, "green");
						player.discardPlayerCard(target, "j", true);
					}
					if (event.num < 3) event.finish();
					"step 5";
					player.recover();
					if (event.num < 4) event.finish();
					"step 6";
					player.draw(3);
				},
				mod: {
					aiOrder: function (player, card, num) {
						if (
							player == _status.currentPhase &&
							!player.getHistory("useCard", function (evt) {
								return evt.card.isCard;
							}).length
						)
							return num + Math.pow(get.translation(card.name).length, 2);
					},
				},
			},
			yaner: {
				audio: 2,
				trigger: {
					global: ["equipAfter", "addJudgeAfter", "loseAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
				},
				filter: function (event, player) {
					var current = _status.currentPhase;
					if (!current || current == player || !current.isIn() || !current.isPhaseUsing()) return false;
					var evt = event.getl(current);
					return evt && evt.hs && evt.hs.length && current.countCards("h") == 0;
				},
				usable: 1,
				logTarget: function () {
					return _status.currentPhase;
				},
				prompt2: "与该角色各摸两张牌",
				check: function (event, player) {
					return get.attitude(player, _status.currentPhase) > 0;
				},
				content: function () {
					"step 0";
					game.asyncDraw([_status.currentPhase, player], 2);
					"step 1";
					var e1 = player.getHistory("gain", function (evt) {
						return evt.getParent(2) == event;
					})[0];
					if (e1 && e1.cards && e1.cards.length == 2 && get.type(e1.cards[0]) == get.type(e1.cards[1])) {
						player.addTempSkill("yaner_zhiren", { player: "phaseBegin" });
						game.log(player, "修改了技能", "#g【织纴】");
					}
					var target = _status.currentPhase;
					if (target.isIn() && target.isDamaged()) {
						var e2 = target.getHistory("gain", function (evt) {
							return evt.getParent(2) == event;
						})[0];
						if (e2 && e2.cards && e2.cards.length == 2 && get.type(e2.cards[0]) == get.type(e2.cards[1])) target.recover();
					}
					"step 2";
					game.delayx();
				},
				subSkill: {
					zhiren: { charlotte: true },
				},
				ai: {
					expose: 0.5,
				},
			},
			//杨婉
			youyan: {
				audio: 2,
				trigger: {
					player: ["loseAfter", "equipAfter"],
					global: ["loseAsyncAfter", "cardsDiscardAfter"],
				},
				prompt2: function (event, player) {
					var cards2 = [];
					if (event.name == "cardsDiscard") {
						var evtx = event.getParent();
						if (evtx.name != "orderingDiscard") return false;
						var evtx2 = evtx.relatedEvent || evtx.getParent();
						if (evtx2.name == "useCard" || evtx2.name == "respond") return false;
						player.getHistory("lose", evtx3 => {
							var evtx4 = evtx3.relatedEvent || evtx3.getParent();
							if (evtx2 != evtx4) return false;
							if (!evtx3.cards2 || !evtx3.cards2.length) return false;
							cards2.addArray(evtx3.cards2.filterInD("d"));
						});
					} else if (event.name == "loseAsync") {
						player.hasHistory("lose", evt => {
							if (evt.getParent() != event || evt.position != ui.discardPile) return false;
							cards2.addArray(evt.cards2.filterInD("d"));
						});
					} else {
						cards2.addArray(event.getd(player).filterInD("d"));
					}
					return "获得与" + get.translation(cards2) + "花色" + (cards2.length > 1 ? "各" : "") + "不相同的牌各一张";
				},
				filter: function (event, player) {
					if (player != _status.currentPhase) return false;
					var cards2 = [];
					if (event.name == "cardsDiscard") {
						var evtx = event.getParent();
						if (evtx.name != "orderingDiscard") return false;
						var evtx2 = evtx.relatedEvent || evtx.getParent();
						if (evtx2.name == "useCard" || evtx2.name == "respond") return false;
						player.getHistory("lose", evtx3 => {
							var evtx4 = evtx3.relatedEvent || evtx3.getParent();
							if (evtx2 != evtx4) return false;
							if (!evtx3.cards2 || !evtx3.cards2.length) return false;
							cards2.addArray(evtx3.cards2.filterInD("d"));
						});
					} else if (event.name == "loseAsync") {
						player.hasHistory("lose", evt => {
							if (evt.getParent() != event || evt.position != ui.discardPile) return false;
							cards2.addArray(evt.cards2.filterInD("d"));
						});
					} else {
						cards2.addArray(event.getd(player).filterInD("d"));
					}
					if (!cards2.length) return false;
					var list = [];
					for (var i of cards2) {
						list.add(get.suit(i, player));
						if (list.length >= lib.suit.length) return false;
					}
					var evt = event.getParent("phaseUse");
					if (evt && evt.player == player && !evt.youyaned) return true;
					var evt = event.getParent("phaseDiscard");
					if (evt && evt.player == player && !evt.youyaned) return true;
					return false;
				},
				content: function () {
					let evt = trigger.getParent("phaseUse");
					if (evt && evt.player == player) player.tempBanSkill("youyan", "phaseUseAfter", false);
					else {
						let evtx = trigger.getParent("phaseDiscard");
						if (evtx && evtx.player == player) player.tempBanSkill("youyan", "phaseDiscardAfter", false);
					}
					var list = [],
						cards = [];
					var cards2 = [];
					if (trigger.name == "cardsDiscard") {
						var evtx = trigger.getParent();
						if (evtx.name != "orderingDiscard") return false;
						var evtx2 = evtx.relatedEvent || evtx.getParent();
						if (evtx2.name == "useCard" || evtx2.name == "respond") return false;
						player.getHistory("lose", evtx3 => {
							var evtx4 = evtx3.relatedEvent || evtx3.getParent();
							if (evtx2 != evtx4) return false;
							if (!evtx3.cards2 || !evtx3.cards2.length) return false;
							cards2.addArray(evtx3.cards2.filterInD("d"));
						});
					} else if (trigger.name == "loseAsync") {
						player.hasHistory("lose", evt => {
							if (evt.getParent() != trigger || evt.position != ui.discardPile) return false;
							cards2.addArray(evt.cards2.filterInD("d"));
						});
					} else {
						cards2.addArray(trigger.getd(player).filterInD("d"));
					}
					for (var i of cards2) {
						list.add(get.suit(i, player));
					}
					for (var i of lib.suit) {
						if (list.includes(i)) continue;
						var card = get.cardPile2(function (card) {
							return get.suit(card, false) == i;
						});
						if (card) cards.push(card);
					}
					if (cards.length) player.gain(cards, "gain2");
				},
				ai: {
					effect: {
						player_use: function (card, player, target) {
							if (
								typeof card == "object" &&
								player == _status.currentPhase &&
								//(!player.storage.counttrigger||!player.storage.counttrigger.youyan)&&
								player.needsToDiscard() == 1 &&
								card.cards &&
								card.cards.filter(function (i) {
									return get.position(i) == "h";
								}).length > 0 &&
								!get.tag(card, "draw") &&
								!get.tag(card, "gain") &&
								!get.tag(card, "discard")
							)
								return "zeroplayertarget";
						},
					},
				},
			},
			zhuihuan: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				filter: function (event, player) {
					return game.hasPlayer(function (current) {
						return !current.hasSkill("zhuihuan2_new");
					});
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(get.prompt("zhuihuan"), "令一名角色获得“追还”效果", function (card, player, target) {
							return !target.hasSkill("zhuihuan2_new");
						})
						.set("ai", function (target) {
							var player = _status.event.player,
								att = get.attitude(player, target);
							if (target.hasSkill("maixie") || target.hasSkill("maixie_defend")) att /= 3;
							if (target != player) att /= Math.pow(game.players.length - get.distance(player, target, "absolute"), 0.7);
							return att;
						})
						.set("animate", false);
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("zhuihuan");
						target.addTempSkill("zhuihuan2_new", { player: "phaseZhunbei" });
						game.delayx();
					}
				},
			},
			zhuihuan2_new: {
				trigger: { player: "phaseZhunbeiBegin" },
				charlotte: true,
				forced: true,
				onremove: true,
				sourceSkill: "zhuihuan",
				filter: function (event, player) {
					if (player.storage.zhuihuan2_new) {
						for (var source of player.storage.zhuihuan2_new) {
							if (!source.isIn()) continue;
							if (source.hp > player.hp) return true;
							return source.countCards("h") > 0;
						}
					}
				},
				logTarget: function (event, player) {
					return player.storage.zhuihuan2_new.filter(function (target) {
						return target.isIn();
					});
				},
				content: function () {
					"step 0";
					event.targets = player.storage.zhuihuan2_new;
					player.removeSkill("zhuihuan2_new");
					"step 1";
					var target = targets.shift();
					if (target.isIn()) {
						if (target.hp > player.hp) target.damage(2);
						else {
							var hs = target.getCards("h");
							if (hs.length) target.discard(hs.randomGets(2));
						}
					}
					if (targets.length) event.redo();
				},
				group: "zhuihuan2_new_count",
				subSkill: {
					count: {
						trigger: { player: "damage" },
						forced: true,
						silent: true,
						popup: false,
						charlotte: true,
						filter: function (event, player) {
							return get.itemtype(event.source) == "player";
						},
						content: function () {
							player.markAuto("zhuihuan2_new", [trigger.source]);
						},
					},
				},
			},
			zhuihuan2: {
				trigger: { player: "damageEnd" },
				forced: true,
				charlotte: true,
				logTarget: "source",
				sourceSkill: "zhuihuan",
				filter: function (event, player) {
					var source = event.source;
					if (source.hp > player.hp) return true;
					return source.countCards("h") > 0;
				},
				content: function () {
					if (player.hp < trigger.source.hp) trigger.source.damage();
					else trigger.source.discard(trigger.source.getCards("h").randomGet());
				},
				mark: true,
				intro: {
					content: "当你受到伤害后，若伤害来源体力值大于你，则你对其造成1点伤害，否则其随机弃置一张手牌",
				},
			},
			//阮瑀
			xingzuo: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				frequent: true,
				content: function () {
					"step 0";
					player.addTempSkill("xingzuo2");
					var cards = get.bottomCards(3);
					event.cards2 = cards;
					game.cardsGotoOrdering(cards);
					var next = player.chooseToMove("兴作：将三张牌置于牌堆底");
					var list = [["牌堆底", cards]],
						hs = player.getCards("h");
					if (hs.length) {
						list.push(["手牌", hs]);
						next.set("filterMove", function (from, to) {
							return typeof to != "number";
						});
					}
					next.set("list", list);
					next.set("processAI", function (list) {
						var allcards = list[0][1].slice(0),
							cards = [];
						if (list.length > 1) {
							allcards = allcards.concat(list[1][1]);
						}
						var canchoose = allcards.slice(0);
						var player = _status.event.player;
						var getv = function (button) {
							if (
								button.name == "sha" &&
								allcards.filter(function (card) {
									return (
										card.name == "sha" &&
										!cards.filter(function () {
											return button == card;
										}).length
									);
								}).length > player.getCardUsable({ name: "sha" })
							)
								return 10;
							return -player.getUseValue(button, player);
						};
						while (cards.length < 3) {
							canchoose.sort(function (a, b) {
								return getv(b) - getv(a);
							});
							cards.push(canchoose.shift());
						}
						return [cards, canchoose];
					});
					"step 1";
					if (result.bool) {
						event.forceDie = true;
						var cards = result.moved[0];
						event.cards = cards;
						player.storage.xingzuo2 = cards;
						var hs = player.getCards("h");
						var lose = [],
							gain = event.cards2;
						for (var i of cards) {
							if (hs.includes(i)) lose.push(i);
							else gain.remove(i);
						}
						if (lose.length) player.lose(lose, ui.cardPile);
						if (gain.length) player.gain(gain, "draw");
					} else event.finish();
					"step 2";
					for (var i of cards) {
						if (!"hejsdx".includes(get.position(i, true))) {
							i.fix();
							ui.cardPile.appendChild(i);
						}
					}
					game.updateRoundNumber();
				},
			},
			xingzuo2: {
				trigger: { player: "phaseJieshuBegin" },
				direct: true,
				charlotte: true,
				onremove: true,
				sourceSkill: "xingzuo",
				filter: function (event, player) {
					return game.hasPlayer(function (target) {
						return target.countCards("h") > 0;
					});
				},
				content: function () {
					"step 0";
					player
						.chooseTarget(function (card, player, target) {
							return target.countCards("h") > 0;
						}, "兴作：是否令一名角色将其手牌与牌堆底的三张牌替换？")
						.set("ai", function (target) {
							var player = _status.event.player,
								att = get.attitude(player, target),
								hs = target.getCards("h"),
								num = hs.length;
							var getv = function (list, target) {
									var num = 0;
									for (var i of list) num += get.value(i, target);
									return num;
								},
								val = getv(hs, target) - getv(player.storage.xingzuo2, target);
							if (num < 3) return att * Math.sqrt(Math.max(0, -val)) * 1.5;
							if (num == 3) return -att * Math.sqrt(Math.max(0, val));
							if (player.hp < (num > 4 ? 3 : 2)) return 0;
							return -att * Math.sqrt(Math.max(0, val));
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("xingzuo", target);
						var cards = get.bottomCards(3);
						game.cardsGotoOrdering(cards);
						var hs = target.getCards("h");
						target.lose(hs, ui.cardPile);
						target.gain(cards, "draw");
						if (hs.length > 3) player.loseHp();
					} else event.finish();
					"step 2";
					game.updateRoundNumber();
				},
			},
			miaoxian: {
				hiddenCard: function (player, name) {
					return get.type(name) == "trick" && !player.hasSkill("miaoxian2") && player.countCards("h", { color: "black" }) == 1;
				},
				enable: "chooseToUse",
				filter: function (event, player) {
					if (player.hasSkill("miaoxian2")) return false;
					var cards = player.getCards("h", { color: "black" });
					if (cards.length != 1) return false;
					var mod2 = game.checkMod(cards[0], player, "unchanged", "cardEnabled2", player);
					if (mod2 === false) return false;
					for (var i of lib.inpile) {
						if (
							get.type(i) == "trick" &&
							event.filterCard(
								{
									name: i,
									cards: cards,
								},
								player,
								event
							)
						)
							return true;
					}
					return false;
				},
				chooseButton: {
					dialog: function (event, player) {
						var cards = player.getCards("h", { color: "black" });
						var list = [];
						for (var i of lib.inpile) {
							if (
								get.type(i) == "trick" &&
								event.filterCard(
									{
										name: i,
										cards: cards,
									},
									player,
									event
								)
							) {
								list.push(["锦囊", "", i]);
							}
						}
						return ui.create.dialog("妙弦", [list, "vcard"], "hidden");
					},
					check: function (button) {
						var player = _status.event.player;
						return player.getUseValue({ name: button.link[2] }) + 1;
					},
					backup: function (links, player) {
						return {
							audio: "miaoxian",
							popname: true,
							filterCard: { color: "black" },
							selectCard: -1,
							position: "h",
							viewAs: {
								name: links[0][2],
							},
							onuse: function (links, player) {
								player.addTempSkill("miaoxian2");
							},
						};
					},
					prompt: function (links, player) {
						return "将" + get.translation(player.getCards("h", { color: "black" })[0]) + "当做" + get.translation(links[0][2]) + "使用";
					},
				},
				group: "miaoxian_use",
				subfrequent: ["use"],
				subSkill: {
					use: {
						audio: "miaoxian",
						trigger: { player: "loseAfter" },
						frequent: true,
						prompt: "是否发动【妙弦】摸一张牌？",
						filter: function (event, player) {
							var evt = event.getParent();
							if (evt.name != "useCard") return false;
							return event.hs && event.hs.length == 1 && event.cards && event.cards.length == 1 && get.color(event.hs[0], player) == "red" && !player.countCards("h", { color: "red" });
						},
						content: function () {
							player.draw();
						},
					},
					backup: {
						audio: "miaoxian",
					},
				},
				ai: {
					order: 12,
					result: {
						player: 1,
					},
				},
			},
			miaoxian2: {
				charlotte: true,
			},
			//樊玉凤
			bazhan: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				zhuanhuanji: true,
				marktext: "☯",
				mark: true,
				intro: {
					content: function (storage, player) {
						return "出牌阶段限一次，" + (storage ? "你可以获得一名其他角色的至多两张手牌。" : "你可以将至多两张手牌交给一名其他角色。") + "若以此法移动的牌包含【酒】或♥牌，则你可令得到牌的角色执行一项：①回复1点体力。②复原武将牌。";
					},
				},
				filter: function (event, player) {
					if (player.storage.bazhan) {
						return game.hasPlayer(function (current) {
							return current != player && current.countGainableCards(player, "h") > 0;
						});
					}
					return player.countCards("h") > 0;
				},
				filterCard: true,
				discard: false,
				lose: false,
				selectCard: function () {
					if (_status.event.player.storage.bazhan) return 0;
					return [1, 2];
				},
				filterTarget: function (card, player, target) {
					if (player == target) return false;
					if (player.storage.bazhan) return target.countGainableCards(player, "h") > 0;
					return true;
				},
				prompt: function () {
					if (_status.event.player.storage.bazhan) return "获得一名其他角色的至多两张手牌";
					return "将至多两张手牌交给一名其他角色";
				},
				delay: false,
				check: function (card) {
					var player = _status.event.player;
					var bool1 = false,
						bool2 = false;
					for (var i of game.players) {
						if (get.attitude(player, i) <= 0 || player == i) continue;
						bool1 = true;
						if (i.isDamaged() || i.isTurnedOver()) {
							bool2 = true;
							break;
						}
					}
					if (bool2 && !ui.selected.cards.length && (get.suit(card, player) == "heart" || get.name(card, player) == "jiu")) return 10;
					if (bool1) return 9 - get.value(card);
					if (get.color(card) == "red") return 5 - get.value(card);
					return 0;
				},
				content: function () {
					"step 0";
					if (player.storage.bazhan) {
						event.recover = player;
						player.gainPlayerCard(target, "h", true, "visibleMove", [1, 2]);
					} else {
						event.recover = target;
						player.give(cards, target);
					}
					player.changeZhuanhuanji("bazhan");
					"step 1";
					var target = event.recover;
					var cards = event.cards;
					if (result.bool && result.cards && result.cards.length) {
						cards = result.cards;
					}
					if (
						!cards ||
						!target ||
						!target.getCards("h").filter(function (i) {
							return cards.includes(i);
						}).length ||
						(function () {
							for (var card of cards) {
								if (get.suit(card, target) == "heart" || get.name(card, target) == "jiu") return false;
							}
							return true;
						})()
					) {
						event.finish();
						return;
					}
					var list = [];
					event.addIndex = 0;
					var str = get.translation(target);
					event.target = target;
					if (target.isDamaged()) list.push("令" + str + "回复1点体力");
					else event.addIndex++;
					if (target.isLinked() || target.isTurnedOver()) list.push("令" + get.translation(target) + "复原武将牌");
					if (!list.length) event.finish();
					else
						player
							.chooseControl("cancel2")
							.set("choiceList", list)
							.set("ai", function () {
								var evt = _status.event.getParent();
								if (get.attitude(evt.player, evt.target) < 0) return "cancel2";
								if (evt.target.hp > 1 && evt.target.isTurnedOver()) return 1 - evt.addIndex;
								return 0;
							});
					"step 2";
					if (result.control == "cancel2") event.finish();
					else if (result.index + event.addIndex == 0) {
						event.recover.recover();
						event.finish();
					} else if (event.recover.isLinked()) event.recover.link();
					"step 3";
					if (event.recover.isTurnedOver()) event.recover.turnOver();
				},
				ai: {
					order: 7,
					result: {
						target: function (player, target) {
							if (player.storage.bazhan) return -1;
							if (ui.selected.cards.length) {
								var cards = ui.selected.cards,
									card = cards[0];
								if (get.value(cards, target) < 0) return -0.5;
								if (get.attitude(player, target) > 0) {
									if ((target.isDamaged() || target.isTurnedOver()) && (get.suit(card, target) == "heart" || get.name(card, target) == "jiu")) return 3;
									if (target.hasUseTarget(card) && target.getUseValue(card) > player.getUseValue(card, null, true)) return 1.4;
									return 1;
								}
							}
							return 0;
						},
					},
				},
			},
			jiaoying: {
				audio: 2,
				trigger: { source: "gainEnd" },
				forced: true,
				filter: function (event, player) {
					if (player == event.player) return false;
					var evt = event.getl(player);
					return evt && evt.hs && evt.hs.length;
				},
				logTarget: "player",
				content: function () {
					var target = trigger.player;
					if (!target.storage.jiaoying2) target.storage.jiaoying2 = [];
					var cs = trigger.getl(player).hs;
					for (var i of cs) target.storage.jiaoying2.add(get.color(i, player));
					target.addTempSkill("jiaoying2");
					target.markSkill("jiaoying2");
					player.addTempSkill("jiaoying3");
					if (!player.storage.jiaoying3) player.storage.jiaoying3 = [];
					player.storage.jiaoying3.add(target);
				},
				ai: {
					directHit_ai: true,
					skillTagFilter: function (player, tag, arg) {
						var target = arg.target;
						if (target.getStorage("jiaoying2").includes("red") && get.tag(arg.card, "respondShan") && !target.hasSkillTag("respondShan", true, null, true)) return true;
						return false;
					},
				},
			},
			jiaoying2: {
				onremove: true,
				charlotte: true,
				mod: {
					cardEnabled2: function (card, player) {
						if (player.getStorage("jiaoying2").includes(get.color(card))) return false;
					},
				},
				intro: {
					content: "本回合内不能使用或打出$牌",
				},
			},
			jiaoying3: {
				onremove: true,
				trigger: { global: "useCard1" },
				silent: true,
				firstDo: true,
				charlotte: true,
				sourceSkill: "jiaoying",
				filter: function (event, player) {
					return player.storage.jiaoying3.includes(event.player);
				},
				content: function () {
					while (player.storage.jiaoying3.includes(trigger.player)) player.storage.jiaoying3.remove(trigger.player);
					if (!player.storage.jiaoying3.length) player.removeSkill("jiaoying3");
				},
				group: "jiaoying3_draw",
			},
			jiaoying3_draw: {
				trigger: { global: "phaseEnd" },
				direct: true,
				charlotte: true,
				sourceSkill: "jiaoying",
				filter: function (event, player) {
					return (
						player.getStorage("jiaoying3").length > 0 &&
						game.hasPlayer(function (current) {
							return current.countCards("h") < 5;
						})
					);
				},
				content: function () {
					"step 0";
					player.storage.jiaoying3.shift();
					player
						.chooseTarget("醮影：令一名角色将手牌摸至五张", function (card, player, target) {
							return target.countCards("h") < 5;
						})
						.set("ai", function (target) {
							var att = get.attitude(_status.event.player, target);
							if (att > 2) {
								return 5 - target.countCards("h");
							}
							return att / 3;
						});
					"step 1";
					if (result.bool) {
						player.logSkill("jiaoying", result.targets);
						for (var i = 0; i < result.targets.length; i++) {
							result.targets[i].drawTo(5);
						}
						if (lib.skill.jiaoying3_draw.filter(null, player)) event.goto(0);
					}
				},
			},
			//郭照
			pianchong: {
				audio: 2,
				trigger: { player: "phaseDrawBegin1" },
				filter: function (event, player) {
					return !event.numFixed;
				},
				content: function () {
					"step 0";
					trigger.changeToZero();
					var cards = [];
					var card1 = get.cardPile2(function (card) {
						return get.color(card, false) == "red";
					});
					if (card1) cards.push(card1);
					var card2 = get.cardPile2(function (card) {
						return get.color(card, false) == "black";
					});
					if (card2) cards.push(card2);
					if (cards.length) player.gain(cards, "gain2");
					"step 1";
					player
						.chooseControl("red", "black")
						.set("prompt", "偏宠：请选择一种颜色。直至你的下回合开始时，失去该颜色的一张牌后，从牌堆获得另一种颜色的一张牌。")
						.set("ai", function () {
							var red = 0,
								black = 0;
							var player = _status.event.player;
							var cards = player.getCards("he");
							for (var i of cards) {
								var add = 1;
								var color = get.color(i, player);
								if (get.position(i) == "e") add = 0.5;
								else if (get.name(i, player) != "sha" && player.hasValueTarget(i)) add = 1.5;
								if (color == "red") red += add;
								else black += add;
							}
							if (black > red) return "black";
							return "red";
						});
					"step 2";
					player.markAuto("pianchong2", result.control);
					player.addTempSkill("pianchong2", { player: "phaseBeginStart" });
					player.popup(result.control, result.control == "red" ? "fire" : "thunder");
					game.log(player, "声明了", "#y" + get.translation(result.control));
				},
				ai: {
					threaten: 4.8,
				},
			},
			pianchong2: {
				audio: "pianchong",
				trigger: {
					player: "loseAfter",
					global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
				},
				forced: true,
				charlotte: true,
				onremove: true,
				sourceSkill: "pianchong",
				filter: function (event, player) {
					var evt = event.getl(player);
					if (!evt || !evt.cards2 || !evt.cards2.length) return false;
					for (var i of evt.cards2) {
						if (player.getStorage("pianchong2").includes(get.color(i, player))) return true;
					}
					return false;
				},
				content: function () {
					"step 0";
					let cardsx = trigger.getl(player).cards2.filter(function (card) {
						return player.getStorage("pianchong2").includes(get.color(card, player));
					}).slice(0);
					let cards = [];
					while (cardsx.length) {
						let precard = cardsx.shift();
						var card = get.cardPile2(function (card) {
							return !cards.includes(card) && get.color(card, false) != get.color(precard, false);
						});
						if (card) cards.push(card);
						else break;
					}
					if (cards.length) player.gain(cards, "gain2");
				},
				mark: true,
				intro: {
					content: "失去一张$牌后，从牌堆中获得一张与此牌颜色不同的牌",
				},
			},
			zunwei: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					let storage = player.getStorage("zunwei");
					return (
						storage.length < 3 &&
						game.hasPlayer(current => {
							return (player.isDamaged() && current.getHp() > player.getHp() && !storage.includes(0)) || (current.countCards("h") > player.countCards("h") && !storage.includes(1)) || (current.countCards("e") > player.countCards("e") && !storage.includes(2));
						})
					);
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = ["选择体力值大于你的一名角色", "选择手牌数大于你的一名角色", "选择装备数大于你的一名角色"];
						var choiceList = ui.create.dialog("尊位：请选择一项", "forcebutton", "hidden");
						choiceList.add([
							list.map((item, i) => {
								if (player.getStorage("zunwei").includes(i)) item = `<span style="text-decoration: line-through;">${item}</span>`;
								return [i, item];
							}),
							"textbutton",
						]);
						return choiceList;
					},
					filter: function (button) {
						const player = get.player();
						if (player.getStorage("zunwei").includes(button.link)) return false;
						if (button.link == 0) {
							if (!player.isDamaged()) return false;
							return game.hasPlayer(current => {
								return current.getHp() > player.getHp();
							});
						}
						if (button.link == 1) {
							return game.hasPlayer(current => {
								return current.countCards("h") > player.countCards("h");
							});
						}
						if (button.link == 2) {
							return game.hasPlayer(current => {
								return current.countCards("e") > player.countCards("e");
							});
						}
					},
					backup: function (links) {
						var next = get.copy(lib.skill.zunwei.backups[links[0]]);
						next.audio = "zunwei";
						next.filterCard = function () {
							return false;
						};
						next.selectCard = -1;
						return next;
					},
					check: function (button) {
						var player = _status.event.player;
						switch (button.link) {
							case 0: {
								var target = game.findPlayer(function (current) {
									return current.isMaxHp();
								});
								return (Math.min(target.hp, player.maxHp) - player.hp) * 2;
							}
							case 1: {
								var target = game.findPlayer(function (current) {
									return current.isMaxHandcard();
								});
								return Math.min(5, target.countCards("h") - player.countCards("h")) * 0.8;
							}
							case 2: {
								var target = game.findPlayer(function (current) {
									return current.isMaxEquip();
								});
								return (target.countCards("e") - player.countCards("e")) * 1.4;
							}
						}
					},
					prompt: function (links) {
						return ["选择一名体力值大于你的其他角色，将体力值回复至与其相同", "选择一名手牌数大于你的其他角色，将手牌数摸至与其相同", "选择一名装备区内牌数大于你的其他角色，依次使用牌堆中的装备牌，直到装备数与其相同"][links[0]];
					},
				},
				backups: [
					{
						filterTarget: function (card, player, target) {
							if (player.isHealthy()) return false;
							return target.hp > player.hp;
						},
						content: function () {
							player.recover(target.hp - player.hp);
							if (!player.storage.zunwei) player.storage.zunwei = [];
							player.storage.zunwei.add(0);
						},
						ai: {
							order: 10,
							result: {
								player: function (player, target) {
									return Math.min(target.hp, player.maxHp) - player.hp;
								},
							},
						},
					},
					{
						filterTarget: function (card, player, target) {
							return target.countCards("h") > player.countCards("h");
						},
						content: function () {
							player.draw(Math.min(5, target.countCards("h") - player.countCards("h")));
							if (!player.storage.zunwei) player.storage.zunwei = [];
							player.storage.zunwei.add(1);
						},
						ai: {
							order: 10,
							result: {
								player: function (player, target) {
									return Math.min(5, target.countCards("h") - player.countCards("h"));
								},
							},
						},
					},
					{
						filterTarget: function (card, player, target) {
							return target.countCards("e") > player.countCards("e");
						},
						content: function () {
							"step 0";
							if (!player.storage.zunwei) player.storage.zunwei = [];
							player.storage.zunwei.add(2);
							event.num = 1;
							"step 1";
							var type = "equip" + num;
							if (!player.hasEmptySlot(type)) return;
							var card = get.cardPile2(function (card) {
								return get.subtype(card, false) == type && player.canUse(card, player);
							});
							if (card) player.chooseUseTarget(card, true).nopopup = true;
							"step 2";
							event.num++;
							if (event.num <= 5 && target.isIn() && player.countCards("e") < target.countCards("e")) event.goto(1);
						},
						ai: {
							order: 10,
							result: {
								player: function (player, target) {
									return target.countCards("e") - player.countCards("e");
								},
							},
						},
					},
				],
				ai: {
					order: 10,
					result: {
						player: 1,
					},
				},
			},
			//辛宪英
			rezhongjian: {
				enable: "phaseUse",
				audio: "zhongjian",
				usable: 2,
				filter: function (event, player) {
					if (player.getStat().skill.rezhongjian && !player.hasSkill("recaishi2")) return false;
					return game.hasPlayer(function (current) {
						return lib.skill.rezhongjian.filterTarget(null, player, current);
					});
				},
				filterTarget: function (card, player, target) {
					if (!player.storage.rezhongjian2) return true;
					return !player.storage.rezhongjian2[0].includes(target) && !player.storage.rezhongjian2[1].includes(target);
				},
				line: false,
				log: "notarget",
				content: function () {
					"step 0";
					player
						.chooseControl()
						.set("prompt", "忠鉴：为" + get.translation(target) + "选择获得一项效果")
						.set("choiceList", ["令其于下回合开始前首次造成伤害后弃置两张牌", "令其于下回合开始前首次受到伤害后摸两张牌"])
						.set("ai", function () {
							return get.attitude(_status.event.player, _status.event.getParent().target) > 0 ? 1 : 0;
						});
					"step 1";
					player.addTempSkill("rezhongjian2", { player: "phaseBeginStart" });
					//var str=['造成伤害弃牌','受到伤害摸牌'][result.index];
					//player.popup(str,['fire','wood'][result.index]);
					//game.log(player,'选择了','#y'+str)
					player.storage.rezhongjian2[result.index].push(target);
					player.markSkill("rezhongjian2");
				},
				ai: {
					order: 10,
					expose: 0,
					result: {
						player: function (player, target) {
							if (get.attitude(player, target) == 0) return false;
							var sgn = get.sgn((get.realAttitude || get.attitude)(player, target));
							if (
								game.countPlayer(function (current) {
									return get.sgn((get.realAttitude || get.attitude)(player, current)) == sgn;
								}) <=
								game.countPlayer(function (current) {
									return get.sgn((get.realAttitude || get.attitude)(player, current)) != sgn;
								})
							)
								return 1;
							return 0.9;
						},
					},
				},
			},
			rezhongjian2: {
				trigger: {
					global: ["damageSource", "damageEnd"],
				},
				forced: true,
				sourceSkill: "rezhongjian",
				filter: function (event, player, name) {
					var num = name == "damageSource" ? 0 : 1;
					var logTarget = name == "damageSource" ? event.source : event.player;
					return logTarget && logTarget.isIn() && player.storage.rezhongjian2[num].includes(logTarget);
				},
				logTarget: function (event, player, name) {
					return name == "damageSource" ? event.source : event.player;
				},
				content: function () {
					var num = event.triggername == "damageSource" ? 0 : 1;
					var target = event.triggername == "damageSource" ? trigger.source : trigger.player;
					var storage = player.storage.rezhongjian2;
					storage[num].remove(target);
					if (storage[0].length + storage[1].length) player.markSkill("rezhongjian2");
					else player.removeSkill("rezhongjian2");
					target[event.triggername == "damageSource" ? "chooseToDiscard" : "draw"](2, true, "he");
					player.draw();
				},
				init: function (player, skill) {
					if (!player.storage[skill]) player.storage[skill] = [[], []];
				},
				onremove: true,
				intro: {
					markcount: function (storage) {
						return storage[0].length + storage[1].length;
					},
					mark: function (dialog, storage, player) {
						if (player == game.me || player.isUnderControl()) {
							if (storage[0].length) {
								dialog.addText("弃牌");
								dialog.add([storage[0], "player"]);
							}
							if (storage[1].length) {
								dialog.addText("摸牌");
								dialog.add([storage[1], "player"]);
							}
						} else {
							dialog.addText(get.translation(player) + "共选择了" + get.cnNumber(storage[0].length + storage[1].length) + "人");
						}
					},
				},
			},
			recaishi: {
				trigger: { player: "phaseDrawEnd" },
				direct: true,
				audio: "caishi",
				isSame: function (event) {
					var cards = [];
					event.player.getHistory("gain", function (evt) {
						if (evt.getParent().name == "draw" && evt.getParent("phaseDraw") == event) cards.addArray(evt.cards);
					});
					if (!cards.length) return "nogain";
					var list = [];
					for (var i = 0; i < cards.length; i++) {
						list.add(get.suit(cards[i]));
					}
					if (list.length == 1) return true;
					if (list.length == cards.length) return false;
					return "nogain";
				},
				filter: function (event, player) {
					var isSame = lib.skill.recaishi.isSame(event);
					if (isSame == "nogain") return false;
					return isSame || player.isDamaged();
				},
				content: function () {
					"step 0";
					if (lib.skill.recaishi.isSame(trigger)) {
						player.logSkill("recaishi");
						player.addTempSkill("recaishi2");
						event.finish();
						return;
					}
					player.chooseBool(get.prompt("recaishi"), "回复1点体力，然后本回合内不能对自己使用牌").set("ai", function () {
						if (player.countCards("h", "tao")) return false;
						if (player.hp < 2) return true;
						return (
							player.countCards("h", function (card) {
								var info = get.info(card);
								return info && (info.toself || info.selectTarget == -1) && player.canUse(card, player) && player.getUseValue(card) > 0;
							}) == 0
						);
					});
					"step 1";
					if (result.bool) {
						player.logSkill("recaishi");
						player.recover();
						player.addTempSkill("recaishi3");
					}
				},
			},
			recaishi2: {},
			recaishi3: {
				mod: {
					targetEnabled: function (card, player, target) {
						if (player == target) return false;
					},
				},
				mark: true,
				intro: { content: "本回合内不能对自己使用牌" },
			},
			//刘辩
			shiyuan: {
				audio: 2,
				trigger: { target: "useCardToTargeted" },
				frequent: true,
				filter: function (event, player) {
					var num = 1;
					if (_status.currentPhase && _status.currentPhase != player && _status.currentPhase.group == "qun" && player.hasZhuSkill("yuwei", _status.currentPhase)) num = 2;
					return (
						player != event.player &&
						player.getHistory("gain", function (evt) {
							return evt.getParent(2).name == "shiyuan" && evt.cards.length == 2 + get.sgn(event.player.hp - player.hp);
						}).length < num
					);
				},
				content: function () {
					player.draw(2 + get.sgn(trigger.player.hp - player.hp));
				},
				ai: {
					effect: {
						target: function (card, player, target) {
							if (get.itemtype(player) !== "player" || player === target) return 1;
							let num = 1,
								ds = 2 + get.sgn(player.hp - target.hp);
							if (player === _status.currentPhase && _status.currentPhase.group === "qun" && target.hasZhuSkill("yuwei", player)) num = 2;
							if (
								target.getHistory("gain", function (evt) {
									return evt.getParent(2).name === "shiyuan" && evt.cards.length === ds;
								}).length >= num
							)
								return 1;
							let name = get.name(card);
							if (get.tag(card, "lose") || name === "huogong" || name === "juedou" || name === "tiesuo") return [1, ds];
							if (!target.hasFriend()) return 1;
							return [1, 0.8 * ds];
						},
					},
				},
			},
			dushi: {
				audio: 2,
				global: "dushi2",
				locked: true,
				trigger: { player: "die" },
				forceDie: true,
				direct: true,
				skillAnimation: true,
				animationColor: "gray",
				filter: function (event, player) {
					return game.hasPlayer(current => current != player);
				},
				content: function () {
					"step 0";
					player
						.chooseTarget("请选择【毒逝】的目标", "选择一名其他角色，令其获得技能【毒逝】", true, lib.filter.notMe)
						.set("forceDie", true)
						.set("ai", function (target) {
							return -get.attitude(_status.event.player, target);
						});
					"step 1";
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("dushi", target);
						target.markSkill("dushi");
						target.addSkills("dushi");
					}
				},
				intro: { content: "您已经获得弘农王的诅咒" },
			},
			dushi2: {
				mod: {
					cardSavable: function (card, player, target) {
						if (card.name == "tao" && target != player && target.hasSkill("dushi")) return false;
					},
				},
			},
			yuwei: {
				audio: 2,
				trigger: { player: "shiyuanBegin" },
				filter: function (event, player) {
					return _status.currentPhase && _status.currentPhase.group == "qun";
				},
				zhuSkill: true,
				forced: true,
				content: function () {},
				ai: { combo: "shiyuan" },
			},
			//新岩泽(划掉)留赞
			refenyin: {
				audio: 2,
				audioname: ["wufan"],
				trigger: { global: ["loseAfter", "cardsDiscardAfter", "loseAsyncAfter", "equipAfter"] },
				forced: true,
				filter: function (event, player) {
					if (player != _status.currentPhase) return false;
					var cards = event.getd();
					if (!cards.length) return false;
					var list = [];
					var num = cards.length;
					for (var i = 0; i < cards.length; i++) {
						var card = cards[i];
						list.add(get.suit(card, false));
					}
					game.getGlobalHistory("cardMove", function (evt) {
						if (evt.name != "lose" && evt.name != "cardsDiscard") return false;
						if (evt.name == "lose" && evt.position != ui.discardPile) return false;
						if (evt == event || evt.getParent() == event) return false;
						num += evt.cards.length;
						for (var i = 0; i < evt.cards.length; i++) {
							var card = evt.cards[i];
							list.remove(get.suit(card, evt.cards2 && evt.cards2.includes(card) ? evt.player : false));
						}
					});
					player.storage.refenyin_mark2 = num;
					return list.length > 0;
				},
				content: function () {
					var list = [];
					var list2 = [];
					var cards = trigger.getd();
					for (var i = 0; i < cards.length; i++) {
						var card = cards[i];
						var suit = get.suit(card, false);
						list.add(suit);
						list2.add(suit);
					}
					game.getGlobalHistory("cardMove", function (evt) {
						if (evt.name != "lose" && evt.name != "cardsDiscard") return false;
						if (evt.name == "lose" && evt.position != ui.discardPile) return false;
						if (evt == trigger || evt.getParent() == trigger) return false;
						for (var i = 0; i < evt.cards.length; i++) {
							var card = evt.cards[i];
							var suit = get.suit(card, false);
							list.remove(suit);
							list2.add(suit);
						}
					});
					list2.sort();
					player.draw(list.length);
					player.storage.refenyin_mark = list2;
					player.addTempSkill("refenyin_mark");
					player.markSkill("refenyin_mark");
				},
				subSkill: {
					mark: {
						onremove: function (player) {
							delete player.storage.refenyin_mark;
							delete player.storage.refenyin_mark2;
						},
						intro: {
							content: function (s, p) {
								var str = "本回合已经进入过弃牌堆的卡牌的花色：";
								for (var i = 0; i < s.length; i++) {
									str += get.translation(s[i]);
								}
								str += "<br>本回合进入过弃牌堆的牌数：";
								str += p.storage.refenyin_mark2;
								return str;
							},
						},
					},
				},
			},
			liji: {
				enable: "phaseUse",
				audio: 2,
				filter: function (event, player) {
					return (player.getStat().skill.liji || 0) < (event.liji_num || 0);
				},
				onChooseToUse: function (event) {
					if (game.online) return;
					var num = 0;
					var evt2 = event.getParent();
					if (!evt2.liji_all) evt2.liji_all = game.players.length > 4 ? 8 : 4;
					game.getGlobalHistory("cardMove", function (evt) {
						if (evt.name == "cardsDiscard" || (evt.name == "lose" && evt.position == ui.discardPile)) num += evt.cards.length;
					});
					event.set("liji_num", Math.floor(num / evt2.liji_all));
				},
				filterCard: true,
				position: "he",
				check: function (card) {
					var val = get.value(card);
					if (!_status.event.player.getStorage("refenyin_mark").includes(get.suit(card))) return 12 - val;
					return 8 - val;
				},
				filterTarget: lib.filter.notMe,
				content: function () {
					target.damage("nocard");
				},
				ai: {
					order: 1,
					result: {
						target: -1.5,
					},
					tag: {
						damage: 1,
					},
				},
			},
			//文鸯
			xinlvli: {
				audio: "lvli",
				trigger: { player: "damageEnd", source: "damageSource" },
				filter: function (event, player, name) {
					var stat = player.getStat().skill;
					if (!stat.xinlvli) stat.xinlvli = 0;
					if (name == "damageEnd" && !player.storage.beishui) return false;
					if (stat.xinlvli > 1) return false;
					if (stat.xinlvli > 0 && (player != _status.currentPhase || !player.storage.choujue)) return false;
					if (player.hp == player.countCards("h")) return false;
					if (player.hp < player.countCards("h") && player.isHealthy()) return false;
					return true;
				},
				content: function () {
					var stat = player.getStat().skill;
					stat.xinlvli++;
					var num = player.hp - player.countCards("h");
					if (num > 0) player.draw(num);
					else player.recover(-num);
				},
				//group:'lvli3',
			},
			lvli: {
				audio: 2,
				init: function (player, skill) {
					player.storage[skill] = 0;
				},
				enable: "chooseToUse",
				filter: function (event, player) {
					if (player.storage.lvli > 1) return false;
					if (player.storage.lvli > 0 && (player != _status.currentPhase || !player.storage.choujue)) return false;
					return event.type != "wuxie" && event.type != "respondShan";
				},
				chooseButton: {
					dialog: function (event, player) {
						var list = [];
						for (var i = 0; i < lib.inpile.length; i++) {
							var name = lib.inpile[i];
							if (name == "wuxie") continue;
							if (name == "sha") {
								list.push(["基本", "", "sha"]);
								list.push(["基本", "", "sha", "fire"]);
								list.push(["基本", "", "sha", "thunder"]);
							} else if (get.type(name) == "trick") list.push(["锦囊", "", name]);
							else if (get.type(name) == "basic") list.push(["基本", "", name]);
						}
						return ui.create.dialog(event.lvli6 ? get.prompt("lvli") : "膂力", [list, "vcard"]);
					},
					filter: function (button, player) {
						var evt = _status.event.getParent();
						if (evt && typeof evt.filterCard == "function") return evt.filterCard({ name: button.link[2] }, player, evt);
						return lib.filter.filterCard({ name: button.link[2], isCard: true }, player, _status.event.getParent());
					},
					check: function (button) {
						var player = _status.event.player;
						if (player.countCards("h", button.link[2])) return 0;
						if (_status.event.getParent().type != "phase" && !_status.event.getParent().lvli6) return 1;
						return player.getUseValue({ name: button.link[2], isCard: true });
					},
					backup: function (links, player) {
						return {
							filterCard: function () {
								return false;
							},
							audio: "lvli",
							selectCard: -1,
							check: function (card) {
								return 1;
							},
							viewAs: { name: links[0][2], nature: links[0][3], isCard: true },
						};
					},
					prompt: function (links, player) {
						return "请选择" + (get.translation(links[0][3]) || "") + get.translation(links[0][2]) + "的目标";
					},
				},
				ai: {
					order: 4,
					result: {
						player: 1,
					},
					threaten: 2.9,
					fireAttack: true,
				},
				group: ["lvli2", "lvli3", "lvli4", "lvli5", "lvli6"],
			},
			lvli2: {
				trigger: { player: ["useCardBefore", "respondBefore"] },
				forced: true,
				popup: false,
				priority: 35,
				sourceSkill: "lvli",
				filter: function (event, player) {
					return event.skill == "lvli_backup" || event.skill == "lvli5" || event.skill == "lvli4";
				},
				content: function () {
					"step 0";
					player.logSkill("lvli");
					player.storage.lvli++;
					player.popup(trigger.card.name, trigger.name == "useCard" ? "metal" : "wood");
					"step 1";
					var random = 0.5 + player.countCards("e") * 0.1;
					if (get.isLuckyStar(player)) random = 1;
					if (random >= Math.random()) {
						player.popup("洗具");
					} else {
						player.popup("杯具");
						trigger.cancel();
						if (!trigger.getParent().lvli6) {
							trigger.getParent().goto(0);
						}
						game.broadcastAll(function (str) {
							var dialog = ui.create.dialog(str);
							dialog.classList.add("center");
							setTimeout(function () {
								dialog.close();
							}, 1000);
						}, get.translation(player) + "声明的" + get.translation(trigger.card.name) + "并没有生效");
						game.log("然而什么都没有发生");
						game.delay(2);
					}
				},
			},
			lvli3: {
				trigger: { global: "phaseBefore" },
				forced: true,
				silent: true,
				popup: false,
				sourceSkill: "lvli",
				content: function () {
					player.storage.lvli = 0;
				},
			},
			lvli4: {
				log: false,
				enable: "chooseToUse",
				sourceSkill: "lvli",
				viewAsFilter: function (player) {
					if (player.storage.lvli > 1) return false;
					if (player.storage.lvli > 0 && (player != _status.currentPhase || !player.storage.choujue)) return false;
					return true;
				},
				filterCard: function () {
					return false;
				},
				selectCard: -1,
				viewAs: { name: "shan" },
				ai: {
					skillTagFilter: function (player) {
						if (player.storage.lvli > 1) return false;
						if (player.storage.lvli > 0 && (player != _status.currentPhase || !player.storage.choujue)) return false;
						return true;
					},
					threaten: 1.5,
					respondShan: true,
				},
			},
			lvli5: {
				log: false,
				enable: "chooseToUse",
				sourceSkill: "lvli",
				viewAsFilter: function (player) {
					if (player.storage.lvli > 1) return false;
					if (player.storage.lvli > 0 && (player != _status.currentPhase || !player.storage.choujue)) return false;
					return true;
				},
				filterCard: function () {
					return false;
				},
				selectCard: -1,
				viewAs: { name: "wuxie" },
			},
			lvli6: {
				trigger: { player: "damageEnd" },
				direct: true,
				sourceSkill: "lvli",
				filter: function (event, player) {
					if (!player.storage.beishui) return false;
					if (player.storage.lvli > 1) return false;
					if (player.storage.lvli > 0 && (player != _status.currentPhase || !player.storage.choujue)) return false;
					return true;
				},
				content: function () {
					var next = player.chooseToUse();
					next.set("norestore", true);
					next.set("_backupevent", "lvli");
					next.backup("lvli");
					next.set("lvli6", true);
				},
			},
			choujue: {
				derivation: ["beishui", "qingjiao"],
				trigger: { global: "phaseAfter" },
				audio: 2,
				skillAnimation: true,
				animationColor: "water",
				unique: true,
				juexingji: true,
				forced: true,
				init: function (player, skill) {
					if (!player.storage[skill]) player.storage[skill] = false;
				},
				filter: function (event, player) {
					if (player.storage.choujue) return false;
					return Math.abs(player.hp - player.countCards("h")) >= 3;
				},
				content: function () {
					player.awakenSkill("choujue");
					player.storage.choujue = true;
					player.loseMaxHp();
					player.addSkills("beishui");
				},
			},
			beishui: {
				trigger: { player: "phaseZhunbeiBegin" },
				audio: 2,
				skillAnimation: "epic",
				animationColor: "thunder",
				unique: true,
				juexingji: true,
				forced: true,
				init: function (player, skill) {
					if (!player.storage[skill]) player.storage[skill] = false;
				},
				filter: function (event, player) {
					if (player.storage.beishui) return false;
					return Math.min(player.hp, player.countCards("h")) < 2;
				},
				content: function () {
					player.awakenSkill("beishui");
					player.storage.beishui = true;
					player.loseMaxHp();
					player.addSkills("qingjiao");
				},
			},
			qingjiao: {
				trigger: { player: "phaseUseBegin" },
				filter: function (event, player) {
					if (!ui.cardPile.hasChildNodes() && !ui.discardPile.hasChildNodes());
					var hs = player.getCards("h");
					if (!hs.length) return false;
					for (var i of hs) {
						if (!lib.filter.cardDiscardable(i, player, "qingjiao")) return false;
					}
					return true;
				},
				//check:function(event,player){
				//	return player.countCards('h')<=player.hp;
				//},
				content: function () {
					"step 0";
					player.chooseToDiscard(true, "h", player.countCards("h"));
					"step 1";
					var evt = trigger.getParent();
					if (evt && evt.getParent && !evt.qingjiao) {
						evt.qingjiao = true;
						var next = game.createEvent("qingjiao_discard", false, evt.getParent());
						next.player = player;
						next.setContent(function () {
							var hs = player.getCards("he");
							if (hs.length) player.discard(hs);
						});
					}
					"step 2";
					var list = [];
					var typelist = [];
					var getType = function (card) {
						var sub = get.subtype(card);
						if (sub) return sub;
						return card.name;
					};
					for (var i = 0; i < ui.cardPile.childElementCount; i++) {
						var node = ui.cardPile.childNodes[i];
						var typex = getType(node);
						if (!typelist.includes(typex)) {
							list.push(node);
							typelist.push(typex);
							if (list.length >= 8) break;
						}
					}
					if (list.length < 8) {
						for (var i = 0; i < ui.discardPile.childElementCount; i++) {
							var node = ui.discardPile.childNodes[i];
							var typex = getType(node);
							if (!typelist.includes(typex)) {
								list.push(node);
								typelist.push(typex);
								if (list.length >= 8) break;
							}
						}
					}
					player.gain(list, "gain2");
				},
			},
			//王双
			spzhuilie: {
				mod: {
					targetInRange: function (card) {
						if (card.name == "sha") return true;
					},
				},
				trigger: { player: "useCardToTargeted" },
				filter: function (event, player) {
					return event.card && event.card.name == "sha" && !player.inRange(event.target);
				},
				forced: true,
				logTarget: "target",
				content: function () {
					"step 0";
					player.judge(function (card) {
						var type = get.subtype(card);
						return ["equip1", "equip4", "equip3", "equip6"].includes(type) ? 6 : -6;
						// switch(type){
						// 	case 'equip':return 4;
						// 	case 'trick':return -4;
						// 	default:return 0;
						// }
					}).judge2 = function (result) {
						return result.bool;
					};
					"step 1";
					if (trigger.getParent().addCount !== false) {
						trigger.getParent().addCount = false;
						var stat = player.getStat();
						if (stat && stat.card && stat.card.sha) stat.card.sha--;
					}
					if (result.bool === true) {
						var map = trigger.customArgs;
						var id = trigger.target.playerid;
						if (!map[id]) map[id] = {};
						if (typeof map[id].extraDamage != "number") map[id].extraDamage = 0;
						map[id].extraDamage += trigger.target.hp - 1;
					} else if (result.bool === false) player.loseHp();
				},
			},
			spzhuilie2: {
				onremove: true,
				intro: {
					content: "使用【杀】的次数上限+#",
				},
				mod: {
					cardUsable: function (card, player, num) {
						if (card.name == "sha") return num + player.countMark("spzhuilie2");
					},
				},
			},
			//花鬘
			manyi: {
				audio: 2,
				audioname: ["mengyou", "menghuo", "zhurong"],
				trigger: { target: "useCardToBefore" },
				filter: function (event, player) {
					return event.card.name == "nanman";
				},
				forced: true,
				content: function () {
					trigger.cancel();
				},
				ai: {
					effect: {
						target: function (card) {
							if (card.name == "nanman") return "zerotarget";
						},
					},
				},
				group: "manyi_single",
				subSkill: {
					single: {
						trigger: {
							player: "enterGame",
							global: "gameDrawAfter",
						},
						filter: function (event, player) {
							return get.mode() == "single" && _status.mode == "normal";
						},
						direct: true,
						content: function () {
							player.chooseUseTarget("nanman", get.prompt("manyi"), "视为使用一张【南蛮入侵】").logSkill = "manyi";
						},
					},
				},
			},
			mansi: {
				audio: 2,
				group: "mansi_viewas",
				trigger: { global: "damageEnd" },
				filter: function (event, player) {
					return event.card && event.card.name == "nanman";
				},
				frequent: true,
				content: function () {
					player.draw();
					player.addMark("mansi", 1, false);
				},
				intro: { content: "已因此技能得到了#张牌" },
			},
			mansi_viewas: {
				audio: "mansi",
				position: "h",
				enable: "phaseUse",
				usable: 1,
				filterCard: true,
				selectCard: -1,
				sourceSkill: "mansi",
				filter: function (event, player) {
					var hs = player.getCards("h");
					if (!hs.length) return false;
					for (var i = 0; i < hs.length; i++) {
						var mod2 = game.checkMod(hs[i], player, "unchanged", "cardEnabled2", player);
						if (mod2 === false) return false;
					}
					return true;
				},
				viewAs: { name: "nanman" },
				ai: {
					order: 0.1,
					nokeep: true,
					skillTagFilter: function (player, tag, arg) {
						if (tag === "nokeep") return (!arg || (arg.card && get.name(arg.card) === "tao")) && player.isPhaseUsing() && !player.getStat("skill").mansi_viewas && player.hasCard(card => get.name(card) !== "tao", "h");
					},
				},
			},
			souying: {
				audio: 2,
				trigger: {
					player: "useCardToPlayered",
					target: "useCardToTargeted",
				},
				direct: true,
				filter: function (event, player, name) {
					if (!player.countCards("he") || player.hasSkill("souying2")) return false;
					if (!event.targets || event.targets.length != 1 || event.player == event.target) return false;
					if (event.card.name != "sha" && get.type(event.card) != "trick") return false;
					if (name == "useCardToPlayered") {
						if (!event.cards.filterInD().length) return false;
						var target = event.target;
						return (
							player
								.getHistory("useCard", function (evt) {
									return evt.targets && evt.targets.includes(target);
								})
								.indexOf(event.getParent()) > 0
						);
					} else {
						var source = event.player;
						return (
							source
								.getHistory("useCard", function (evt) {
									return evt.targets && evt.targets.includes(player);
								})
								.indexOf(event.getParent()) > 0
						);
					}
				},
				content: function () {
					"step 0";
					var next = player.chooseToDiscard("he");
					var prompt;
					if (event.triggername == "useCardToTargeted") {
						event.target = trigger.player;
						prompt = "令" + get.translation(trigger.card) + "对你无效";
						next.set("goon", -get.effect(player, trigger.card, trigger.player, player));
					} else {
						event.target = trigger.targets[0];
						prompt = "弃置一张牌，并获得" + get.translation(trigger.cards.filterInD());
						next.set("goon", get.value(trigger.cards.filterInD()));
					}
					next.set("prompt", get.prompt("souying", event.target));
					next.set("prompt2", prompt);
					next.set("ai", function (card) {
						return _status.event.goon - get.value(card);
					});
					next.set("logSkill", ["souying", event.target]);
					"step 1";
					if (result.bool) {
						player.addTempSkill("souying2");
						if (event.triggername == "useCardToPlayered") player.gain(trigger.cards.filterInD(), "gain2");
						else trigger.excluded.add(player);
					}
				},
				ai: {
					expose: 0.25,
				},
			},
			souying2: {},
			zhanyuan: {
				unique: true,
				audio: 2,
				derivation: "hmxili",
				skillAnimation: true,
				animationColor: "soil",
				juexingji: true,
				forced: true,
				filter: function (event, player) {
					return player.countMark("mansi") > 7;
				},
				trigger: { player: "phaseZhunbeiBegin" },
				content: function () {
					"step 0";
					player.awakenSkill("zhanyuan");
					player.gainMaxHp();
					player.recover();
					"step 1";
					player.chooseTarget("是否失去〖蛮嗣〗，令一名其他男性角色和自己一同获得技能〖系力〗？", function (card, player, target) {
						return target != player && target.hasSex("male");
					}).ai = function (target) {
						return get.attitude(_status.event.player, target);
					};
					"step 2";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, "fire");
						player.changeSkills(["hmxili"], ["mansi"]);
						target.addSkills("hmxili");
					}
				},
				ai: {
					combo: "mansi",
				},
			},
			hmxili: {
				trigger: { global: "damageBegin1" },
				direct: true,
				audio: 2,
				filter: function (event, player) {
					return event.source && event.source != player && event.source == _status.currentPhase && event.source.hasSkill("hmxili") && !event.player.hasSkill("hmxili") && player.countCards("he") > 0 && !player.hasSkill("hmxili2");
				},
				content: function () {
					"step 0";
					player.chooseToDiscard("是否弃置一张牌，令" + get.translation(trigger.source) + "对" + get.translation(trigger.player) + "的伤害+1，且你与其各摸两张牌？", "he").set("logSkill", ["hmxili", trigger.player]).ai = function (card) {
						return 9 - get.value(card);
					};
					"step 1";
					if (result.bool) {
						game.asyncDraw([trigger.source, player], 2);
						trigger.num++;
						player.addTempSkill("hmxili2");
					} else event.finish();
					"step 2";
					game.delayx();
				},
			},
			hmxili2: {},
			//吴兰雷铜
			wlcuorui: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				filter: function (event, player) {
					if (!["identity", "guozhan"].includes(get.mode())) {
						return game.hasPlayer(function (current) {
							return current.isFriendOf(player) && current.countDiscardableCards(player, "hej") > 0;
						});
					}
					return game.hasPlayer(current => {
						return get.distance(player, current) <= 1 && current.countDiscardableCards(player, "hej") > 0;
					});
				},
				async cost(event, trigger, player) {
					if (!["identity", "guozhan"].includes(get.mode())) {
						event.result = await player
							.chooseTarget(function (card, player, target) {
								return target.isFriendOf(player) && target.countDiscardableCards(player, "hej") > 0;
							}, get.prompt2("wlcuorui"))
							.set("ai", function (target) {
								if (
									target.countCards("e", function (card) {
										return card.name != "tengjia" && get.value(card, target) <= 0;
									})
								)
									return 10;
								if (
									target.countCards("j", function (card) {
										return get.effect(target, { name: card.viewAs || card.name }, target, target) < 0;
									})
								)
									return 10;
								return Math.random() + 0.2 - 1 / target.countCards("hej");
							})
							.forResult();
					} else {
						event.result = await player
							.chooseTarget(function (card, player, target) {
								return get.distance(player, target) <= 1 && target.countDiscardableCards(player, "hej") > 0;
							}, get.prompt2("wlcuorui"))
							.set("ai", function (target) {
								if (
									game.hasPlayer(current => {
										return current != target && get.attitude(_status.event.player, current) < 0;
									})
								)
									return get.effect(target, { name: "guohe" }, player, player) + 10;
								return 0;
							})
							.forResult();
					}
				},
				async content(event,trigger,player){
					const target=event.targets[0];
					const result= await player.discardPlayerCard(target, "hej", true).forResult();
					const card=result.cards[0];
					const str=["identity", "guozhan"].includes(get.mode())?"另一名其他角色":"对手";
					const filter=["identity", "guozhan"].includes(get.mode())?(current)=>{
						if(current==player||current==target) return false;
						return true;
					}:(current)=>{
						return current.isEnemyOf(player);
					};
					const list = [];
					if (game.hasPlayer(function (current) {
						return filter(current) && current.countCards("h");
					})) list.push("展示手牌");
					if (game.hasPlayer(function (current) {
						return filter(current) && current.countCards("e", { color: get.color(card) });
					})) list.push("弃置装备");
					if (!list.length) return;
					let result2;
					if (list.length == 1) result2 = { control: list[0] };
					else{
						result2=await player
							.chooseControl(list)
							.set("prompt", "挫锐：展示"+str+"的至多两张手牌，或弃置"+str+"装备区内至多两张" + get.translation(get.color(card)) + "牌")
							.set("resultx", function () {
								let color =get.color(card);
								if (
									game.countPlayer(function (current) {
										if (!filter(current)) return false;
										return get.attitude(player, current) <= 0 && current.countCards("e", function (card) {
											return get.color(card) == color && get.value(card) > 0;
										});
									}) > 1
								)
									return 1;
								return 0;
							}())
							.set("ai",()=>_status.event.resultx)
							.forResult();
					}
					if(result2.control=="展示手牌"){
						let dialog = ["请选择要展示的牌"];
						let targets = game
							.filterPlayer(function (current) {
								return filter(current) && current.countCards("h");
							})
							.sortBySeat();
						for (let i of targets) {
							dialog.push('<div class="text center">' + get.translation(i) + "</div>");
							if (player.hasSkillTag("viewHandcard", null, i, true)) dialog.push(i.getCards("h"));
							else dialog.push([i.getCards("h"), "blank"]);
						}
						const result3 = await player
							.chooseButton([1, 2], true)
							.set("createDialog", dialog)
							.set("color",get.color(card))
							.set("filterButton",button=>{
								if(!["identity", "guozhan"].includes(get.mode())) return true;
								if(!ui.selected.buttons.length) return true;
								return get.owner(button.link)==get.owner(ui.selected.buttons[0].link);
							})
							.set("ai", button=> {
								let color = get.color(button.link) == _status.event.color;
								return color ? Math.random() : 0.35;
							})
							.forResult();
						await player.showCards(result3.links);
						let map = {};
						let map2 = {};
						for (let i of result3.links) {
							let id = get.owner(i).playerid;
							if (!map[id]) map[id] = [];
							map[id].push(i);
							if (get.color(i) != get.color(card)) continue;
							if (!map2[id]) map2[id] = [];
							map2[id].push(i);
						}
						for (let i in map) {
							let source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
							if (map2[i]) await player.gain(map2[i], source, "bySelf", "give");
							player.line(source);
							game.log(player, "展示了", source, "的", map[i]);
						}
					}
					else{
						let dialog = ["请选择要弃置的牌"];
						let targets = game
							.filterPlayer(function (current) {
								return filter(current)&&current.countCards("e", function (cardx) {
									return get.color(card) == get.color(cardx);
								});
							})
							.sortBySeat();
						for (let i of targets) {
							dialog.push('<div class="text center">' + get.translation(i) + "</div>");
							dialog.push(
								i.getCards("e", function (cardx) {
									return get.color(card) == get.color(cardx);
								})
							);
						}
						const result3 = await player
							.chooseButton([1, 2], true)
							.set("createDialog", dialog)
							.set("filterButton",button=>{
								if(!["identity", "guozhan"].includes(get.mode())) return true;
								if(!ui.selected.buttons.length) return true;
								return get.owner(button.link)==get.owner(ui.selected.buttons[0].link);
							})
							.set("ai", function (button) {
								let owner = get.owner(button.link);
								return get.value(button.link, owner);
							})
							.forResult();
						let map = {};
						for (let i of result3.links) {
							if (get.color(i) != get.color(card)) continue;
							let id = get.owner(i).playerid;
							if (!map[id]) map[id] = [];
							map[id].push(i);
						}
						for (let i in map) {
							const next=(_status.connectMode ? lib.playerOL : game.playerMap)[i].discard(map[i], "notBySelf");
							next.discarder = player;
							await next;
						}
					}
				},
			},
			kuiji: {
				audio: 2,
				usable: 1,
				enable: "phaseUse",
				filter: function (event, player) {
					if (player.hasJudge("bingliang")) return false;
					return (
						player.countCards("hes", function (card) {
							return get.color(card) == "black" && get.type(card) == "basic";
						}) > 0
					);
				},
				position: "hes",
				discard: false,
				lose: false,
				delay: false,
				prepare: function (cards, player) {
					player.$give(cards, player, false);
				},
				filterCard: function (card, player, event) {
					return get.color(card) == "black" && get.type(card) == "basic" && player.canAddJudge({ name: "bingliang", cards: [card] });
				},
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return player == target;
				},
				check: function (card) {
					return 9 - get.value(card);
				},
				// onuse:function(links,player){
				// 	var next=game.createEvent('kuiji_content',false,_status.event.getParent());
				// 	next.player=player;
				// 	next.setContent(lib.skill.kuiji.kuiji_content);
				// },
				// kuiji_content:function(){
				content: function () {
					"step 0";
					player.addJudge({ name: "bingliang" }, cards);
					player.draw();
					"step 1";
					var next = player.chooseTarget().set("ai", function (target) {
						let player = _status.event.player;
						if (
							target.hasSkillTag(
								"filterDamage",
								null,
								{
									player: player,
								},
								true
							)
						)
							return get.damageEffect(target, player, player);
						return 2 * get.damageEffect(target, player, player);
					});
					if (!["identity", "guozhan"].includes(get.mode())) {
						next.set("prompt", "选择一名体力值最大的敌方角色，对其造成2点伤害");
						next.set("filterTarget", function (card, player, target) {
							return (
								target.isEnemyOf(player) &&
								!game.hasPlayer(function (current) {
									return current.isEnemyOf(player) && current.hp > target.hp;
								})
							);
						});
					} else {
						next.set("prompt", "选择一名除你外体力值最大的角色，对其造成2点伤害");
						next.set("filterTarget", function (card, player, target) {
							return (
								player != target &&
								!game.hasPlayer(function (current) {
									return current != player && current.hp > target.hp;
								})
							);
						});
					}
					"step 2";
					if (result.bool) {
						var target = result.targets[0];
						player.line(target);
						target.damage(2);
					}
				},
				ai: {
					result: {
						target: function (player, target) {
							let es;
							if (["identity", "guozhan"].includes(get.mode()))
								es = game.hasPlayer(i => {
									return (
										i != player &&
										!game.hasPlayer(j => {
											return player !== j && j.hp > i.hp;
										}) &&
										get.attitude(player, i) < 0
									);
								});
							else
								es = game.hasPlayer(i => {
									return (
										i.isEnemyOf(player) &&
										!game.hasPlayer(j => {
											return j.hp > i.hp && j.isEnemyOf(player);
										}) &&
										get.attitude(player, i) < 0
									);
								});
							if (es) return 2;
							return -1.5;
						},
					},
					order: 12,
				},
				group: "kuiji_dying",
				subSkill: {
					dying: {
						trigger: { global: "dying" },
						filter: function (event, player) {
							let evt = event.getParent(2);
							return evt && evt.name == "kuiji";
						},
						locked: true,
						direct: true,
						content: function () {
							"step 0";
							var list;
							if (["identity", "guozhan"].includes(get.mode()))
								list = game
									.filterPlayer(current => {
										return (
											current !== trigger.player &&
											!game.hasPlayer(i => {
												return trigger.player !== i && i.hp < current.hp;
											})
										);
									})
									.filter(i => i.isDamaged());
							else
								list = game
									.filterPlayer(current => {
										return (
											current.isFriendOf(player) &&
											!game.hasPlayer(i => {
												return i.hp < current.hp && i.isFriendOf(player);
											})
										);
									})
									.filter(i => i.isDamaged());
							if (list.length > 1)
								player
									.chooseTarget(
										"溃击：选择一名角色回复1点体力",
										(card, player, target) => {
											return _status.event.list.includes(target);
										},
										true
									)
									.set("list", list)
									.set("ai", target => {
										return get.recoverEffect(target, player, _status.event.player);
									});
							else if (list.length) event._result = { bool: true, targets: list };
							else event._result = { bool: false };
							"step 1";
							if (result.bool) {
								let target = result.targets[0];
								player.logSkill("kuiji", target);
								target.recover();
							}
						},
					},
				},
			},
			//蒲元
			pytianjiang: {
				audio: 2,
				trigger: {
					global: "phaseBefore",
					player: "enterGame",
				},
				forced: true,
				locked: false,
				filter: function (event, player) {
					return event.name != "phase" || game.phaseNumber == 0;
				},
				content: function () {
					"step 0";
					var i = 0;
					var list = [];
					while (i++ < 2) {
						var card = get.cardPile(function (card) {
							if (get.type(card) != "equip") return false;
							return list.length == 0 || get.subtype(card) != get.subtype(list[0]);
						});
						if (card) list.push(card);
					}
					if (!list.length) {
						event.finish();
						return;
					}
					event.list = list;
					player.gain(event.list, "gain2");
					"step 1";
					game.delay(1);
					var card = event.list.shift();
					if (player.getCards("h").includes(card)) {
						player.$give(card, player, false);
						player.equip(card);
					}
					if (event.list.length) event.redo();
				},
				group: "pytianjiang_move",
			},
			pytianjiang_move: {
				audio: "pytianjiang",
				prompt: "将装备区里的一张牌移动至其他角色的装备区",
				enable: "phaseUse",
				position: "e",
				sourceSkill: "pytianjiang",
				filter: function (event, player) {
					return player.countCards("e") > 0;
				},
				check: function () {
					return 1;
				},
				filterCard: true,
				filterTarget: function (event, player, target) {
					return target != player && target.canEquip(ui.selected.cards[0], true);
				},
				prepare: "give",
				discard: false,
				lose: false,
				content: function () {
					"step 0";
					target.equip(cards[0]);
					"step 1";
					if (cards[0].name.indexOf("pyzhuren_") == 0 && !player.getCards("e").includes(cards[0])) player.draw(2);
				},
				ai: {
					order: (item, player) => {
						if (player.hasCard(i => get.subtype(i) === "equip1", "h")) return 11;
						return 1;
					},
					expose: 0.2,
					result: {
						target: function (player, target) {
							if (ui.selected.cards.length) {
								let card = ui.selected.cards[0],
									tv = get.value(card, target),
									sub = get.subtype(card);
								if (sub === "equip1") {
									let ev = Infinity,
										te = target.getEquips(1);
									if (!te.length) return tv;
									te.forEach(i => {
										ev = Math.min(ev, get.value(i));
									});
									if (card.name.indexOf("pyzhuren_") == 0) return 2 + tv - ev;
									return tv - ev;
								}
								if (target.hasCard(i => get.subtype(i) === sub, "he")) return 0;
								let pv = get.value(card, player);
								if (pv > 0 && Math.abs(tv) <= pv) return 0;
								return tv;
							}
							return 0;
						},
					},
				},
			},
			pyzhuren: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterCard: true,
				selectCard: 1,
				check: function (card) {
					var player = _status.event.player;
					var name = "pyzhuren_" + card[card.name == "shandian" ? "name" : "suit"];
					if (!lib.card[name] || (_status.pyzhuren && _status.pyzhuren[name])) {
						if (!player.countCards("h", "sha")) return 4 - get.value(card);
						return 0;
					}
					return 7 - get.value(card);
				},
				content: function () {
					//player.addSkill('pyzhuren_destroy');
					if (!_status.pyzhuren) _status.pyzhuren = {};
					var rand = 0.85;
					var num = get.number(cards[0]);
					if (num > 4) rand = 0.9;
					if (num > 8) rand = 0.95;
					if (num > 12 || cards[0].name == "shandian" || get.isLuckyStar(player)) rand = 1;
					var name = "pyzhuren_" + cards[0][cards[0].name == "shandian" ? "name" : "suit"];
					if (!lib.card[name] || _status.pyzhuren[name] || Math.random() > rand) {
						player.popup("杯具");
						game.log(player, "锻造失败");
						var card = get.cardPile(function (card) {
							return card.name == "sha";
						});
						if (card) player.gain(card, "gain2");
					} else {
						_status.pyzhuren[name] = true;
						var card = game.createCard(name, cards[0].name == "shandian" ? "spade" : cards[0].suit, 1);
						card.destroyed = "discardPile";
						player.gain(card, "gain2");
					}
				},
				ai: {
					order: 10,
					result: {
						player: 1,
					},
				},
			},
			pyzhuren_heart: {
				audio: true,
				trigger: { source: "damageSource" },
				usable: 1,
				equipSkill: true,
				filter: function (event, player) {
					return event.getParent().name == "sha";
				},
				content: function () {
					"step 0";
					player.judge(function (card) {
						var player = _status.event.getParent("pyzhuren_heart").player;
						if (player.isHealthy() && get.color(card) == "red") return 0;
						return 2;
					});
					"step 1";
					switch (result.color) {
						case "red":
							player.recover();
							break;

						case "black":
							player.draw(2);
							break;

						default:
							break;
					}
				},
				ai: {
					equipValue: function (card, player) {
						if (player.isDamaged()) return 4.5;
						return 6;
					},
					basic: {
						equipValue: 4.5,
					},
				},
			},
			pyzhuren_diamond: {
				audio: true,
				trigger: { source: "damageBegin1" },
				direct: true,
				usable: 2,
				equipSkill: true,
				mod: {
					cardUsable: function (card, player, num) {
						var cardx = player.getEquip("pyzhuren_diamond");
						if (card.name == "sha" && (!cardx || player.hasSkill("pyzhuren_diamond", null, false) || (!_status.pyzhuren_diamond_temp && !ui.selected.cards.includes(cardx)))) {
							return num + 1;
						}
					},
					cardEnabled2: function (card, player) {
						if (!_status.event.addCount_extra || player.hasSkill("pyzhuren_diamond", null, false)) return;
						if (card && card == player.getEquip("pyzhuren_diamond")) {
							_status.pyzhuren_diamond_temp = true;
							var bool = lib.filter.cardUsable(get.autoViewAs({ name: "sha" }, ui.selected.cards.concat([card])), player);
							delete _status.pyzhuren_diamond_temp;
							if (!bool) return false;
						}
					},
				},
				filter: function (event, player) {
					if (event.getParent().name != "sha") return false;
					return (
						player.countCards("he", function (card) {
							return card != player.getEquip("pyzhuren_diamond");
						}) > 0
					);
				},
				content: function () {
					"step 0";
					var next = player.chooseToDiscard(
						"he",
						function (card, player) {
							return card != player.getEquip("pyzhuren_diamond");
						},
						get.prompt(event.name, trigger.player),
						"弃置一张牌，令即将对其造成的伤害+1"
					);
					next.set("target", trigger.player);
					next.ai = function (card) {
						if (_status.event.goon) return 30 / (1 + _status.event.target.hp) - get.value(card);
						return -1;
					};
					next.set(
						"goon",
						get.attitude(player, trigger.player) < 0 &&
							!trigger.player.hasSkillTag("filterDamage", null, {
								player: player,
								card: trigger.card,
							}) &&
							get.damageEffect(trigger.player, player, player, get.natureList(trigger)) > 0
					);
					next.logSkill = [event.name, trigger.player];
					"step 1";
					if (result.bool) trigger.num++;
					else player.storage.counttrigger.pyzhuren_diamond--;
				},
				ai: {
					expose: 0.25,
					equipValue: function (card, player) {
						return Math.min(7, 3.6 + player.countCards("h") / 2);
					},
					basic: {
						equipValue: 4.5,
					},
				},
			},
			pyzhuren_club: {
				audio: true,
				trigger: { player: "useCard2" },
				direct: true,
				equipSkill: true,
				filter: function (event, player) {
					if (event.card.name != "sha" && get.type(event.card) != "trick") return false;
					var info = get.info(event.card);
					if (info.allowMultiple == false) return false;
					var num = player.getHistory("useSkill", function (evt) {
						return evt.skill == "pyzhuren_club";
					}).length;
					if (num >= 2) return false;
					if (event.targets && !info.multitarget) {
						if (
							game.hasPlayer(function (current) {
								return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current);
							})
						) {
							return true;
						}
					}
					return false;
				},
				content: function () {
					"step 0";
					var prompt2 = "为" + get.translation(trigger.card) + "额外指定一个目标";
					player
						.chooseTarget([1, player.storage.fumian_red], get.prompt(event.name), function (card, player, target) {
							var player = _status.event.player;
							if (_status.event.targets.includes(target)) return false;
							return lib.filter.targetEnabled2(_status.event.card, player, target);
						})
						.set("prompt2", prompt2)
						.set("ai", function (target) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							return get.effect(target, trigger.card, player, player);
						})
						.set("targets", trigger.targets)
						.set("card", trigger.card);
					"step 1";
					if (result.bool) {
						if (!event.isMine() && !event.isOnline()) game.delayx();
						event.targets = result.targets;
					}
					"step 2";
					if (event.targets) {
						player.logSkill(event.name, event.targets);
						trigger.targets.addArray(event.targets);
					}
				},
				ai: {
					equipValue: function (card, player) {
						if (player.getEnemies().length < 2) {
							if (player.isDamaged()) return 0;
							return 1;
						}
						return 4.5;
					},
					basic: {
						equipValue: 4.5,
					},
				},
			},
			pyzhuren_spade: {
				audio: true,
				trigger: { player: "useCardToPlayered" },
				filter: function (event, player) {
					return event.card.name == "sha"; //&&event.targets.length==1&&get.color(event.card)=='black';
				},
				check: function (event, player) {
					return get.attitude(player, event.target) <= 0;
				},
				equipSkill: true,
				logTarget: "target",
				content: function () {
					var num = player.getHistory("useSkill", function (evt) {
						return evt.skill == "pyzhuren_spade";
					}).length;
					trigger.target.loseHp(Math.min(num, 5)); //.set('source',player);
				},
				ai: {
					equipValue: function (card, player) {
						return 1 + 4 * Math.min(5, player.getCardUsable("sha"));
					},
					basic: {
						equipValue: 5,
					},
					jueqing: true,
					unequip_ai: true,
					skillTagFilter: function (player, tag, arg) {
						if (tag == "unequip_ai") return arg && arg.name === "sha";
					},
				},
			},
			pyzhuren_shandian: {
				audio: true,
				trigger: { player: "useCardToPlayered" },
				filter: function (event, player) {
					return event.card.name == "sha"; //&&event.targets.length==1;
				},
				check: function (event, player) {
					return get.attitude(player, event.target) <= 0;
				},
				equipSkill: true,
				logTarget: "target",
				content: function () {
					"step 0";
					trigger.target.judge(function (card) {
						var suit = get.suit(card);
						if (suit == "spade") return -10;
						if (suit == "club") return -5;
						return 0;
					}).judge2 = function (result) {
						return result.color == "black" ? true : false;
					};
					"step 1";
					if (result.suit == "spade") {
						trigger.target.damage(3, "thunder");
						//trigger.getParent().excluded.add(trigger.target);
					} else if (result.suit == "club") {
						trigger.target.damage("thunder");
						player.recover();
						player.draw();
					}
				},
				ai: {
					equipValue: function (card, player) {
						if (player.isDamaged()) return 6;
						return 4.8;
					},
					basic: {
						equipValue: 5,
					},
				},
			},
			//管辂和葛玄
			gxlianhua: {
				derivation: ["reyingzi", "reguanxing", "xinzhiyan", "gongxin"],
				audio: 2,
				init: function (player, skill) {
					if (!player.storage[skill])
						player.storage[skill] = {
							red: 0,
							black: 0,
						};
				},
				marktext: "丹",
				intro: {
					name: "丹血",
					markcount: function (storage) {
						return storage.red + storage.black;
					},
					content: function (storage) {
						return "共有" + (storage.red + storage.black) + "个标记";
					},
				},
				trigger: { global: "damageEnd" },
				forced: true,
				locked: false,
				filter: function (event, player) {
					return event.player != player && event.player.isIn() && _status.currentPhase != player;
				},
				content: function () {
					player.storage.gxlianhua[player.getFriends().includes(trigger.player) ? "red" : "black"]++;
					player.markSkill("gxlianhua");
				},
				group: "gxlianhua_harmonia",
				subSkill: {
					harmonia: {
						forced: true,
						audio: "gxlianhua",
						sub: true,
						trigger: { player: "phaseZhunbeiBegin" },
						//filter:function(event,player){
						//	return player.storage.gxlianhua&&player.storage.gxlianhua.red+player.storage.gxlianhua.black>0;
						//},
						content: function () {
							var cards = [];
							var cards2 = [];
							var skill = "";
							var red = player.storage.gxlianhua.red;
							var black = player.storage.gxlianhua.black;
							player.storage.gxlianhua = { red: 0, black: 0 };
							player.unmarkSkill("gxlianhua");
							if (red + black < 4) {
								cards = ["tao"];
								skill = "reyingzi";
							} else if (red > black) {
								cards = ["wuzhong"];
								skill = "reguanxing";
							} else if (red < black) {
								cards = ["shunshou"];
								skill = "xinzhiyan";
							} else {
								cards = ["sha", "juedou"];
								skill = "gongxin";
							}
							for (var i = 0; i < cards.length; i++) {
								var card = get.cardPile(function (shiona) {
									return shiona.name == cards[i];
								});
								if (card) cards2.push(card);
							}
							player.addTempSkills(skill);
							if (cards2.length) player.gain(cards2, "gain2", "log");
						},
					},
				},
			},
			zhafu: {
				audio: 2,
				enable: "phaseUse",
				limited: true,
				skillAnimation: true,
				animationColor: "wood",
				filterTarget: lib.filter.notMe,
				content: function () {
					player.awakenSkill("zhafu");
					player.addSkill("zhafu_hf");
					target.addMark("zhafu_hf", 1);
				},
				ai: {
					order: 1,
					result: {
						player: function (player, target) {
							return Math.max(
								0,
								1 +
									target.countCards("h") -
									game.countPlayer(current => {
										if (get.attitude(target, current) > 0) return 0.3;
										if (target.hasJudge("lebu")) return 0.6;
										if (target.inRange(current)) return 1.5;
										return 1;
									})
							);
						},
						target: function (player, target) {
							return -Math.max(
								0,
								1 +
									target.countCards("h") -
									game.countPlayer(current => {
										if (get.attitude(target, current) > 0) return 0.3;
										if (target.hasJudge("lebu")) return 0.6;
										if (target.inRange(current)) return 1.5;
										return 1;
									})
							);
						},
					},
				},
				subSkill: {
					hf: {
						trigger: {
							global: "phaseDiscardBegin",
						},
						forced: true,
						charlotte: true,
						filter: function (event, player) {
							return event.player != player && event.player.hasMark("zhafu_hf");
						},
						content: function () {
							"step 0";
							var target = trigger.player;
							event.target = target;
							target.removeMark("zhafu_hf", 1);
							if (target.countCards("h") <= 1) event.finish();
							"step 1";
							target.chooseCard("h", true, "选择保留一张手牌，将其余的手牌交给" + get.translation(player)).set("ai", get.value);
							"step 2";
							var cards = target.getCards("h");
							cards.remove(result.cards[0]);
							target.give(cards, player);
						},
						intro: {
							content: "mark",
							onunmark: true,
						},
					},
				},
			},
			tuiyan: {
				audio: 2,
				trigger: { player: "phaseUseBegin" },
				frequent: true,
				content: function () {
					"step 0";
					var cards = get.cards(3);
					event.cards = cards;
					game.log(player, "观看了牌堆顶的" + get.cnNumber(cards.length) + "张牌");
					player.chooseControl("ok").set("dialog", ["推演", cards]);
					"step 1";
					while (cards.length) {
						ui.cardPile.insertBefore(cards.pop(), ui.cardPile.firstChild);
					}
					game.updateRoundNumber();
				},
			},
			busuan: {
				audio: 2,
				enable: "phaseUse",
				usable: 1,
				filterTarget: lib.filter.notMe,
				content: function () {
					"step 0";
					var list = [];
					for (var i = 0; i < lib.inpile.length; i++) {
						var name = lib.inpile[i];
						var type = get.type(name, "trick");
						if (["basic", "trick"].includes(type)) list.push([type, "", name]);
						if (name == "sha") {
							for (let nature of lib.inpile_nature) list.push([type, "", name, nature]);
						}
					}
					player.chooseButton(["选择至多两种牌", [list, "vcard"]], true, [1, 2]).set("ai", function (button) {
						var target = _status.event.getParent().target;
						var card = { name: button.link[2], nature: button.link[3] };
						if (get.type(card) == "basic" || !target.hasUseTarget(card)) return false;
						return get.attitude(_status.event.player, target) * (target.getUseValue(card) - 0.1);
					});
					"step 1";
					target.storage.busuan_angelbeats = result.links.slice(0);
					target.addSkill("busuan_angelbeats");
				},
				ai: {
					order: 1,
					result: {
						target: function (player, target) {
							var att = get.attitude(player, target);
							if (att > 0) return 1;
							return -5 / (target.countCards("h") + 1);
						},
					},
				},
			},
			busuan_angelbeats: {
				mark: true,
				intro: {
					mark: function (dialog, content, player) {
						if (content && content.length) dialog.add([content, "vcard"]);
					},
				},
				trigger: { player: "drawBefore" },
				forced: true,
				sourceSkill: "busuan",
				filter: function (event, player) {
					return event.getParent().name == "phaseDraw";
				},
				onremove: true,
				content: function () {
					"step 0";
					var list = player.storage["busuan_angelbeats"];
					var cards = [];
					for (var i = 0; i < Math.min(trigger.num, list.length); i++) {
						var card = get.cardPile(function (cardx) {
							if (cards.includes(cardx)) return false;
							if (cardx.name != list[Math.min(i, list.length - 1)][2]) return false;
							if (get.nature(cardx, false) != list[Math.min(i, list.length - 1)][3]) return false;
							return true;
						});
						if (card) {
							player.storage.busuan_angelbeats.splice(i--, 1);
							trigger.num--;
							cards.push(card);
						}
					}
					if (cards.length) {
						player.gain(cards, "gain2", "log");
					}
					"step 1";
					if (!trigger.num) trigger.cancel();
					if (!player.storage.busuan_angelbeats.length) player.removeSkill("busuan_angelbeats");
				},
			},
			mingjie: {
				audio: 2,
				trigger: { player: "phaseJieshuBegin" },
				check: function () {
					return ui.cardPile.hasChildNodes() && get.color(ui.cardPile.firstChild) != "black";
				},
				content: function () {
					"step 0";
					event.count = 0;
					"step 1";
					player.draw();
					"step 2";
					if (Array.isArray(result)) {
						event.count += result.length;
						if (get.color(result) != "red") {
							if (player.hp > 1) player.loseHp();
							event.finish();
						} else if (event.count < 3)
							player.chooseBool("是否继续发动【命戒】？").ai = function () {
								if (event.count == 2) return Math.random() < 0.5;
								return lib.skill.mingjie.check();
							};
					} else event.finish();
					"step 3";
					if (result.bool) event.goto(1);
				},
			},
		},
		card: {
			//武关羽的兵临城下水淹七军
			shuiyanqijuny: {
				audio: "shuiyanqijun",
				fullskin: true,
				cardimage: "shuiyanqijunx",
				enable: true,
				filterTarget: true,
				type: "trick",
				selectTarget: [1, 2],
				targetprompt: ["受伤弃牌", "受伤摸牌"],
				contentBefore() {
					var evt = event.getParent(),
						target = evt.stocktargets[0];
					evt.shuiyanqijun_target = target;
				},
				content() {
					target.damage("thunder");
					if (target != event.getParent().shuiyanqijun_target) target.draw();
					else target.chooseToDiscard("he", true);
				},
				ai: {
					order: 6,
					value: 4,
					useful: 2,
					tag: {
						damage: 1,
						thunderDamage: 1,
						natureDamage: 1,
						loseCard: 1,
					},
					result: {
						target: function (player, target) {
							if (!ui.selected.targets.length) return -1.5;
							return -0.5;
						},
					},
				},
			},
			pyzhuren_heart: {
				fullskin: true,
				derivation: "puyuan",
				cardcolor: "heart",
				type: "equip",
				subtype: "equip1",
				distance: { attackFrom: -2 },
				skills: ["pyzhuren_heart"],
				onDestroy(card) {
					if (_status.pyzhuren && _status.pyzhuren[card.name]) {
						delete _status.pyzhuren[card.name];
					}
				},
				ai: {
					basic: {
						equipValue: 4,
					},
				},
			},
			pyzhuren_diamond: {
				fullskin: true,
				derivation: "puyuan",
				cardcolor: "diamond",
				type: "equip",
				subtype: "equip1",
				distance: { attackFrom: -1 },
				skills: ["pyzhuren_diamond"],
				onDestroy(card) {
					if (_status.pyzhuren && _status.pyzhuren[card.name]) {
						delete _status.pyzhuren[card.name];
					}
				},
				ai: {
					basic: {
						equipValue: 3,
					},
				},
			},
			pyzhuren_club: {
				fullskin: true,
				derivation: "puyuan",
				cardcolor: "club",
				type: "equip",
				subtype: "equip1",
				distance: { attackFrom: -1 },
				skills: ["pyzhuren_club"],
				onDestroy(card) {
					if (_status.pyzhuren && _status.pyzhuren[card.name]) {
						delete _status.pyzhuren[card.name];
					}
				},
				ai: {
					basic: {
						equipValue: 5,
					},
				},
				loseDelay: false,
				onLose: function () {
					var next = game.createEvent("baiyin_recover");
					event.next.remove(next);
					var evt = event.getParent();
					if (evt.getlx === false) evt = evt.getParent();
					evt.after.push(next);
					next.player = player;
					next.setContent(function () {
						if (player.isDamaged()) player.logSkill("pyzhuren_club");
						player.recover();
					});
				},
			},
			pyzhuren_spade: {
				fullskin: true,
				derivation: "puyuan",
				cardcolor: "spade",
				type: "equip",
				subtype: "equip1",
				skills: ["pyzhuren_spade"],
				onDestroy(card) {
					if (_status.pyzhuren && _status.pyzhuren[card.name]) {
						delete _status.pyzhuren[card.name];
					}
				},
				ai: {
					basic: {
						equipValue: 3,
					},
				},
			},
			pyzhuren_shandian: {
				fullskin: true,
				derivation: "puyuan",
				cardcolor: "spade",
				type: "equip",
				subtype: "equip1",
				distance: { attackFrom: -3 },
				skills: ["pyzhuren_shandian"],
				onDestroy(card) {
					if (_status.pyzhuren && _status.pyzhuren[card.name]) {
						delete _status.pyzhuren[card.name];
					}
				},
				ai: {
					basic: {
						equipValue: 3,
					},
				},
			},
			dagongche: {
				fullskin: true,
				derivation: "zhangfen",
				cardcolor: "spade",
				type: "equip",
				subtype: "equip5",
				skills: ["dagongche_skill"],
				cardPrompt: function (card) {
					if (!card.storage) return "出牌阶段开始时，你可以视为使用一张【杀】，且当此【杀】因执行效果而对目标角色造成伤害后，你弃置其一张牌。若此【大攻车】未被强化，则其他角色无法弃置你装备区内的【大攻车】。当此牌离开你的装备区后，销毁之。";
					var str = "出牌阶段开始时，你可以视为使用一张";
					if (card.storage.大攻车选项一) str += "无距离限制且无视防具的";
					str += "【杀】";
					if (card.storage.大攻车选项二) str += "（此【杀】的目标上限+" + card.storage.大攻车选项二 + "）";
					str += "，且当此【杀】因执行效果而对目标角色造成伤害后，你弃置其";
					var num = 1;
					if (card.storage.大攻车选项三) num += card.storage.大攻车选项三;
					str += get.cnNumber(num);
					str += "张牌。当此牌离开你的装备区后，销毁之。";
					return str;
				},
				destroy: true,
				ai: {
					basic: {
						equipValue: 3,
					},
				},
			},
			pilitoushiche: {
				fullskin: true,
				derivation: "dc_liuye",
				cardimage: "ly_piliche",
				cardcolor: "diamond",
				type: "equip",
				subtype: "equip5",
				skills: ["pilitoushiche"],
				destroy: true,
				ai: {
					basic: {
						equipValue: 3,
					},
				},
			},
		},
		characterIntro: {
			wenyuan: "文鸳，虚构人物，姜维之妻、文鸯的姐姐。曾经协助丈夫姜维起义回复蜀国，但是因为有小人告密，文鸳在兵败的时候被杀害。",
			xurong: "徐荣（？－192年），玄菟人（一说为辽东襄平人，《公孙度传》中说公孙度本辽东襄平人，迁居玄菟，为同郡徐荣所举，任辽东太守。同郡当是同“玄菟”郡），东汉末年将领。本为中郎将，曾向董卓推举同郡出身的公孙度出任辽东太守。于汴水之战中击败曹操的独立追击军，以及在梁东之战中击败孙坚的部队。在董卓死后，受司徒王允的命令与李傕、郭汜交战，因部将胡珍投降，寡不敌众，于新丰之战被击败，战死在乱军之中。",
			zhangqiying:
				"张琪瑛（196年－217年），字不详（或琪瑛为字，名不详），祖籍沛国丰县（今江苏省丰县）。她的曾祖父张陵是西汉留侯张良的十一世孙、天师道（五斗米道）教祖，她的父亲是东汉末年割据汉中的军阀张鲁。张琪瑛继承家说，是五斗米教的传人。",
			liutan: "柳氏，姜维之妻。唯一的记载来自《大唐敕修烈山四岳天水郡姜姓古谱总世系》：“维字伯约，初仕魏中郎将，后归蜀汉，封大将军、平襄侯，夫人柳氏。”",
			cuimao: "请分别查看「崔琰」和「毛玠」的武将介绍。",
			bailingyun: "柏灵筠，女，是电视剧《大军师司马懿之军师联盟》、《虎啸龙吟》中的主要角色之一，由张钧甯饰演。20岁，是曹丕赏赐司马懿的美人，也是曹丕的眼线，被送入司马府中为妾室。柔弱美貌、心机极深。",
			caoxian: "曹宪（生卒年不详），女，沛国谯县（今安徽省亳州市）人。东汉末年历史人物，汉献帝刘协嫔妃，魏武帝曹操女儿。建安十八年，嫁给汉献帝刘协，受封为贵人。黄初元年（220年），兄弟曹丕称帝后，汉献帝成为山阳公，不知所终。",
			zhangjian: "张臶（136年－240年），字子明，钜鹿人。汉末三国时期隐士、音乐家，精通谶纬之学。张臶生活的年代从东汉一直到曹魏齐王时期，受到朝廷多次征召，一直回避，不愿做官。他活了一百零五岁，是三国时期有可靠记载的最长寿的人之一。",
			puyuan: "蒲元是三国时蜀汉杰出的工匠。为诸葛亮造刀三千口，并且制作木牛流马。后来姜维为他写过两部传记《蒲元传》《蒲元别传》。",
			guanlu: "管辂（209年－256年），字公明，平原（今山东德州平原县）人。三国时期曹魏术士。年八九岁，便喜仰观星辰。成人后，精通《周易》，善于卜筮、相术，习鸟语，相传每言辄中，出神入化。体性宽大，常以德报怨。正元初，为少府丞。北宋时被追封为平原子。管辂是历史上著名的术士，被后世奉为卜卦观相的祖师。",
			gexuan: "葛玄（164年-244年），汉族，吴丹阳郡句容县都乡吉阳里人（今句容市），祖籍山东琅琊，三国著名高道，道教灵宝派祖师。字孝先，号仙翁，被尊称为“葛天师”。道教尊为葛仙翁，又称太极仙翁，与张道陵、许逊、萨守坚共为四大天师。为汉下邳僮侯葛艾后裔，祖葛矩，安平太守，黄门郎；从祖葛弥，豫章第五郡太守。父葛焉，字德儒，州主簿，山阴令，散骑常侍，大尚书。随左慈学道，得《太清丹经》、《黄帝九鼎神丹经》、《金液丹经》等道经。曾采药海山，吴嘉禾二年（233年），在閤皂山修道建庵，筑坛立炉，修炼九转金丹。喜好遨游山川，去过括苍山、南岳山、罗浮山。编撰《灵宝经诰》，精研上清、灵宝等道家真经，并嘱弟子世世箓传。",
			wulan: "吴兰（？~218年），青州（今山东潍坊市）人。东汉末年将领。初为益州牧刘璋部将，后来归降刘备。汉中之战中，与马超、张飞各领一军，驻扎于下辩。建安二十三年，为曹操将领曹洪、张郃所败，退回汉中。途中，为阴平氐族首领强端所杀。",
			leitong: "雷铜（？-218年），阴平（今甘肃文县）人，氐族，东汉末年益州名将。本属益州牧刘璋麾下。刘备攻取益州后，归刘备麾下。参加汉中之战，为魏将张郃所杀。",
			huaman: "花鬘，古典戏曲《龙凤巾》（一名《化外奇缘》）中的人物，身份为三国时期南蛮王孟获与祝融夫人的女儿，关索的夫人之一。在关于关三小姐·关银屏的民间传说中，其名字为“花中秀”，与关索其他几位夫人鲍三娘、王桃、王悦都被关索之姐关银屏编入自己的女兵营中。花鬘在《三国志》，《三国演义》均未有提及，只是戏曲中的虚构人物。其形象并非一般君主家中闺秀，而是与其母祝融相似，是一个可以披甲上阵，善于刀枪作战的女武将。戏曲中在诸葛亮平定南蛮时，花鬘曾与关索作战，失败被俘，两人互生爱意，南蛮王孟获降服后二人成婚。近些年，花鬘接连在各类三国题材的游戏中登场，更广被人知晓。",
			wangshuang: "王双（？-228年），三国时期曹魏将领。蜀汉建兴六年（228年）冬，诸葛亮出散关，攻陈仓，后粮尽而退。王双率领骑兵追击蜀军，但在与蜀军的交战中被击败，王双也被蜀军所斩。在《三国演义》中，王双字子全，是陇西郡狄道县（今甘肃临洮县）人，有万夫不当之勇。在诸葛亮北伐期间，被魏延所斩。",
			wenyang: "文俶（238年—291年），一作文淑，字次骞，小名阿鸯，世称文鸯，谯郡（今安徽亳州市）人。魏末晋初名将，曹魏扬州刺史文钦之子。骁勇善战，依附大将军曹爽，效忠于王室。司马师废黜皇帝曹芳后，随父联合毌丘俭于淮南起兵勤王。兵败之后，向南投奔吴国。诸葛诞发动淮南叛乱，奉命率军驰援。双方发生内讧，父亲为诸葛诞所害，遂降于司马昭，封关内侯。西晋建立后，任平虏护军。咸宁三年（277年），拜平西将军、都督凉秦雍州三州军事，大破鲜卑首领秃发树机能，名震天下，迁使持节、护东夷校尉、监辽东军事。八王之乱中，为诸葛诞外孙、东安王司马繇所诬杀，惨遭灭族，时年五十四岁。",
			liubian: "刘辩（176年－190年3月6日），是汉灵帝刘宏与何皇后的嫡长子。刘辩在灵帝驾崩后继位为帝，史称少帝，由于年幼，实权掌握在临朝称制的母亲何太后和母舅大将军何进手中。少帝在位时期，东汉政权已经名存实亡，他即位后不久即遭遇以何进为首的外戚集团和以十常侍为首的内廷宦官集团这两大敌对政治集团的火并，被迫出宫，回宫后又受制于以“勤王”为名进京的凉州军阀董卓，终于被废为弘农王，成为东汉唯一被废黜的皇帝，其同父异母弟陈留王刘协继位为帝，是为汉献帝。被废黜一年之后，刘辩在董卓胁迫下自尽，时年仅十五岁（一说十八岁），其弟献帝追谥他为怀王。中国古代的史书中称刘辩为皇子辩、少帝和弘农王等。因为在位不逾年，传统上称东汉共十二帝，刘辩与东汉另一位少帝刘懿都不在其中，亦皆无本纪；不过，现代史学界也有观点承认两位少帝均是汉朝皇帝，则刘辩为东汉第十三位皇帝。",
			guozhao: "郭照，电视剧《军师联盟》中的女主角之一，由唐艺昕饰演。原型为文德皇后郭氏（字女王），魏国皇后，张春华的义妹，深爱曹丕，替甄宓抚育曹叡，因甄宓之死被曹叡记恨，曹丕死后，成为皇太后，被曹叡逼上死路。自尽身亡。",
			fanyufeng: "樊夫人，东汉末年人物，昔桂阳太守赵范寡嫂。赵云随刘备平定江南四郡后，刘备以赵云为桂阳太守。赵范居心叵测，要将自己的嫂嫂樊氏嫁给赵云，但遭到赵云的拒绝。后来，赵范逃走，樊氏也下落不明。2001年，应日本日中青少年文化中心成立50周年之邀，北京京剧院赴日进行40场巡回演出，这次访日的剧目都不同程度地进行了加工改编，以符合日本观众的需求。《取桂阳》是根据老本重新排演的，叶金援饰赵云，王怡饰樊玉凤。剧中的樊玉凤成为文武双全的巾帼英雄，被赵云收降，后来在《龙凤呈祥》中也参与堵截东吴的追兵。",
			ruanyu: "阮瑀（约165—212年），字元瑜，陈留尉氏（今河南开封市尉氏县）人，是东汉末年文学家，建安七子之一。阮瑀所作章表书记很出色，当时军国书檄文字，多为阮瑀与陈琳所拟。名作有《为曹公作书与孙权》。诗有《驾出北郭门行》，描写孤儿受后母虐待的苦难遭遇，比较生动形象。年轻时曾受学于蔡邕，蔡邕称他为“奇才”。后徙为丞相仓曹掾属。诗歌语言朴素，往往能反映出一般的社会问题。阮瑀的音乐修养颇高，他的儿子阮籍，孙子阮咸皆当时名人，位列“竹林七贤”，妙于音律。明人辑有《阮元瑜集》。",
			yangwan: "杨氏（婉字出自小说，史书无记载），生卒年不详，东汉末年凉州人。早年嫁于东汉前将军、槐里侯马腾之子马超，追随马超转战并州、雍州、凉州，为马超生下子嗣。公元212年，马超联军在渭南战败后，杨婉随马超逃亡凉州，很快马超反攻吞并陇上诸郡县。公元213年，杨婉为了帮助马超，结识王异，了解马超这些投降部下。可惜被王异蛊惑，遭致马超大败。自己和孩子都被赵衢、梁宽杀害。",
			zhouyi: "周夷，游卡桌游旗下产品《三国杀》自行杜撰的人物。设定为周瑜的妹妹，和周瑜一同征战。",
			caojinyu: "金乡公主，本姓曹氏，名字不详，沛国谯县（今安徽省亳州市）人。魏武帝曹操的女儿，母为杜夫人。适婚的时候，嫁给曹操的养子何晏。高平陵之变，何晏作为大将军曹爽的党羽，遭到太傅司马懿处死。在何晏母亲尹夫人苦苦哀求下，何晏的儿子得以保全。",
			wufan: "吴范（？－226年），字文则，会稽上虞（今浙江绍兴上虞区）人。三国时期孙吴官员，擅长术数。与刘惇、赵达、严武、曹不兴、皇象、宋寿和郑妪合称“吴中八绝”。吴范以推算天象节气和观察气候闻名于郡中。孙权起于东南，他委身事奉，每推算灾祥多应验，遂显名。孙权委以骑都尉，领太史令。初，孙权为将军时，他曾说江南有王气。及孙权立为吴王，论功行封，欲以为都亭侯，但因不愿将其术要诀告知孙权，为权所怨恨，被除名。黄武中，病死。",
			caomao: "曹髦（241年11月15日－260年6月2日），字彦士，沛国谯县（今安徽省亳州市）人，魏文帝曹丕之孙，东海王曹霖之子，曹魏第四位皇帝（254年11月1日－260年6月2日）。正始二年（241年），生于东海王宫，自幼聪明好学，才慧早成，正始五年（244年），封为高贵乡公，嘉平六年（254年），大将军司马师废除齐王曹芳后，拥立为帝，年号正元，曹髦文才武略，崇拜少康，不满司马氏专权秉政，甘露五年（260年），亲自讨伐司马昭，为太子舍人成济所弑，年仅十九岁，以王礼葬于洛阳西北。曹髦擅长诗文，创制了九言诗，传世文章有《伤魂赋并序》《颜子论》等。爱好儒学，亲赴太学论道，著有《春秋左氏传音》（失传）。精通绘画，一说为中国第一位成为画家的皇帝，唐张彦远《历代名画记》目曹髦为中品。",
			laiyinger: "来莺儿，是个传说中的人物，正史及古代典籍并无记载。相传来莺儿是东汉歌妓，建安年间洛阳名妓，后爱上曹操的侍卫王图，王图因延误军机而押赴刑场，当时来莺儿奋不顾身以己命换王图一死。新编古装潮剧《曹营恋歌》，秦腔《雀台歌女》讲述了歌女来莺儿与情人王图及曹操三人之间催人泪下的故事。",
			caohua: "曹华，东汉末年人物，曹操之女，为汉献帝妃嫔。建安十八年（213年），曹操进为魏公，把曹宪、曹节、曹华三个女儿，一齐都送给汉献帝刘协做了妃子，皆封为夫人，聘以束帛五万匹，年龄尚小者在魏公国待年长而聘。",
			zhaoang: "赵昂，字伟章（一作伟璋），天水冀人。汉末时曹操部下。初为羌道令，建安中转参军事徒居州治冀城。建安十八年，马超围冀城多天，城中饥困，凉州刺史韦康不愿百姓再受苦而打算投降，赵昂进劝但不为所纳。后马超背信弃义杀韦康并劫其子赵月为人质，把他送至南郑。欲以此要迫使赵昂为己所用。后与梁宽、赵衢、庞恭、杨阜等结谋为康报仇，并举兵讨伐马超。马超兵败遂弃城，投奔张鲁。得张鲁之援后马超于建安十九年复寇，赵昂与妻子王异坚守祁山三十天至夏侯渊的救兵解围，其子赵月终为马超斩杀。自冀城之难，至于祁山，赵昂出九奇策。",
			liuhui: "刘徽（约225年—约295年），汉族，山东滨州邹平市人，魏晋期间伟大的数学家，中国古典数学理论的奠基人之一。在中国数学史上作出了极大的贡献，他的杰作《九章算术注》和《海岛算经》，是中国最宝贵的数学遗产。刘徽思想敏捷，方法灵活，既提倡推理又主张直观。他是中国最早明确主张用逻辑推理的方式来论证数学命题的人。刘徽的一生是为数学刻苦探求的一生。他虽然地位低下，但人格高尚。他不是沽名钓誉的庸人，而是学而不厌的伟人，他给我们中华民族留下了宝贵的财富。2021年5月，国际天文学联合会（IAU）批准中国在嫦娥五号降落地点附近月球地貌的命名，刘徽（liuhui）为八个地貌地名之一。",
			zhangfen: "张奋，徐州彭城（今江苏徐州）人。三国时期孙吴将领，辅吴将军张昭的侄子。善于制作攻城器械。在步骘举荐下，担任将军，累迁平州都督，册封乐乡亭侯，病逝于任上。",
			dukui: "杜夔，字公良，河南人，擅长音律，聪明过人。管弦等各种乐器，他无所不能。他长期总管歌舞音乐，精心研究，继承复兴了前代古乐，并有所创新。仕于曹操、曹丕之世，以通晓音乐称于世。早年任雅乐郎，汉中平五年（188年），因病离职。州郡的司徒以礼相请，他因时世混乱而奔荆州。荆州牧刘表的儿子刘琮投降曹操后，曹操以杜夔为军谋祭酒 ，参与太乐署之事，令他创制雅乐。魏文帝曹丕黄初年间，任太乐令、协律都尉。",
			quanhuijie: "全皇后（244年－301年），吴郡钱塘（今浙江杭州）人，吴废帝孙亮的皇后，全尚之女，母孙恭之女。吴大帝长女全公主的侄孙女。赤乌十三年（250年），因全公主推荐全氏被册为孙亮的太子妃，建兴二年（253年），全氏被立为皇后。太平三年（258年），孙亮被权臣孙綝贬为会稽王，全皇后也一同贬为会稽王夫人。永安三年（260年），全皇后随夫到侯官，孙亮在途中死去，全皇后在侯官居住二十余年，吴亡后返回吴郡，永宁元年（301年）去世。",
			dingshangwan: "丁尚涴，又名丁夫人。东汉末年权臣曹操的原配夫人。丁尚涴嫁给曹操时，曹操另有刘夫人，生长子曹昂和清河长公主。后刘夫人早亡，曹昂便由丁尚涴抚养，丁尚涴视其为己出。<br>建安二年（公元197年），曹昂随军出征宛城，战死沙场。丁尚涴悲痛欲绝，口出怨言数落曹操，又悲啼不止。曹操恼羞成怒，将其打发回了娘家。不久之后，心生悔意的曹操亲自前往丁家，打算将丁尚涴接回。然而丁尚涴却只是闷头织布。曹操手抚其背，说：“顾我共载归乎！”丁尚涴依旧不理不睬。曹操走到门口，又回过头：“得无尚可邪！”然而依旧得不到回应，只得感叹：“真诀矣。”于是与之和离，并让丁家允许她改嫁，丁家不敢为之。<br>丁尚涴去世后，卞夫人请求曹操安葬她，于是葬在许城以南。后来曹操病重，知道自己时日无多，临终前叹道：“我前后行意，于心未曾有所负也。假令死而有灵，子修若问‘我母所在’，我将何辞以答！”",
			luyi: "卢弈，游卡桌游《三国杀》中虚构的人物。设定为卢植之女。至情至孝。其人虽体弱多病，然而却天资聪颖，有过目不忘、出口成章之才。先后拜蔡邕、王允等人为师，纳诸家之长融会贯通。又善弈棋，曾与当时国手山子道、王九真、郭凯对弈，不分胜负，一时之间名动京华，被太学征辟为女博士，世人皆称其为“女先生”。董卓之乱后，卢弈随父亲隐居乡野，创办上谷学宫，邀天下士子论道。相传诸葛亮、曹植、荀彧、张昭等人都参加过。各学派在卢弈主持下论道，成为一时佳话。后上谷学宫遭曹魏所忌，卢弈为请求曹叡赦免学宫，与司马懿对无棋之弈。卢弈破指凝血，以血为棋，终胜司马懿半子。但却旧伤复发，局终而陨。",
			zhaozhi: "赵直，豫章人，生于公元175年左右，死年不详，字不详。为蜀汉官方占梦者。曾预言蒋琬位极人臣、何祗48岁去世、魏延离死期不远，后果一一应验。",
			dongguiren: "董贵人（？—200年），父董承，汉献帝刘协妃嫔之一。董贵人父亲被曹操所杀，自己也受牵连。董贵人虽有身孕，汉献帝数次为她向曹操求情，仍被杀。",
			zhujianping: "朱建平（生卒年不详），汉末三国时期沛国（今安徽省）人。精通相术，于街巷之间为人相面，效果非常灵验。三国时，他在街头巷尾给人们看相。曹丕做五官将时，请他看相，朱建平说：将军寿命80，40会有小难，愿您多多保护。 又说曹彪：您居于自己的封国，到57当遭兵灾，要好好提防此事。 结果曹丕40去世，曹彪57岁时，犯了与王凌合谋罪，被赐死。他的妙算，都这么准确，即使是唐举，许负也比不上。时人将他与平原郡相士管公明并称为“朱”、“管”。",
			yuanji: "袁氏（生卒年不详），汝南郡汝阳县（今河南商水）人，袁术之女，孙权妃嫔。袁夫人出身世家大族汝南袁氏，其父袁术败亡后，入吴宫拜为夫人，以节操品行着称。",
			chengbing: "程秉（生卒年不详），字德枢，汝南南顿（今河南项城西）人。三国时期吴国官员、儒学家。起初跟随郑玄，后来北方荒乱而到交州避难，期间与刘熙考究五经大义，因此通绕五经。后来交趾太守士燮任命程秉为长史。吴大帝孙权听闻程秉的名声，于是以礼征召他，程秉到后，被任命为太子太傅。黄武四年（225年），孙权为太子孙登娶周瑜之女为妃，程秉以太常身份于吴郡迎候，孙权亲身上程秉的船，可见孙权对他的极为礼待。程秉又教诲孙登对婚后相处要尊重儒家礼教。后来因病在任职期间逝世。著有《周易摘》、《尚书驳》、《论语弼》，凡三万余言。",
			dc_zhouxuān: "周宣，生卒年不详，字孔和，乐安（治今山东高苑西北）人，擅长解梦，在郡做官时曾为太守解过梦，后又给曹丕解梦，都灵验。官至中郎，死于魏明帝末年。",
			xuelingyun: "薛灵芸，东晋王嘉志怪小说《拾遗记》中的人物，魏文帝曹丕的宫人，妙于针工，虽处于深帷之内，不用灯烛之光，裁制立成。凡不是薛灵芸缝制的衣服，文帝一概不穿，宫中号为针神。薛灵芸的故事在正史中虽无记载，却由于许多野史笔记偶尔提及，如《拾遗记》、《太平广记》、《艳异编》等，渐于后世成为中国古代著名美女形象。",
			yanghong: "杨弘，东汉末年袁术部将。袁术死后，杨弘等将其众欲归孙策，后庐江太守刘勋截击，转归于勋。",
			xielingyu: "谢夫人，会稽山阴（今浙江省绍兴市）人，东汉尚书郎、徐令谢煚之女，吴大帝孙权的原配发妻，又称谢妃。深受孙权宠爱，爱幸有宠。后来孙权为了巩固江东政权，又纳徐氏，欲让谢夫人屈居其下。谢夫人不同意，失志早卒。谢夫人的弟弟是三国著名史学家、武陵太守谢承。豫章太守谢斐与谢夫人同宗同族。",
			zerong: "笮融（？—195年），丹杨（治今安徽宣城）人，东汉末年豪强，生性残暴却笃信佛教，为佛教在中国的发展做出了很大贡献。东汉末年投奔徐州刺史陶谦，督管下邳、彭城、广陵三郡运粮。将其中大量物资占为己有累积财力，遂在徐州一带大规模崇佛，修建豪华佛寺，铸造金铜大佛，衣以锦彩，并举行浴佛节，招揽信徒万余人。其崇佛活动奠定了中国大型佛事活动的基础。后又投奔赵昱、薛礼、朱皓并将他们杀害，扬州牧刘繇因此兴兵讨伐笮融。笮融兵败后逃入深山，由于当地山民同样对他恨之入骨，便联手搜捕、杀死笮融，并将他的首级献给刘繇。",
			huanfan: "桓范（？～249年），字元则，沛郡龙亢县（今安徽省怀远县龙亢镇）人。三国时期曹魏大臣、文学家、画家。建安末年，担任丞相府掾，联合王象等共同撰写《皇览》。延康元年，担任羽林左监。魏明帝时，历任中领军、尚书，出任征虏将军、东中郎将、兖州刺史等。正始年间，授大司农，为大将军曹爽出谋划策，号称“智囊 ”。高平陵政变（249年）发生后，力劝曹爽挟带皇帝曹芳进入许昌，没有得到采纳，最终被太傅司马懿诛杀。桓范颇有文才，著有《世要论》（《桓范新书》）。善于画画，唐朝张彦远《历代名画记》目为中品。",
			sunyu: "孙瑜（177年－215年），字仲异，吴郡富春（今浙江富阳）人，孙坚之弟孙静的次子，孙权的堂兄。官至奋威将军、丹杨太守。孙瑜初以恭义校尉的身份统领士兵，曾跟随周瑜、孙权等人征战，擅于安抚部下、招降纳顺。孙瑜爱读古籍，又请学者马普来为将领官员的子弟讲学，于是东吴开始设立学官。215年，孙瑜去世，时年三十九岁。",
			xizheng: "郤正（？－278年），本名郤纂，字令先，司州河南郡偃师县（今河南省偃师市）人，三国蜀汉至西晋时期学者、官员。少好学，广读古籍。弱冠即善写文章，为蜀汉朝廷征为秘书吏，官至秘书令。公元263年（景耀六年），曹魏攻伐蜀汉，后主刘禅投降，郤正为之撰写投降书。后随刘禅前往洛阳，受封关内侯，又得到晋武帝司马炎赏识，任巴西郡太守，公元278年（咸宁四年）去世。郤正为人不重名利，曾作《释讥》，表明自己淡泊之心境；又醉心于文学，共作诗歌、论著、辞赋等近百篇，但多散佚于后世。",
			zhangjinyun: "张瑾云，张星彩的妹妹，刘禅的第二任皇后，238年正月立为皇后。景耀六年（263年），蜀汉灭亡，刘禅被俘，此后，受封为安乐公。张皇后也随之成为安乐公夫人，咸熙元年（264年），随刘禅到洛阳。",
			duanqiaoxiao: "段巧笑，三国时代魏国魏文帝时的宫人，甚受到魏文帝的宠爱。传说她以原有的化妆品中的米粉和胡粉，再加入葵花子汁，发明了女性化妆用的脂粉。",
			ruanji: "阮籍（公元210年～263年），字嗣宗，陈留尉氏（今河南省开封市）人，三国时期魏国诗人、竹林七贤之一。阮瑀之子，门荫入仕，累迁步兵校尉，世称阮步兵。崇奉老庄之学，政治上则采取谨慎避祸的态度。景元四年（公元263年），阮籍去世，享年五十三岁。作为“正始之音”的代表，著有《咏怀八十二首》、《大人先生传》等，其著作收录在《阮籍集》中。",
			ganfurenmifuren: "甘夫人，刘备起兵后于沛城娶之为妾。后来，甘夫人随刘备到荆州，生了阿斗(也就是后主刘禅)。223年四月，刘备病死于白帝城，追谥甘夫人为“昭烈皇后”。<br>糜夫人，刘备夫人。徐州别驾糜竺之妹。长坂兵败，她怀抱年仅两岁的刘禅在乱军中走散，被赵云发现；但麋夫人因为赵云只有一匹马，不肯上马，在将阿斗托付给赵云后投井而亡。",
			sunlingluan: "孙翎鸾，孙坚与妾室丁氏的女儿，孙策的妹妹，孙权、孙尚香的姐姐。孙翎鸾年幼时曾得杜夔点化，窥得音律玄妙，丝竹八音，擅长琵琶，每次弹奏琵琶时，经常引来百鸟，称为奇观。早年孙翎鸾出游，山林巧遇葛玄，葛玄观其面相为吉，特传授修行辟谷之法，可令其身心洗涤，容颜久存。孙翎鸾有恋人名张奋，两人情投意合，可惜造化弄人，张奋病死外域，孙翎鸾倚楼盼归，日复一日、年复一年。后有五彩孔雀自东南而来，绕楼而鸣，其声如慕，孙翎鸾泪染笑靥，与孔雀耳语几句后乘翎而去。",
			zhoubuyi: "周不疑（192年—208年），字元直（或作“文直”），零陵重安（今湖南衡阳县）人，刘表别驾刘先的外甥，少有异才，聪明敏达，在十七岁时就著有文论四首。曹冲死后，曹操怀疑曹丕无法驾驭周不疑，于是派人杀了周不疑。",
			tianshangyi: "田尚衣，一作陈尚衣，魏文帝曹丕宫中著名宫人。能歌善舞，一时冠绝于世，私以为比之汉宫飞燕也不遑多让。",
			malingli: "马伶俐，游卡桌游原创角色，设定上为，马超之女，其身形虽娇小，却继承了马超英勇略带冲动的个性，活泼阳光，调皮伶俐，爱摆弄爆竹烟花一类的小器具，包包里经常放置用五色彩纸包装的小炸弹球。马伶俐从小跟随马超和马云騄学习战斗技巧，战斗力超强，坚强的意志和勇气也得到了提升，同时擅长马术，有一匹可爱的小白马伴随其身边。后马伶俐成年，嫁与刘备之子刘理，获封梁王妃。两人琴瑟相和，极为恩爱，常结伴出游，被人誉为天作之合。",
			zhugeruoxue: "诸葛氏（“若雪”为网络小说虚构），诸葛亮的二姐，庞山民之妻。",
			zhugemengxue: "诸葛氏（“梦雪”为网络小说虚构），诸葛亮的大姐。",
			caoyi: "曹轶，游卡桌游旗下产品《三国杀》原创角色。设定上为曹纯所收养的孙女，从小受到曹纯的教导，在军营中长大，性情坚毅有担当，军事谋略丰富，战斗能力超强。曹轶喜欢美食，特别是甜食，并且擅长制作各种点心。她身边跟随的雪白小老虎是曹纯在她及笄时送的生辰礼物，希望她如小老虎一样，英勇无畏。曹轶与曹婴交好，两人以姐妹相称。曹轶成年后继承祖父衣钵，接手精锐部队“虎豹骑”，成为新的虎豹骑的统领者。",
			huzun: "胡遵（？～256年），安定临泾（今甘肃省镇原县）人，三国时期曹魏大臣，官至卫将军，封阴密侯。出身安定胡氏。历任征东将军、征东大将军、卫将军等职。早年由张既征辟。后追随司马懿，参与平定匈奴胡薄居姿职叛乱、抵御诸葛亮北伐、平定公孙渊叛乱。嘉平四年（252年），作为曹魏三征之一的征东将军，主持征讨东吴，被诸葛恪击败。正元元年（255年）参与平定淮南三叛的第二叛毌丘俭、文钦之乱，事后升任卫将军。甘露元年（256年）秋七月己卯去世，追赠车骑将军。",
			guanyue: "关樾，传说记载之人物，声称是关羽之孙，关平长子。未见载于正史，仅记载于清朝地方志以及传说。清·《江陵县志》：“娶镇东将军女赵氏。生子樾，世居江陵。”。清·《关氏宗谱·江陵县儒学册结》：“平子樾，因守祖、父陵墓遂家于荆州焉，此荆州之关氏所由来也。”",
			zhupeilan: "景皇后朱氏（234年―265年），吴郡吴县（今江苏省苏州市）人，吴景帝孙休的皇后，野史记载其名为朱佩兰。骠骑将军朱据与朱公主的独生女，吴末帝孙皓的表姐和叔母。出身江南四大姓之一吴郡朱氏。赤乌末年，与孙休成婚，永安元年（258年），孙休继位，封为夫人，永安五年（262年），被立为皇后。孙休去世后为太后，甘露元年秋（265年）被孙皓逼杀，葬于定陵。",
			bianyue: "魏高贵乡公皇后卞氏，琅琊开阳（山东临沂县）人，曹魏高贵乡公曹髦的皇后，魏武帝曹操武宣卞皇后弟弟卞秉的曾孙女。卞皇后祖父为卞兰，卞兰之弟卞琳的女儿又为魏元帝曹奂皇后，故元帝卞皇后是高贵乡公卞皇后的堂姑。《三国志·魏书·三少帝纪第四》：“（正元二年）三月，立皇后卞氏，大赦。夏四月甲寅，封后父卞隆为列侯。”——这是《三国志》对她唯一的记载。",
			zhugejing: "诸葛京（生卒年不详），字行宗；三国名臣诸葛亮之孙，诸葛瞻次子。诸葛瞻与诸葛京之兄诸葛尚在绵竹抗击魏军战死后，与诸葛亮有直系血缘关系的仅存诸葛京一脉。蜀汉灭亡之后，他与诸葛攀之子诸葛显于咸熙元年（264年）内移河东，初任郿县令，后任江州刺史。",
		},
		characterTitle: {
			// wulan:'#b对决限定武将',
			// leitong:'#b对决限定武将',
		},
		perfectPair: {},
		characterFilter: {
			// leitong:function(mode){
			// 	return mode!='identity'&&mode!='guozhan';
			// },
			// wulan:function(mode){
			// 	return mode!='identity'&&mode!='guozhan';
			// },
		},
		dynamicTranslate: {
			dcsbkongwu(player) {
				let str = "转换技，出牌阶段限一次，你可以弃置至多体力上限张牌，选择一名其他角色：",
					yin = "阴，弃置其至多等量张牌；",
					yang = "阳，视为对其使用等量张【杀】。";
				if (player.storage.dcsbkongwu) yang = `<span class="firetext">${yang}</span>`;
				else yin = `<span class="bluetext">${yin}</span>`;
				return str + yin + yang + "此阶段结束时，若其手牌数和体力值均不大于你，其下回合摸牌阶段摸牌数-1且装备区里的所有牌失效。";
			},
			dckengqiang(player) {
				let str = player.storage.dcshangjue ? "每回合每项各限一次" : "每回合限一次";
				str += "，当你造成伤害时，你可以：1.摸体力上限张牌；2.令此伤害+1并获得造成伤害的牌。";
				return str;
			},
			xinlvli: function (player) {
				var str = "每回合限一次";
				if (player.storage.choujue) str += "（自己的回合内则改为限两次）";
				str += "，当你造成";
				if (player.storage.beishui) str += "或受到";
				str += "伤害后，你可选择：1，若你的体力值大于你的手牌数，你摸Ｘ张牌；2，若你的手牌数大于你的体力值且你已受伤，你回复Ｘ点体力（Ｘ为你的手牌数与体力值之差）。";
				return str;
			},
			lvli: function (player) {
				var str = "每名角色的回合限一次";
				if (player.storage.choujue) str += "（自己的回合内则改为限两次）";
				str += "，你可以声明一个基本牌或普通锦囊牌的牌名，有随机概率视为使用之（装备区里的牌数越多，成功概率越大）";
				if (player.storage.beishui) str += "。当你受到伤害后，你也可以以此法使用一张牌。";
				return str;
			},
			rezhongjian: function (player) {
				return "出牌阶段限" + (player.hasSkill("recaishi2") ? "两" : "一") + "次，你可以选择一名本回合内未选择过的角色。你令其获得一项效果直至你的下回合开始：①其下次造成伤害后弃置两张牌，然后你摸一张牌。②其下次受到伤害后摸两张牌，然后你摸一张牌。";
			},
			bazhan: function (player) {
				if (player.storage.bazhan) return '转换技，出牌阶段限一次，阴：你可以将至多两张手牌交给一名其他角色。<span class="bluetext">阳：你可以获得一名其他角色的至多两张手牌。</span>若以此法移动的牌包含【酒】或♥牌，则你可令得到此牌的角色执行一项：①回复1点体力。②复原武将牌。';
				return '转换技，出牌阶段限一次，<span class="bluetext">阴：你可以将至多两张手牌交给一名其他角色。</span>阳：你可以获得一名其他角色的至多两张手牌。若以此法移动的牌包含【酒】或♥牌，则你可令得到此牌的角色执行一项：①回复1点体力。②复原武将牌。';
			},
			zhiren: function (player) {
				return "当你于" + (player.hasSkill("yaner_zhiren") ? "一" : "你的") + "回合内使用第一张非转化牌时，你可依次执行以下选项中的前X项：①卜算X。②可弃置场上的一张装备牌和延时锦囊牌。③回复1点体力。④摸三张牌。（X为此牌的名称的字数）";
			},
			yuqi: function (player) {
				var info = lib.skill.yuqi.getInfo(player);
				return "每回合限两次。当有角色受到伤害后，若你至其的距离不大于<span class=thundertext>" + info[0] + "</span>，则你可以观看牌堆顶的<span class=firetext>" + info[1] + "</span>张牌。你将其中至多<span class=greentext>" + info[2] + "</span>张牌交给受伤角色，然后可以获得剩余牌中的至多<span class=yellowtext>" + info[3] + "</span>张牌，并将其余牌以原顺序放回牌堆顶。（所有具有颜色的数字至多为5）";
			},
			caiyi: function (player) {
				var current = player.storage.caiyi,
					list = player.storage.caiyi_info || [[], []];
				var str = "转换技。结束阶段，你可令一名角色选择并执行一项，然后移除此选项。";
				var list1 = ["⒈回复X点体力。", "⒉摸X张牌。", "⒊复原武将牌。", "⒋随机执行一个已经移除过的阴选项；"],
					list2 = ["⒈受到X点伤害。", "⒉弃置X张牌。", "⒊翻面并横置。", "⒋随机执行一个已经移除过的阳选项。"],
					str1 = "阴：",
					str2 = "阳：";
				for (var i = 0; i < 4; i++) {
					var clip1 = list1[i],
						clip2 = list2[i];
					if (list[0].includes(i)) clip1 = '<span style="text-decoration:line-through;">' + clip1 + "</span>";
					if (list[1].includes(i)) clip2 = '<span style="text-decoration:line-through;">' + clip2 + "</span>";
					str1 += clip1;
					str2 += clip2;
				}
				if (current) str2 = '<span class="bluetext">' + str2 + "</span>";
				else str1 = '<span class="bluetext">' + str1 + "</span>";
				return str + str1 + str2 + "（X为该阴阳态剩余选项的数量）。";
			},
			dchuishu: function (player) {
				var list = lib.skill.dchuishu.getList(player);
				return "摸牌阶段结束时，你可以摸[" + list[0] + "]张牌。若如此做：你弃置[" + list[1] + "]张手牌，且当你于本回合内弃置第[" + list[2] + "]+1张牌后，你从弃牌堆中随机获得〖慧淑〗第三个括号数字张非基本牌。";
			},
			dcshoutan: function (player) {
				if (player.storage.dcshoutan) return '转换技。出牌阶段限一次，阴：你可以弃置一张不为黑色的手牌。<span class="bluetext">阳：你可以弃置一张黑色手牌。</span>';
				return '转换技。出牌阶段限一次，<span class="bluetext">阴：你可以弃置一张不为黑色的手牌。</span>阳：你可以弃置一张黑色手牌。';
			},
			dcluochong: function (player) {
				return "一轮游戏开始时，你可以弃置任意名角色区域里的共计至多[" + (4 - player.countMark("dcluochong")) + "]张牌，然后若你以此法弃置了一名角色的至少三张牌，则你方括号内的数字-1。";
			},
			dczhangcai: function (player) {
				return "当你使用或打出" + (player.hasSkill("dczhangcai_all") ? "" : "点数为8的") + "牌时，你可以摸X张牌（X为你手牌区里" + (player.hasSkill("dczhangcai_all") ? "与此牌点数相同" : "点数为8") + "的牌数且至少为1）。";
			},
			dcsbmengmou: function (player) {
				var storage = player.storage.dcsbmengmou;
				var str = "转换技，①游戏开始时，你可以转换此技能状态；②每回合每项各限一次，当你得到其他角色的牌后，或其他角色得到你的牌后：";
				if (!storage) str += '<span class="bluetext">';
				str += "阳，你可以令该角色使用至多X张【杀】，且其每以此法造成1点伤害，其回复1点体力；";
				if (!storage) str += "</span>";
				if (storage) str += '<span class="bluetext">';
				str += "阴，你可令该角色打出至多X张【杀】，然后其失去Y点体力。";
				if (storage) str += "</span>";
				str += "（X为你的体力上限，Y为X-其打出【杀】数）";
				return str;
			},
			dcsbyingmou: function (player) {
				var storage = player.storage.dcsbyingmou;
				var str = "转换技，①游戏开始时，你可以转换此技能状态；②每回合限一次，你对其他角色使用牌后，你可以选择其中一名目标角色：";
				if (!storage) str += '<span class="bluetext">';
				str += "阳，你将手牌数摸至与其相同（至多摸五张），然后视为对其使用一张【火攻】；";
				if (!storage) str += "</span>";
				if (storage) str += '<span class="bluetext">';
				str += "阴，令一名手牌数为全场最大的角色对其使用手牌中所有的【杀】和伤害类锦囊牌（若其没有可使用的牌则将手牌数弃至与你相同）。";
				if (storage) str += "</span>";
				return str;
			},
			dcsbquanmou: function (player) {
				if (player.storage.dcsbquanmou) return '转换技。①游戏开始时，你可以转换此技能状态；②出牌阶段每名角色限一次，你可以令一名攻击范围内的其他角色交给你一张牌。阳：当你于本阶段内下次对其造成伤害时，取消之；<span class="bluetext">阴：当你于本阶段内下次对其造成伤害后，你可以选择除其外的至多三名其他角色，对这些角色依次造成1点伤害。</span>';
				return '转换技。①游戏开始时，你可以转换此技能状态；②出牌阶段每名角色限一次，你可以令一名攻击范围内的其他角色交给你一张牌。<span class="bluetext">阳：当你于本阶段内下次对其造成伤害时，取消之；</span>阴：当你于本阶段内下次对其造成伤害后，你可以选择除其外的至多三名其他角色，对这些角色依次造成1点伤害。';
			},
			dcshouzhi(player) {
				let skillName = "dcshouzhi";
				if (player.storage.dcshouzhi_modified) skillName += "_modified";
				return lib.translate[`${skillName}_info`];
			},
			dcsbfumou(player) {
				const storage = player.storage.dcsbfumou;
				var str = "转换技，①游戏开始时，你可以转换此技能状态；②出牌阶段限一次，你可以观看一名其他角色A的手牌并展示其至多一半手牌：";
				if (!storage) str += '<span class="bluetext">';
				str += "阳，并将这些牌交给另一名其他角色B，然后你与A各摸X张牌（X为A以此法失去的手牌数）；";
				if (!storage) str += "</span>";
				if (storage) str += '<span class="bluetext">';
				str += "阴，令A依次使用这些牌中所有其可以使用的牌（无距离限制且不可被响应）。";
				if (storage) str += "</span>";
				return str;
			},
			xianmou(player) {
				const storage = player.storage.xianmou;
				var str = "转换技，①游戏开始时，你可以转换此技能状态；②你失去过牌的回合结束时，你可以：";
				if (!storage) str += '<span class="bluetext">';
				str += "阳，观看牌堆顶五张牌并获得至多X张牌，若未获得X张牌则获得〖遗计〗直到再发动此项；";
				if (!storage) str += "</span>";
				if (storage) str += '<span class="bluetext">';
				str += "阴，观看一名角色手牌并弃置其中至多X张牌，若弃置X张牌则你进行一次【闪电】判定。";
				if (storage) str += "</span>";
				return str+="（X为你本回合失去牌数）";
			},
		},
		characterReplace: {
			wenyang: ["wenyang", "db_wenyang", "diy_wenyang", "std_db_wenyang", "jsrg_wenyang"],
			gexuan: ["gexuan", "tw_gexuan"],
			panshu: ["panshu", "re_panshu"],
			yangwan: ["yangwan", "sp_yangwan", "jd_sp_yangwan"],
			sunyi: ["re_sunyi", "sunyi", "tw_sunyi"],
			fengfangnv: ["fengfangnv", "re_fengfangnv"],
			luotong: ["dc_luotong", "luotong", "std_dc_luotong"],
			dc_wangchang: ["dc_wangchang", "tw_wangchang"],
			guozhao: ["guozhao", "xin_guozhao", "jsrg_guozhao"],
			dingshangwan: ["dingshangwan", "ol_dingshangwan"],
			qinghegongzhu: ["qinghegongzhu", "dc_qinghegongzhu"],
			caofang: ["caofang", "jsrg_caofang"],
			caomao: ["caomao", "mb_caomao"],
			sp_zhenji: ["sp_zhenji", "jsrg_zhenji", "mb_sp_zhenji"],
			zhugejin: ["zhugejin", "dc_sb_zhugejin", "sb_zhugejin"],
			caoang: ["caoang", "dc_sb_caoang"],
			zhangxiu: ["zhangxiu", "dc_sb_zhangxiu"],
			yuanji: ["yuanji", "ol_yuanji"],
			zhangfen: ["zhangfen", "mb_zhangfen"],
			dc_tianfeng: ["dc_tianfeng", "tianfeng"],
		},
		translate: {
			puyuan: "蒲元",
			pytianjiang: "天匠",
			pytianjiang_info: "游戏开始时，你随机获得两张不同副类别的装备牌，并置入你的装备区。出牌阶段，你可以将装备区的牌移动至其他角色的装备区（可替换原装备）。若你以此法移动了〖铸刃〗的衍生装备，你摸两张牌。",
			pytianjiang_move: "天匠",
			pyzhuren: "铸刃",
			pyzhuren_info: "出牌阶段限一次，你可以弃置一张手牌。根据此牌的花色点数，你有一定概率打造成功并获得一张武器牌（若打造失败或武器已有则改为摸一张【杀】，花色决定武器名称，点数决定成功率）。此武器牌进入弃牌堆时，将其移出游戏。",
			pyzhuren_destroy: "铸刃",
			pyzhuren_heart: "红缎枪",
			pyzhuren_heart_info: "每回合限一次，当你使用【杀】造成伤害后，你可以进行判定，若结果为：红色，你回复1点体力；黑色：你摸两张牌。",
			pyzhuren_diamond: "烈淬刀",
			pyzhuren_diamond_info: "每回合限两次，当你使用【杀】对目标角色造成伤害时，你可以弃置一张牌，令此伤害+1。你使用【杀】的次数上限+1。",
			pyzhuren_club: "水波剑",
			pyzhuren_club_info: "每回合限两次，当你使用普通锦囊牌或【杀】时，你可以为此牌增加一个目标。当你失去装备区里的【水波剑】后，你回复1点体力。",
			pyzhuren_spade: "混毒弯匕",
			pyzhuren_spade_info: "当你使用【杀】指定目标后，你可令其失去X点体力（X为此技能本回合内发动过的次数且至多为5）。",
			pyzhuren_shandian: "天雷刃",
			pyzhuren_shandian_info: "当你使用【杀】指定目标后，可令其进行判定，若结果为：黑桃，其受到3点雷属性伤害；梅花，其受到1点雷属性伤害，你回复1点体力并摸一张牌。",
			guanlu: "管辂",
			tuiyan: "推演",
			tuiyan_info: "出牌阶段开始时，你可以观看牌堆顶的三张牌。",
			busuan: "卜算",
			busuan_info: "出牌阶段限一次，你可以选择一名其他角色，然后选择至多两张不同的卡牌名称（限基本牌或锦囊牌）。该角色下次摸牌阶段摸牌时，改为从牌堆或弃牌堆中获得你选择的牌。",
			busuan_angelbeats: "卜算",
			mingjie: "命戒",
			mingjie_info: "结束阶段，你可以摸一张牌，若此牌为红色，你可以重复此流程直到摸到黑色牌或摸到第三张牌。当你以此法摸到黑色牌时，若你的体力值大于1，则你失去1点体力。",
			gexuan: "葛玄",
			gxlianhua: "炼化",
			gxlianhua_info: "你的回合外，每当有其他角色受到伤害后，你获得一个“丹血”标记（该角色与你阵营一致时为红色，不一致为黑色，此颜色对所有玩家均不可见）直到你的准备阶段开始。准备阶段，根据你获得的“丹血”标记的数量和颜色，你从牌堆/弃牌堆中获得相应的牌以及相应技能直到回合结束。3枚或以下：〖英姿〗和【桃】；超过3枚且红色“丹血”较多：〖观星〗和【无中生有】；超过3枚且黑色“丹血”较多：〖直言〗和【顺手牵羊】；超过3枚且红色和黑色一样多：【杀】、【决斗】和〖攻心〗。",
			zhafu: "札符",
			zhafu_info: "限定技，出牌阶段，你可以选择一名其他角色，令其获得一枚「札」。有「札」的角色弃牌阶段开始时，若其手牌数大于1，其移去「札」并选择保留一张手牌，然后将其余的手牌交给你。",
			leitong: "雷铜",
			kuiji: "溃击",
			kuiji_info: "出牌阶段限一次。你可以将一张黑色基本牌当作【兵粮寸断】置于你的判定区，然后摸一张牌。若如此做，你可以对体力值最多的一名对手造成2点伤害。对手因此进入濒死状态时，你或队友体力值最少的一方回复1点体力。",
			kuiji_info_identity: "出牌阶段限一次。你可以将一张黑色基本牌当做【兵粮寸断】置于你的判定区，摸一张牌，然后你可以对体力值最多的一名其他角色造成2点伤害。该角色因此进入濒死状态时，你可令一名除其外体力值最少的角色回复1点体力。",
			kuiji_info_guozhan: "出牌阶段限一次。你可以将一张黑色基本牌当做【兵粮寸断】置于你的判定区，摸一张牌，然后你可以对体力值最多的一名其他角色造成2点伤害。该角色因此进入濒死状态时，你可令一名除其外体力值最少的角色回复1点体力。",
			wulan: "吴兰",
			wlcuorui: "挫锐",
			wlcuorui_info: "出牌阶段开始时，你可以弃置你或队友区域里的一张牌。若如此做，你选择一项：1.弃置对手装备区里至多两张与此牌颜色相同的牌；2.展示对手的共计两张手牌，然后获得其中与此牌颜色相同的牌。",
			wlcuorui_info_identity: "出牌阶段开始时，你可以弃置一名你至其的距离不大于1的角色区域里的一张牌，然后你选择一项：1.弃置另一名其他角色装备区里至多两张与此牌颜色相同的牌；2.展示另一名其他角色的至多两张手牌，然后获得其中与此牌颜色相同的牌。",
			wlcuorui_info_guozhan: "出牌阶段开始时，你可以弃置一名你至其的距离不大于1的角色区域里的一张牌，然后你选择一项：1.弃置另一名其他角色装备区里至多两张与此牌颜色相同的牌；2.展示另一名其他角色的至多两张手牌，然后获得其中与此牌颜色相同的牌。",
			huaman: "花鬘",
			manyi: "蛮裔",
			manyi_info: "锁定技，【南蛮入侵】对你无效。",
			manyi_info_single_normal: "锁定技，【南蛮入侵】对你无效。当你登场时，你可以视为使用一张【南蛮入侵】。",
			mansi_viewas: "蛮嗣",
			mansi: "蛮嗣",
			mansi_info: "出牌阶段限一次，你可以将所有手牌当做【南蛮入侵】使用；当有角色受到【南蛮入侵】的伤害后，你摸一张牌。",
			souying: "薮影",
			souying_info: "每回合限一次，当你对其他角色（或其他角色对你）使用【杀】或普通锦囊牌指定唯一目标后，若此牌不是本回合你对其（或其对你）使用的第一张【杀】或普通锦囊牌，你可以弃置一张牌，获得此牌对应的所有实体牌（或令此牌对你无效）。",
			zhanyuan: "战缘",
			zhanyuan_info: "觉醒技，准备阶段，若你已因蛮嗣累计获得超过七张牌，你加1点体力上限并回复1点体力，并可以选择一名男性角色，你与其获得技能〖系力〗，然后你失去技能〖蛮嗣〗。",
			hmxili: "系力",
			hmxili_info: "每回合限一次，你的回合外，当其他拥有【系力】技能的角色在其回合内对没有【系力】技能的角色造成伤害时，你可以弃置一张牌，令此伤害+1，然后你与其各摸两张牌。",
			wangshuang: "王双",
			spzhuilie: "追猎",
			spzhuilie2: "追猎",
			spzhuilie_info: "锁定技，你使用【杀】无距离限制；当你使用【杀】指定目标后，若其不在你的攻击范围内，此【杀】不计入使用次数限制且你判定。若判定结果为武器牌或坐骑牌，此【杀】的伤害基数改为X（X为其体力值）。否则你失去1点体力。",
			wenyang: "文鸯",
			xinlvli: "膂力",
			xinlvli_info: "每回合限一次，当你造成伤害后，你可选择：1，若你的体力值大于你的手牌数，你摸Ｘ张牌；2，若你的手牌数大于你的体力值且你已受伤，你回复Ｘ点体力（Ｘ为你的手牌数与体力值之差）。",
			lvli: "膂力",
			lvli4: "膂力",
			lvli5: "膂力",
			lvli_info: "每名角色的回合限一次，你可以声明一个基本牌或普通锦囊牌的牌名，有随机概率视为使用之（装备区里的牌数越多，成功概率越大）。",
			choujue: "仇决",
			choujue_info: "觉醒技，一名角色的回合结束时，若你的手牌数和体力值相差3或更多，你减1点体力上限并获得技能〖背水〗，然后将〖膂力〗改为“在自己的回合时每回合限两次”。",
			beishui: "背水",
			beishui_info: "觉醒技，准备阶段，若你的手牌数或体力值小于2，你减1点体力上限并获得技能〖清剿〗，然后将〖膂力〗改为受到伤害后也可以发动。",
			qingjiao: "清剿",
			qingjiao_info: "出牌阶段开始时，你可以弃置所有手牌，然后从牌堆或弃牌堆中随机获得八张牌名各不相同且副类别不同的牌。若如此做，结束阶段，你弃置所有牌。",
			re_liuzan: "留赞",
			refenyin: "奋音",
			refenyin_info: "锁定技，你的回合内，当一张牌进入弃牌堆后，若本回合内没有过与此牌花色相同的卡牌进入过弃牌堆，则你摸一张牌。",
			liji: "力激",
			liji_info: "出牌阶段限X次，你可以弃置一张牌并对一名其他角色造成1点伤害。（X为本回合内进入过弃牌堆的卡牌数除以8，若场上人数小于5则改为除以4，向下取整）",
			liubian: "刘辩",
			shiyuan: "诗怨",
			shiyuan_info: "每回合每项限一次，当你成为其他角色使用牌的目标后：①若其体力值大于你，你摸三张牌。②若其体力值等于你，你摸两张牌。③若其体力值小于你，你摸一张牌。",
			dushi: "毒逝",
			dushi_info: "锁定技，你处于濒死状态时，其他角色不能对你使用【桃】。你死亡时，你选择一名其他角色获得〖毒逝〗。",
			yuwei: "余威",
			yuwei_info: "主公技，锁定技，其他群雄角色的回合内，你将〖诗怨〗改为“每回合每项限两次”。",
			re_xinxianying: "新杀辛宪英",
			re_xinxianying_prefix: "新杀",
			rezhongjian: "忠鉴",
			rezhongjian2: "忠鉴",
			rezhongjian_info: "出牌阶段限一次，你可以选择一名本回合内未选择过的角色（其他角色不可见）。你令其获得一项效果直至你的下回合开始：①其下次造成伤害后弃置两张牌，然后你摸一张牌。②其下次受到伤害后摸两张牌，然后你摸一张牌。",
			recaishi: "才识",
			recaishi3: "才识",
			recaishi_info: "摸牌阶段结束时，若你于本阶段内因摸牌而获得的所有的牌：花色均相同，你将〖忠鉴〗于本回合内改为“出牌阶段限两次”。不均相同，你可回复1点体力。若如此做，你本回合内不能对自己使用牌。",
			guozhao: "郭照",
			pianchong: "偏宠",
			pianchong2: "偏宠",
			pianchong_info: "摸牌阶段开始时，你可放弃摸牌。若如此做，你从牌堆中获得一张红色牌和一张黑色牌。然后你选择一种颜色。你的下回合开始前，当你失去该颜色的一张牌后，你从牌堆中获得另一种颜色的一张牌。",
			zunwei: "尊位",
			zunwei_backup: "尊位",
			zunwei_info: "出牌阶段限一次，你可选择本局游戏内未选择过的一项：①若你已受伤，则你可以选择一名体力值大于你的其他角色，你将体力值回复至X（X为你的体力上限与其体力值中的较小值）②选择一名手牌数大于你的其他角色，你将手牌数摸至与其相同（至多摸五张）③选择一名装备区内牌数大于你的其他角色。你令X=1。若你装备区内的('equip'+X)栏为空，则你使用牌堆中的一张副类别为('equip'+X)，且能对自己使用的装备牌。你令X+1。若X不大于5，且你装备区内的牌数仍小于目标角色，则你重复此流程。",
			fanyufeng: "樊玉凤",
			bazhan: "把盏",
			bazhan_info: "转换技，出牌阶段限一次，阴：你可以将至多两张手牌交给一名其他角色。阳：你可以获得一名其他角色的至多两张手牌。若以此法移动的牌包含【酒】或♥牌，则你可令得到牌的角色执行一项：①回复1点体力。②复原武将牌。",
			jiaoying: "醮影",
			jiaoying2: "醮影",
			jiaoying3: "醮影",
			jiaoying3_draw: "醮影",
			jiaoying_info: "锁定技，其他角色得到你的手牌后，该角色本回合不能使用或打出与此牌颜色相同的牌。然后此回合结束时，若其本回合没有再使用牌，你令一名角色将手牌摸至五张。",
			ruanyu: "阮瑀",
			xingzuo: "兴作",
			xingzuo2: "兴作",
			xingzuo_info: "出牌阶段开始时，你可观看牌堆底的三张牌并用任意张手牌替换其中等量的牌。若如此做，结束阶段，你可令一名有手牌的角色用所有手牌替换牌堆底的三张牌。若其因此法失去的牌多于三张，则你失去1点体力。",
			miaoxian: "妙弦",
			miaoxian_info: "若你的手牌中仅有一张黑色牌，你可将此牌当作任意一张普通锦囊牌使用（每回合限一次）；若你的手牌中仅有一张红色牌，你使用此牌时摸一张牌。",
			yangwan: "杨婉",
			youyan: "诱言",
			youyan_info: "出牌阶段/弃牌阶段各限一次。当有牌进入弃牌堆后，若其中有你不因使用或打出而失去的牌，你可以从牌堆中获得你本次失去的牌中没有的花色的牌各一张。",
			zhuihuan: "追还",
			zhuihuan2: "追还",
			zhuihuan2_new: "追还",
			zhuihuan_info: "结束阶段开始时，你可以选择一名角色（对其他角色不可见）。记录所有对该角色造成过伤害的角色。该角色的下个准备阶段开始时停止记录，且所有记录过的角色：若体力值大于该角色，则受到其造成的2点伤害；若体力值小于等于该角色，则随机弃置两张手牌。",
			re_panshu: "潘淑",
			zhiren: "织纴",
			zhiren_info: "当你于你的回合内使用第一张非转化牌时，你可依次执行以下选项中的前X项：①卜算X。②可弃置场上的一张装备牌和延时锦囊牌。③回复1点体力。④摸三张牌。（X为此牌的名称的字数）",
			yaner: "燕尔",
			yaner_info: "每回合限一次。当有其他角色于其出牌阶段内失去手牌后，若其没有手牌，则你可以与其各摸两张牌。若其以此法摸得的两张牌类型相同，则其回复1点体力。若你以此法摸得的两张牌类型相同，则你将〖织纴〗中的“你的回合内”改为“一回合内”直至你下回合开始。",
			zhouyi: "周夷",
			zhukou: "逐寇",
			zhukou_info: "①当你于一名角色的出牌阶段第一次造成伤害后，你可以摸X张牌（X为本回合你已使用的牌数）。②你的结束阶段，若你本回合没有造成伤害，你可以对两名其他角色各造成1点伤害。",
			mengqing: "氓情",
			mengqing_info: "觉醒技。准备阶段，若场上已受伤的角色数大于你的体力值，你加3点体力上限并回复3点体力，失去〖逐寇〗，获得〖玉殒〗。",
			yuyun: "玉殒",
			yuyun_info: "锁定技，出牌阶段开始时，你失去1点体力或体力上限（不能减至1以下），然后选择X+1项（X为你已损失的体力值）：①摸两张牌；②对一名其他角色造成1点伤害，然后本回合对其使用【杀】无距离和次数限制；③本回合的手牌上限视为无限；④获得一名其他角色区域内的一张牌；⑤令一名其他角色将手牌摸至体力上限（最多摸至5）。",
			caojinyu: "曹金玉",
			yuqi: "隅泣",
			yuqi_info: "每回合限两次。当有角色受到伤害后，若你至其的距离不大于<span class=thundertext>0</span>，则你可以观看牌堆顶的<span class=firetext>3</span>张牌。你将其中至多<span class=greentext>1</span>张牌交给受伤角色，然后可以获得剩余牌中的至多<span class=yellowtext>1</span>张牌，并将其余牌以原顺序放回牌堆顶。（所有具有颜色的数字至多为5）",
			shanshen: "善身",
			shanshen_info: "当有角色死亡时，你可令你的〖隅泣〗中的一个具有颜色的数字+2。然后若你未对该角色造成过伤害，则你回复1点体力。",
			xianjing: "娴静",
			xianjing_info: "准备阶段，你可令你的〖隅泣〗中的一个具有颜色的数字+1。若你的体力值等于体力上限，则你可以重复一次此流程。",
			re_sunyi: "孙翊",
			syjiqiao: "激峭",
			syjiqiao_info: "出牌阶段开始时，你可将牌堆顶的X张牌置于你的武将牌上（X为你的体力上限）。当你于此出牌阶段内使用的牌结算结束后，你可以获得其中的一张牌，然后若剩余牌中红色牌和黑色牌的数量：不相等，你失去1点体力；相等，你回复1点体力。出牌阶段结束时，你将这些牌置入弃牌堆。",
			syxiongyi: "凶疑",
			syxiongyi_info: "限定技。当你处于濒死状态时，若剩余武将牌堆中：有“徐氏”，则你可以将体力值回复至3点，并将此武将牌替换为“徐氏”；没有“徐氏”，则你可以将体力值回复至1点并获得〖魂姿〗。",
			re_zhangbao: "新杀张宝",
			re_zhangbao_prefix: "新杀",
			xinzhoufu: "咒缚",
			xinzhoufu2: "咒缚",
			xinzhoufu_info: "出牌阶段限一次。你可以将一张手牌置于一名其他角色的武将牌上并称为“咒”，且当其判定时，将其“咒”作为判定牌。",
			xinyingbing: "影兵",
			xinyingbing_info: "锁定技。每回合每名角色限一次，当你使用牌指定有“咒”的角色为目标后，你摸两张牌。",
			wufan: "吴范",
			tianyun: "天运",
			tianyun_info: "①游戏的第一个回合开始前，你从牌堆中获得手牌区内没有的花色的各一张牌。②一名角色的回合开始时，若其座位号等于游戏轮数，则你可观看牌堆顶的X张牌并以任意顺序置于牌堆顶或牌堆底。若你将所有的牌均置于了牌堆底，则你可以令一名角色摸X张牌，然后失去1点体力。（X为你手牌中包含的花色数）",
			wfyuyan: "预言",
			wfyuyan_info: "一轮游戏开始时，你选择一名角色（对其他角色不可见）：当第一次有角色于本轮内进入濒死状态时，若其是你选择的角色，则你获得〖奋音〗直到你的回合结束；当第一次有角色于本轮内造成伤害后，若其是你选择的角色，则你摸两张牌。",
			re_fengfangnv: "冯妤",
			tiqi: "涕泣",
			tiqi_info: "其他角色的摸牌阶段结束时/被跳过时，若其于本阶段内因摸牌而得到的牌数X不等于2，则你可以摸|X-2|张牌，并可令其本回合的手牌上限±|X-2|。",
			baoshu: "宝梳",
			baoshu_info: "①准备阶段，你可选择Y名角色，这些角色重置武将牌并获得(X-Y+1)个“梳”（X为你的体力上限，Y∈[1, X]）。②一名角色的摸牌阶段开始时，若其有“梳”，则其本阶段的额定摸牌数+Z且移去Z个“梳”（Z为其“梳”的数量）。",
			dc_luotong: "骆统",
			renzheng: "仁政",
			renzheng_info: "锁定技。当有伤害被防止时，或伤害值发生过减少的伤害事件结算结束后，你摸两张牌。",
			jinjian: "进谏",
			jinjian_info: "①当你造成伤害时，你可令此伤害+1，然后你本回合内下一次造成的伤害-1且不触发〖进谏①〗。②当你受到伤害时，你可令此伤害-1。然后你于本回合内下一次受到的伤害+1且不触发〖进谏②〗。",
			caomao: "曹髦",
			qianlong: "潜龙",
			qianlong_info: "当你受到伤害后，你可以亮出牌堆顶的三张牌并获得其中的至多X张牌（X为你已损失的体力值），然后将剩余的牌置于牌堆底。",
			fensi: "忿肆",
			fensi_info: "锁定技。准备阶段，你须选择一名体力值不小于你的角色并对其造成1点伤害，然后若你选择的角色不为你自己，则其视为对你使用一张【杀】。",
			juetao: "决讨",
			juetao_info: "限定技。出牌阶段开始时，若你的体力值为1，则你可以选择一名其他角色。你亮出牌堆底的一张牌，若此牌能被你使用，则你使用此牌并重复此流程直到出现不可使用的牌或其死亡（你与其以外的角色不是此牌的合法目标）。",
			zhushi: "助势",
			zhushi_info: "主公技。每回合限一次，其他魏势力角色于回合内回复体力时，其可令你摸一张牌。",
			laiyinger: "来莺儿",
			xiaowu: "绡舞",
			xiaowu_info: "出牌阶段限一次，你可以选择任意名座位连续且包含你的上家/下家的其他角色。这些角色依次选择一项：⒈令你摸一张牌；⒉其摸一张牌。然后若选择选项一的角色数大于选项二的角色数，则你获得一枚“沙”；若选择选项二的角色数大于选项一的角色数，则你对这些角色依次造成1点伤害。",
			huaping: "化萍",
			huaping_info: "限定技。①一名其他角色死亡时，你可获得其当前拥有的所有不带有「Charlotte」标签的技能，然后你失去〖绡舞〗，移去所有“沙”并摸等量的牌。②当你死亡时，你可令一名其他角色获得〖沙舞〗和你的所有“沙”。",
			shawu: "沙舞",
			shawu_info: "当你使用【杀】指定目标后，你可选择一项：⒈弃置两张手牌；⒉移去一枚“沙”并摸两张牌。然后你对目标角色造成1点伤害。",
			dc_huangzu: "黄祖",
			dcjinggong: "精弓",
			dcjinggong_info: "你可以将一张装备牌当做无距离限制的【杀】使用。当你声明使用此【杀】后，你将此【杀】的伤害值基数改为X（X为你至此【杀】第一个目标角色的距离且至多为5）。",
			dcxiaojuan: "骁隽",
			dcxiaojuan_info: "当你使用牌指定其他角色为唯一目标后，你可以弃置其一半的手牌（向下取整）。若这些牌中有与你使用牌花色相同的牌，则你弃置一张手牌。",
			dc_liuyu: "新杀刘虞",
			dc_liuyu_prefix: "新杀",
			dcsuifu: "绥抚",
			dcsuifu_info: "其他角色的结束阶段开始时，若你和一号位本回合内累计受到过的伤害值大于1，则你可以将该角色的所有手牌置于牌堆顶，然后视为使用一张【五谷丰登】。",
			dcpijing: "辟境",
			dcpijing_info: "结束阶段开始时，你可以选择任意名角色。你令所有未选择的角色失去〖自牧〗，然后你和这些角色获得〖自牧〗。",
			dczimu: "自牧",
			dczimu_info: "锁定技。当你受到伤害后，你令所有拥有〖自牧〗的角色各摸一张牌，然后你失去〖自牧〗。",
			caohua: "曹华",
			caiyi: "彩翼",
			caiyi_info: "转换技。结束阶段，你可令一名角色选择并执行一项，然后移除此选项。阴：⒈回复X点体力。⒉摸X张牌，⒊复原武将牌。⒋随机执行一个已经移除过的阴选项；阳：⒈受到X点伤害。⒉弃置X张牌。⒊翻面并横置。⒋随机执行一个已经移除过的阳选项。（X为该阴阳态剩余选项的数量）。",
			guili: "归离",
			guili_info: "你的第一个回合开始时，你须选择一名其他角色。该角色每轮的第一个回合结束后，若其本回合内未造成过伤害，则你执行一个额外的回合。",
			zhaoang: "赵昂",
			dczhongjie: "忠节",
			dczhongjie_info: "每轮限一次。当有角色因失去体力而进入濒死状态时，你可令其回复1点体力并摸一张牌。",
			dcsushou: "夙守",
			dcsushou_tag: "对方手牌",
			dcsushou_info: "一名角色的出牌阶段开始时，若其手牌数为全场唯一最多，则你可以失去1点体力并摸X张牌。然后若该角色不是你，则你可以观看其一半的手牌（向下取整），且用至多X张手牌替换其中等量的牌。（X为你已损失的体力值）",
			dc_wangchang: "王昶",
			dckaiji: "开济",
			dckaiji_info: "转换技。出牌阶段限一次，你可以：阴：摸X张牌；阳：弃置至多X张牌（X为你的体力上限且至多为5）。",
			dcpingxi: "平袭",
			dcpingxi_info: "结束阶段，若X大于0，则你可以选择至多X名其他角色（X为本回合内因弃置而进入弃牌堆的牌数）。你依次弃置这些角色的各一张牌，然后视为对这些角色使用一张【杀】。",
			liuhui: "刘徽",
			dcgeyuan: "割圆",
			dcgeyuan_info: "锁定技。①游戏开始时，你将从A至K的所有整数排列为一个环形链表，称为“圆环之理”。②当有一张牌进入弃牌堆后，若此牌的点数在“圆环之理”内，且“圆环之弧”为空或此牌的点数与“圆环之弧”两端的点数相邻，则你将此牌的点数记录进“圆环之弧”；然后若“圆环之弧”与“圆环之理”长度相同，则你从“圆环之理”中移除“圆环之弧”记录的第一个和最后一个数字A和B（当“圆环之理”长度不大于3时则不移除），清空“圆环之弧”，获得场上和牌堆中所有点数为A和B的牌。",
			dcjieshu: "解术",
			dcjieshu_info: "锁定技。①所有点数不在“圆环之理”中的牌不计入你的手牌上限。②当你使用或打出牌时，若“圆环之弧”为空或此牌的点数与“圆环之弧”两端的点数相邻，则你摸一张牌。",
			dcgusuan: "股算",
			dcgusuan_info: "觉醒技。一名角色的回合结束时，若你的“圆环之理”长度为3，则你减1点体力上限并修改〖割圆〗。",
			dcgeyuan_magica: "割圆·改",
			dcgeyuan_magica_info: "锁定技。当有一张牌进入弃牌堆后，若此牌的点数在“圆环之理”内，且“圆环之弧”为空或此牌的点数与“圆环之弧”两端的点数相邻，则你将此牌的点数记录进“圆环之弧”；然后若“圆环之弧”与“圆环之理”长度相同，则你清空“圆环之弧”并选择至多三名角色，这些角色中的第一名角色摸三张牌，第二名角色弃置四张牌，第三名角色将其手牌与牌堆底的五张牌交换。",
			zhangfen: "张奋",
			dcwanglu: "望橹",
			dcwanglu_info: "锁定技。准备阶段开始时，若你的装备区内：有【大攻车】，则你获得一个额外的出牌阶段；没有【大攻车】，则你将一张【大攻车】置入装备区。",
			dcxianzhu: "陷筑",
			dcxianzhu_info: "当你造成渠道为【杀】伤害后，你可以为你装备区内的【大攻车】选择一项强化（每张【大攻车】最多被强化五次）：⒈通过【大攻车】使用【杀】无视距离和防具；⒉通过此【大攻车】使用的【杀】可以额外选择1个目标（可叠加）；⒊通过此【大攻车】使用的【杀】造成伤害后的弃置牌数+1（可叠加）。",
			dcchaixie: "拆械",
			dcchaixie_info: "锁定技。当你的【大攻车】被销毁后，你摸X张牌（X为此【大攻车】被强化过的次数）。",
			dagongche: "大攻车",
			dagongche_skill: "大攻车",
			dagongche_info: "出牌阶段开始时，你可以视为使用一张【杀】，且当此【杀】因执行效果而对目标角色造成伤害后，你弃置其一张牌。若此【大攻车】未被强化，则其他角色无法弃置你装备区内的【大攻车】。当此牌离开你的装备区后，销毁之。",
			dukui: "杜夔",
			dcfanyin: "泛音",
			dcfanyin_info: "出牌阶段开始时，你可以亮出牌堆中点数最小的一张牌。然后你选择一项，并可以亮出一张点数为此牌二倍的牌且重复此流程：⒈使用此牌（无距离限制）；⒉你于本回合内使用的下一张基本牌或普通锦囊牌选择目标后，可以增加一个目标。",
			dcpeiqi: "配器",
			dcpeiqi_info: "当你受到伤害后，你可以移动场上的一张牌。然后若场上所有角色均在彼此的攻击范围内，则你可以再移动场上的一张牌。",
			quanhuijie: "全惠解",
			dchuishu: "慧淑",
			dchuishu_info: "摸牌阶段结束时，你可以摸[3]张牌。若如此做：你弃置[1]张手牌，且当你于本回合内弃置第[2]+1张牌后，你从弃牌堆中随机获得〖慧淑〗第三个括号数字张非基本牌。",
			dcyishu: "易数",
			dcyishu_info: "锁定技。当你不因出牌阶段而失去牌后，你同时令{〖慧淑〗的中括号内最小的一个数字+2}且{〖慧淑〗的中括号内最大的一个数字-1}。",
			dcligong: "离宫",
			dcligong_info: "觉醒技。准备阶段，若〖慧淑〗的中括号内有不小于5的数字，则你加1点体力上限，回复1点体力并失去〖易数〗。系统随机检索四张吴势力的女性武将牌，然后你选择一项：⒈摸三张牌。⒉失去〖慧淑〗，然后获得这些武将牌上的任意两个非Charlotte技能。",
			dingshangwan: "丁尚涴",
			dcfengyan: "讽言",
			dcfengyan_info: "出牌阶段每项各限一次。你可以：⒈令一名体力值不大于你的其他角色交给你一张手牌。⒉视为对一名手牌数不大于你的角色使用一张【杀】（无距离和次数限制）。",
			dcfudao: "抚悼",
			dcfudao_info: "游戏开始时，你选择一名其他角色，称为“继子”角色。当你或“继子”每回合首次使用牌指定对方为目标后，你与其各摸两张牌。当有角色杀死你或“继子”后，该角色称为“决裂”角色。当你或“继子”对“决裂”造成伤害时，此伤害+1。当你成为“决裂”角色使用的黑色牌的目标后，其本回合内不能再使用牌。",
			luyi: "卢弈",
			dcyaoyi: "邀弈",
			dcyaoyi_info: "锁定技。①游戏开始时，你令所有存活且未拥有转换技的角色获得〖手谈〗。②你发动〖手谈〗时无需弃置牌，且无次数限制。③所有拥有转换技的角色不能使用牌指定其他拥有转换技且双方所有转换技状态均相同的角色为目标。",
			dcfuxue: "复学",
			dcfuxue_info: "①准备阶段，你可以从弃牌堆中选择获得至多X张不因使用而进入弃牌堆的牌。②结束阶段，若你的手牌区中没有因〖复学①〗得到的牌，则你摸X张牌（X为你的体力值）。",
			dcshoutan: "手谈",
			dcshoutan_info: "转换技。出牌阶段限一次，阴：你可以弃置一张不为黑色的手牌。阳：你可以弃置一张黑色手牌。",
			dc_liuye: "刘晔",
			dcpoyuan: "破垣",
			dcpoyuan_info: "游戏开始时或准备阶段开始时，若你的装备区内：没有【霹雳投石车】，则你可以将一张【霹雳投石车】置入装备区；有【霹雳投石车】，则你可以弃置一名其他角色至多两张牌。",
			dchuace: "画策",
			dchuace_info: "出牌阶段限一次。你可以将一张手牌当做上一轮内未被使用过的普通锦囊牌使用。",
			pilitoushiche: "霹雳投石车",
			pilitoushiche_info: "锁定技。①你于回合内使用基本牌无距离限制，且当你于回合内使用基本牌时，你令此牌的牌面数值+1。②当你于回合外使用或打出基本牌时，你摸一张牌。③当此牌离开你的装备区时，销毁之。",
			zhaozhi: "赵直",
			dctongguan: "统观",
			dctongguan_info: "一名角色的第一个回合开始时，你为其选择一项属性（每个属性至多选两次，且仅对你可见）。",
			dcmengjie: "梦解",
			dcmengjie_info: "一名角色的回合结束时，若其本回合完成了其〖统观〗属性，你执行对应效果：<li>「武勇」造成伤害：对一名其他角色造成1点伤害；<li>「刚硬」回复体力，或手牌数大于体力值：令一名角色回复1点体力；<li>「多谋」于摸牌阶段外摸牌：摸两张牌；<li>「果决」弃置或获得其他角色的牌：弃置一名角色区域内至多两张牌；<li>「仁智」交给其他角色牌：令一名其他角色将手牌补至体力上限（至多摸五张）。",
			dctongguan_wuyong: "武勇",
			dctongguan_wuyong_info: "任务目标：造成伤害。",
			dctongguan_gangying: "刚硬",
			dctongguan_gangying_info: "任务目标：回复体力，或手牌数大于体力值。",
			dctongguan_duomou: "多谋",
			dctongguan_duomou_info: "任务目标：于摸牌阶段外摸牌。",
			dctongguan_guojue: "果决",
			dctongguan_guojue_info: "任务目标：弃置或获得其他角色的牌。",
			dctongguan_renzhi: "仁智",
			dctongguan_renzhi_info: "任务目标：交给其他角色牌。",
			zhujianping: "朱建平",
			olddcxiangmian: "相面",
			olddcxiangmian_info: "其他角色的结束阶段，你可以判定。然后你不能再对其发动此技能，其获得以下效果：当其使用第X张结果的花色的牌后（X为结果的点数），其失去等同于其体力值的体力。",
			dcxiangmian: "相面",
			dcxiangmian_info: "出牌阶段限一次。你可以令一名其他角色判定，然后你不能再对其发动此技能，其获得以下效果：当其使用结果的花色的牌后，或当其使用X张牌后（X为结果的点数），其失去等同于其体力值的体力。",
			dctianji: "天机",
			dctianji_info: "锁定技。当判定牌进入弃牌堆后，你从牌堆随机获得分别与该牌类型、花色和点数相同的牌各一张。",
			yuanji: "袁姬",
			dcmengchi: "蒙斥",
			dcmengchi_info: "锁定技。若你未于当前回合得到过牌：你不能使用牌；当你横置前，取消之；当你受到无属性伤害后，回复1点体力。",
			dcfangdu: "芳妒",
			dcfangdu_info: "锁定技。当你于回合外受到伤害后，若此次伤害为你于本回合受到的：第一次无属性伤害，你回复1点体力；第一次属性伤害，你随机获得伤害来源的一张手牌。",
			dcjiexing: "节行",
			dcjiexing_info: "当你受到伤害后、失去体力后或回复体力后，你可以摸一张牌，且此牌不计入本回合的手牌上限。",
			dongguiren: "董贵人",
			dclianzhi: "连枝",
			dclianzhi_info: "①游戏开始时，你选择一名其他角色（仅你可见）。②每回合限一次。当你进入濒死状态时，若〖连枝①〗角色存活，你回复1点体力并与其各摸一张牌。③当〖连枝①〗角色死亡后，你可以与一名其他角色各获得〖受责〗，且其获得与你拥有的等量枚“绞”标记（至少获得1枚）。",
			dclingfang: "凌芳",
			dclingfang_info: "锁定技。准备阶段，或当其他角色使用黑色牌结算结束后，若你是此牌的目标，或你使用黑色牌结算结束后，若你不是此牌目标，你获得1枚“绞”。",
			dcfengying: "风影",
			dcfengying_info: "①一名角色的回合开始时，你记录弃牌堆中所有黑色基本牌或黑色普通锦囊牌的牌名。②每回合每种牌名各限一次。你可以将一张点数不大于“绞”数的手牌当做任意一张〖风影①〗记录中的牌使用（无距离和次数限制）。",
			dcshouze: "受责",
			dcshouze_info: "锁定技。结束阶段，若你有“绞”，你弃1枚“绞”，随机获得弃牌堆中的一张黑色牌，失去1点体力。",
			chengbing: "程秉",
			dcjingzao: "经造",
			dcjingzao_info: "出牌阶段每名角色限一次，你可以选择一名其他角色并展示牌堆顶三张牌，其选择一项：1.弃置一张牌名与这些牌的其中一张牌名相同的牌，然后你本回合发动〖经造〗展示的牌数+1；2.令你随机获得这些牌中每种牌名的牌各一张，然后你本回合发动〖经造〗展示的牌数-X（X为你获得的牌数）。",
			dcenyu: "恩遇",
			dcenyu_info: "锁定技。当你成为其他角色使用【杀】或普通锦囊牌的目标后，若你本回合成为过此牌名的牌的目标，此牌对你无效。",
			dc_zhouxuān: "周宣",
			dcwumei: "寤寐",
			dcwumei_info: "每轮限一次。回合开始时，你可以令一名角色记录场上所有角色的体力值并进行一个额外的回合，并将你的回合移至该回合后进行。该角色以此法进行的回合的结束阶段，将场上所有角色的体力值改为记录内的对应数值。",
			dczhanmeng: "占梦",
			dczhanmeng_info: "当你使用牌时，你可以选择本回合未选择过的一项：1.上一回合内，若没有同名牌被使用过，你获得一张非伤害牌；2.下一回合内，当同名牌首次被使用后，你获得一张伤害牌；3.令一名其他角色弃置两张牌，若点数之和大于10，你对其造成1点火焰伤害。",
			dc_wangyun: "新杀王允",
			dc_wangyun_prefix: "新杀",
			dclianji: "连计",
			dclianji_info: "出牌阶段限一次。你可以弃置一张手牌并选择一名其他角色，其随机使用牌堆中的一张武器牌，然后其选择一项：1.对另一名其他角色使用一张【杀】，并将武器牌交给其中一个目标；2.令你视为对其使用一张【杀】，并将武器牌交给你。",
			dcmoucheng: "谋逞",
			dcmoucheng_info: "觉醒技。准备阶段，若你发动过〖连计〗且两个选项均被选择过，你失去〖连计〗，然后获得〖矜功〗。",
			xuelingyun: "薛灵芸",
			dcxialei: "霞泪",
			dcxialei_info: "当你的红色牌进入弃牌堆后，或当你使用或打出的红色牌经由处理区进入弃牌堆后，你可以观看牌堆顶的三张牌，获得其中的一张牌，且可以将其余牌置于牌堆底。然后你本回合以此法观看的牌数-1。",
			dcanzhi: "暗织",
			dcanzhi_info: "出牌阶段或当你受到伤害后，你可以判定，若结果为红色，你重置〖霞泪〗的观看牌数；若结果为黑色，〖暗织〗于本回合失效，然后你可以令一名非当前回合角色获得本回合进入弃牌堆的两张牌。",
			yanghong: "杨弘",
			dcjianji: "间计",
			dcjianji_info: "出牌阶段限一次。你可以令至多X名座位连续的角色依次弃置一张牌。然后其中手牌数最多的角色可以视为对一名其他以此法弃置过牌的角色使用一张【杀】（X为你的攻击范围）。",
			dcyuanmo: "远谟",
			dcyuanmo_info: "①准备阶段或当你受到伤害后，你可以选择一项：1.攻击范围+1，然后若你攻击范围内的角色数因此增加，你可以获得任意名本次进入你攻击范围的角色各一张牌；2.攻击范围-1，然后摸两张牌。②结束阶段，若你的攻击范围内没有角色，你可以令你的攻击范围+1。",
			dc_yangbiao: "杨彪",
			dczhaohan: "昭汉",
			dczhaohan_info: "摸牌阶段，你可以多摸两张牌，然后你于得到牌后选择一项：1.将两张手牌交给一名没有手牌的角色；2.弃置两张手牌。",
			oldjinjie: "尽节",
			oldjinjie_info: "当一名角色进入濒死状态时，你可以令其摸一张牌。然后若你本轮未进行过回合，你可以弃置X张手牌令其回复1点体力（X为本轮你发动过〖尽节〗的次数）。",
			dcjinjie: "尽节",
			dcjinjie_info: "每轮限一次。当一名角色进入濒死状态时，你可以声明一个整数X（X∈[0,3]），令其摸X张牌，然后你可以弃置X张牌令其回复1点体力（若X为0则跳过摸牌和弃牌的步骤）。",
			oldjue: "举讹",
			oldjue_info: "准备阶段，你可以视为对一名体力值或手牌数大于你的角色使用一张【杀】。",
			dcjue: "举讹",
			dcjue_info: "每轮限一次。一名角色的结束阶段，你可以选择一名其他角色（若当前回合角色不为你则改为当前回合角色，以此法使用的牌不能指定你与其以外的角色为目标）视为随机使用【杀】/【过河拆桥】/【五谷丰登】，直到你以此法使用的牌数不小于Y（Y为本回合因弃置进入弃牌堆的牌数，且至多为其体力上限）。",
			dc_tengfanglan: "滕芳兰",
			dcluochong: "落宠",
			dcluochong_info: "一轮游戏开始时，你可以弃置任意名角色区域里的共计至多[4]张牌，然后若你以此法弃置了一名角色的至少三张牌，则你方括号内的数字-1。",
			dcaichen: "哀尘",
			dcaichen_info: "锁定技。若牌堆剩余数：大于80，当你因〖落宠〗弃置你区域内的牌后，你摸两张牌；大于40，你跳过弃牌阶段；小于40，你不能响应♠牌。",
			xielingyu: "谢灵毓",
			dcyuandi: "元嫡",
			dcyuandi_info: "当其他角色于其出牌阶段使用第一张牌时，若此牌仅指定其为目标，你可以选择一项：1.弃置其一张手牌；2.你与其各摸一张牌。",
			dcxinyou: "心幽",
			dcxinyou_info: "出牌阶段限一次。你可以将体力回复至上限并将手牌补至体力上限。若你以此法：获得了至少三张牌，你于结束阶段失去1点体力；回复了体力，你于结束阶段弃置一张牌。",
			zerong: "笮融",
			dccansi: "残肆",
			dccansi_info: "锁定技。准备阶段，你回复1点体力，然后选择一名其他角色，其回复1点体力，你视为对其依次使用以下能使用的牌：【杀】（无距离限制）、【决斗】、【火攻】。当其以此法受到1点伤害后，你摸两张牌。",
			dcfozong: "佛宗",
			dcfozong_info: "锁定技。出牌阶段开始时，若你的手牌数大于7，你将X张手牌置于武将牌上（X为你的手牌数-7）。然后若你的武将牌上有至少七张牌，其他角色依次选择一项：1.获得其中的一张牌并令你回复1点体力；2.令你失去1点体力。",
			dc_ruiji: "芮姬",
			dcwangyuan: "妄缘",
			dcwangyuan_info: "当你于回合外失去牌后，或于回合内发动〖俐影〗后，你可以随机将牌堆里的一张与你所有“妄”牌名均不同的基本牌或锦囊牌置于武将牌上，称为“妄”（不超过游戏人数）。",
			dclingyin: "铃音",
			// dclingyin_info:'出牌阶段开始时，你可以获得至多X张“妄”（X为游戏轮数）然后若你的“妄”颜色均相同，你于本回合对其他角色造成的伤害+1，且可以将一张武器牌或防具牌当【决斗】使用。',
			dclingyin_info: "出牌阶段开始时，你可以选择至多X张“妄”（X为游戏轮数），若这些牌以外的“妄”中不存在颜色不同的牌，则你于本回合对其他角色造成的伤害+1，且可以将一张武器牌或防具牌当【决斗】使用。你获得这些牌。",
			dcliying: "俐影",
			dcliying_info: "每回合限一次。当你于摸牌阶段外得到牌后，你可以将这些牌中的任意张交给一名其他角色，然后摸一张牌。",
			huanfan: "桓范",
			dcjianzheng: "谏诤",
			dcjianzheng_info: "出牌阶段限一次。你可以观看一名其他角色的手牌，然后若其中有你可以使用的手牌，你获得并使用其中一张。若你以此法使用牌指定了其为目标，你令你与其横置，然后其观看你的手牌。",
			dcfumou: "腹谋",
			dcfumou_info: "当你受到伤害后，你可以令至多X名角色从你开始逆时针依次选择一项：1.移动场上的一张牌；2.弃置所有手牌并摸两张牌；3.弃置装备区里的所有牌并回复1点体力（X为你已损失的体力值）。",
			chentai: "陈泰",
			dcctjiuxian: "救陷",
			dcctjiuxian_info: "出牌阶段限一次。你可以重铸一半数量的手牌（向上取整），然后视为使用一张【决斗】。当此牌对目标角色造成伤害后，你可以令其攻击范围内的一名其他角色回复1点体力。",
			dcchenyong: "沉勇",
			dcchenyong_info: "结束阶段，你可以摸X张牌（X为本回合你使用过的牌的类型数）。",
			sunyu: "孙瑜",
			dcquanshou: "劝守",
			dcquanshou_info: "一名角色的回合开始时，若其手牌数不大于其体力上限，你可以令其选择一项：1.将手牌摸至体力上限，然后本回合使用【杀】的次数上限-1（至多摸五张）；2.其本回合使用牌被抵消后，你摸一张牌。",
			dcshexue: "设学",
			dcshexue_info: "①出牌阶段开始时，你可以将一张牌当做上回合的角色于其出牌阶段内使用的一张基本牌或普通锦囊牌使用。②出牌阶段结束时，你可以令下回合的角色于其出牌阶段开始时可以将一张牌当做你于此阶段内使用的一张基本牌或普通锦囊牌使用（一名角色因〖设学〗使用的牌均无距离和次数限制）。",
			xizheng: "郤正",
			dcdanyi: "耽意",
			dcdanyi_info: "当你使用牌指定第一个目标后，你可以摸X张牌（X为此牌目标数与你使用的上一张牌相同的目标数）。",
			dcwencan: "文灿",
			dcwencan_info: "出牌阶段限一次。你可以选择至多两名体力值不同的其他角色，这些角色依次选择一项：1.弃置两张花色不同的牌；2.本回合你对其使用牌无距离和次数限制。",
			zhangjinyun: "张瑾云",
			dchuizhi: "蕙质",
			dchuizhi_info: "准备阶段，你可以选择是否弃置任意张手牌，然后将手牌摸至与全场手牌数最多的角色相同（至少摸一张，至多摸五张）。",
			dcjijiao: "继椒",
			dcjijiao_info: "限定技。出牌阶段，你可以令一名角色获得所有弃牌堆中你于本局游戏内使用或弃置过的普通锦囊牌，且这些牌不能被【无懈可击】响应。一名角色的回合结束后，若本回合牌堆洗过牌或有角色死亡，你重置〖继椒〗。",
			duanqiaoxiao: "段巧笑",
			dccaizhuang: "彩妆",
			dccaizhuang_info: "出牌阶段限一次，你可以弃置任意张牌。然后若你手牌中的花色数小于你以此法弃置的牌的花色数，你摸一张牌并重复此流程。",
			dchuayi: "华衣",
			dchuayi_info: "结束阶段，你可以判定，然后你获得如下效果直到你下回合开始时：红色，一名角色的回合结束时，你摸一张牌；黑色，当你受到伤害后，你摸两张牌。",
			wu_zhugeliang: "武诸葛亮",
			wu_zhugeliang_prefix: "武",
			dcjincui: "尽瘁",
			dcjincui_info: "锁定技。①游戏开始时，你将手牌摸至七张。②准备阶段，你将体力值回复或失去至等同于牌堆中点数为7的牌数（你的体力值最低因此调整至1）。然后你观看牌堆顶X张牌，将这些牌以任意顺序置于牌堆顶或牌堆底（X为你的体力值）。",
			dcqingshi: "情势",
			dcqingshi_info: "当你于出牌阶段使用牌时，若你手牌中有同名牌且你本回合未因此牌名的牌发动过该技能，你可以选择一项：1.令此牌对其中一个目标角色造成的伤害+1；2.令任意名其他角色各摸一张牌；3.摸三张牌，然后〖情势〗于本回合无效。",
			dczhizhe: "智哲",
			dczhizhe_clear: "invisible",
			dczhizhe_info: "限定技。出牌阶段，你可以选择一张手牌并复制之。当你使用或打出此复制牌结算结束后，你获得之，然后你本回合不能再使用或打出此牌。",
			ruanji: "阮籍",
			dczhaowen: "昭文",
			dczhaowen_tag: "昭文",
			dczhaowen_info: "出牌阶段开始时，你可以展示所有手牌。然后你于本回合获得如下效果：1.你可以将其中一张黑色牌当做任意一张普通锦囊牌使用（每回合每种牌名限一次）；2.当你使用其中的一张红色牌时，你摸一张牌。",
			dcjiudun: "酒遁",
			dcjiudun_info: "①以你为目标的【酒】（使用方法①）的作用效果改为“目标对应的角色使用的下一张【杀】的伤害基数+1”。②当你成为其他角色使用黑色牌的目标后，若你：未处于【酒】状态，你可以摸一张牌并视为使用一张【酒】；处于【酒】状态，你可以弃置一张手牌令此牌对你无效。",
			ganfurenmifuren: "甘夫人糜夫人",
			dcchanjuan: "婵娟",
			dcchanjuan_info: "每种牌名限两次。当你使用手牌中仅指定单一目标的基本牌或普通锦囊牌结算结束后，你可以视为使用一张名称和属性均相同的牌。若这两张牌指定的目标完全相同，你摸一张牌。",
			dcxunbie: "殉别",
			dcxunbie_info: "限定技。当你进入濒死状态时，你可以将此武将牌替换为“甘夫人”或“糜夫人”（不能选择已在场上的武将）。然后回复至1点体力并防止所有伤害直到本回合结束。",
			dc_mifuren: "糜夫人",
			dcguixiu: "闺秀",
			dcguixiu_info: "锁定技。①回合开始时，若你于本局游戏未发动过〖闺秀①〗，你摸两张牌。②当你发动〖存嗣〗后，你回复1点体力。",
			dccunsi: "存嗣",
			dccunsi_info: "限定技。出牌阶段，你可以令一名角色获得〖勇决〗。若该角色不为你，你摸两张牌。",
			dcyongjue: "勇决",
			dcyongjue_info: "当你于出牌阶段使用第一张【杀】时，你可以选择一项：1.令此【杀】不计入次数；2.获得此牌。",
			dc_ganfuren: "甘夫人",
			dcshushen: "淑慎",
			dcshushen_info: "当你回复1点体力后，你可以选择一名其他角色并选择一项：1.令其回复1点体力；2.你与其各摸一张牌。",
			dcshenzhi: "神智",
			dcshenzhi_info: "准备阶段，若你的手牌数大于体力值，你可以弃置一张手牌，然后回复1点体力。",
			dc_duyu: "杜预",
			dcjianguo: "谏国",
			dcjianguo_info: "出牌阶段各限一次。你可以选择一名角色并选择一项：1.令其摸一张牌，然后其弃置一半的手牌；2.令其弃置一张牌，然后其摸等同于手牌数一半的牌（均向上取整）。",
			dcdyqingshi: "倾势",
			dcdyqingshi_info: "当你于回合内使用【杀】或普通锦囊牌指定第一个目标后，若目标角色包括其他角色且此牌为你本回合使用的第X张牌，你可以对其中一名不为你的目标角色造成1点伤害（X为你的手牌数）。",
			sunlingluan: "孙翎鸾",
			dclingyue: "聆乐",
			dclingyue_info: "锁定技。一名角色于一轮内首次造成伤害后，你摸一张牌。若此时是该角色回合外，则改为摸X张牌（X为本回合全场造成的伤害值）。",
			dcpandi: "盻睇",
			dcpandi_info: "出牌阶段，你可以选择一名本回合内未造成过伤害的角色。你本阶段内使用的下一张牌改为以该角色为基准判断使用目标合法性，且使用者改为该角色。",
			zhoubuyi: "周不疑",
			dcshiji: "十计",
			dcshiji_info: "一名角色的结束阶段，若其本回合未造成过伤害，你可以声明一种本轮未以此法声明过的普通锦囊牌，然后其可以将一张牌当你声明的牌使用（其不是此牌的合法目标）。",
			dcsilun: "四论",
			dcsilun_info: "准备阶段或当你受到伤害后，你可以摸四张牌，然后将四张牌依次置于场上或牌堆两端（对所有角色可见）。装备区牌数因此变化的角色复原其武将牌。",
			dc_wangjun: "王濬",
			dcmianyao: "免徭",
			dcmianyao_info: "摸牌阶段结束时，你可以展示手牌中点数最小的一张牌并将此牌随机插入牌堆中。然后你于此回合结束时摸等同于此牌点数的牌。",
			dcchangqu: "长驱",
			dcchangqu_info: "出牌阶段限一次。你可以从你的上家或下家开始选择任意名座位连续的其他角色，且起点角色获得“战舰”标记。这些角色按照你选择的顺序依次执行：{若其有本次获得的“战舰”，其选择一项：1.交给你X张手牌，然后将“战舰”移动给你选择的下一名目标角色；2.令其下次受到的属性伤害值+X，然后横置（X为本次〖长驱〗中选项一被选择过的次数且至少为1）。}。",
			dctongye: "统业",
			dctongye_info: "锁定技。游戏开始时或一名角色死亡后，若X≤4，则你重置因〖统业〗获得的效果，然后根据X值获得对应效果：≤4，你的手牌上限+3；≤3，你的攻击范围+3，摸牌阶段额定摸牌数+4-X；≤2，你使用【杀】的次数上限+3；≤1，你回复3点体力。（X为场上势力数）。",
			tianshangyi: "田尚衣",
			dcposuo: "婆娑",
			dcposuo_info: "出牌阶段，若你本阶段未对其他角色造成过伤害，则你可以将一张你本阶段未以此法使用过的花色的手牌当作任意一张存在于游戏的同花色伤害牌使用。",
			dcxiaoren: "绡刃",
			dcxiaoren_info: "每回合限一次，当你造成伤害后，你可以进行判定，若结果为：红色，你可以令一名角色回复1点体力，然后若其满体力，其摸一张牌；黑色，你对受伤角色的上家或下家造成1点伤害，然后你可以重复此流程直到未能执行此项或有角色进入濒死状态。",
			dc_daxiaoqiao: "新杀大乔小乔",
			dc_daxiaoqiao_prefix: "新杀",
			dcxingwu: "星舞",
			dcxingwu_info: "弃牌阶段开始时，你可以将一张手牌置于武将牌上，称为“星舞”。若你的“星舞”牌达到三张，则你可移去三张“星舞”，弃置一名其他角色装备区里的所有牌，然后对其造成X点伤害（X为移去的“星舞”牌的花色数，若为女性角色则改为1点伤害）。",
			dcluoyan: "落雁",
			dcluoyan_info: "锁定技，若你有“星舞”牌，你视为拥有技能〖天香〗和〖流离〗。",
			dc_xiahouba: "新杀夏侯霸",
			dc_xiahouba_prefix: "新杀",
			old_huangfusong: "新杀皇甫嵩",
			old_huangfusong_prefix: "新杀",
			dc_sp_machao: "新杀SP马超",
			dc_sp_machao_prefix: "新杀SP",
			dc_shixie: "新杀士燮",
			dc_shixie_prefix: "新杀",
			dc_guansuo: "新杀关索",
			dc_guansuo_prefix: "新杀",
			dc_zhaoxiang: "新杀赵襄",
			dc_zhaoxiang_prefix: "新杀",
			xurong: "徐荣",
			zhangqiying: "张琪瑛",
			dc_xujing: "许靖",
			dcshangyu: "赏誉",
			dcshangyu_tag: "赏誉",
			dcshangyu_info: "锁定技。游戏开始时，你获得一张【杀】并记录之，并可以将此牌交给一名角色。然后你获得如下效果：1.当一名角色使用此牌造成伤害后，你与其各摸一张牌；2.当此牌进入弃牌堆后，你将此牌交给一名本回合未以此法得到过此牌的角色。",
			dccaixia: "才瑕",
			dccaixia_info: "当你造成或受到伤害后，你可以摸至多X张牌，然后你不能发动〖才暇〗直到你使用等量张牌（X为本局游戏人数且至多为5）。",
			wu_luxun: "武陆逊",
			wu_luxun_prefix: "武",
			dcxiongmu: "雄幕",
			dcxiongmu_tag: "雄幕",
			dcxiongmu_info: "①一轮游戏开始时，你可以将手牌摸至体力上限（若手牌数不小于体力上限则跳过），然后将任意张牌随机置入牌堆，从牌堆或弃牌堆中获得等量的点数为8的牌，且这些牌不计入手牌上限。②当你于一回合首次受到伤害时，若你的手牌数不大于你的体力值，此伤害-1。",
			dczhangcai: "彰才",
			dczhangcai_info: "当你使用或打出点数为8的牌时，你可以摸X张牌（X为你手牌区里点数为8的牌数且至少为1）。",
			dcruxian: "儒贤",
			dcruxian_info: "限定技。出牌阶段，你可以令你〖彰才〗的点数限制取消，且摸牌数改为等同于你手牌区内与此牌点数相同的牌数且至少为1，直到你的下回合开始。",
			malingli: "马伶俐",
			dclima: "骊马",
			dclima_info: "锁定技。你计算至其他角色的距离-X（X为场上的坐骑牌数且至少为1）。",
			dcxiaoyin: "硝引",
			dcxiaoyin_info: "①准备阶段，你可以亮出牌堆顶的Y张牌（Y为你距离1以内的角色数），获得其中的红色牌，将其中任意张黑色牌置于等量名座次连续的其他角色的武将牌上，称为“硝引”。②当一名有“硝引”牌的角色受到伤害时，若此伤害为：火焰伤害，来源可以弃置其“硝引”牌包含的类型的牌，将一张对应的“硝引”置入弃牌堆，令此伤害+1；非火焰伤害，来源可以获得一张“硝引”牌，将此伤害改为火焰伤害。",
			dchuahuo: "花火",
			dchuahuo_info: "出牌阶段限一次。你可以将一张红色手牌当不计入次数的火【杀】使用。然后当你使用此牌指定第一个目标后，若目标角色有“硝引”牌，你可以将此【杀】的目标改为所有有“硝引”牌的角色。",
			caoyi: "曹轶",
			dcmiyi: "蜜饴",
			dcmiyi_info: "准备阶段，你可以选择一项：1.回复1点体力；2.受到你造成的1点伤害。然后你令任意名角色执行该项。若如此做，这些角色于结束阶段执行另一项。",
			dcyinjun: "寅君",
			dcyinjun_info: "当你使用对应实体牌均为你的手牌的【杀】或锦囊牌结算结束后，若此牌目标为1，你可以视为对该目标使用一张无伤害来源的【杀】。然后若你本回合发动〖寅君〗的次数大于你的体力值，〖寅君〗失效直到回合结束。",
			zhugeruoxue: "诸葛若雪",
			dcqiongying: "琼英",
			dcqiongying_info: "出牌阶段限一次。你可以移动场上的一张牌，然后你弃置一张与此牌花色相同的手牌（若没有该花色的手牌则改为展示所有手牌）。",
			dcnuanhui: "暖惠",
			dcnuanhui_info: "结束阶段，你可以选择一名装备区有牌的角色，其可以视为依次使用X张基本牌（X为其装备区牌数且至少为1）。若其此次以此法使用了同名牌，其弃置装备区里的所有牌。",
			zhangjian: "张臶",
			dc_zj_a: "技一",
			dc_zj_a_info: "锁定技。当你受到牌造成的伤害时，若此牌有点数，则你将此伤害值改为此牌点数，否则你防止此伤害。",
			dc_zj_b: "技二",
			dc_zj_b_info: "结束阶段，你可以弃置所有牌并令一名其他角色获得〖技一〗直到你的下个回合开始。",
			dc_sb_lusu: "新杀谋鲁肃",
			dc_sb_lusu_prefix: "新杀谋",
			dcsbmingshi: "明势",
			dcsbmingshi_info: "摸牌阶段，你可以多摸两张牌，然后展示三张牌并令一名其他角色选择获得其中的一张牌。",
			dcsbmengmou: "盟谋",
			dcsbmengmou_info: "转换技。①游戏开始时，你可以转换此技能状态；②每回合每项各限一次，当你得到其他角色的牌后，或其他角色得到你的牌后：阳，你可以令该角色使用至多X张【杀】，且其每以此法造成1点伤害，其回复1点体力；阴，你可令该角色打出至多X张【杀】，然后其失去Y点体力。（X为你的体力上限，Y为X-其打出【杀】数）",
			dc_sb_zhouyu: "新杀谋周瑜",
			dc_sb_zhouyu_prefix: "新杀谋",
			dcsbronghuo: "融火",
			dcsbronghuo_info: "锁定技，当你使用火【杀】或【火攻】时，此牌伤害基值改为场上势力数。",
			dcsbyingmou: "英谋",
			dcsbyingmou_info: "转换技。①游戏开始时，你可以转换此技能状态；②每回合限一次，当你对其他角色使用牌后，你可以选择其中一名目标角色：阳，你将手牌数摸至与其相同（至多摸五张），然后视为对其使用一张【火攻】；阴，令一名手牌数为全场最大的角色对其使用手牌中所有的【杀】和伤害类锦囊牌（若其没有可使用的牌则将手牌数弃至与你相同）。",
			caoxian: "曹宪",
			dclingxi: "灵犀",
			dclingxi_info: "出牌阶段开始和结束时，你可以将至多X张牌称为“翼”置于你的武将牌上（X为你的体力上限）。当你失去武将牌上的“翼”时，你将手牌数调整至Y张（Y为你武将牌上的“翼”所含有的花色数的两倍）。",
			dczhifou: "知否",
			dczhifou_info: "当你使用牌结算完毕后，你可以移去至少X张武将牌上的“翼”（X为本回合此前发动此技能的次数+1），然后选择一名角色并选择一项令其执行（每个选项每回合限选择一次）：①将一张牌称为“翼”置于你的武将牌上；②弃置两张牌；③失去1点体力。",
			dc_qinghegongzhu: "新杀清河公主",
			dc_qinghegongzhu_prefix: "新杀",
			dczhangji: "长姬",
			dczhangji_info: "锁定技，一名角色使用多目标牌时，若你是此牌的目标之一，则你先结算此牌的效果，然后你摸X张牌（X为此牌的其他目标数）。",
			dczengou: "谮构",
			dczengou_info: "出牌阶段限一次，你可以将至多体力上限张牌称为“谮构”交给一名其他角色并摸等量张牌。若如此做，其下次体力值增加或使用牌结算完毕后，其展示所有手牌，然后失去Y点体力（Y为其手牌中的“谮构”牌数）。",
			bailingyun: "柏灵筠",
			dclinghui: "灵慧",
			dclinghui_info: "一名角色的结束阶段，若当前回合角色为你或本回合有角色进入过濒死状态，则你可以观看牌堆顶的三张牌，然后你可以使用其中一张牌并随机获得其中一张剩余牌。",
			dcxiace: "黠策",
			dcxiace_info: "每回合每项各限一次。当你造成/受到伤害后，你可以弃置一张牌并回复1点体力/令一名其他角色的非锁定技于本回合失效。",
			dcyuxin: "御心",
			dcyuxin_info: "限定技，一名角色进入濒死状态时，你可以令其将体力回复至X点（X为1，若该角色不为你则X为你的体力值）。",
			zhugemengxue: "诸葛梦雪",
			dcjichun: "寄春",
			dcjichun_info: "出牌阶段各限一次，你可以展示一张牌并选择一项：①将此牌交给一名手牌数小于你的角色，然后摸X张牌。②弃置此牌并弃置一名手牌数大于你的角色区域里至多X张牌。（X为此牌牌名字数）",
			dchanying: "寒英",
			dchanying_info: "准备阶段，你可以亮出牌堆里的一张非赠物装备牌，然后令一名手牌数等于你的角色使用此牌。",
			huzun: "胡遵",
			dczhantao: "斩涛",
			dczhantao_info: "当你或你攻击范围内的角色受到伤害后，若你不为伤害来源，你可以判定，若造成此伤害的渠道为牌且此牌有点数且判定结果点数大于此牌的点数，你视为对来源使用一张【杀】。",
			dcanjing: "安境",
			dcanjing_info: "每回合限一次。当你造成伤害后，你可以令至多X名已受伤的角色各摸一张牌，然后其中体力值最少的角色回复1点体力（X为你本局游戏发动〖安境〗的次数）。",
			cuimao: "崔琰毛玠",
			zhengbi: "征辟",
			zhengbi_info: "出牌阶段开始时，你可以选择一名其他角色并选择一项：①本阶段结束时，若其本阶段得到过牌，则你获得其手牌区和装备区各一张牌；②将一张基本牌交给该角色，然后其交给你一张非基本牌或两张基本牌。",
			fengying: "奉迎",
			fengying_info: "限定技，出牌阶段，你可以弃置所有手牌。若如此做，你于本回合结束后进行一个额外回合，此额外回合开始时，若你的体力值为全场最低，则你将手牌数摸至体力上限。",
			lvfan: "吕范",
			diaodu: "调度",
			diaodu_info: "出牌阶段开始时，或当你发动〖典财〗后，你可以获得一名距离不大于1的一名角色A装备区里的一张牌，然后你将此牌交给另一名角色B，然后B选择是否使用此牌，若B使用/不使用，则你/B摸一张牌。",
			diancai: "典财",
			diancai_info: "其他角色的出牌阶段结束时，若你于此阶段失去了至少X张牌，则你可以将手牌摸至体力上限（X为你的体力值且X至多为5）。",
			chendong: "陈武董袭",
			dcduanxie: "断绁",
			dcduanxie_info: "出牌阶段限一次，你可以令一名其他角色横置，然后你横置。",
			dc_sb_simayi: "新杀谋司马懿",
			dc_sb_simayi_prefix: "新杀谋",
			dcsbquanmou: "权谋",
			dcsbquanmou_info: "转换技。①游戏开始时，你可以转换此技能状态；②出牌阶段每名角色限一次，你可以令一名攻击范围内的其他角色交给你一张牌。阳：当你于本阶段内下次对其造成伤害时，取消之；阴：当你于本阶段内下次对其造成伤害后，你可以选择除其外的至多三名其他角色，对这些角色依次造成1点伤害。",
			dcsbpingliao: "平辽",
			dcsbpingliao_info: "锁定技。当你声明使用【杀】时，你令此【杀】的目标对其他角色不可见，且你令攻击范围内的其他角色依次选择是否打出一张红色基本牌。所有角色选择完成后，此牌的目标角色中没有以此法打出牌的角色本回合内无法使用或打出手牌；若有不为此牌目标的角色以此法打出了牌，则你摸两张牌，且你本回合使用【杀】的次数上限+1。",
			caofang: "曹芳",
			dczhimin: "置民",
			dczhimin_tag: "民",
			dczhimin_info: "锁定技。①一轮游戏开始时，你选择至多X名其他角色（X为你的体力值），获得这些角色各自手牌中的随机一张点数最小的牌。②当你于你的回合外得到牌后，你将这些牌标记为“民”。③当你失去“民”后，你将手牌补至体力上限。",
			dcjujian: "拒谏",
			dcjujian_info: "主公技。出牌阶段限一次，你可以令一名其他魏势力角色摸一张牌，然后你令其于本轮内使用的普通锦囊牌对你无效。",
			wu_guanyu: "武关羽",
			wu_guanyu_prefix: "武",
			dcjuewu: "绝武",
			dcjuewu_two: "2点",
			dcjuewu_info: "①每回合每种牌名限一次。你可以将一张点数为2的牌当任意伤害类牌使用（包括【水淹七军】）。②当你得到其他角色区域内的牌后，你令这些牌的点数均视为2直到你失去这些牌。",
			dcwuyou: "武佑",
			dcwuyou_info: "①出牌阶段限一次。你可以选择一张手牌，从系统随机生成的五个非装备牌牌名中选择一个，令此牌的牌名与属性视为与你选择的相同。②其他角色的出牌阶段限一次。其可以交给你一张手牌，你从系统随机生成的五个非装备牌牌名中选择一个，然后可以交给其一张手牌，令此牌的牌名与属性视为与你选择的相同（一名角色使用〖武佑〗转化的牌无距离且无任何次数限制）。",
			dcyixian: "义贤",
			dcyixian_info: "限定技。出牌阶段，你可以选择一项：⒈获得场上的所有装备牌；⒉获得弃牌堆中的所有装备牌。然后你依次选择是否令被你以此法获得牌的角色摸X张牌并回复1点体力（X为其以此法失去的牌数）。",
			shuiyanqijuny: "水淹七军",
			shuiyanqijuny_info: "出牌阶段，对至多两名角色使用。目标角色受到1点雷属性伤害，然后若其：是此牌的使用者选择的第一个目标，其弃置一张牌；不是第一个目标，其摸一张牌。",
			sp_zhenji: "SP甄宓",
			sp_zhenji_prefix: "SP",
			dcjijie: "己诫",
			dcjijie_info: "锁定技。每回合每项各限一次，其他角色于其回合外得到牌后/回复体力后，你摸等量的牌/回复等量的体力。",
			dchuiji: "惠济",
			dchuiji_info: "出牌阶段限一次。你可以令一名角色摸两张牌或从牌堆中随机使用一张不为赠物的装备牌，然后若其手牌数不小于存活角色数，其视为使用一张【五谷丰登】。系统不于此牌使用准备工作结束时执行亮出牌堆顶的牌的动作，改为你令其将所有手牌置于处理区，然后令所有目标角色依次获得其中一张牌。当这些牌因执行【五谷丰登】的执行动作而置于弃牌堆后，你令其获得这些牌。",
			guanyue: "关樾",
			dcshouzhi: "守执",
			dcshouzhi_info: "锁定技。一名角色的回合结束时，若你的手牌数：大于本回合开始时的手牌数，你弃置一张手牌；小于本回合开始时的手牌数，你摸两张牌。",
			dcshouzhi_modified: "守执·改",
			dcshouzhi_modified_info: "一名角色的回合结束时，若你的手牌数：大于本回合开始时的手牌数，你可以弃置一张手牌；小于本回合开始时的手牌数，你可以摸两张牌。",
			dcfenhui: "奋恚",
			dcfenhui_info: "限定技。出牌阶段，你可以令一名角色获得X枚“恨”标记，你摸等量的牌（X为本局游戏你使用牌指定其为目标的次数，至多为5）。你获得如下效果：⒈当其受到伤害时，你移去其1枚“恨”，令此伤害+1；⒉当其死亡时，若其有“恨”，你减1点体力上限，修改〖守执〗并获得〖兴门〗。",
			dcxingmen: "兴门",
			dcxingmen_info: "①当你因〖守执〗弃置而失去牌后，你可以回复1点体力。②当你因摸牌而得到牌后，若牌数不小于2且其中有红色牌，则你使用其中的红色牌时不能被响应。",
			dc_sb_jiaxu: "新杀谋贾诩",
			dc_sb_jiaxu_prefix: "新杀谋",
			dcsbsushen: "肃身",
			dcsbsushen_info: "限定技，出牌阶段，你可以记录你当前〖覆谋〗的状态、你的手牌数和你的体力值，然后获得技能〖入世〗。",
			dcsbrushi: "入世",
			dcsbrushi_info: "限定技，出牌阶段，你可以将你当前〖覆谋〗的状态、你的手牌数和你的体力值调整为你发动〖肃身〗时的记录，然后重置〖覆谋〗的发动次数。",
			dcsbfumou: "覆谋",
			dcsbfumou_info: "转换技。①游戏开始时，你可以转换此技能状态；②出牌阶段限一次，你可以观看一名其他角色A的手牌并展示其至多一半手牌：阳，并将这些牌交给另一名其他角色B，然后你与A各摸X张牌（X为A以此法失去的手牌数）；阴，令A依次使用这些牌中所有其可以使用的牌（无距离限制且不可被响应）。",
			dc_sb_zhugejin: "新杀谋诸葛瑾",
			dc_sb_zhugejin_prefix: "新杀谋",
			dcsbtaozhou: "讨州",
			dcsbtaozhou_info: "出牌阶段，你可以选择一名有手牌的其他角色并从1/2/3中选择一个数字X，其可以选择是否交给你至多三张手牌。若其交给你的牌数Y：不小于X，则你与其各摸一张牌；小于X，则其下Z次受到的伤害+1（Z为X与Y之差）。若Z不小于2，则其获得〖自矜〗。然后此技能失效直到下X轮游戏开始时。",
			dcsbhoude: "厚德",
			dcsbhoude_info: "当你于其他角色的出牌阶段内首次成为红色【杀】/黑色普通锦囊牌的目标后，你可以弃置你/其的一张牌，令此牌对你无效。",
			dcsbzijin: "自矜",
			dcsbzijin_info: "锁定技，当你使用牌结算结束后，若此牌未造成过伤害，你须弃置一张牌或失去1点体力。",
			dc_wangling: "新杀谋王凌",
			dc_wangling_prefix: "新杀谋",
			dc_simashi: "新杀谋司马师",
			dc_simashi_prefix: "新杀谋",
			dc_caoshuang: "新杀谋曹爽",
			dc_caoshuang_prefix: "新杀谋",
			dc_jiangji: "新杀谋蒋济",
			dc_jiangji_prefix: "新杀谋",
			dc_sb_caoang: "新杀谋曹昂",
			dc_sb_caoang_prefix: "新杀谋",
			dcsbfengmin: "丰愍",
			dcsbfengmin_info: "锁定技，一名角色于其回合内失去装备区的牌后，你摸等同于其装备区空缺装备栏数的牌，然后若你发动〖丰愍〗的次数大于你的已损失体力值，〖丰愍〗于本回合失效。",
			dcsbzhiwang: "质亡",
			dcsbzhiwang_info: "每回合限一次，当你因受到牌造成的伤害进入濒死状态时，你可以将此伤害改为无来源并选择一名其他角色，其于本回合结束时可以使用本回合令你进入濒死状态的牌。",
			dc_sb_dianwei: "新杀谋典韦",
			dc_sb_dianwei_prefix: "新杀谋",
			dcsbkuangzhan: "狂战",
			dcsbkuangzhan_info: "出牌阶段限一次，你可以将手牌摸至体力上限并进行X次拼点。若你赢，你视为对所有本回合拼点未赢的其他角色使用一张【杀】；若你未赢，视为其对你使用一张【杀】。（X为你以此法获得的牌数）",
			dcsbkangyong: "亢勇",
			dcsbkangyong_info: "锁定技，回合开始时，你回满体力；回合结束时，你失去等量体力（至少保留1点）。",
			dc_sb_guanping: "新杀谋关平",
			dc_sb_guanping_prefix: "新杀谋",
			dcsbwuwei: "武威",
			dcsbwuwei_info: "出牌阶段限一次，你可以将一种颜色的所有手牌当作无距离和次数限制的【杀】使用，然后你选择X次执行以下项（X为转化为此【杀】的牌的类别数）：①摸一张牌；②令目标角色本回合非锁定技失效；③令本回合〖武威〗可发动次数+1。然后若你选择了所有项，则此【杀】造成的伤害+1。",
			dc_sb_zhangxiu: "新杀谋张绣",
			dc_sb_zhangxiu_prefix: "新杀谋",
			dcsbfuxi: "附袭",
			dcsbfuxi_info: "其他角色的出牌阶段开始时，若其手牌数为全场最多，则你可以选择一项：①交给其一张牌，然后摸两张牌；②弃置其一张牌，然后视为对其使用一张【杀】。",
			dcsbhaoyi: "豪义",
			dcsbhaoyi_info: "结束阶段，你可以获得本回合进入弃牌堆的所有未造成过伤害的伤害牌，然后你可以将这些牌任意分配给其他角色。",
			zhupeilan: "朱佩兰",
			dccilv: "辞虑",
			dccilv_info: "当你成为普通锦囊牌的目标后，你可以摸剩余选项数的牌，然后若你的手牌数大于你的体力上限，则你选择执行并移去一项：①令此牌对你无效；②防止此牌对你造成的伤害；③于此牌结算完毕后获得此牌对应的所有实体牌。",
			dctongdao: "痛悼",
			dctongdao_info: "限定技，当你进入濒死状态时，你可以选择一名角色，令其将其拥有的技能重置至游戏开始时的状态，然后若其不为你，则你将体力值回复至与其相同。",
			bianyue: "卞玥",
			dcbizu: "庇族",
			dcbizu_info: "出牌阶段，你可以令所有手牌数与你相同的角色摸一张牌。然后若这些角色与本回合此前某次发动〖庇族〗的目标角色均相同，本回合〖庇族〗失效。",
			dcwuxie: "无胁",
			dcwuxie_info: "出牌阶段结束时，你可以选择一名其他角色，与其将手牌中所有伤害牌置入牌堆底，然后你可令放置牌较多的一方回复1点体力。",
			yj_sb_guojia: "新杀谋郭嘉",
			yj_sb_guojia_prefix: "新杀谋",
			xianmou: "先谋",
			xianmou_info: "转换技。①游戏开始时，你可以转换此技能状态；②你失去过牌的回合结束时，你可以：阳，观看牌堆顶五张牌并获得至多X张牌，若未获得X张牌则获得〖遗计〗直到再发动此项；阴，观看一名角色手牌并弃置其中至多X张牌，若弃置X张牌则你进行一次【闪电】判定。（X为你本回合失去牌数）",
			lunshi: "论势",
			lunshi_info: "一名角色对其以外的角色使用普通锦囊牌的结算中，若你手牌中两种颜色的牌数量相同，你可将一张手牌当作不可被响应的【无懈可击】使用。",
			liutan: "柳婒",
			dcjingyin: "经音",
			dcjingyin_info: "每回合限一次，一名角色于其回合外使用【杀】结算完毕后，你可以令一名使用者外的角色获得此【杀】对应的所有实体牌，且其使用这些牌无次数限制。",
			dcchixing: "迟行",
			dcchixing_info: "一名角色的出牌阶段结束时，若本阶段有【杀】进入弃牌堆，则你可以摸X张牌（X为本阶段进入弃牌堆的【杀】数），若你以此法获得了【杀】，则你可以使用其中的一张。",
			zhugejing: "诸葛京",
			dcyanzuo: "研作",
			dcyanzuo_info: "出牌阶段限一次，你可以将一张基本牌或普通锦囊牌置于武将牌上，然后视为使用一张“研作”牌。",
			dczuyin: "祖荫",
			dczuyin_info: "锁定技，你成为其他角色使用【杀】或普通锦囊牌的目标后，若你有与此牌同名的“研作”牌，令此牌无效并弃置所有同名“研作”牌；否则从牌堆或弃牌堆中将一张同名牌置于武将牌上，然后令〖研作〗发动次数+1（至多为3）。",
			dcpijian: "辟剑",
			dcpijian_info: "结束阶段，若你的“研作”牌数不小于存活人数，你可弃置这些牌，对一名角色造成2点伤害。",
			dc_lingcao: "新杀凌操",
			dc_lingcao_prefix: "新杀",
			dcdufeng: "独锋",
			dcdufeng_info: "锁定技。出牌阶段开始时，你失去1点体力或废除一个装备栏，摸X张牌，然后你的攻击范围与使用【杀】的次数上限均为X直到回合结束（X为你已废除的装备栏数与损失的体力值之和，至多为你的体力上限）。",
			dc_sb_chengyu: "新杀谋程昱",
			dc_sb_chengyu_prefix: "新杀谋",
			dcshizha: "识诈",
			dcshizha_info: "每回合限一次，其他角色使用牌时，若此牌是其本回合体力变化后使用的首张牌，你可令此牌无效并获得此牌。",
			dcgaojian: "告谏",
			dcgaojian_info: "出牌阶段，你使用锦囊牌结算完成进入弃牌堆后，可以选择一名其他角色。其依次展示牌堆顶的牌直到出现锦囊牌（至多展示五张），然后选择一项：1.使用此牌，2.用任意张手牌与等量展示牌交换。",
			dcgaojian_tag: "手牌",
			dc_sb_jushou: "新杀谋沮授",
			dc_sb_jushou_prefix: "新杀谋",
			dcsbzuojun: "佐军",
			dcsbzuojun_info: "出牌阶段限一次，你可以令一名角色摸三张牌并令其选择一项：1.直到其下个回合结束，其不能使用这些牌且这些牌不计入手牌上限；2.失去1点体力，摸一张牌并使用因此获得的任意张牌，然后弃置其余牌。",
			dcsbmuwang: "暮往",
			dcsbmuwang_info: "锁定技，当你每回合首次失去的基本牌或普通锦囊牌进入弃牌堆时，你获得其中一张。当你本回合再次失去这张牌后，你弃置一张牌。",
			dc_zhangren: "新杀张任",
			dc_zhangren_prefix: "新杀",
			dc_tianfeng: "新杀田丰",
			dc_tianfeng_prefix: "新杀",
			dc_jiangqing: "新杀蒋钦",
			dc_jiangqing_prefix: "新杀",
			dcshangyi: "尚义",
			dcshangyi_info: "出牌阶段限一次，你可以令一名其他角色观看你的手牌，然后你观看其手牌并可以弃置其中♠♣花色的牌各一张。",
			dcniaoxiang: "鸟翔",
			dcniaoxiang_info: "锁定技，你使用【杀】指定目标后，若你在其攻击范围内，其需要额外使用一张【闪】来抵消此【杀】。",
			dcchuanxin: "穿心",
			dcchuanxin_info: "当你于出牌阶段使用【杀】或【决斗】对一名角色造成伤害时，你可以防止此伤害，令其选择一项：1.弃置装备区里的所有牌，然后失去1点体力；2.弃置两张手牌，然后非锁定技失效直到回合结束。",
			dcfengshi: "锋矢",
			dcfengshi_info: "你使用【杀】指定目标后，若你不在其攻击范围内，你可以弃置该角色装备区里的一张防具或防御马。",
			dcsuishi: "随势",
			dcsuishi_info: "锁定技，其他角色进入濒死时，若伤害来源与你势力相同，你摸一张牌；其他角色死亡时，若其势力与你相同，你弃置至少1张手牌。",
			wenyuan: "文鸳",
			dckengqiang: "铿锵",
			dckengqiang_info: "每回合限一次，当你造成伤害时，你可以：1.摸体力上限张牌；2.令此伤害+1并获得造成伤害的牌。",
			dckuichi: "匮饬",
			dckuichi_info: "锁定技，回合结束时，若你本回合摸牌数和造成伤害值均不小于体力上限，你失去1点体力。",
			dcshangjue: "殇决",
			dcshangjue_info: "觉醒技，你进入濒死状态时，回复体力至1点，增加1点体力上限并获得〖困励〗，然后修改〖铿锵〗为“每回合每项各限一次”。",
			dckunli: "困励",
			dckunli_info: "觉醒技，你进入濒死状态时，回复体力至2点，增加1点体力上限并失去〖匮饬〗。",
			wu_huangfusong: "武皇甫嵩",
			wu_huangfusong_prefix: "武",
			dcchaozhen: "朝镇",
			dcchaozhen_info: "准备阶段或当你进入濒死状态时，你可以获得牌堆里或场上点数最小的牌，若此牌点数为A，你回复1点体力并令〖朝镇〗本回合失效，否则你减少1点体力上限。",
			dclianjie: "连捷",
			dclianjie_info: "你使用手牌指定目标时，若你有手牌且此牌点数不大于你的所有手牌，你可将手牌摸至体力上限，以此法获得的牌本回合无距离次数限制（每个点数每回合限一次，无点数视为0）。",
			dcjiangxian: "将贤",
			dcjiangxian_info: "限定技，出牌阶段，你可以选择一项：1.失去〖朝镇〗，将体力上限和手牌上限增加至5；2.本回合使用〖连捷〗获得的牌造成的伤害+X（X为你本回合造成伤害的次数且至多为5），回合结束后失去〖连捷〗。",
			
			mp_xiangxiu: "向秀",
			mpmiaoxi: "妙析",
			mpmiaoxi_info: "出牌阶段限一次，你可以同时展示你和一名其他角色的一张手牌，若这两张牌：颜色相同，你弃置之；花色相同，令其失去1点体力；牌名相同，你获得其展示的牌；点数相同，本回合〖妙析〗发动次数+1。",
			mpsijiu: "思旧",
			mpsijiu_info: "一轮游戏结束时，若你本轮获得过其他角色的牌，你可以摸一张牌并观看一名角色的手牌。",

			sp2_huben: "百战虎贲",
			sp2_shengun: "奇人异士",
			sp2_bizhe: "笔舌如椽",
			sp2_huangjia: "皇家贵胄",
			sp2_zhangtai: "章台春望",
			sp2_jinse: "锦瑟良缘",
			sp2_yinyu: "隐山之玉",
			sp2_wangzhe: "往者可谏",
			sp2_doukou: "豆蔻梢头",
			sp2_jichu: "计将安出",
			sp2_yuxiu: "钟灵毓秀",
			sp2_qifu: "祈福",
			sp2_gaoshan: "高山仰止",
			sp2_wumiao: "武庙",
			
			xianding_waitforsort: "等待分包",
		},
	};
});
