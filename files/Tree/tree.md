# 树

## 二叉树

每个节点最多有两个子节点的树为二叉树

![1628075255629](./files/Tree/1628075255629.png)

### 满二叉树和完全二叉树



![1628075309271](./files/Tree/1628075309271.png)



**二叉树的前序，中序和后序遍历**

遍历步骤， 都从root节点开始

- 创建一棵二叉树
- 前序遍历
  - 先输出当前节点（初始为root）
  - 如果左子节点不为空，则递归继续前序遍历
  - 如果右子节点不为空，则递归继续前序遍历
- 中序遍历
  - 如果当前节点的左子节点不为空，则递归中序遍历
  - 输出当前节点 （初始为root）
  - 如果当前节点右子节点不为空，则递归中序遍历
- 后序遍历
  - 如果当前节点左子节点不为空，则递归后序遍历
  - 如果当前 节点右子节点不为空，则递归后序遍历
  - 输出当前节点（初始为root）





### 前序遍历

先输出父节点，再遍历左子树和右子树



### 中序遍历

先遍历左子树，再输出父节点，再遍历右子树





### 后序遍历

先遍历左子树，再遍历右子树，最后输出父节点





**PS: 看输出父节点的顺序，就确定是前序，中序还是后序**





使用前序、中序、后序的方式来查询指定的结点



### 前序查找

- 先判断当前结点的no是否等于要查找的
- 如果相等，则返回当前节点
- 如果不等，则判断当前节点的左节点是否为空，如果不为空，则递归前序查找
- 如果左递归前序查找找到了结点，则返回，否则继续判断当前结点的右子结点是否为空，如果为空，则继续向右递归前序查找

### 中序查找

- 先判断当前结点的左节点是否为空，如果不为空，则递归中序查找
- 如果找到，则返回，否则就和当前结点比较，如果是则返回当前结点，否则继续进行右递归的中序查找
- 如果右递归中序查找，找到就返回，否则返回null



### 后序查找

- 先判断当前结点的左节点是否为空，如果不为空，则递归后序查找
- 如果找到，就返回，否则就判断当前结点的右子结点是否为空，如果不为空，则右递归进行后序查找，如果找到，就返回
- 就和当前结点进行比较，如果是则返回，否则返回null

### 上述代码

