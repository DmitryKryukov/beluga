<template lang="pug">
  #page
    AppHeader(title="Профиль")
    main
      section.row
        .form
          Input(placeholder="Имя", value="Константин Константинопольский")
          Input(placeholder="Телефон", value="8 990 800 70 70")
          Input(placeholder="Дата рождения", value="", @inputData="birthdayInput")
          .caption(:class="{'__show': birthdayCaptionShow}") 
            img.caption-img(src='./assets/profile/giftbox.svg')
            span.caption-text Заполните, чтобы получиать скидки и подарки на&nbsp;день&nbsp;рождения
          
          Group(v-for="adress in addressGroups", :key="adress.id", :title="adress.title" :active="adress.active")
            Input(placeholder="Улица", :value='adress.street')
            .form-group__small
              Input(placeholder="Дом, корпус", :value='adress.house')
            .form-group__small
              Input(placeholder="Подъезд", :value='adress.door')
            .form-group__small
              Input(placeholder="Этаж", :value='adress.floor')
            .form-group__small
              Input(placeholder="Квартира или офис", :value='adress.appartment')
            Input(placeholder="Комментарий", :value='adress.comment')
          
          .form-group.form-group__add
            Input(placeholder="Добавить адрес", name="newGroup", @inputData="addGroup")
          
          .form-group
            a.link.link__exit Выйти →
   
 </template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import Input from "@/components/form/Input";
import Group from "@/components/form/Group";
export default {
  components: {
    AppHeader,
    Input,
    Group
  },
  data() {
    return {
      addressGroups: [
        {
          id: 0,
          title: "Дом",
          street: "Куликова",
          house: "15/5",
          door: "5",
          floor: "7",
          appartment: "87",
          comment: ""
        }
      ],
      birthdayCaptionShow: true,
      newGroupTitle: ""
    };
  },
  methods: {
    birthdayInput: function(input) {
      if (input.inputValue) {
        this.birthdayCaptionShow = false;
      } else {
        this.birthdayCaptionShow = true;
      }
    },
    addGroup: function(input) {
      if (input.inputValue) {
        this.addressGroups.push({
          id: this.addressGroups.length,
          title: input.inputValue,
          active: true
        });
        this.$set(input, "inputValue", "");
      }
    }
  }
};
</script>

<style lang="scss">
.caption {
  font-size: 12px;
  line-height: 15px;
  color: var(--primary);
  display: flex;
  align-items: bottom;
  padding-bottom: 2px;
  transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  height: 0;
  margin-top: 0;
  margin-bottom: 0;
  overflow: hidden;
  opacity: 0;
  &-img {
    margin-right: 6px;
    width: 30px;
    height: 28px;
  }
  &-text {
    margin-bottom: -3px;
  }
  &.__show {
    margin-top: 19px;
    margin-bottom: 9px;
    opacity: 1;
    height: 32px;
  }
}
.form-group {
  &__small {
    width: calc(50% - var(--view-gap) / 2);
  }
  &__add {
    margin-top: 3px;
    width: 100%;
  }
}
</style>
