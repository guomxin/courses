% Load from ex6data3: 
% You will have X, y in your environment
load('ex6data3.mat');

cvec = [0.01; 0.03; 0.1; 0.3; 1; 3; 10; 30];
sigmaVec = [0.01; 0.03; 0.1; 0.3; 1; 3; 10; 30];
para_count = length(cvec);
bestC = 0.01;
bestSigma = 0.01;
minErrorRatio = 1;

% Train the SVM
for i=1:para_count,
  for j=1:para_count,
    C = cvec(i);
    sigma = sigmaVec(j);
    model= svmTrain(X, y, C, @(x1, x2) gaussianKernel(x1, x2, sigma));
    pred = svmPredict(model, Xval);
    errorRatio = mean(double(pred ~= yval));
    if (errorRatio < minErrorRatio),
      bestC = C;
      bestSigma = sigma;
      minErrorRatio = errorRatio;
    end;
  end;
end;
printf("C=%f, sigma=%f, errorRatio=%f\n", bestC, bestSigma, minErrorRatio);