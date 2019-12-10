Vue.component('vueOptions', {
  props: {
    value:{
        type: [String, Object],
    },
    options: {
      type: Array,
      required: true,
      default: []
    },
    customText: {
      type: Function 
    },
    optionText: {
      type: String ,
      default:null
    },
    optionValue: {
      type: String ,
      default:null
    },
    inputClass: {
      type: String ,
      default: ''
    },
    name: {      
      type: String ,
      default: ''
    },
     id: {      
      type: String ,
      default: ''
    },
   required: {      
      type: [String, Boolean],
      default: false
    }
    
  },
  data () {
    return {
      content: ''
    }
  },
  created() {
    this.setData();     
  },
   computed: {
     selectedText(){
       
     },
     attributeHandle(){
       let attributes = {} ;
       if( this.id){
         attributes['id'] =  this.id
       }
       if(this.name){
          attributes['name'] =  this.name
       }
         
       return  attributes; 
     } 
   },
  methods: {
    handleInput (e) {      
      this.$emit('input', this.content)
    },
    setValue(option){
    //  let val =e.target.innerText;
      this.$emit('input', this.optionValue ? option[this.optionValue] : option)
    },
    showLabel(option){ 
     let secondKey = Object.keys(option)[1] ;
       //return  option[secondKey];
      return   this.customText ?   this.customText(option) : this.optionText ? option[this.optionText]  :option[secondKey];
    },
    handleFocus(){
      
    },
    setData(){
      this.$emit('input', this.value ? this.value.name  : "")  
    }
   
  },
 template: `<div class="vue-option-container">
<span class="value-show-section"> {{selectedText}} </span> 
  <input v-bind="attributeHandle" :value="value"  class="vue-option-search-field"/>
  <input type="text" v-bind="attributeHandle" :value="value" :required="required"  :class="'vue-option-search-field ' + inputClass"  />

  <div class="vue-option-arrow" @click="handleFocus"></div>
  <div class="vue-option-list-container">
    <ul>
      <li v-for="option in options" @click="setValue(option)" > {{ showLabel(option) }} </li>      
    </ul>
  </div>
</div>
`,
})

new Vue({
  el: '#app',
  data: {
  name: { "id": 2, "name": "React JS" },
  options: [
  {id: 1, name: "Vue JS"},
  {id: 2, name: "React JS"},
  {id: 3, name: "Angular JS"}, 
   ]
  },
  methods:{
    customLabel (item) {
        return `${item.id} : ${item.name}`
      }
  }
})