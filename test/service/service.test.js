// const assert=require('chai').assert;
// const service=require('../../main/source/service/service')
// describe('quantity measurement service test cases', function(){

//     describe('data with correct value',function(){
//         var data1={
//             unit:"0",
//             firstUnit:"INCH",
//             secondUnit:"FEET",
//             unitValue:12
//         }
//         it('given correct object of inch value should return 1 feet',function(){
//             service.unitMeasurement(data1,(err,data)=>{
//                 if(err){
//                     console.log(err);
//                 }
//                 console.log('data of the first test is =============================>/',data);
                
//                 data=Math.round(data)
//                 assert.equal(data,1)
//             })
//         })
//     }),

//     describe('data with no value',function(){
//         data2={
//             unit:"",
//             firstUnit:"",
//             secondUnit:"",
//             unitValue:0
//         }
//         it('given empty unit values should return err',function(){
//             var noValue=service.unitMeasurement(data2,(err,data)=>{
//                 if(err){
//                     console.log(err);
//                 }
                
//             })
//             assert(data2,undefined)
//         })

//     }),

//     describe('data with null value',function(){
//         data2={
//             unit:null,
//             firstUnit:null,
//             secondUnit:null,
//             unitValue:0
//         }
//         it('given null unit values should return err',function(){
//             var noValue=service.unitMeasurement(data2,(err,data)=>{
//                 if(err){
//                     console.log(err);
//                 }
                
//             })
//             assert(data2,undefined)
//         })

//     }),

//     describe('data with wrong value',function(){
//         data2={
//             unit:"0",
//             firstUnit:"KILOGRAM",
//             secondUnit:"GRAM",
//             unitValue:1
//         }
//         it('given wrong unit values should return err',function(){
//             var noValue=service.unitMeasurement(data2,(err,data)=>{
//                 if(err){
//                     console.log(err);
//                 }
                
//             })
//             assert(data2,undefined)
//         })

//     })

// })