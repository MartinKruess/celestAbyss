import mongoose from 'mongoose';
const schema=new mongoose.Schema({
 key:{type:String,required:true,unique:true},name:{type:String,required:true},
 description_de:String,classKey:{type:String,required:true},className:String,
 rank:{type:Number,min:1,required:true},themeItem:String,themeItemName:String,themeMaterial:String,
 themeStatus:String,materialLore:mongoose.Schema.Types.Mixed,namingStatus:String,designNotes:[String],
 parts:[{_id:false,definitionId:{type:String,required:true},itemId:{type:mongoose.Schema.Types.ObjectId,ref:'items',required:true}}],
 setBonuses:{type:[mongoose.Schema.Types.Mixed],default:[]},setBonusStatus:String,
},{collection:'armorSets'});
export const ArmorSetModel=mongoose.models.armorSets??mongoose.model('armorSets',schema);
