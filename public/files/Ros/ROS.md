# ROS Install

https://www.ros.org/install/

**Melodic** could install on Ubuntu 18.04

**Noetic** should be installed on Ubuntu 20.04

![image-20210702160900402](./files/Ros/image-20210702160900402.png)



## Melodic Install on Ubuntu 18.04

### 1. Configure your Ubuntu repositories

Configure your Ubuntu repositories to allow "restricted," "universe," and "multiverse." You can [follow the Ubuntu guide](https://help.ubuntu.com/community/Repositories/Ubuntu) for instructions on doing this.

### 2. Setup your sources.list

Setup your computer to accept software from packages.ros.org.

```bash
sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
```



### 3. Set up your keys



```bash
sudo apt install curl    # if you haven't already installed curl
```

```bash
curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
```



### 4. Installation

First, make sure your Debian package index is up-to-date:

```bash
sudo apt update
```

**Desktop-Full Install: (Recommended)**

```bash
sudo apt install ros-melodic-desktop-full
```



### 5. Environment setup

It's convenient if the ROS environment variables are automatically added to your bash session every time a new shell is launched

```bash
echo "source /opt/ros/melodic/setup.bash" >> ~/.bashrc
```

```bash
source ~/.bashrc
```



### 6. Dependencies for building packages

Up to now you have installed what you need to run the core ROS packages. To create and manage your own ROS workspaces, there are various tools and requirements that are distributed separately. For example, [rosinstall](http://wiki.ros.org/rosinstall) is a frequently used command-line tool that enables you to easily download many source trees for ROS packages with one command.

```bash
sudo apt install python-rosdep python-rosinstall python-rosinstall-generator python-wstool build-essential
```



#### 6.1 Initialize rosdep

Before you can use many ROS tools, you will need to initialize `rosdep`. `rosdep` enables you to easily install system dependencies for source you want to compile and is required to run some core components in ROS. If you have not yet installed `rosdep`, do so as follows.

```bash
sudo apt install python-rosdep
```

With the following, you can initialize `rosdep`.

```bash
sudo rosdep init
```

```bash
rosdep update
```

### Test

run ROS master

```bash
roscore
```

run a turtle simulation

```bash
rosrun turtlesim turtlesim_node
```

```bash
rosrun turtlesim turtle_teleop_key
```





## Use update-alternatives command to change the version of python



1. list all of the version of python you could use

```bash
update-alternatives --list python
```

2. add different versions of python to the system. Actually, you could find the version of python that has been installed on your system under /usr/bin/ directory

```bash
sudo update-alternatives --install /usr/bin/python python /usr/bin/python2.7 0
```

```bash
sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.6 1
```

```bash
sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.7 2
```

3. check the version of python

```bash
python --version
```

4. list the version of python

```bash
update-alternatives --list python
```

5. you could select a version of python in your system

```bash
sudo update-alternatives --config python
```

6. remove from the update-alternatives list

```bash
sudo update-alternatives --remove python /usr/bin/python2.7
```



maybe useful on how to use python 3.0 in the ROS

https://dhanoopbhaskar.com/blog/2020-05-07-working-with-python-3-in-ros-kinetic-or-melodic/



## Use bashrc to change the version of python

change the version of python based on the user

```bash
alias python='/usr/bin/python3.6'
```

```bash
. ~/.bashrc
```

```bash
python --version
```



# ROS Uninstall



```bash
sudo apt-get autoremove --purge ros-*
```





# ROS Learning

[github code link](https://github.com/guyuehome/ros_21_tutorials)



## 节点与节点管理器

* 节点（Node）--执行单元
  * 执行具体任务的进程，独立运行的可执行文件
  * 不同节点可以使用不同的编程语言，可以分布式运行在不同的主机
  * 节点在系统中的名称必须唯一

* 节点管理器（ROS master）-- 控制中心
  * 为节点提供命名和注册服务
  * 跟踪和记录话题/服务通信，辅助节点相互查找、建立连接
  * 提供参数服务器，节点使用此服务器存储和检索运行时的参数



## 话题通信

* 话题(Topic) -- 异步通信机制
  * 节点间用来传输数据的重要总线
  * 使用发布/订阅模型，数据由发布者传输到订阅者，同一个话题的订阅者或发布者可以不唯一
* 消息（Message）-- 话题数据
  * 具有一定的类型和数据结构，包括ROS提供的标准类型和用户自定义类型
  * 使用编程语言无关的.msg 文件定义，编译过程中生成对应的代码文件



## 服务通信

* 服务 （Service） -- 同步通信机制
  * 使用客户端/服务器（C/S）模型，客户端发送请求数据，服务器完成处理后返回应答数据
  * 使用编程语言无关的.srv文件定义请求和应答数据结构，编译过程中生成对应的代码文件





<p style="text-align: center"><strong>topic 和 service 的区别</strong></p>

|          | topic         | service              |
| -------- | ------------- | -------------------- |
| 同步性   | 异步          | 同步                 |
| 通信模型 | 发布/订阅     | 服务器/客户端        |
| 底层协议 | ROSTCP/ROSUDP | ROSTCP/ROSUDP        |
| 反馈机制 | 无            | 有                   |
| 缓冲区   | 有            | 无                   |
| 实时性   | 弱            | 强                   |
| 节点关系 | 多对多        | 一对多（一个server） |
| 适用场景 | 数据传输      | 逻辑处理             |





## 参数

- 参数（Parameter） --全局共享字典
  - 可以通过网络访问的共享、多变量字典
  - 节点使用此服务器来存储和检索运行时的参数
  - 适合存储静态、非二进制的配置参数，不适合存储动态配置的数据



## 文件系统

- 功能包（Package）
  - ROS软件中的基本单元，包含节点源码、配置文件、数据定义等
- 功能包清单（Package manifest）
  - 记录功能包的基本信息，包含作者信息、许可信息、以来选项、编译标志等
- 元功能包（Meta Packages）
  - 组织多个用于同一目的的功能包











## Command

![image-20210702225908252](./files/Ros/image-20210702225908252.png)



rostopic

rosservice

rosnode

rosparam

rosmsg

rossrv



## Start

首先运行

```
roscore
```

打开仿真器界面

```
rosrun turtlesim turtlesim_node
```

使用键盘控制海龟

```
rosrun turtlesim turtle_teleop_key
```



### rqt_graph

以rqt 开头的工具，都是基于qt的可视化工具

这个是一个显示系统计算图的工具，可以了解系统的全貌

会产生一个界面

![image-20210702232849759](./files/Ros/image-20210702232849759.png)

列出了当前ros系统中的结点，  telop_turtle 键盘控制器结点 和  turtlesim 仿真器结点



### rosnode

显示系统当中所有结点相关的命令

```
rosnode
```



把所有系统中的结点都列出来的指令

```
rosnode list
```

![image-20210702233444605](./files/Ros/image-20210702233444605.png)

rosout 是默认的话题，采集日志信息，提交给上面显示，暂时不需要关心



查看某个结点具体的信息

```
rosnode info
```

如，查看turtlesim 这个结点的信息，可以看见正在发布的话题，publications, 正在订阅的话题 cmd_vel， 提供的服务，可以进行的配置

```
rosnode info /turtlesim
```

![image-20210702233505486](./files/Ros/image-20210702233505486.png)



### rostopic

和话题相关的命令行参数



打印出当前系统的所有话题列表

```
rostopic list
```

![image-20210702233653573](./files/Ros/image-20210702233653573.png)

这里的 /turtle1/cmd_vel 就是sudo 指令的话题名

键盘控制结点和海龟仿真器结点通过这个话题，进行通讯，完成运动



可以通过指令，给话题发布数据，使海龟运动

rostopic pub 话题名 数据内容/消息结构 具体数据  （用tab键会自动补全）

```
rostopic pub /turtle1/cmd_vel geometry_msgs/Twist "linear: 
	x: 0.0
	y: 0.0
	z: 0.0
angular:
	x: 0.0
	y: 0.0
	z: 0.0"
```

linear 是线速度，angular为角速度

角度为rad/s  线速度为 m/s



可以加 -r 参数，进行循环。 rate ，以 多少的频率发布内容，10Hz, 代表一秒钟10次

```
rostopic pub -r 10 /turtle1/cmd_vel geometry_msgs/Twist "linear: 
	x: 0.0
	y: 0.0
	z: 0.0
angular:
	x: 0.0
	y: 0.0
	z: 0.0"
```

ctrl+c 停止指令



z: 垂直仿真器向外



### rosmsg

和消息相关



可以查看消息的数据结构

```
rosmsg show geometry_msgs/Twist
```

![image-20210702234613441](./files/Ros/image-20210702234613441.png)

速度指令的速度结构，包含了线速度和角速度 xyz 三个方向的分量



### rosservice

服务相关指令



查看所有service 内容。当前仿真器中，提供的所有service 服务的内容，这里的服务端都是仿真器，终端都是作为客户端去请求某个服务

```
rosservice list
```

![image-20210702234748262](./files/Ros/image-20210702234748262.png)

spawn 可以产生一个新的海龟

调用，发布请求，用call，加服务，加服务类型

```
rosservice call /spawn "
x: 0.0
y: 0.0
theta: 0.0
name: ''"
```

* x: x坐标， 左下角为0点

* y: y坐标，左下角为0点

* theta: 诞生角度

* name: 产生海龟的名字

会返回一个反馈信息，name



可以使用rostopic list查看

```
rostopic list
```

可以看到多了一个海龟, 此时也可以控制新的海龟了



### rosbag

话题记录，记录系统所有话题数据，进行保存，在下次使用进行复现

保存当前系统数据

``` 
rosbag record -a -O cmd_record
```

-a 保存所有

-O 把数据保存为一个压缩包



控制海龟运动，然后进行复现



复现

```
rosplay play cmd_record.bag
```







## 创建工作空间和功能包



#### 工作空间

- Workspace 是一个存放工程开发相关文件的文件夹
  - src: 代码空间（Source space）
  - build: 编译空间 （Build space）
  - devel: 开发空间（Development space）
  - install: 安装空间 （Install space）



#### 创建工作空间

- 创建工作空间

```bash
mkdir -p ~/catkin_ws/src

cd ~/catkin_ws/src

catkin_init_workspace

```

- 编译工作空间

```bash
cd ~/catkin_ws/

catkin_make install
```



需要创建功能包，再创建代码，是放置ROS源码的最小单元，所有源码必须都放到功能包里边

```
catkin_create_pkg <package_name> [depend1][depend2][depend3]
```



- 创建功能包

```
cd ~/catkin_ws/src

catkin_create_pkg test_pkg std_msgs rospy roscpp
```



- 编译功能包

```
cd ~/catkin_ws

catkin_make

source ~/catkin_ws/devel/setup.bash
```

同一个工作空间下，不允许存在同名功能包

不同工作空间下，允许存在同名功能包



![image-20210703223451685](./files/Ros/image-20210703223451685.png)





- 设置环境变量

```bash
source devel/setup.bash	
```



- 检查环境变量

```
echo $ROS_PACKAGE_PATH
```





## 发布者Publisher的编程实现

![image-20210703224002562](./files/Ros/image-20210703224002562.png)





### 创建功能包

```bash
cd ~/catkin_ws/src

catkin_create_pkg learning_topic roscpp rospy std_msgs geometry_msgs turtlesim
```



在 ~/catkin_ws/src/learning_topic/src 下，添加 velocity_publisher.cpp 文件

```c++
/**
 *  该例程将发布 turtle1/cmd_vel 话题，消息类型geometry_msgs::Twist 
 * 
 */
#include <ros/ros.h>
#include <geometry_msgs/Twist.h>

int main()
{
    //ROS 节点初始化
    ros::init(argc, argv, "velocity_publisher");

    //创建节点句柄
    ros::NodeHandle n;

    //创建一个publisher, 发布名为/turtle1/cmd_vel 的 topic, 消息类型为 geometry_msgs::Twist, 队列长度10
    ros::Publisher turtle_vel_pub = n.advertise<geometry_msgs::Twist>("/turtle1/cmd_vel", 10);

    // 设置循环的频率
    ros::Rate loop_rate(10);

    int count = 0;
    while (ros::ok())
    {
        //初始化geometry_msgs::Twist 类型的消息
        geometry_msgs::Twist vel_msg;
        vel_msg.linear.x = 0.5;
        vel_msg.angular.z = 0.2;

        //发布消息
        turtle_vel_pub.publish(vel_msg);
        ROS_INFO("Publish turtle velocity command[%0.2f m/s, %0.2f rad/s]",vel_msg.linear.x, vel_msg.angular.z);

        loop_rate.sleep();

    }

    return 0;


}

```



实现一个发布者

* 初始化ROS节点
* 向ROS Master 注册节点信息，包括发布的话题名和话题中的消息类型
* 创建消息数据
* 按照一定频率循环发布消息





python 版本 velocity_publisher.py

```python
#!/usr/bin/env python
# -*- coding utf-8 -*-
# 该例程将发布turtle1/cmd_vel话题，消息类型geometry_msgs::Twist

import rospy
from geometry_msgs.msg import Twist

def velocity_publisher():
    # ROS 节点初始化
    rospy.init_code('velocity_publisher', anonymous=True)
    
    # 创建一个Publisher, 发布名为 /turtle1/cmd_vel 的topic，消息类型为 geometry_msgs::Twist 队列长度为10
    
    # 设置循环的频率
    rate = rospy.Rate(10)
    
    while not rospy.is_shutdown():
        # 初始化geometry_msgs::Twist 类型的消息
        vel_msg = Twist()
        vel_msg.linear.x = 0.5
        vel_msg.angular.z = 0.2
        
        # 发布消息
        turtle_vel_pub.publish(vel_msg)
        rospy.loginfo("Publish turtle velocity command[%0.2f m/s, %0.2f rad/s]", vel_msg.linear.x, vel_msg.angular.z)
        
        # 按照循环频率延时
        rate.sleep()

if __name__ == '__main__':
    try:
        velocity_publisher()
    except rospy.ROSInterruptException:
        pass
        
```









### 配置发布者代码编译规则

![image-20210703230718276](./files/Ros/image-20210703230718276.png)

```cmake
add_executable(velocity_publisher src/velocity_publisher.cpp)

target_link_libraries(velocity_publisher ${catkin_LIBRARIES})
```





### 编译并运行发布者

```bash
cd ~/catkin_ws

catkin_make

source devel/setup.bash



roscore

rosrun turtlesim turtlesim_node

rosrun learning_topic velocity_publisher
```



注：

因为每次修改都要设置一下setup.bash，可以将其添加到环境变量中，即在 .bashrc 中加入以下内容

![image-20210703232340580](./files/Ros/image-20210703232340580.png)





## 订阅者 Subscriber 的编程实现

![image-20210703234604903](./files/Ros/image-20210703234604903.png)



添加pose_subscriber.cpp

```c++
/**
 * 该例程将订阅/turtle1/pose话题，消息类型turtlesim::Pose
 */
 
#include <ros/ros.h>
#include "turtlesim/Pose.h"

// 接收到订阅的消息后，会进入消息回调函数
void poseCallback(const turtlesim::Pose::ConstPtr& msg)
{
    // 将接收到的消息打印出来
    ROS_INFO("Turtle pose: x:%0.6f, y:%0.6f", msg->x, msg->y);
}

int main(int argc, char **argv)
{
    // 初始化ROS节点
    ros::init(argc, argv, "pose_subscriber");

    // 创建节点句柄
    ros::NodeHandle n;

    // 创建一个Subscriber，订阅名为/turtle1/pose的topic，注册回调函数poseCallback
    ros::Subscriber pose_sub = n.subscribe("/turtle1/pose", 10, poseCallback);

    // 循环等待回调函数
    ros::spin();

    return 0;
}
```



实现一个订阅者：

- 初始化ROS节点
- 订阅需要的话题
- 循环等待话题消息，接收到消息后进入回调函数
- 在回调函数中完成消息处理



### 配置订阅者代码编辑规则

![image-20210704000038448](./files/Ros/image-20210704000038448.png)

```cmake
add_executable(pose_subscriber src/pose_subscriber.cpp)
target_link_libraries(pose_subscriber ${catkin_LIBRARIES})
```



python 版本 pose_subscriber.py

```python
# 该例程将订阅/turtle1/pose话题，消息类型turtlesim::Pose

import rospy
from turtlesim.msg import Pose

def poseCallback(msg):
    rospy.loginfo("Turtle pose: x:%0.6f, y:%0.6f", msg.x, msg.y)

def pose_subscriber():
	# ROS节点初始化
    rospy.init_node('pose_subscriber', anonymous=True)

	# 创建一个Subscriber，订阅名为/turtle1/pose的topic，注册回调函数poseCallback
    rospy.Subscriber("/turtle1/pose", Pose, poseCallback)

	# 循环等待回调函数
    rospy.spin()

if __name__ == '__main__':
    pose_subscriber()

```





## 话题消息的定义和使用

![image-20210704001143351](./files/Ros/image-20210704001143351.png)



### 自定义话题消息

定义Person.msg文件

```msg
string name
uint8 sex
uint8 age

uint8 unknown=0
uint8 male = 1
uint8 female = 2
```

在package.xml中添加功能包依赖

```xml
<build_depend>message_generation</build_depend>
<exec_depend>message_runtime</exec_depend>
```



在CMakeList.txt 添加编译选项

```cmake
find_package(...... message_generation)

add_message_files(FILES Person.msg)
generate_messages(DEPENDENCIES std_msgs)

catkin_package(...... message_runtime)
```

![image-20210704002010955](./files/Ros/image-20210704002010955.png)



![image-20210704002129532](./files/Ros/image-20210704002129532.png)

![image-20210704002238898](./files/Ros/image-20210704002238898.png)



编译生成语言相关文件



### 创建发布者代码

person_publisher.cpp

```c++
/**
 * 该例程将发布/person_info话题，自定义消息类型learning_topic::Person
 */
 
#include <ros/ros.h>
#include "learning_topic/Person.h"

int main(int argc, char **argv)
{
    // ROS节点初始化
    ros::init(argc, argv, "person_publisher");

    // 创建节点句柄
    ros::NodeHandle n;

    // 创建一个Publisher，发布名为/person_info的topic，消息类型为learning_topic::Person，队列长度10
    ros::Publisher person_info_pub = n.advertise<learning_topic::Person>("/person_info", 10);

    // 设置循环的频率
    ros::Rate loop_rate(1);

    int count = 0;
    while (ros::ok())
    {
        // 初始化learning_topic::Person类型的消息
    	learning_topic::Person person_msg;
		person_msg.name = "Tom";
		person_msg.age  = 18;
		person_msg.sex  = learning_topic::Person::male;

        // 发布消息
		person_info_pub.publish(person_msg);

       	ROS_INFO("Publish Person Info: name:%s  age:%d  sex:%d", 
				  person_msg.name.c_str(), person_msg.age, person_msg.sex);

        // 按照循环频率延时
        loop_rate.sleep();
    }

    return 0;
}
```



实现一个发布者

* 初始化ROS节点
* 向ROS Master 注册节点信息，包括发布的话题名和话题中的消息类型
* 创建消息数据
* 按照一定频率循环发布消息



### 创建订阅者代码

person_subscriber.cpp

```c++
/**
 * 该例程将订阅/person_info话题，自定义消息类型learning_topic::Person
 */
 
#include <ros/ros.h>
#include "learning_topic/Person.h"

// 接收到订阅的消息后，会进入消息回调函数
void personInfoCallback(const learning_topic::Person::ConstPtr& msg)
{
    // 将接收到的消息打印出来
    ROS_INFO("Subcribe Person Info: name:%s  age:%d  sex:%d", 
			 msg->name.c_str(), msg->age, msg->sex);
}

int main(int argc, char **argv)
{
    // 初始化ROS节点
    ros::init(argc, argv, "person_subscriber");

    // 创建节点句柄
    ros::NodeHandle n;

    // 创建一个Subscriber，订阅名为/person_info的topic，注册回调函数personInfoCallback
    ros::Subscriber person_info_sub = n.subscribe("/person_info", 10, personInfoCallback);

    // 循环等待回调函数
    ros::spin();

    return 0;
}
```



实现一个订阅者：

- 初始化ROS节点
- 订阅需要的话题
- 循环等待话题消息，接收到消息后进入回调函数
- 在回调函数中完成消息处理





### 配置代码编译规则

![image-20210704003259975](./files/Ros/image-20210704003259975.png)

```cmake
add_executable(person_publisher src/person_publisher.cpp)
target_link_libraries(person_publisher ${catkin_LIBRARIES})
add_dependencies(person_publisher ${PROJECT_NAME}_generate_messages_cpp)

add_executable(person_subscriber src/person_subscriber.cpp)
target_link_libraries(person_subscriber ${catkin_LIBRARIES})
add_dependencies(person_subscriber ${PROJECT_NAME}_generate_messages_cpp)
```



![image-20210704004017454](./files/Ros/image-20210704004017454.png)





### Run

```bash
roscore

rosrun learning_topic person_subscriber

rosrun learning_topic person_publisher
```





## 客户端Client的编程实现

![image-20210704140808853](./files/Ros/image-20210704140808853.png)

通过程序的方式，发送服务请求



### 创建功能包 learning_service

```bash
cd ~/catkin_ws/src

catkin_create_pkg learning_service roscpp rospy std_msgs geometry_msgs turtlesim
```



### 创建客户端代码 C++



创建turtle_spawn.cpp文件

```c++
/**
 * 该例程将请求/spawn服务，服务数据类型turtlesim::Spawn
 */

#include <ros/ros.h>
#include <turtlesim/Spawn.h>

int main(int argc, char** argv)
{
    // 初始化ROS节点
	ros::init(argc, argv, "turtle_spawn");

    // 创建节点句柄
	ros::NodeHandle node;

    // 发现/spawn服务后，创建一个服务客户端，连接名为/spawn的service
	ros::service::waitForService("/spawn");
	ros::ServiceClient add_turtle = node.serviceClient<turtlesim::Spawn>("/spawn");

    // 初始化turtlesim::Spawn的请求数据
	turtlesim::Spawn srv;
	srv.request.x = 2.0;
	srv.request.y = 2.0;
	srv.request.name = "turtle2";

    // 请求服务调用
	ROS_INFO("Call service to spwan turtle[x:%0.6f, y:%0.6f, name:%s]", 
			 srv.request.x, srv.request.y, srv.request.name.c_str());

	add_turtle.call(srv);

	// 显示服务调用结果
	ROS_INFO("Spwan turtle successfully [name:%s]", srv.response.name.c_str());

	return 0;
};
```



如何实现一个客户端:

- 初始化ROS节点
- 创建一个Client实例
- 发布服务请求数据
- 等待 Server 处理之后的应答结果



### 创建客户端代码 python 版本

python 版本 turtle_spawn.py

```python
# 该例程将请求/spawn服务，服务数据类型turtlesim::Spawn

import sys
import rospy
from turtlesim.srv import Spawn

def turtle_spawn():
	# ROS节点初始化
    rospy.init_node('turtle_spawn')

	# 发现/spawn服务后，创建一个服务客户端，连接名为/spawn的service
    rospy.wait_for_service('/spawn')
    try:
        add_turtle = rospy.ServiceProxy('/spawn', Spawn)

		# 请求服务调用，输入请求数据
        response = add_turtle(2.0, 2.0, 0.0, "turtle2")
        return response.name
    except rospy.ServiceException, e:
        print "Service call failed: %s"%e

if __name__ == "__main__":
	#服务调用并显示调用结果
    print "Spwan turtle successfully [name:%s]" %(turtle_spawn())
```

如何实现一个客户端

- 初始化ROS节点
- 创建一个Client实例
- 发布服务请求数据
- 等待Server 处理之后的应答结果







### 配置客户端代码编译规则



![image-20210704142224908](./files/Ros/image-20210704142224908.png)



```cmake
add_executable(turtle_spawn src/turtle_spawn.cpp)
target_link_libraries(turtle_spawn ${catkin_LIBRARIES})
```





### 编译并运行客户端

```bash
cd ~/catkin_ws

catkin_make

source devel/setup.bash

roscore

rosrun turtlesim turtlesim_node

rosrun learning_service turtle_spawn
```





## 服务端Server的编程实现

![image-20210704144535344](./files/Ros/image-20210704144535344.png)



实现server端的功能

给海龟发送速度指令，topic, request

Trigger: 触发



### 创建服务器代码 C++

创建文件 turtle_command_server.cpp

```c++
/**
 * 该例程将执行/turtle_command服务，服务数据类型std_srvs/Trigger
 */
 
#include <ros/ros.h>
#include <geometry_msgs/Twist.h>
#include <std_srvs/Trigger.h>

ros::Publisher turtle_vel_pub;
bool pubCommand = false;

// service回调函数，输入参数req，输出参数res
bool commandCallback(std_srvs::Trigger::Request  &req,
         			std_srvs::Trigger::Response &res)
{
	pubCommand = !pubCommand;

    // 显示请求数据
    ROS_INFO("Publish turtle velocity command [%s]", pubCommand==true?"Yes":"No");

	// 设置反馈数据
	res.success = true;
	res.message = "Change turtle command state!";

    return true;
}

int main(int argc, char **argv)
{
    // ROS节点初始化
    ros::init(argc, argv, "turtle_command_server");

    // 创建节点句柄
    ros::NodeHandle n;

    // 创建一个名为/turtle_command的server，注册回调函数commandCallback
    ros::ServiceServer command_service = n.advertiseService("/turtle_command", commandCallback);

	// 创建一个Publisher，发布名为/turtle1/cmd_vel的topic，消息类型为geometry_msgs::Twist，队列长度10
	turtle_vel_pub = n.advertise<geometry_msgs::Twist>("/turtle1/cmd_vel", 10);

    // 循环等待回调函数
    ROS_INFO("Ready to receive turtle command.");

	// 设置循环的频率
	ros::Rate loop_rate(10);

	while(ros::ok())
	{
		// 查看一次回调函数队列
    	ros::spinOnce();
		
		// 如果标志为true，则发布速度指令
		if(pubCommand)
		{
			geometry_msgs::Twist vel_msg;
			vel_msg.linear.x = 0.5;
			vel_msg.angular.z = 0.2;
			turtle_vel_pub.publish(vel_msg);
		}

		//按照循环频率延时
	    loop_rate.sleep();
	}

    return 0;
}
```



如何实现一个服务器

- 初始化ROS节点
- 创建Server实例
- 循环等待服务请求，进入回调函数
- 在回调函数中完成服务功能的处理，并反馈应答数据



### 创建服务器代码 python 

创建turtle_command_server.py  文件

```python
# 该例程将执行/turtle_command服务，服务数据类型std_srvs/Trigger

import rospy
import thread,time
from geometry_msgs.msg import Twist
from std_srvs.srv import Trigger, TriggerResponse

pubCommand = False;
turtle_vel_pub = rospy.Publisher('/turtle1/cmd_vel', Twist, queue_size=10)

def command_thread():	
	while True:
		if pubCommand:
			vel_msg = Twist()
			vel_msg.linear.x = 0.5
			vel_msg.angular.z = 0.2
			turtle_vel_pub.publish(vel_msg)
			
		time.sleep(0.1)

def commandCallback(req):
	global pubCommand
	pubCommand = bool(1-pubCommand)

	# 显示请求数据
	rospy.loginfo("Publish turtle velocity command![%d]", pubCommand)

	# 反馈数据
	return TriggerResponse(1, "Change turtle command state!")

def turtle_command_server():
	# ROS节点初始化
    rospy.init_node('turtle_command_server')

	# 创建一个名为/turtle_command的server，注册回调函数commandCallback
    s = rospy.Service('/turtle_command', Trigger, commandCallback)

	# 循环等待回调函数
    print "Ready to receive turtle command."

    thread.start_new_thread(command_thread, ())
    rospy.spin()

if __name__ == "__main__":
    turtle_command_server()
```



如何实现一个服务器

- 初始化ROS节点
- 创建Server实例
- 循环等待服务请求，进入回调函数
- 在回调函数中完成服务功能的处理，并反馈应答数据





### 配置服务器代码编译规则

![image-20210704145617893](./files/Ros/image-20210704145617893.png)



```cmake
add_executable(turtle_command_server src/turtle_command_server.cpp)
target_link_libraries(turtle_command_server ${catkin_LIBRARIES})
```



### 编译并运行服务器

```bash
cd ~/catkin_ws

catkin_make

source devel/setup.bash

roscore

rosrun turtlesim turtlesim_node

rosrun learning_service turtle_command_server

rosservice call /turtle_command "{}"

```







## 服务数据的定义与使用

![image-20210704221600145](./files/Ros/image-20210704221600145.png)	





### 自定义服务数据



- 定义srv文件

```srv
string name
uint8 age
uint8 sex

uint8 unknown=0
uint8 male = 1
uint8 female = 2

---
string result
```



- 在package.xml 中添加功能包依赖

```xml
<build_depend>message_generation</build_depend>
<exec_depend>message_runtime</exec_depend>
```



- 在CMakeList.txt 添加编译选项

```
find_package(...... message_generation)

add_service_files(FILES Person.srv)
generate_messages(DEPENDENCIES std_msgs)

catkin_package(...... message_runtime)
```



- 编译生成语言相关文件

```bash
cd ~/catkin_ws

catkin_make
```



### 创建服务器代码 C++

创建 person_server.cpp 文件

```c++
/**
 * 该例程将执行/show_person服务，服务数据类型learning_service::Person
 */
 
#include <ros/ros.h>
#include "learning_service/Person.h"

// service回调函数，输入参数req，输出参数res
bool personCallback(learning_service::Person::Request  &req,
         			learning_service::Person::Response &res)
{
    // 显示请求数据
    ROS_INFO("Person: name:%s  age:%d  sex:%d", req.name.c_str(), req.age, req.sex);

	// 设置反馈数据
	res.result = "OK";

    return true;
}

int main(int argc, char **argv)
{
    // ROS节点初始化
    ros::init(argc, argv, "person_server");

    // 创建节点句柄
    ros::NodeHandle n;

    // 创建一个名为/show_person的server，注册回调函数personCallback
    ros::ServiceServer person_service = n.advertiseService("/show_person", personCallback);

    // 循环等待回调函数
    ROS_INFO("Ready to show person informtion.");
    ros::spin();

    return 0;
}

```



如何实现一个服务器

- 初始化ROS节点
- 创建Sever实例
- 循环等待服务请求， 进入回调函数
- 在回调函数中完成服务功能的处理，并反馈应答数据



### 创建客户端代码 C++



创建 person_client.cpp 文件

```c++
/**
 * 该例程将请求/show_person服务，服务数据类型learning_service::Person
 */

#include <ros/ros.h>
#include "learning_service/Person.h"

int main(int argc, char** argv)
{
    // 初始化ROS节点
	ros::init(argc, argv, "person_client");

    // 创建节点句柄
	ros::NodeHandle node;

    // 发现/spawn服务后，创建一个服务客户端，连接名为/spawn的service
	ros::service::waitForService("/show_person");
	ros::ServiceClient person_client = node.serviceClient<learning_service::Person>("/show_person");

    // 初始化learning_service::Person的请求数据
	learning_service::Person srv;
	srv.request.name = "Tom";
	srv.request.age  = 20;
	srv.request.sex  = learning_service::Person::Request::male;

    // 请求服务调用
	ROS_INFO("Call service to show person[name:%s, age:%d, sex:%d]", 
			 srv.request.name.c_str(), srv.request.age, srv.request.sex);

	person_client.call(srv);

	// 显示服务调用结果
	ROS_INFO("Show person result : %s", srv.response.result.c_str());

	return 0;
};
```



如何实现一个客户端

- 初始化ROS节点
- 创建一个Client实例
- 发布服务器请求数据
- 等待Server处理之后的应答结果



### Python 代码

客户端person_client.py

```python
# 该例程将请求/show_person服务，服务数据类型learning_service::Person

import sys
import rospy
from learning_service.srv import Person, PersonRequest

def person_client():
	# ROS节点初始化
    rospy.init_node('person_client')

	# 发现/spawn服务后，创建一个服务客户端，连接名为/spawn的service
    rospy.wait_for_service('/show_person')
    try:
        person_client = rospy.ServiceProxy('/show_person', Person)

		# 请求服务调用，输入请求数据
        response = person_client("Tom", 20, PersonRequest.male)
        return response.result
    except rospy.ServiceException, e:
        print "Service call failed: %s"%e

if __name__ == "__main__":
	#服务调用并显示调用结果
    print "Show person result : %s" %(person_client())
```



服务端person_server.py

```python
# 该例程将执行/show_person服务，服务数据类型learning_service::Person

import rospy
from learning_service.srv import Person, PersonResponse

def personCallback(req):
	# 显示请求数据
    rospy.loginfo("Person: name:%s  age:%d  sex:%d", req.name, req.age, req.sex)

	# 反馈数据
    return PersonResponse("OK")

def person_server():
	# ROS节点初始化
    rospy.init_node('person_server')

	# 创建一个名为/show_person的server，注册回调函数personCallback
    s = rospy.Service('/show_person', Person, personCallback)

	# 循环等待回调函数
    print "Ready to show person informtion."
    rospy.spin()

if __name__ == "__main__":
    person_server()
```







### 配置服务器/客户端代码编译规则



![image-20210704224558327](./files/Ros/image-20210704224558327.png)



```cmake
add_executable(person_server src/person_server.cpp)
target_link_libraries(person_server ${catkin_LIBRARIES})
add_dependencies(person_server ${PROJECT_NAME}_gencpp)

add_executable(person_client src/person_client.cpp)
target_link_libraries(person_client ${catkin_LIBRARIES})
add_dependencies(person_client ${PROJECT_NAME}_gencpp)
```





### 编译并运行发布者和订阅者

```bash
cd ~/catkin_ws

catkin_make

source devel/setup.bash

roscore

rosrun learning_service person_server

rosrun learning_service person_client
```





## 参数的使用和编程方法



### 参数类型

![image-20210704225820743](./files/Ros/image-20210704225820743.png)

https://wiki.ros.org/Parameter%20Server



### 创建功能包

```bash
cd ~/catkin_ws/src

catkin_create_pkg learning_parameter roscpp rospy std_srvs
```





### 参数命令行使用

YAML参数文件

```yaml
background_b: 255
background_g: 86
background_r: 69
rosdistro: 'melodic'
roslaunch:
	uris: {host_sz_thinkpad_e480__38735: 'http://sz-ThinkPad-E480:38735/'}
rosversion: '1.14.11'
run_id: 8d5b5f2e-dd14-11eb-970d-70c94ed84975
```







rosparam

- 列出当前所有参数

```bash
rosparam list
```

![image-20210704231056275](./files/Ros/image-20210704231056275.png)

- 显示某个参数值

```bash
rosparam get param_key
```

![image-20210704231542075](./files/Ros/image-20210704231542075.png)

- 设置某个参数值

```bash
rosparam set param_key param_value
```

![image-20210704231819572](./files/Ros/image-20210704231819572.png)

- 保存参数到文件

```bash
rosparam dump file_name
```

![image-20210704232233713](./files/Ros/image-20210704232233713.png)

![image-20210704232153893](./files/Ros/image-20210704232153893.png)

- 从文件读取参数

```bash
rosparam load file_name
```

![image-20210704232408392](./files/Ros/image-20210704232408392.png)

- 刷新

```bash
rosservice call /clear "{}"
```



- 删除参数

```bash
rosparam delete param_key
```





### 编程方法 C++



创建文件 parameter_config.cpp

```c++
/**
 * 该例程设置/读取海龟例程中的参数
 */
#include <string>
#include <ros/ros.h>
#include <std_srvs/Empty.h>

int main(int argc, char **argv)
{
	int red, green, blue;

    // ROS节点初始化
    ros::init(argc, argv, "parameter_config");

    // 创建节点句柄
    ros::NodeHandle node;

    // 读取背景颜色参数
	ros::param::get("/turtlesim/background_r", red);
	ros::param::get("/turtlesim/background_g", green);
	ros::param::get("/turtlesim/background_b", blue);

	ROS_INFO("Get Backgroud Color[%d, %d, %d]", red, green, blue);

	// 设置背景颜色参数
	ros::param::set("/turtlesim/background_r", 255);
	ros::param::set("/turtlesim/background_g", 255);
	ros::param::set("/turtlesim/background_b", 255);

	ROS_INFO("Set Backgroud Color[255, 255, 255]");

    // 读取背景颜色参数
	ros::param::get("/turtlesim/background_r", red);
	ros::param::get("/turtlesim/background_g", green);
	ros::param::get("/turtlesim/background_b", blue);

	ROS_INFO("Re-get Backgroud Color[%d, %d, %d]", red, green, blue);

	// 调用服务，刷新背景颜色
	ros::service::waitForService("/clear");
	ros::ServiceClient clear_background = node.serviceClient<std_srvs::Empty>("/clear");
	std_srvs::Empty srv;
	clear_background.call(srv);
	
	sleep(1);

    return 0;
}
```



如何获取/设置参数

- 初始化ROS节点
- get函数获取参数
- set函数设置参数



### 编程方法 Python

创建parameter_config.py

```python
# 该例程设置/读取海龟例程中的参数

import sys
import rospy
from std_srvs.srv import Empty

def parameter_config():
	# ROS节点初始化
    rospy.init_node('parameter_config', anonymous=True)

	# 读取背景颜色参数
    red   = rospy.get_param('/turtlesim/background_r')
    green = rospy.get_param('/turtlesim/background_g')
    blue  = rospy.get_param('/turtlesim/background_b')

    rospy.loginfo("Get Backgroud Color[%d, %d, %d]", red, green, blue)

	# 设置背景颜色参数
    rospy.set_param("/turtlesim/background_r", 255);
    rospy.set_param("/turtlesim/background_g", 255);
    rospy.set_param("/turtlesim/background_b", 255);

    rospy.loginfo("Set Backgroud Color[255, 255, 255]");

	# 读取背景颜色参数
    red   = rospy.get_param('/turtlesim/background_r')
    green = rospy.get_param('/turtlesim/background_g')
    blue  = rospy.get_param('/turtlesim/background_b')

    rospy.loginfo("Get Backgroud Color[%d, %d, %d]", red, green, blue)

	# 发现/spawn服务后，创建一个服务客户端，连接名为/spawn的service
    rospy.wait_for_service('/clear')
    try:
        clear_background = rospy.ServiceProxy('/clear', Empty)

		# 请求服务调用，输入请求数据
        response = clear_background()
        return response
    except rospy.ServiceException, e:
        print "Service call failed: %s"%e

if __name__ == "__main__":
    parameter_config()
```





### 配置代码编译规则

![image-20210704233037970](./files/Ros/image-20210704233037970.png)



```cmake
add_executable(parameter_config src/parameter_config.cpp)
target_link_libraries(parameter_config ${catkin_LIBRARIES})
```



### 编译并运行发布者

```bash
cd ~/catkin_ws

catkin_make

source devel/setup.bash

roscore

rosrun turtlesim turtlesim_node

rosrun learning_parameter parameter_config
```







## ROS中的坐标系统管理

![image-20210705083622112](./files/Ros/image-20210705083622112.png)



参考《机器人学导论》





### 机器人中的坐标变换

![image-20210705083808366](./files/Ros/image-20210705083808366.png)



TF 功能包能干什么

- 5秒钟之前，机器人头部坐标系相对于全局坐标系的关系是什么样的
- 机器人夹取的物体相对于机器人中心坐标系的位置在哪里
- 机器人中心坐标系相对于全局坐标系的位置在哪里



TF坐标变换如何实现

- 广播TF变换
- 监听TF变换



### 机器人中的坐标变换

![image-20210705084319176](./files/Ros/image-20210705084319176.png)





```bash
sudo apt-get install ros-melodic-turtle-tf

roslaunch turtle_tf turtle_tf_demo.launch

rosrun turtlesim turtle_teleop_key

rosrun tf view_frames
```



![image-20210705084816967](./files/Ros/image-20210705084816967.png)





![image-20210705084920600](./files/Ros/image-20210705084920600.png)



![image-20210705085109268](./files/Ros/image-20210705085109268.png)







命令行工具

```bash
rosrun tf tf_echo turtle1 turtle2
```





可视化工具

```bash
rosrun rviz rviz -d 'rospack find turtle_tf' /rviz/turtle_rviz.rviz
```







## tf坐标系广播与监听的编程实现



### 创建功能包

```bash
cd ~/catkin_ws/src

catkin_create_pkg learning_tf roscpp rospy tf turtlesim
```





### 创建tf广播器代码 C++

创建turtle_tf_broadcaster.cpp文件

```c++
/**
 * 该例程产生tf数据，并计算、发布turtle2的速度指令
 */

#include <ros/ros.h>
#include <tf/transform_broadcaster.h>
#include <turtlesim/Pose.h>

std::string turtle_name;

void poseCallback(const turtlesim::PoseConstPtr& msg)
{
	// 创建tf的广播器
	static tf::TransformBroadcaster br;

	// 初始化tf数据
	tf::Transform transform;
	transform.setOrigin( tf::Vector3(msg->x, msg->y, 0.0) );
	tf::Quaternion q;
	q.setRPY(0, 0, msg->theta);
	transform.setRotation(q);

	// 广播world与海龟坐标系之间的tf数据
	br.sendTransform(tf::StampedTransform(transform, ros::Time::now(), "world", turtle_name));
}

int main(int argc, char** argv)
{
    // 初始化ROS节点
	ros::init(argc, argv, "my_tf_broadcaster");

	// 输入参数作为海龟的名字
	if (argc != 2)
	{
		ROS_ERROR("need turtle name as argument"); 
		return -1;
	}

	turtle_name = argv[1];

	// 订阅海龟的位姿话题
	ros::NodeHandle node;
	ros::Subscriber sub = node.subscribe(turtle_name+"/pose", 10, &poseCallback);

    // 循环等待回调函数
	ros::spin();

	return 0;
};

```



如何实现一个tf广播器

- 定义TF广播器 （TransformBroadcaster）
- 创建坐标变换值
- 发布坐标变换（sendTransform）





### 创建tf监听器代码 C++

创建turtle_tf_listener.cpp 代码

```c++
/**
 * 该例程监听tf数据，并计算、发布turtle2的速度指令
 */

#include <ros/ros.h>
#include <tf/transform_listener.h>
#include <geometry_msgs/Twist.h>
#include <turtlesim/Spawn.h>

int main(int argc, char** argv)
{
	// 初始化ROS节点
	ros::init(argc, argv, "my_tf_listener");

    // 创建节点句柄
	ros::NodeHandle node;

	// 请求产生turtle2
	ros::service::waitForService("/spawn");
	ros::ServiceClient add_turtle = node.serviceClient<turtlesim::Spawn>("/spawn");
	turtlesim::Spawn srv;
	add_turtle.call(srv);

	// 创建发布turtle2速度控制指令的发布者
	ros::Publisher turtle_vel = node.advertise<geometry_msgs::Twist>("/turtle2/cmd_vel", 10);

	// 创建tf的监听器
	tf::TransformListener listener;

	ros::Rate rate(10.0);
	while (node.ok())
	{
		// 获取turtle1与turtle2坐标系之间的tf数据
		tf::StampedTransform transform;
		try
		{
			listener.waitForTransform("/turtle2", "/turtle1", ros::Time(0), ros::Duration(3.0));
			listener.lookupTransform("/turtle2", "/turtle1", ros::Time(0), transform);
		}
		catch (tf::TransformException &ex) 
		{
			ROS_ERROR("%s",ex.what());
			ros::Duration(1.0).sleep();
			continue;
		}

		// 根据turtle1与turtle2坐标系之间的位置关系，发布turtle2的速度控制指令
		geometry_msgs::Twist vel_msg;
		vel_msg.angular.z = 4.0 * atan2(transform.getOrigin().y(),
				                        transform.getOrigin().x());
		vel_msg.linear.x = 0.5 * sqrt(pow(transform.getOrigin().x(), 2) +
				                      pow(transform.getOrigin().y(), 2));
		turtle_vel.publish(vel_msg);

		rate.sleep();
	}
	return 0;
};
```

如何实现一个TF监听器

- 定义TF监听器（TransformListener）
- 查找坐标变换（waitForTransform, lookupTransform）





### 创建tf广播器与监听器代码 Python

创建 turtle_tf_broadcaster.py文件

```python
# 该例程将请求/show_person服务，服务数据类型learning_service::Person

import roslib
roslib.load_manifest('learning_tf')
import rospy

import tf
import turtlesim.msg

def handle_turtle_pose(msg, turtlename):
    br = tf.TransformBroadcaster()
    br.sendTransform((msg.x, msg.y, 0),
                     tf.transformations.quaternion_from_euler(0, 0, msg.theta),
                     rospy.Time.now(),
                     turtlename,
                     "world")

if __name__ == '__main__':
    rospy.init_node('turtle_tf_broadcaster')
    turtlename = rospy.get_param('~turtle')
    rospy.Subscriber('/%s/pose' % turtlename,
                     turtlesim.msg.Pose,
                     handle_turtle_pose,
                     turtlename)
    rospy.spin()
```





创建turtle_tf_listener.py 文件

```python
# 该例程将请求/show_person服务，服务数据类型learning_service::Person

import roslib
roslib.load_manifest('learning_tf')
import rospy
import math
import tf
import geometry_msgs.msg
import turtlesim.srv

if __name__ == '__main__':
    rospy.init_node('turtle_tf_listener')

    listener = tf.TransformListener()

    rospy.wait_for_service('spawn')
    spawner = rospy.ServiceProxy('spawn', turtlesim.srv.Spawn)
    spawner(4, 2, 0, 'turtle2')

    turtle_vel = rospy.Publisher('turtle2/cmd_vel', geometry_msgs.msg.Twist,queue_size=1)

    rate = rospy.Rate(10.0)
    while not rospy.is_shutdown():
        try:
            (trans,rot) = listener.lookupTransform('/turtle2', '/turtle1', rospy.Time(0))
        except (tf.LookupException, tf.ConnectivityException, tf.ExtrapolationException):
            continue

        angular = 4 * math.atan2(trans[1], trans[0])
        linear = 0.5 * math.sqrt(trans[0] ** 2 + trans[1] ** 2)
        cmd = geometry_msgs.msg.Twist()
        cmd.linear.x = linear
        cmd.angular.z = angular
        turtle_vel.publish(cmd)

        rate.sleep()

```









### 配置tf广播器与监听器代码编译规则



![image-20210705103632295](./files/Ros/image-20210705103632295.png)

```cmake
add_executable(turtle_tf_broadcaster src/turtle_tf_broadcaster.cpp)
target_link_libraries(turtle_tf_broadcaster ${catkin_LIBRARIES})

add_executable(turtle_tf_listener src/turtle_tf_listener.cpp)
target_link_libraries(turtle_tf_listener ${catkin_LIBRARIES})
```





### 编译并运行

```bash
cd ~/catkin_ws

catkin_make

source devel/setup.bash

roscore

rosrun turtlesim turtlesim_node

rosrun learning_tf turtle_tf_broadcaster __name:=turtle1_tf_broadcaster /turtle1

rosrun learning_tf turtle_tf_broadcaster __name:=turtle2_tf_broadcaster /turtle2

rosrun learning_tf turtle_tf_listener

rosrun turtlesim turtle_teleop_key
```







## launch 启动文件的使用方法



### launch 文件

![image-20210705105025479](./files/Ros/image-20210705105025479.png)



通过XML文件实现多节点的配置和启动（可自动启动ROS Master）



### Launch 文件语法



```xml
<launch>
	<node pkg="turtlesim" name="sim1" type="turtlesim_node"/>
    <node pkg="turtlesim" name="sim2" type="turtlesim_node"/>
</launch>
```



- **\<launch>**
  - launch 文件中的根元素采用\<launch>标签定义
- **\<node>**
  - 启动节点
    - pkg: 节点所在的功能包名称
    - type: 节点的可执行文件名称
    - name: 节点运行时的名称
    - output, respawn, required, ns, args
- **\<param> / \<rosparam>**
  - 设置ROS系统运行中的参数，存储在参数服务器中
  - \<param name="output_frame" value="odom"/>
    - name: 参数名
    - value: 参数值
  - 加载参数文件中的多个参数：
    - \<rosparam file="params.yaml" command="load" ns="params"/>
- **\<arg>**
  - launch文件内部的局部变量，仅限于launch文件使用
  - \<arg name="arg-name" default="arg-value" />
    - name: 参数名
    -  value: 参数值
  - 调用
    - \<param name="foo" value="$(arg arg-name)" />
    - \<node name="node" pkg="package" type="type" args="$(arg arg-name)" />



- **\<remap>**
  - 重映射
    - 重映射ROS计算图资源的命名
    - \<remap from="/turtlebot/cmd_vel" to="/cmd_vel" />
      - from: 原命名
      - to: 映射之后的命名
- **\<include>**
  - 包含其他launch文件，类似C语言中的头文件包含
  - \<include file="$(dirname)/other.launch" />
    - file: 包含的其他launch文件路径



更多标签可见： http://wiki.ros.org.roslaunch/XML





### Launch 示例



```bash
cd ~/catkin_ws/src

catkin_create_pkg learning_launch
```



创建simple_launch文件

```xml
<launch>
    <node pkg="learning_topic" type="person_subscriber" name="talker" output="screen" />
    <node pkg="learning_topic" type="person_publisher" name="listener" output="screen" /> 
</launch>
```



编译

```bash
cd ~/catkin_ws

catkin_make
```



启动

```bash
roslaunch learning_launch simple.launch 
```





创建turtlesim_parameter_config.launch文件

```xml
<launch>

	<param name="/turtle_number"   value="2"/>

    <node pkg="turtlesim" type="turtlesim_node" name="turtlesim_node">
		<param name="turtle_name1"   value="Tom"/>
		<param name="turtle_name2"   value="Jerry"/>

		<rosparam file="$(find learning_launch)/config/param.yaml" command="load"/>
	</node>

    <node pkg="turtlesim" type="turtle_teleop_key" name="turtle_teleop_key" output="screen"/>

</launch>
```



config/param.yaml

```yaml
A: 123
B: "hello"

group:
  C: 456
  D: "hello"
```







创建 **start_tf_demo_c++.launch** 文件

```xml
 <launch>

    <!-- Turtlesim Node-->
    <node pkg="turtlesim" type="turtlesim_node" name="sim"/>
    <node pkg="turtlesim" type="turtle_teleop_key" name="teleop" output="screen"/>

    <node pkg="learning_tf" type="turtle_tf_broadcaster" args="/turtle1" name="turtle1_tf_broadcaster" />
    <node pkg="learning_tf" type="turtle_tf_broadcaster" args="/turtle2" name="turtle2_tf_broadcaster" />

    <node pkg="learning_tf" type="turtle_tf_listener" name="listener" />

  </launch>
```







创建turtlesim_remap.launch文件

```xml
<launch>

	<include file="$(find learning_launch)/launch/simple.launch" />

    <node pkg="turtlesim" type="turtlesim_node" name="turtlesim_node">
		<remap from="/turtle1/cmd_vel" to="/cmd_vel"/>
	</node>

</launch>
```



启动

```bash
roslaunch learning_launch turtlesim_remap.launch
```





## 常用可视化工具的使用



### QT 工具箱

![image-20210705144037766](./files/Ros/image-20210705144037766.png)





### Rviz

![image-20210705151857860](./files/Ros/image-20210705151857860.png)

  

![image-20210705152004519](./files/Ros/image-20210705152004519.png)



![image-20210705152058001](./files/Ros/image-20210705152058001.png)





### Gazebo

![image-20210705152432581](./files/Ros/image-20210705152432581.png)



![image-20210705152539427](./files/Ros/image-20210705152539427.png)