```java
package com.study.tree_demo;

/**
 * 二叉树遍历 需要会手写出前中后序遍历
 */
public class BinaryTreeDemo {
    public static void main(String[] args) {
        //先需要创建一颗二叉树
        BinaryTree binaryTree = new BinaryTree();
        //创建需要的结点
        HeroNode root = new HeroNode(1, "宋江");
        HeroNode node2 = new HeroNode(2, "吴用");
        HeroNode node3 = new HeroNode(3, "卢俊义");
        HeroNode node4 = new HeroNode(4, "林冲");
        HeroNode node5 = new HeroNode(5, "关胜");

        //说明： 我们先手动创建该二叉树，后面我们学习递归的方式创建二叉树
        root.setLeft(node2);
        root.setRight(node3);
        node3.setRight(node4);
        node3.setLeft(node5);
        binaryTree.setRoot(root);

        //测试
        System.out.println("前序遍历");
        binaryTree.preOrder();

        //测试中序遍历
        System.out.println("中序遍历");
        binaryTree.infixOrder();

        System.out.println("后序遍历");
        binaryTree.postOrder();


        System.out.println("前序遍历查找...");
        HeroNode resNode = binaryTree.preOrderSearch(5);
        if (resNode != null) {
            System.out.printf("找到了，信息为no=%d name=%s", resNode.getNo(), resNode.getName());        } else {
            System.out.printf("没有找到 no = %d 的英雄", 5);
        }

        System.out.println();
        System.out.println("中序遍历查找...");
        resNode = binaryTree.infixOrderSearch(5);
        if (resNode != null) {
            System.out.printf("找到了，信息为no=%d name=%s", resNode.getNo(), resNode.getName());        } else {
            System.out.printf("没有找到 no = %d 的英雄", 5);
        }
    }
}

//定义一个binary tree
class BinaryTree {

    private HeroNode root;

    public void setRoot(HeroNode root) {
        this.root = root;
    }

    //前序遍历
    public void preOrder() {
        if (this.root != null) {
            this.root.preOrder();
        } else {
            System.out.println("二叉树为空，无法遍历");
        }
    }

    //中序遍历
    public void infixOrder() {
        if (this.root != null) {
            this.root.infixOrder();
        } else {
            System.out.println("二叉树为空，无法遍历");
        }
    }

    //后序遍历
    public void postOrder() {
        if (this.root != null) {
            this.root.postOrder();
        } else {
            System.out.println("二叉树为空，无法遍历");
        }
    }

    //前序遍历查找
    public HeroNode preOrderSearch(int no) {
        if (root != null) {
            return root.preOrderSearch(no);
        } else {
            return null;
        }
    }

    public HeroNode infixOrderSearch(int no) {
        if (root != null) {
            return root.infixOrderSearch(no);
        }
        return null;
    }

    public HeroNode postOrderSearch(int no) {
        if (root != null) {
            return root.postOrderSearch(no);
        }
        return null;
    }

}


//先创建HeroNode 节点
class HeroNode {
    private int no;
    private String name;
    private HeroNode left;//默认null
    private HeroNode right;//默认null

    public HeroNode(int no, String name) {
        this.no = no;
        this.name = name;
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public HeroNode getLeft() {
        return left;
    }

    public void setLeft(HeroNode left) {
        this.left = left;
    }

    public HeroNode getRight() {
        return right;
    }

    public void setRight(HeroNode right) {
        this.right = right;
    }

    @Override
    public String toString() {
        return "HeroNode{" +
                "no=" + no +
                ", name='" + name + '\'' +
                '}';
    }


    //前序遍历方法
    public void preOrder() {
        System.out.println(this);//先输出父结点
        //递归左子树前序遍历
        if (this.left != null) {
            this.left.preOrder();
        }
        //递归右子树前序遍历
        if (this.right != null) {
            this.right.preOrder();
        }
    }


    //中序遍历方法
    public void infixOrder() {
        //递归左子树中序遍历
        if (this.left != null) {
            this.left.infixOrder();
        }
        //输出父结点
        System.out.println(this);
        //递归右子树中序遍历
        if (this.right != null) {
            this.right.infixOrder();
        }
    }

    //后序遍历方法
    public void postOrder() {
        //递归左子树中序遍历
        if (this.left != null) {
            this.left.postOrder();
        }
        //递归右子树中序遍历
        if (this.right != null) {
            this.right.postOrder();
        }
        //输出父结点
        System.out.println(this);
    }

    /**
     * 前序遍历查找
     *
     * @param no 查找no
     * @return 如果找到就返回，否则返回null
     */
    public HeroNode preOrderSearch(int no) {
        System.out.println("前序遍历...开始");
        if (this.no == no) {
            return this;
        }
        HeroNode resNode = null;
        if (this.left != null) {
            resNode = this.left.preOrderSearch(no);
        }
        if (resNode != null) {
            //说明左子树找到
            return resNode;
        }
        if (this.right != null) {
            resNode = this.right.preOrderSearch(no);
        }
        return resNode;
    }

    public HeroNode infixOrderSearch(int no) {
        HeroNode resNode = null;
        if (this.left != null) {
            resNode = this.left.infixOrderSearch(no);
        }
        if (resNode != null) {
            return resNode;
        }
        if (this.no == no) {
            return this;
        }

        if (this.right != null) {
            resNode = this.right.infixOrderSearch(no);
        }
        return resNode;
    }

    public HeroNode postOrderSearch(int no) {
        HeroNode resNode = null;
        if (this.left != null) {
            resNode = this.left.postOrderSearch(no);
        }
        if (resNode != null) {
            return resNode;
        }

        if (this.right != null) {
            resNode = this.right.postOrderSearch(no);
        }

        if (resNode != null) {
            return resNode;
        }

        if (this.no == no) {
            return this;
        }
        return resNode;
    }


}
```







