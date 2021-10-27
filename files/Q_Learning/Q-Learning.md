# Q-Learning
[link](https://thomassimonini.medium.com/)
## What is RL? A short recap

In RL, we build an agent that can **make smart decisions**. For instance, an agent that **learns to play a video game.** Or a trading agent that **learns to maximize its benefits** by making smart decisions on **what stocks to buy and when to sell.**



![1614816098068](./files/Q_Learning/1614816098068.png)	

But, to make smart decisions, our agent will learn from the environment by **interacting with it through trial and error** and receiving rewards (positive or negative) **as unique feedback.**

Its goal **is to maximize its expected cumulative reward** (because of the reward hypothesis).

**The agent’s brain is called the policy π.** It’s where the agent makes its decision-making process: given a state, our policy will output an action or a probability distribution over actions.

![1614816154852](./files/Q_Learning/1614816154852.png)

**Our goal is to find an optimal policy π\***, aka, a policy that leads to the best expected cumulative reward.

And to find this optimal policy (hence solving the RL problem) there **are two main types of RL methods**:

- *Policy-based-methods*: **Train our policy directly** to learn which action to take, given a state.
- *Value-based methods*: **Train a value function** to learn **which state is more valuable** and using this value function **to take the action that leads to it.**

![1614816183867](./files/Q_Learning/1614816183867.png)

接下来主要讲的是 Value-based methods



## The two types of value-based methods

In value-based methods, **we learn a value function,** that **maps a state to the expected value of being at that state.**

在 基于价值的方法中， 我们学习了一个 价值函数，将状态映射到处于该状态的期望值。

![1614816323304](./files/Q_Learning/1614816323304.png)



The value of a state is the **expected discounted return** the agent can get if it **starts at that state, and then acts according to our policy.**



But what means acting according to our policy? We don’t have a policy in value-based methods since we train a value-function and not a policy?







Remember that the goal of an **RL agent is to have an optimal policy π\*.**



To find it, we learned that there are two different methods:



* *Policy-based methods*： **Directly train the policy** to select what action to take given a state (or a probability distribution over actions at that state). In this case, we **don’t have a value-function.**

![1614816584832](./files/Q_Learning/1614816584832.png)



And consequently, **we don’t define by hand the behavior of our policy, it’s the training that will define it.**

直接训练这种策略去选择 在某种状态下执行哪种行为，这种趋向于固定的选择







- *Value-based methods:* **Indirectly, by training a value-function** that outputs the value of a state, or a state-action pair. Given this value function, our policy **will take action.**



But, because we didn’t train our policy, **we need to specify its behavior.**

但是这种基于价值的方法，没有训练我们的策略，所以我们要规定他的行为



For instance, if we want a policy that given the value function will take actions that always lead to the biggest value, **we’ll create a Greedy Policy.**

例如，我们总是想要有最大值的那种动作， 所以这时候就会有一个 贪婪策略 Greedy Policy



![1614816713532](./files/Q_Learning/1614816713532.png)

Consequently, whatever method you use to solve your problem, **you will have a policy**, but in the case of value-based methods you don’t train it, your policy **is just a simple function that you specify** (for instance greedy policy) and this policy **uses the values given by the value-function to select its actions.**

总而言之，无论什么方法，都会有一个策略， 但是 基于价值的方法 （value-based） 没有进行训练， 策略就只是一个简单的函数。基于这个函数的值进行选择



So the difference is, in policy-based **the optimal policy is found by training the policy directly.**

In value-based, **finding an optimal value-function leads to having an optimal policy.**

![1614817268246](./files/Q_Learning/1614817268246.png)

In fact, in value-based methods, most of the time you’ll use **an Epsilon-Greedy Policy** that handles the exploration/exploitation trade-off



So, we have two types of value-based functions:

### The State-Value function

We write the state value function under a policy π like this:![1614817352279](./files/Q_Learning/1614817352279.png)

这个公式表明， 在计算value 的时候，用的都是相同的  π 策略，例如，选择值最大的那个动作，这就是一个策略，如果一个过程中有两个策略，就可以用两个  π 表示了，就说明，一个过程中采用了两种方法取值。

在每一步，基于同样的选择策略选择行为。因为策略可以有多种，这样就可以看到一个过程中到底有多少个策略了	



For each state, the state-value function outputs the expected return if the agent **starts at that state,** and then follow the policy forever after (for all future timesteps if you prefer).

有一个state， 就能得到一个值value



![1614817411918](./files/Q_Learning/1614817411918.png)



### The Action-Value function

In the Action-value function, for each state and action pair, the action-value function **outputs the expected return,** if the agent starts in that state and takes the action, and then follows the policy forever after.

The value of taking action A in state S under a policy π is:

![1614817621678](./files/Q_Learning/1614817621678.png)



就是在一个状态 state下， 执行某个动作后，再计算出一个值



![1614817627083](./files/Q_Learning/1614817627083.png)







We see that the difference is:

- In state-value function, we calculate **the value of a state (St).** 在这个函数下，我们返回的是基于state 计算的值
- In action-value function, we calculate **the value of state-action pair (St, At) hence the value of taking that action at that state.** 在这个函数下，我们返回的是基于 state 和 action 的值

![1614817707437](./files/Q_Learning/1614817707437.png)

Whatever value function we choose (state-value or action-value function), **the value is the expected return.**

无论我们选择的是那种函数，值都是期望返回的 （这里可能是期望值，就是平均值）



However, the problem is that it implies that **to calculate EACH value of a state or a state-action pair, we need to sum all the rewards an agent can get if it starts at that state.**

但是，问题在于，无论是 一个状态值，还是状态-动作对的值，我们都得把这些值全部相加才行

This can be a dull process and that’s **where the Bellman equation comes to help us.**

这是一个很繁琐枯燥的过程，此时，Bellman equation可以帮我们解决这一问题



## The Bellman Equation: simplify our value estimation

The Bellman equation **simplifies our state value or state-action value calculation.**

这个等式 简化了 状态值或者是状态-动作值的计算



With what we learned from now, we know that if we calculate the V(St) (value of a state), we need to calculate the return starting at that state then follow the policy forever after. **(Our policy that we defined in the next example is a Greedy Policy and for simplification, we don’t discount the reward).**

根据我们现在学到的，我们知道如果我们计算V(St)(状态的值)，我们需要计算从那个状态开始的收益，然后永远遵循策略



下边的例子都是 Greedy Policy， 为了简化，没有折扣率



例：

So to calculate V(St) we need to make the sum of the expected rewards.

为了计算 V(St), 我们将每个期望值相加， expected reward. 我们希望， 这个期望的值是 -1，所以是将所有的-1相加

![1614818250725](./files/Q_Learning/1614818250725.png)







Then, to calculate the V(St+1), we need to calculate the return starting at that state St+1. 

然后去计算 V(St + 1) 的值，我们需要计算从状态St+1开始的返回值

![1614818436985](./files/Q_Learning/1614818436985.png)

So you see that’s a quite dull process if you need to do it for each state value or state-action value.



Instead of calculating for each state or each state-action pair the expected return**, we can use the Bellman equation.**



### The Bellman equation 

The Bellman equation is a recursive equation that works like this：

**instead of starting for each state from the beginning** and calculating the return, we can consider the value of any state as:

Bellman方程是一个**递归方程**，其工作原理是这样的:我们可以考虑任意状态的值，而不是从头开始计算每个状态的返回值:



**The immediate reward (Rt+1) + the discounted value of the state that follows (gamma \* V(St+1)).**

即时奖励(Rt+1) +随后状态的折现值(gamma * V(St+1))。



![1614818541771](./files/Q_Learning/1614818541771.png)

If we go back to our example, the value of State 1= expected cumulative return if we start at that state.

![1614818614626](./files/Q_Learning/1614818614626.png)

Which is equivalent to V(St) = Immediate reward (Rt+1) + Discounted value of the next state (Gamma * V(St+1)).

![1614819641422](./files/Q_Learning/1614819641422.png)

- The value of V(St+1) = Immediate reward (Rt+2) + Discounted value of the St+2 (Gamma * V(St+2)).
- And so on.

就是说，这个 Bellman equation 是一个递归方程，可以从任意的一个状态开始，通过马上要获取的价值，加上下一个状态的价值，就可以获取当前的总价值了。 

之前是把每个值都加起来，他们的总和，构成了一个个的状态值。 calculating each value as the sum of the expected return.



To recap, the idea of the Bellman equation is that instead of calculating each value as the sum of the expected return, **which is a long process.** This is equivalent **to the sum of immediate reward + the discounted value of the state that follows.**



## Monte Carlo vs Temporal Difference Learning

 the two ways of learning whatever the RL method we use.

学习RL方法的两种学习方法

Remember that an RL agent **learns by interacting with its environment.** The idea is that **using the experience taken**, given the reward he gets, it will **update its value or its policy.**



Monte Carlo and Temporal Difference Learning are two different **strategies on how to train our value function or our policy function.** Both of them **use experience to solve the RL problem.**

Monte Carlo and Temporal Difference Learning 是两种不同的策略来训练我们的价值函数或政策函数。他们都用**经验**来解决RL问题。





But on the one hand, Monte Carlo uses **an entire episode of experience before learning.** On the other hand, Temporal Difference uses **only a step (St, At, Rt+1, St+1) to learn.**

We’ll explain both of them **using a value-based method example.**



### Monte Carlo: learning at the end of the episode

Monte Carlo waits until the end of the episode, then calculates Gt (return) and uses it as **a target for updating V(St).**

Monte Carlo 等到到episode 的终点，然后计算 Gt， 并且使用Gt去更新 V(St)



So it requires a **complete entire episode of interaction before updating our value function.**

![1614820467956](./files/Q_Learning/1614820467956.png)

If we take an example:

![1614820486152](./files/Q_Learning/1614820486152.png)

- We always start the episode **at the same starting point.**
- **We try actions using our policy** (for instance using Epsilon Greedy Strategy, a policy that alternates between exploration (random actions) and exploitation. will be introduced later).

- We get **the Reward and the Next State.**
- We terminate the episode if the cat eats us or if we move > 10 steps.
- At the end of the episode, **we have a list of State, Actions, Rewards, and Next States.**
  - 最后，我们有了一个 state, action, rewards, and next states 的列表
- **The agent will sum the total rewards Gt** (to see how well it did).
- It will then **update V(st) based on the formula.**![1614820738808](./files/Q_Learning/1614820738808.png)

* Then **start a new game with this new knowledge**

以上，就是 Mote Carlo 过程， 运用的是整个过程之后得出的值，这个过程的终止由自己设置，可能 是步数 >10 停止，或者是找到目标后停止，然后进行计算，得出返回值Gt，以此为经验进行更新。

By running more and more episodes, **the agent will learn to play better and better.**



如果我们运用这个过程训练一个函数：

For instance, if we train a state-value function using Monte Carlo:

- We just started to train our Value function **so it returns 0 value for each state.**

- Our learning rate (lr) is 0.1 and our discount rate is 1 (= no discount).
- Our mouse, **explore the environment and take random actions**, we see what it did here:
- ![1614821048980](./files/Q_Learning/1614821048980.png)

- The mouse made more than 10 steps, so the episode ends.
- We have a list of state, action, rewards, next_state, **we need to calculate the return Gt.**
- Gt = Rt+1 + Rt+2 + Rt+3… (for simplicity we don’t discount the rewards).

- Gt = 1 + 0 + 0 + 0+ 0 + 0 + 1 + 1+ 0 + 0
  - 有奶酪加1， 没有奶酪 0
- Gt= 3
- We can now update V(S0):
- New V(S0) = V(S0) + lr * [Gt — V(S0)]
- New V(S0) = 0 + 0.1 * [3 –0]
- The new V(S0) = 0.3



### Temporal Difference Learning: learning at each step

- **Temporal Difference, on the other hand, waits for only one interaction (one step) St+1** to form a TD target and update V(St) using Rt+1 and gamma * V(St+1).

时间差异仅等待一个交互（一步）St + 1形成TD目标，并使用Rt + 1和gamma * V（St + 1）更新V（St）。



The idea is that with **TD we update the V(St) at each step.**

每一步都更新



But because we didn’t play during an entire episode, we don’t have Gt (expected return), **instead, we estimate Gt by adding Rt+1 and the discounted value of next state.**

因为没有Gt, 所以我们通过添加了 Rt + 1 和 折扣值 来估计 Gt





We speak about **bootstrap because TD bases its update part on an existing estimate V(St+1) and not a full sample Gt.**

我们谈论引导程序是因为TD将其更新部分基于现有估计V（St + 1）而不是完整的样本Gt。



![1614821706371](./files/Q_Learning/1614821706371.png)

This method is called TD(0) or **one step TD (update the value function after any individual step).**



If we take the same example,

![1614821741556](./files/Q_Learning/1614821741556.png)

- We just started to train our Value function so it returns 0 value for each state.
  - 刚开始的值都是0
- Our learning rate (lr) is 0.1 and our discount rate is 1 (no discount).
- Our mouse, explore the environment and take a random action: **the action going to the left.**
- It gets a reward Rt+1 = 1 since **it eat a piece of cheese.**

![1614821864787](./files/Q_Learning/1614821864787.png)

We can now update V(S0):

New V(S0) = V(S0) + lr * [R1 + gamma * V(S1) — V(S0)]

New V(S0) = 0 + 0.1 * [1 + 0.99 * 0–0]

The new V(S0) = 0.1

So we just updated our value function for State 0.

Now we **continue to interact with this environment with our updated value function.**



... ...



![1614822101388](./files/Q_Learning/1614822101388.png)



# Introducing Q-Learning



Q-Learning is an **off-policy value-based method that uses a TD approach to train its action-value function:**

所以，要学习Q-learning，首先需要知道几个名词， **off-policy, value-based method. TD approach** 和 **action-value**



Q-Learning is value-based method ， 使用 TD approach 来 训练 action-value 函数

- *“Off-policy”*: we’ll talk about that at the end of this chapter.
- *“Value-based method”*: it means that it finds its optimal policy indirectly by training a value-function or action-value function that will tell us what’s **the value of each state or each state-action pair.**
- *“Uses a TD approach”*: **updates its action-value function at each step.**



In fact, **Q-Learning is the algorithm we use to train our Q-Function**, an **action-value function** that determines the value of being at a certain state, and taking a certain action at that state.

Q-learning 是我们用来训练Q 函数的一种算法， 一种行为价值函数，它决定在某一状态下的价值，并在该状态下采取某一行为。



就是一直训练并更新Q表，训练完成之后，会有一个最终的Q表，然后，用这个Q表进行检测，看看训练的过程是不是有效，或者说是效果比较好。

期中，如何更新Q表，就是决策性的问题，包含着可能不只一种策略 ，一般就用π表示了，一个π就表示一个策略，当然是不同的，必须 π1，π‘ 什么的，最终生成的Q表，里边包含了各种状态下，各种动作可以得到的 reward. 所以，最终的这个Q表，就是最终的策略 policy π











![1614822356546](./files/Q_Learning/1614822356546.png)

The **Q comes from “the Quality” of that action at that state.**

Internally, our Q-function has **a Q-table, which is a table where each cell corresponds to a state-action value pair value.** Think of this Q-table as **the memory or cheat sheet of our Q-function.**

If we take this maze example:

![1614822485497](./files/Q_Learning/1614822485497.png)



The Q-Table (just initialized that’s why all values are = 0), **contains for each state, the 4 state-action values.**

Q-Table 进行初始化， 全都是0， 包括每一种状态-行为值

![1614822549509](./files/Q_Learning/1614822549509.png)

Here we see that the **state-action value of the initial state and going up is 0:**

这里，画蓝线的地方，向上走的值是0



![1614822564407](./files/Q_Learning/1614822564407.png)



Therefore, Q-Function contains a Q-table **that contains the value of each-state action pair.** 在老鼠当前的状态下，向上的动作，值为0

 given a state and action, **our Q-Function will search inside its Q-table to output the value.**

![1614822693562](./files/Q_Learning/1614822693562.png)



So, if we recap:

- The *Q-Learning* **is the RL algorithm that**
- Trains *Q-Function*, an **action-value function** that contains, as internal memory, a *Q-table* **that contains all the state-action pair values.**
- Given a state and action, our Q-Function **will search into its Q-table the corresponding value.**
- When the training is done, **we have an optimal Q-Function, so an optimal Q-Table.**
- And if we **have an optimal Q-function**, we **have an optimal policy,** since we **know for each state, what is the best action to take.**



![1614822791023](./files/Q_Learning/1614822791023.png)

But, in the beginning, **our Q-Table is useless since it gives arbitrary value for each state-action pair** (most of the time we initialize the Q-Table to 0 values)，But, as we’ll **explore the environment and update our Q-Table it will give us better and better approximations.**

最初的时候，Q-table 没有用，因为里边的值刚开始都是任意的，不过一般会初始化为0， 但是随着我们的不断的探索更新Q-table, 这个Q-table 就会越来越好了

![1614822931104](./files/Q_Learning/1614822931104.png)



We see here that with the training, our Q-Table is better since thanks to it we can know the value of each state-action pair.





## The Q-Learning algorithm



This is the Q-Learning pseudocode, let’s study each part, **then we’ll see how it works with a simple example before implementing it.**

![1614822986748](./files/Q_Learning/1614822986748.png)



Example:

**Step 1: We initialize the Q-Table**

![1614823015245](./files/Q_Learning/1614823015245.png)

We need to initialize the Q-Table for each state-action pair. **Most of the time we initialize with values of 0.**

初始化



**Step 2: Choose action using Epsilon Greedy Strategy**

![1614823038876](./files/Q_Learning/1614823038876.png)



Epsilon Greedy Strategy is a policy that handles the exploration/exploitation trade-off.



The idea is that we define epsilon ɛ = 1.0:

- *With probability 1 — ɛ* : we do **exploitation** (aka our agent selects the action with the highest state-action pair value).
- With probability ɛ: **we do exploration** (trying random action).



At the beginning of the training, **the probability of doing exploration will be very big since ɛ is very high, so most of the time we’ll explore.** But as the training goes, and consequently our **Q-Table gets better and better in its estimations, we progressively reduce the epsilon value** since we will need less and less exploration and more exploitation.



这是说，刚开始初始化 ɛ = 1.0， 有1-ɛ = 1-1 = 0 的概率 进行 exploitation， 有  ɛ = 1.0  的概率进行 exploration, 所以刚开始，会进行 exploration, 然后随着数据的更新， ɛ 会逐渐变小， 相应的，进行 exploitation 的概率也会一点点变大

![1614823278827](./files/Q_Learning/1614823278827.png)



**Step 3: Perform action At, gets Rt+1 and St+1**

执行 At 行为， 获取 下一个 Reward  值 和 状态值 St + 1

![1614823316443](./files/Q_Learning/1614823316443.png)



**Step 4: Update Q(St, At)**



Remember that in TD Learning, we update our policy or value function (depending on the RL method we choose) **after one step of interaction.**

To produce our TD target, **we used the immediate reward Rt+1 plus the discounted value of the next state best state-action pair** (we call that bootstrap).

![1614823498593](./files/Q_Learning/1614823498593.png)

Therefore, our Q(St, At) **update formula goes like this:**

![1614823510164](./files/Q_Learning/1614823510164.png)

It means that to update our Q(St,At):



- We need St, At, Rt+1, St+1.
- To update our Q-value at this state-action pair, we form our TD target:



We use Rt+1 and to get the **best next-state-action pair value,** we select with a greedy-policy **(so not our epsilon greedy policy)** the next best action (so the action that have the highest state-action value).

Then when the update of this Q-value is done. We start in a new_state and select our action **using our epsilon-greedy policy again.**



**It’s why we say that this is an off-policy algorithm.**



## Off-policy vs On-policy

The difference is subtle:



### Off-policy

- *Off-policy*: using **a different policy for acting and updating.**



​	For instance, with Q-Learning, the Epsilon greedy policy (acting policy), is different from the greedy policy that is **used to select the best next-state action value to update our Q-value (updating policy).**



![1614823902272](./files/Q_Learning/1614823902272.png)



就是说，  Epsilon greedy policy 这是一个动作策略，是用于下一步该怎么走的策略，然后，还有一个 greedy policy， 是用于选择下一个状态时候执行相应动作后，得到的最大值的策略，从而更新Q-table 向下进行。



Is different from the policy we use during the training part:

![1614824075951](./files/Q_Learning/1614824075951.png)



### On-policy

- *On-policy:* using the **same policy for acting and updating.**

For instance, with Sarsa, another value-based algorithm, **it’s the Epsilon-Greedy Policy that selects the next_state-action pair, not a greedy-policy.**

![1614824279800](./files/Q_Learning/1614824279800.png)

![1614824287294](./files/Q_Learning/1614824287294.png)



### An example

![1614824310184](./files/Q_Learning/1614824310184.png)

- You’re a mouse in this very small maze. You always **start at the same starting point.**

- The goal is **to eat the big pile of cheese at the bottom right-hand corner,** and avoid the poison.
- The episode ends if we eat the poison, **eat the big pile of cheese or if we spent more than 5 steps.**
- The learning rate is 0.1
- The gamma (discount rate) is 0.99

The reward function goes like this:

- **+0:** Going to a state with no cheese in it.
- **+1:** Going to a state with a small cheese in it.
- **+10:** Going to the state with the big pile of cheese.
- **-10:** Going to the state with the poison and thus die

To train our agent to have an optimal policy (so a policy that goes left, left, down). **We will use the Q-Learning algorithm.**





**Step 1: We initialize the Q-Table**

![1614824372287](./files/Q_Learning/1614824372287.png)

So, for now, **our Q-Table is useless**, we need **to train our Q-Function using Q-Learning algorithm.**

Let’s do it for 2 steps:

**Step 2: Choose action using Epsilon Greedy Strategy**

Because epsilon is big = 1.0, I take a random action, in this case I go right.

![1614824436293](./files/Q_Learning/1614824436293.png)

**Step 3: Perform action At, gets Rt+1 and St+1**

By going right, I’ve got a small cheese so Rt+1 = 1 and I’m in a new state.

![1614824469573](./files/Q_Learning/1614824469573.png)

**Step 4: Update Q(St, At)**

We can now update Q(St, At) using our formula.![1614824483473](./files/Q_Learning/1614824483473.png)

STEP 2:

**Step 2: Choose action using Epsilon Greedy Strategy**

**I take again a random action, since epsilon is really big 0.99** (since we decay it a little bit because as the training progress we want less and less exploration).



I took action down. **Not a good action since it leads me to the poison.**

**Step 3: Perform action At, gets Rt+1 and St+1**

Because I go to the poison state, **I get Rt+1 = -10 and I die.**

**Step 4: Update Q(St, At)**

![1614824573380](./files/Q_Learning/1614824573380.png)

Because we’re dead, we start a new episode. But what we see here, is that **with two explorations steps, my agent became smarter.**

As we continue to explore and exploit the environment and update Q-values using TD target, **Q-Table will give us better and better approximations. And thus, at that end of the training, we’ll get an optimal Q-Function.**



其实， 在设计环境实验的过程中， 奖励和惩罚以及结束的条件，都需要进行模拟的赋值，规定好这些特殊地点的数值，所以这些参数可以看成是已知的，我们要做的就是将最后的 Q-table 中的数值，在相应的策略下，通过不同的状态和动作，尽可能的将最终的 累计奖励（cumulative reward）最大化，就可以了。



# Let’s train our Q-Learning Taxi agent 🚕



Now that we understood the theory behind Q-Learning, **let’s implement our first agent.**



![1614824702376](./files/Q_Learning/1614824702376.png)

The goal here is to train a taxi agent **to navigate in this city to transport its passengers from point A to point B.**

![1614824716319](./files/Q_Learning/1614824716319.png)



Our environment looks like this, i**t’s a 5x5 grid world,** our taxi is spawned randomly in a square. The passenger is **spawned randomly** in one of the 4 possible locations (R, B, G, Y) and **wishes to go in one of the 4 possibles locations too.**

![1614824896062](./files/Q_Learning/1614824896062.png)

Your task is to **pick up the passenger at one location and drop him off in its desired location** (selected randomly).

**There are 6 possible actions,** the actions are deterministic (it means the one you choose to take is the one you take):

![1614824920167](./files/Q_Learning/1614824920167.png)

The reward system:
![1614824929557](./files/Q_Learning/1614824929557.png)

Remember that the goal of our agent is to maximize its expected cumulative reward, **if the reward is -1, its goal is to have the minimum amount possible of negative reward** (since he wants to maximize the sum), so it will **push him to go the faster possible.** So to take the passenger from his location to its destination as fast as possible.

