import joblib
import pandas as pd

def predict_score():
    # 1. 저장된 모델 불러오기 (Load Model)
    # 훈련할 때 썼던 그 모델을 그대로 가져옵니다.
    print("AI 모델을 로딩 중입니다...")
    loaded_model = joblib.load('my_model.pkl')
    print("로딩 완료! 예측 시스템 가동.\n")

    while True:
        try:
            # 2. 사용자 입력 받기
            user_input = input("공부한 시간을 입력하세요 (종료하려면 q): ")
            
            if user_input.lower() == 'q':
                print("시스템을 종료합니다.")
                break

            hours = float(user_input)

            # 3. 입력 데이터를 DataFrame으로 변환
            # [중요] 훈련할 때 DataFrame을 줬으니, 예측할 때도 똑같은 모양(컬럼명)으로 줘야 합니다.
            input_data = pd.DataFrame({'Study_Hours': [hours]})

            # 4. 예측 수행
            predicted_score = loaded_model.predict(input_data)

            # 5. 결과 출력
            print(f"--------------------------------")
            print(f"🕒 공부 시간: {hours}시간")
            print(f"💯 예상 점수: {predicted_score[0]:.2f}점")
            print(f"--------------------------------\n")

        except ValueError:
            print("숫자만 입력해주세요!")

if __name__ == "__main__":
    predict_score()