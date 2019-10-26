<template lang="pug">
  #page
    AppHeader(title="Профиль")
    main
      section.row
        .form.col
          Input(placeholder="Имя", value="Константин Константинопольский")
          Input(placeholder="Телефон", value="8 990 800 70 70")
          Input(placeholder="Дата рождения", value="", @inputData="birthdayInput")
          .caption(:class="{'caption--show': birthdayCaptionShow}") 
            span.caption__text Заполните, чтобы получать скидки и&nbsp;подарки на&nbsp;день&nbsp;рождения
            img.caption__img(src='./assets/profile/giftbox.svg')
          
          Group(v-for="adress in addressGroups", :key="adress.id", :title="adress.title" :active="adress.active")
            Input(placeholder="Улица", :value='adress.street')
            .form-group--small
              Input(placeholder="Дом, корпус", :value='adress.house')
            .form-group--small
              Input(placeholder="Подъезд", :value='adress.door')
            .form-group--small
              Input(placeholder="Этаж", :value='adress.floor')
            .form-group--small
              Input(placeholder="Квартира или офис", :value='adress.appartment')
            Input(placeholder="Комментарий", :value='adress.comment')
          
          .form-group.form-group--add
            //Input(placeholder="Добавить адрес", name="newGroup", @inputData="addGroup")
            Button(text="Добавить адрес")
          
          .form-group
            a.link.link--exit Выйти →
   
 </template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import Input from "@/components/form/Input";
import Group from "@/components/form/Group";
import Button from "@/components/form/Button";
export default {
  components: {
    AppHeader,
    Input,
    Group,
    Button
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
  line-height: 20px;
  display: flex;
  align-items: center;
  color: var(--color-muted);
  transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  height: 0;
  margin-top: 0;
  margin-bottom: 45px !important;
  padding: 0 var(--view-margin);
  overflow: hidden;
  opacity: 0;
  background-color: var(--plain);
  border-radius: var(--border-radius);
  box-sizing: border-box;
  &__img {
    margin-right: 6px;
    width: 30px;
    height: 28px;
    margin-bottom: 3px;
  }
  &__text {
  }
  &--show {
    margin-top: 19px;
    margin-bottom: 9px;
    opacity: 1;

    height: 68px;
    padding: 13px var(--view-margin) var(--view-margin);
  }
}
.form-group {
  &--small {
    width: calc(50% - var(--view-gap) / 2);
  }
  &--add {
    width: 100%;
  }
}
.link--exit {
  margin-bottom: var(--view-margin);
  margin-top: 45px;
}
.col {
  & > *:not(:last-child) {
    margin-bottom: auto;
  }
}
</style>
