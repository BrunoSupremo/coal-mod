G.AddData({
	name:'Coal mod',
	author:'Bruno Mussoi Mendonça',
	desc:'Adds coal as a crafting option for firepits and a way to purify water using coal+sand',
	engineVersion:1,
	manifest:0,
	requires:['Default dataset*'],
	/*sheets:{
		'coal_images':'coal_images.png'
	},*/
	func:function() {
		G.getDict('firekeeper').modes['coal fire']={
			name:'Start fires from coal',
			icon:[12,8,13,7]
			desc:'Craft [fire pit]s from 5 [stick]s and 5 [coal]s.'
		};
		G.getDict('firekeeper').effects.push({
			type:'convert',
			from:{
				'stick':5,
				'coal':5
			},
			into:{
				'fire pit':1
			},
			every:5,
			mode:'coal fire'
		});
	}
});