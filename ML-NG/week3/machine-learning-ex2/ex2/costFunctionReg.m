function [J, grad] = costFunctionReg(theta, X, y, lambda)
%COSTFUNCTIONREG Compute cost and gradient for logistic regression with regularization
%   J = COSTFUNCTIONREG(theta, X, y, lambda) computes the cost of using
%   theta as the parameter for regularized logistic regression and the
%   gradient of the cost w.r.t. to the parameters. 

% Initialize some useful values
m = length(y); % number of training examples

% You need to return the following variables correctly 
grad = zeros(size(theta));

% ====================== YOUR CODE HERE ======================
% Instructions: Compute the cost of a particular choice of theta.
%               You should set J to the cost.
%               Compute the partial derivatives and set grad to the partial
%               derivatives of the cost w.r.t. each parameter in theta
n = length(theta);

J = -1 / m * sum(y' * log(sigmoid(X * theta)) + (1 - y)' * log(1 - sigmoid(X * theta))) + ...
  lambda / (2 * m) * (theta(2:n)' * theta(2:n));

for i = 1:m,
  grad = grad + (sigmoid(X(i, :) * theta) - y(i)) * X(i, :)'; 
end;
grad = grad / m + lambda / m * theta;
grad(1) = grad(1) - lambda / m * theta(1);


% =============================================================

end
