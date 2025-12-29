# py -3.11 -m pip install uv
# py -3.11 -m uv venv venv
# uv pip install scikit-learn numpy matplotlib pandas 
# (pandas 추가됨)

import numpy as np
import matplotlib.pyplot as plt
import pandas as pd  # pandas 임포트
from sklearn.linear_model import LinearRegression

# 1. 데이터 생성 (Data Generation)
np.random.seed(42)
study_hours = np.random.rand(30, 1) * 10 
scores = 20 + 7 * study_hours + np.random.randn(30, 1) * 5

# ▼▼▼ [판다스로 변환하는 부분] ▼▼▼
# 배열이 (30, 1) 형태라 flatten()으로 펴서 1차원으로 만들어 넣음
df = pd.DataFrame({
    'Study_Hours': study_hours.flatten(),
    'Scores': scores.flatten()
})

print("--- Pandas DataFrame Head(5) ---")
print(df.head()) # 상위 5개만 출력
print("\n--- DataFrame Info ---")
print(df.describe()) # 통계 요약 정보 확인
# ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲

# exit() # 주석 처리함 (밑에 돌아가는 거 확인하시라고)

# 2. 모델 학습 (Model Training)
# pandas 데이터를 그대로 넣어도 sklearn은 잘 작동합니다.
# X는 2차원이어야 하므로 대괄호 두 개 [[ ]] 사용
X = df[['Study_Hours']] 
y = df['Scores']

model = LinearRegression()
model.fit(X, y)

# 3. 예측 및 결과 확인 (Prediction)
predicted_scores = model.predict(X)

print(f"\n기울기 (Coefficient): {model.coef_[0]:.2f}")
print(f"절편 (Intercept): {model.intercept_:.2f}")
print(f"회귀식: y = {model.coef_[0]:.2f}x + {model.intercept_:.2f}")

# 4. 시각화 (Visualization)
plt.figure(figsize=(8, 6))
# pandas 컬럼을 바로 사용 가능
plt.scatter(df['Study_Hours'], df['Scores'], color='blue', label='Actual Data') 
plt.plot(df['Study_Hours'], predicted_scores, color='red', linewidth=2, label='Regression Line')

plt.title('Study Hours vs Scores')
plt.xlabel('Study Hours')
plt.ylabel('Score')
plt.legend()
plt.grid(True)
plt.show()

# ... (위쪽 훈련 코드 그대로 유지) ...

# 5. 모델 저장 (Model Saving)
# joblib은 사이킷런 모델을 파일로 저장할 때 쓰는 표준 라이브러리입니다.
import joblib

# 모델을 'my_model.pkl'이라는 이름의 파일로 박제합니다.
joblib.dump(model, 'study_linear_reg.pkl') 

print("모델 저장이 완료되었습니다: study_linear_reg.pkl")