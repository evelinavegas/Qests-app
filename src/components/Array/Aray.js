import { makeAutoObservable } from "mobx"
const arrQests = [
    {
      "id": 1,
      "title": "Склеп",
      "description": "Середньовічний цвинтар таїть у собі багато страшних таємниць. Місцеві жителі кажуть, що у склепі поховано графа вампіра, який ночами виходить на полювання, щоб випити людської крові. Через годину сонце опуститься за обрій, чи встигнете ви вбити вампіра і вибратися зі склепу?",
      "previewImg": "img/preview-sklep.jpg",
      "coverImg": "img/cover-sklep.jpg",
      "type": "horror",
      "level": "hard",
      "peopleCount": ['2', '5'],
      "duration": 120
    },
    {
      "id": 2,
      "title": "Маньяк",
      "description": "У кімнаті з приглушеним світлом кілька людей, незнайомих один з одним, приходять до тями. Ніхто не пам'ятає, що сталося минулого вечора. Руки та ноги пов'язані, але одному з вас вдалося звільнитися. На стіні висить таймер, що лякає, і запущений відлік 60 хвилин. Чи зможете ви розібратися в стресовій ситуації, допомогти іншим, розібратися, що сталося і вибратися з кімнати?",
      "previewImg": "img/preview-maniac.jpg",
      "coverImg": "img/cover-maniac.jpg",
      "type": "horror",
      "level": "medium",
      "peopleCount": [3, 6],
      "duration": 90
    },
    {
      "id": 3,
      "title": "Ритуал",
      "description": "Важке повітря пригнічує, в ночі ви опиняєтеся замкненими в сирому приміщенні разом з іншими жертвами, які нічого не розуміють. Крізь щілину у двері ви бачите, як хтось у капюшоні готує майданчик як для проведення містичного обряду. Чи вдасться вам вибратися, доки ви не станете жертвою ритуалу?",
      "previewImg": "img/preview-ritual.jpg",
      "coverImg": "img/cover-ritual.jpg",
      "type": "mystic",
      "level": "hard",
      "peopleCount": [3, 5],
      "duration": 120
    },
    {
      "id": 4,
      "title": "Таємниці старого особняка",
      "description": "Пориньте в атмосферу службових приміщень лаштунків, які зберігають безліч таємниць і загадок. Ви опинитеся у старому особняку і побачите все, що приховують його заплутані коридори.",
      "previewImg": "img/preview-final-frontier.jpg",
      "coverImg": "img/cover-final-frontier.jpg",
      "type": "detective",
      "level": "easy",
      "peopleCount": [2, 5],
      "duration": 60
    },
    {
      "id": 5,
      "title": "Хижина в лісі",
      "description": "Ви з друзями опинилися в покинутій хатині. Яку таємницю вона приховує і як із неї вибратися? На ці питання вам потрібно знайти відповідь, щоб повернутися додому.",
      "previewImg": "img/preview-house-in-the-woods.jpg",
      "coverImg": "img/cover-house-in-the-woods.jpg",
      "type": "mystic",
      "level": "medium",
      "peopleCount": [4, 7],
      "duration": 90
    },
    {
      "id": 6,
      "title": "Фатальний експеримент",
      "description": "Ви стоїте на порозі нового наукового відкриття, яке переверне долю людства. Але щось йде не так, і ядерний реактор, який працює на повну потужність, сигналізує про швидку поломку. Чи вдасться вам відремонтувати його у відведений час і запобігти загибелі людей у ​​цьому фатальному експерименті?",
      "previewImg": "img/preview-fatal-exp.jpg",
      "coverImg": "img/cover-fatal-exp.jpg",
      "type": "adventures",
      "level": "hard",
      "peopleCount": [5, 8],
      "duration": 120
    },
    {
      "id": 7,
      "title": "Метро 2033",
      "description": "Світ поринув у хаус постапокаліпсису після ядерного вибуху. Всі великі міста були стерті з лиця землі і лише в метро на глибині залишилося життя. Але й тут твориться хаус. У вас і вашої команди є лише одна мета – вижити.",
      "previewImg": "img/preview-metro2033.jpg",
      "coverImg": "img/cover-metro2033.jpg",
      "type": "sci-fi",
      "level": "medium",
      "peopleCount": [6, 8],
      "duration": 90
    },
    {
      "id": 8,
      "title": "Старе горище",
      "description": "Яку таємницю зберігає старе горище? Кожна річ має свій таємний зміст і наближає до вас до розкриття головної таємниці. Відчуйте себе справжніми детективами та докопайтеся до істини.",
      "previewImg": "img/preview-old-ceil.jpg",
      "coverImg": "img/cover-old-ceil.jpg",
      "type": "detective",
      "level": "easy",
      "peopleCount": [2, 3],
      "duration": 60
    },
    {
      "id": 9,
      "title": "Марс-2056",
      "description": "2055 рік. Ви поїхали на Марс до науково-дослідної експедиції. Мета експедиції – колонізація планети. Ви прибули на місце, розгорнули тимчасовий табір, побудували комплекс життєзабезпечення та розпочали свою роботу. У вас є команда висококваліфікованих фахівців у своїй справі. Але щось йде не так - тепер вам потрібно полетіти з червоної планети якнайшвидше, щоб врятувати своє життя.",
      "previewImg": "img/preview-mars-2056.jpg",
      "coverImg": "img/cover-mars-2056.jpg",
      "type": "sci-fi",
      "level": "easy",
      "peopleCount": [2, 5],
      "duration": 60
    }
  ]
class ArrClass {
  
  filterArr = arrQests
  constructor (){
    makeAutoObservable(this)
  }
  getFilter(e) {
    if (arrQests) {
      if (e === '') {
        const arr = arrQests
        this.filterArr = arr
      } else {
        this.getFilterArr(e)
      }
    }
  }
  getFilterArr(filter) {
    if (arrQests) {
      const clonArr = [...arrQests].filter(qest => {
        if (qest.type == filter) {
          return qest
        }
      })
      this.filterArr = clonArr      
    }
  }
}
export default new ArrClass