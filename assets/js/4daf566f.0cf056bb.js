"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3583],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3647:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_label:"Custom Ore Generators",title:"Creating Custom Ore Generators",sidebar_position:5.6},l=void 0,d={unversionedId:"BedWars1058/developers/Creating-Ore-Generators",id:"BedWars1058/developers/Creating-Ore-Generators",title:"Creating Custom Ore Generators",description:"How to create a custom ore generator.",source:"@site/docs/BedWars1058/developers/Creating-Ore-Generators.md",sourceDirName:"BedWars1058/developers",slug:"/BedWars1058/developers/Creating-Ore-Generators",permalink:"/docs/BedWars1058/developers/Creating-Ore-Generators",editUrl:"https://github.com/andrei1058/docs/edit/main/docs/BedWars1058/developers/Creating-Ore-Generators.md",tags:[],version:"current",sidebarPosition:5.6,frontMatter:{sidebar_label:"Custom Ore Generators",title:"Creating Custom Ore Generators",sidebar_position:5.6},sidebar:"bw1058",previous:{title:"Custom Levels",permalink:"/docs/BedWars1058/developers/custom-levels"},next:{title:"Addons & Setups",permalink:"/docs/BedWars1058/addons"}},u=[{value:"How to register it",id:"how-to-register-it",children:[],level:3}],c={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"How to create a custom ore generator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class ExampleGenerator implements IGenerator {\n\n    @Override\n    public void setHologram(@Nullable Hologram hologram) {\n        // set a hologram above your generator\n    }\n\n    @Override\n    public @Nullable Hologram getHologram() {\n        // get the hologram above your generator\n        return hologram;\n    }\n\n    @Override\n    public void disable() {\n        // disable your generator\n        // this will be called when the game ends, at restarting phase\n    }\n\n    @Override\n    public void upgrade() {\n        // this is called when the arena decides to upgrade a generator based on Arena#updateNextEvent()\n        // but if you want it to have a regular behavior you may want to\n        // register it as an arena generator arena.getOreGenerators().add(myCustomGenerator)\n        // make sure to add this in your code if the generator gets upgraded:\n        // Bukkit.getPluginManager().callEvent(new GeneratorUpgradeEvent(this));\n    }\n\n    @Override\n    public void spawnTry() {\n        // This will attempt to spawn the items every second.\n        // Things to keep in consideration: #getSpawnDelay, #getSpawnAtOnce\n        // Handle your logistics and spawn behavior and then you should spawn items with #dropItem(loc)\n        // this will require the generator to be registered as a team or arena generator\n        // otherwise you need to handle it yourself.\n        // Code example: https://pastebin.com/VAsVH6MM\n    }\n\n    @Override\n    public void dropItem(Location location) {\n        // Please keep track of getGeneratorsCfg().getBoolean(ConfigPath.GENERATOR_STACK_ITEMS)\n        // so if items mustn\'t stack give them a custom name like this:\n        // myItem.setCustomName("custom" + id); where id is something unique so they cant stack.\n        // When the item is picked up its item name is automatically removed\n        // if it starts with "custom".\n        // Code example: https://pastebin.com/64vKUiCr\n    }\n\n    @Override\n    public void setSpawnOre(ItemStack spawnOre) {\n        // set generator drop item\n    }\n\n    @Override\n    public IArena getArena() {\n        // get the arena where the generator is placed\n        return arena;\n    }\n\n    @Override\n    public void rotate() {\n        // rotate the generator preview-item if it is the case\n        // this will require the generator to be registered as a team or arena generator\n        // otherwise you need to handle it yourself\n    }\n\n    @Override\n    public void setSpawnDelay(int spawnDelay) {\n        // change spawn delay between drops\n    }\n\n    @Override\n    public void setSpawnAtOnce(int spawnAtOnce) {\n        // set the amount of items that are spawned at once\n    }\n\n    @Override\n    public void enableRotation() {\n        // this is called by BedWars1058 when the game starts. it requires to be a registered generator.\n    }\n\n    @Override\n    public void setSpawnLimit(int value) {\n        // set how many items can be dropped at the generator till pausing the drop of new ones\n    }\n\n    @Override\n    public ITeam getOwnerTeam() {\n        // get the owning team, if it is a team generator.\n        // can be null if it does not belong to a team.\n        return team;\n    }\n\n    @Override\n    public ArmorStand getHologramHolder() {\n        return null;\n    }\n\n    @Override\n    public void setNextSpawn(int nextSpawn) {\n        // set how many seconds till the next #dropItems\n    }\n\n    @Override\n    public void setStackDroppedItems(boolean stackDroppedItems) {\n        // change the item-stacking rule\n    }\n\n    @Override\n    public void setType(GeneratorType type) {\n        // change generator type\n    }\n\n    @Override\n    public void destroyData() {\n        // used to destroy any eventual generator data when the arena restarts\n    }\n\n    @Override\n    public void setTier(int tier) {\n        // change generator tier\n    }\n}\n')),(0,o.kt)("h3",{id:"how-to-register-it"},"How to register it"),(0,o.kt)("p",null,"If you set its type as EMERALD/ DIAMOND and with no team, and you want it to be handled like a regular emerald/ diamond generator you have to add it to this list: ",(0,o.kt)("inlineCode",{parentName:"p"},"IArena#getOreGenerators()"),". Or if you want it to be used as a team generator and refreshed (#spawnTry) by BedWars1058 add it to this list: ",(0,o.kt)("inlineCode",{parentName:"p"},"ITeam#getGenerators()"),". For anything else, handle it yourself."))}p.isMDXComponent=!0}}]);