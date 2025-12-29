# py -3.11 -m pip install uv
# py -3.11 -m uv venv venv
# uv pip install scikit-learn numpy matplotlib
"""
py -3.11 -m uv venv venv

.\venv\Scripts\Activate.ps1
"""
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# 1. 데이터 생성 (Data Generation)
# 공부 시간 (X): 1시간부터 10시간까지 랜덤하게 30개 생성
np.random.seed(42)  # 결과 재현을 위한 시드 설정
study_hours = np.random.rand(30, 1) * 10 

# 성적 (y): 기본 점수 20점 + (시간당 7점 상승) + 랜덤 오차(노이즈)
scores = 20 + 7 * study_hours + np.random.randn(30, 1) * 5

# 2. 모델 학습 (Model Training)
model = LinearRegression()
model.fit(study_hours, scores)

# 3. 예측 및 결과 확인 (Prediction)
# 학습된 모델이 생각하는 '최적의 직선'을 그리기 위해 예측 수행
predicted_scores = model.predict(study_hours)

print(f"기울기 (Coefficient): {model.coef_[0][0]:.2f}")
print(f"절편 (Intercept): {model.intercept_[0]:.2f}")
print(f"회귀식: y = {model.coef_[0][0]:.2f}x + {model.intercept_[0]:.2f}")

# 4. 시각화 (Visualization)
plt.figure(figsize=(8, 6))
plt.scatter(study_hours, scores, color='blue', label='Actual Data') # 실제 데이터(점)
plt.plot(study_hours, predicted_scores, color='red', linewidth=2, label='Regression Line') # 회귀선(선)

plt.title('Study Hours vs Scores')
plt.xlabel('Study Hours')
plt.ylabel('Score')
plt.legend()
plt.grid(True)
plt.show()