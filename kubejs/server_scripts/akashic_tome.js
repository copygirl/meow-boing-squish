// Give players a full Akashic Tome when joining for the first time.
onEvent("player.logged_in", event => {
    if (event.player.stages.has("starting_items")) return;
    event.player.stages.add("starting_items")

    event.player.give(Item.of("akashictome:tome", '{"akashictome:data":{' +
        'ars_nouveau:{Count:1b,id:"ars_nouveau:worn_notebook",tag:{"akashictome:displayName":{text:"Worn Notebook"}}},' +
        'assemblylinemachines:{Count:1b,id:"assemblylinemachines:guidebook",tag:{"akashictome:displayName":{text:"Assembly Lines & You"}}},' +
        'essentials:{Count:1b,id:"essentials:guide_book",tag:{"patchouli:book":"essentials:manual","akashictome:displayName":{text:"Crossroads & Essentials Guidebook"}}},' +
        'malum:{Count:1b,id:"malum:encyclopedia_arcana",tag:{"akashictome:displayName":{text:"Encyclopedia Arcana"}}},' +
        'occultism:{Count:1b,id:"occultism:dictionary_of_spirits",tag:{"akashictome:displayName":{text:"Dictionary of Spirits"}}},' +
        'patchouli:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"littlelogistics:guide","akashictome:displayName":{text:"Little Logistics Guide"}}},' +
        'tconstruct:{Count:1b,id:"tconstruct:encyclopedia",tag:{"akashictome:displayName":{text:"Encyclopedia of Tinkering"}}},' +
        'tis3d:{Count:1b,id:"tis3d:manual",tag:{"akashictome:displayName":{text:"TIS-3D Reference Manual"}}}' +
    '}}'))
})