### 删除结点

要求：

* 如果删除的结点是叶子结点，则删除该结点
* 如果删除的结点是非叶子结点，则删除该树
* 测试， 删除掉5号叶子结点和3号子树

![1628118721000](./files/Tree/1628118721000.png)



思路：

考虑如果树是空树root， 如果只有一个root结点，则等价于将二叉树置空

1. 因为我们的二叉树是单向的，所以我们是判断当前结点的子结点是否需要删除结点，而不能去判断当前是不是需要删除结点

2. 如果当前结点的左子结点不为空，并且左子结点 no 就是要删除的结点，就将 this.left = null 并返回

3. 如果当前结点的右子结点不为空，并且右子结点 no 就是要删除的结点，就将 this.right= null 并返回;

4. 如果第2和第3步没有删除这个结点，那么我们就需要向左子树进行递归删除

5. 如果第4步也没有删除结点， 则应当向右子树进行递归删除
6. 考虑如果树为空树， 如果只有一个root，则等价将二叉树置空



### 顺序存储二叉树



从数据存储来看，数组存储方式和树的存储方式可以相互转换，即数组可以转换成树，树也可以转换成数组

![1628174572836](./files/Tree/1628174572836.png)



要求：

- 二叉树的结点以数组的方式来存放
- 要求在遍历数组arr时，仍然可以以前序遍历，中序遍历和后序遍历的方式完成结点的遍历



特点：

1. 顺序二叉树通常只考虑完全二叉树
2. 第n个元素的左结点为 2 * n + 1
3. 第n个元素的右结点为 2 * n + 2
4. 第n个元素的父结点为 （n-1）/2
5. n表示二叉树中的第几个元素



例子：

给定一个数组{1，2，3，4，5，6，7}，要求以二叉树前序遍历的方式进行遍历，前序遍历的结果为 1，2，4，5，3，6，7



```java
public class ArrayBinaryDemo {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,7};
        ArrBinaryTree arrBinaryTree = new ArrBinaryTree(arr);
        arrBinaryTree.preOrder();
    }
}

//编写一个ArrayBinaryTree 实现顺序存储二叉树遍历

class ArrBinaryTree{
    private int[] arr;//存储数据结点的数组

    public ArrBinaryTree(int[] arr) {
        this.arr = arr;
    }

    //重载preOrder
    public void preOrder(){
        this.preOrder(0);
    }

    /**
     * 前序遍历
     * @param index 数组索引
     */
    public void preOrder(int index){
        if(arr == null || arr.length == 0){
            System.out.println("数组为空");;
        }
        //输出当前的元素
        System.out.println(arr[index]);
        //向左递归遍历
        if(index * 2 + 1 < arr.length){
            preOrder(2 * index + 1);
        }
        //向右递归遍历
        if((index * 2 + 2) < arr.length){
            preOrder(2 * index + 2);
        }
    }
}

```





### 线索化二叉树

将数列{1，3，6，8，10，14} 构建成一个二叉树

![1628176376159](./files/Tree/1628176376159.png)

问题分析：

1. 当我们对上面的二叉树进行中序遍历，数列为 {8，3，10，1，14，6}
2. 但是6，8，10，14这几个结点的左右指针，并没有完全的利用上
3. 如果希望我们充分的利用各个结点的左右指针，让各个结点可以指向自己的前后结点怎么办
4. 解决方案：线索二叉树



线索二叉树基本介绍：

1. n个结点的二叉链表中含有n+1 （2n-(n-1)=n+1）个空指针域，利用二叉链表中的空指针域，存放指向该结点，在某种遍历次序下的前驱和后继结点的指针（这种附加的指针称为线索）
2. 这种加上了线索的二叉链表称为线索链表，相应的二叉树称为线索二叉树（ThreadBinaryTree）。 根据线索性质不同，线索二叉树可分为前序线索二叉树，中序线索二叉树和后序线索二叉树三种
3. 一个结点的前一个结点，称为前驱结点
4. 一个结点的后一个结点，称为后继结点

















