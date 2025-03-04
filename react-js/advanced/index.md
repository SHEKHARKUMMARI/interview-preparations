# 1. Wahat is Reconcillation?

It is a set of Rules that react will follow to decide which part of the brower DOM needs to be touched, which parts needs to be dstroyed and build from scratch , which parts needs little modiffictaions.

It follows Diffing algorithm (i.e it takes two pieces(Virtual DOM and Browser DOM) and compares and decides which parts needs to updated ).

## RULEs

### 1. Different types

        destoyes entire tree and reconstructs.

### 2. Same types/Elements

        only changes the attributes that got changed.

### 3. Component Update

        updatte props and render

### 3. Children

       Compare and rendere
